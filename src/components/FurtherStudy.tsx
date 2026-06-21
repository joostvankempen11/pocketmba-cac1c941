import type { Resource } from "@/content/types";
import { BookOpen, PlayCircle, ExternalLink, Search, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 day
const CACHE_PREFIX = "yt-avail:";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
    if (u.hostname.endsWith("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      const m = u.pathname.match(/^\/(embed|shorts|v)\/([^/]+)/);
      if (m) return m[2];
    }
  } catch {
    /* noop */
  }
  return null;
}

function readCache(videoId: string): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_PREFIX + videoId);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ok: boolean; ts: number };
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.ok;
  } catch {
    return null;
  }
}

function writeCache(videoId: string, ok: boolean) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CACHE_PREFIX + videoId,
      JSON.stringify({ ok, ts: Date.now() }),
    );
  } catch {
    /* noop */
  }
}

async function checkAvailability(videoId: string): Promise<boolean> {
  const cached = readCache(videoId);
  if (cached !== null) return cached;
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { method: "GET" },
    );
    const ok = res.ok;
    writeCache(videoId, ok);
    if (!ok) {
      // eslint-disable-next-line no-console
      console.warn(`[FurtherStudy] YouTube video unavailable: ${videoId} (status ${res.status})`);
    }
    return ok;
  } catch (err) {
    // Network/CORS issue — assume available to avoid false negatives
    // eslint-disable-next-line no-console
    console.warn(`[FurtherStudy] availability check failed for ${videoId}`, err);
    return true;
  }
}

function searchUrl(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function hostFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function yearFromUrl(url: string) {
  const m = url.match(/\/(19|20)\d{2}\//);
  return m ? m[0].slice(1, 5) : `${CURRENT_YEAR}`;
}

/** Harvard-style reference: Source (Year) 'Title'. Available at: URL (Accessed: ...). */
function HarvardRef({ r }: { r: Resource }) {
  const url = r.url ?? "";
  const year = yearFromUrl(url);
  let pathname = "";
  try {
    pathname = new URL(url).pathname.replace(/\/$/, "");
  } catch {
    /* noop */
  }
  return (
    <li>
      <span>{r.source} </span>
      <span>({year}) </span>
      <em>‘{r.title}’</em>.{" "}
      <span>Available at: </span>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {hostFromUrl(url)}
        {pathname}
      </a>{" "}
      (Accessed: {CURRENT_YEAR}).
      {r.note && <span className="text-muted-foreground"> — {r.note}</span>}
    </li>
  );
}

function FallbackCard({
  title,
  query,
  reason,
}: {
  title: string;
  query: string;
  reason: "missing" | "unavailable";
}) {
  return (
    <a
      href={searchUrl(query)}
      target="_blank"
      rel="noreferrer noopener"
      className="group block rounded-md border border-dashed border-border bg-card/40 p-4 hover:bg-accent"
    >
      <div className="flex items-start gap-3">
        {reason === "unavailable" ? (
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
        ) : (
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium">{title}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">
            {reason === "unavailable"
              ? "Embedded video is unavailable. Search YouTube for an alternative:"
              : "Search YouTube for a video on this topic:"}
          </div>
          <div className="mt-1 truncate text-xs font-medium text-primary group-hover:underline">
            “{query}”
          </div>
        </div>
        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
      </div>
    </a>
  );
}

function VideoCard({ v, lessonTitle }: { v: Resource; lessonTitle?: string }) {
  // Derive a videoId: explicit > parsed from url.
  const videoId = v.videoId ?? (v.url ? getYouTubeId(v.url) : null);
  const fallbackQuery =
    v.fallbackSearchQuery ?? (lessonTitle ? `${lessonTitle} explained` : v.title);

  const [status, setStatus] = useState<"checking" | "ok" | "bad">(
    videoId ? (readCache(videoId) === false ? "bad" : "checking") : "bad",
  );

  useEffect(() => {
    let cancelled = false;
    if (!videoId) {
      setStatus("bad");
      return;
    }
    const cached = readCache(videoId);
    if (cached !== null) {
      setStatus(cached ? "ok" : "bad");
      return;
    }
    void checkAvailability(videoId).then((ok) => {
      if (!cancelled) setStatus(ok ? "ok" : "bad");
    });
    return () => {
      cancelled = true;
    };
  }, [videoId]);

  if (!videoId || status === "bad") {
    return <FallbackCard title={v.title} query={fallbackQuery} reason={videoId ? "unavailable" : "missing"} />;
  }

  const startParam = v.startSeconds && v.startSeconds > 0 ? `?start=${v.startSeconds}` : "";

  return (
    <div className="overflow-hidden rounded-md border border-border bg-card/40">
      <div className="relative aspect-video w-full bg-black">
        {status === "checking" ? (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
            Checking video…
          </div>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}${startParam}`}
            title={v.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
      <div className="p-3">
        <div className="truncate text-sm font-medium">{v.title}</div>
        <div className="truncate text-xs text-muted-foreground">{v.source}</div>
        {v.note && <div className="mt-1 text-xs text-muted-foreground">{v.note}</div>}
      </div>
    </div>
  );
}

export function FurtherStudy({
  videos,
  readings,
  lessonTitle,
}: {
  videos?: Resource[];
  readings?: Resource[];
  lessonTitle?: string;
}) {
  if ((!videos || videos.length === 0) && (!readings || readings.length === 0)) {
    return null;
  }
  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="text-xl font-semibold tracking-tight text-primary">Further study</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Curated YouTube videos and Harvard Business Review readings, formatted in Harvard
        referencing style. Unavailable videos automatically fall back to a YouTube search.
      </p>

      {videos && videos.length > 0 && (
        <div className="mt-5">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <PlayCircle className="h-3.5 w-3.5" /> Videos
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {videos.map((v, i) => (
              <li key={(v.videoId ?? v.url ?? v.title) + i}>
                <VideoCard v={v} lessonTitle={lessonTitle} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {readings && readings.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" /> References (Harvard style)
          </h3>
          <ol className="harvard-refs rounded-md border border-border bg-card/40 p-4 pl-6 list-none">
            {readings.map((r) => (
              <HarvardRef key={r.url} r={r} />
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}