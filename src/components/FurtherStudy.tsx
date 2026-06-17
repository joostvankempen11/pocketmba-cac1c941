import type { Resource } from "@/content/types";
import { BookOpen, PlayCircle, ExternalLink } from "lucide-react";

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
      <h2 className="text-lg font-semibold tracking-tight">Further study</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Curated videos and Harvard Business Review articles to deepen this lesson. Open in a new tab.
      </p>

      {videos && videos.length > 0 && (
        <div className="mt-5">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <PlayCircle className="h-3.5 w-3.5" /> Videos
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {videos.map((v) => (
              <li key={v.url}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block rounded-md border border-border bg-card/40 p-3 hover:border-primary/60 hover:bg-accent"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{v.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{v.source}</div>
                      {v.note && <div className="mt-1 text-xs text-muted-foreground">{v.note}</div>}
                    </div>
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {readings && readings.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" /> Readings
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {readings.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block rounded-md border border-border bg-card/40 p-3 hover:border-primary/60 hover:bg-accent"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{r.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{r.source}</div>
                      {r.note && <div className="mt-1 text-xs text-muted-foreground">{r.note}</div>}
                    </div>
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}