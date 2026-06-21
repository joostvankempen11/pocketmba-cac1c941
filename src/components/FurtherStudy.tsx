import type { Resource } from "@/content/types";
import { BookOpen, PlayCircle, ExternalLink } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

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
  const year = yearFromUrl(r.url);
  return (
    <li>
      <span>{r.source} </span>
      <span>({year}) </span>
      <em>‘{r.title}’</em>.{" "}
      <span>Available at: </span>
      <a href={r.url} target="_blank" rel="noreferrer noopener">
        {hostFromUrl(r.url)}
        {new URL(r.url).pathname.replace(/\/$/, "")}
      </a>{" "}
      (Accessed: {CURRENT_YEAR}).
      {r.note && <span className="text-muted-foreground"> — {r.note}</span>}
    </li>
  );
}

export function FurtherStudy({
  videos,
  readings,
}: {
  videos?: Resource[];
  readings?: Resource[];
}) {
  if ((!videos || videos.length === 0) && (!readings || readings.length === 0)) {
    return null;
  }
  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="text-xl font-semibold tracking-tight text-primary">Further study</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Curated videos (YouTube and LinkedIn Learning) and Harvard Business Review readings,
        formatted in Harvard referencing style. Links open in a new tab.
      </p>

      {videos && videos.length > 0 && (
        <div className="mt-5">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <PlayCircle className="h-3.5 w-3.5" /> Videos
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {videos.map((v) => {
              const ytId = getYouTubeId(v.url);
              return (
                <li
                  key={v.url}
                  className="overflow-hidden rounded-md border border-border bg-card/40"
                >
                  {ytId ? (
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${ytId}`}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  ) : null}
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group block p-3 hover:bg-accent"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium">{v.title}</div>
                        <div className="truncate text-xs text-muted-foreground">{v.source}</div>
                        {v.note && (
                          <div className="mt-1 text-xs text-muted-foreground">{v.note}</div>
                        )}
                      </div>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
                    </div>
                  </a>
                </li>
              );
            })}
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