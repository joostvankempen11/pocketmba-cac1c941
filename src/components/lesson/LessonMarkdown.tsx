import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Quote } from "lucide-react";

/**
 * Course-reader typography for lesson bodies.
 * Section headings get generous spacing + a subtle rule, blockquotes become
 * callout cards, and tables/code get proper styling instead of browser defaults.
 */
const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-14 scroll-mt-24 break-words border-b border-border pb-3 font-serif text-[1.375rem] sm:text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground first:mt-0">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="mt-12 scroll-mt-24 break-words font-serif text-lg font-semibold sm:text-2xl leading-snug tracking-tight text-primary first:mt-0">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-9 scroll-mt-24 break-words font-serif text-base sm:text-lg font-semibold italic leading-snug text-foreground">
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="mt-8 break-words text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </h5>
  ),
  p: ({ children }) => (
    <p className="my-5 break-words text-[1rem] leading-[1.8] sm:text-[1.0625rem] text-foreground/90">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-6 space-y-3 rounded-xl border border-border/70 bg-card/60 p-4 pl-7 sm:p-5 sm:pl-8 [list-style:disc] marker:text-primary/70">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 space-y-3 rounded-xl border border-border/70 bg-card/60 p-4 pl-7 sm:p-5 sm:pl-8 [list-style:decimal] marker:font-semibold marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 break-words text-[1rem] leading-[1.75] sm:text-[1.0625rem] text-foreground/90">{children}</li>
  ),
  blockquote: ({ children }) => (
    <figure className="my-8 rounded-xl border border-primary/25 border-l-4 border-l-primary bg-primary/[0.06] p-4 pl-5 sm:p-5 sm:pl-6">
      <Quote className="mb-2 h-4 w-4 text-primary" aria-hidden />
      <div className="[&>p]:my-2 [&>p]:text-[1.0625rem] [&>p]:italic [&>p]:leading-[1.7] [&>p]:text-foreground/90">
        {children}
      </div>
    </figure>
  ),
  hr: () => <hr className="my-12 border-t border-border" />,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  code: ({ children, className }) =>
    className ? (
      <code className="font-mono text-[0.9em] leading-relaxed">{children}</code>
    ) : (
      <code className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-primary">
        {children}
      </code>
    ),
  pre: ({ children }) => (
    <pre className="my-7 overflow-x-auto rounded-xl border border-border bg-muted/70 p-4 text-sm">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/80">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border/60 px-4 py-2.5 align-top text-foreground/90">{children}</td>
  ),
};

function stripLeadingTitle(body: string, title: string) {
  const trimmed = body.trimStart();
  const match = trimmed.match(/^#\s+(.*)\n?/);
  if (!match) return trimmed;
  const heading = match[1].replace(/[*_`]/g, "").trim().toLowerCase();
  if (heading !== title.trim().toLowerCase()) return trimmed;
  return trimmed.slice(match[0].length).trimStart();
}

export function LessonMarkdown({ body, title }: { body: string; title: string }) {
  return (
    <div className="w-full max-w-full [overflow-wrap:anywhere]">
      <ReactMarkdown components={components}>{stripLeadingTitle(body, title)}</ReactMarkdown>
    </div>
  );
}
