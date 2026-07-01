import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function partsToText(m: UIMessage): string {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

export function TutorChat({ context, sessionId, compact = false }: { context?: string; sessionId: string; compact?: boolean }) {
  const transport = useRef(
    new DefaultChatTransport({
      api: "/api/chat",
      body: () => ({ context }),
    }),
  );
  const { messages, sendMessage, status } = useChat({
    id: sessionId,
    transport: transport.current,
  });
  const [input, setInput] = useState("");
  const isLoading = status === "submitted" || status === "streaming";
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // Only scroll the internal chat pane once the user has actually sent a message,
    // and stay inside the chat container (never scroll the page or steal focus on load).
    if (!hasInteracted.current) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  async function submit() {
    const text = input.trim();
    if (!text || isLoading) return;
    hasInteracted.current = true;
    setInput("");
    await sendMessage({ text });
  }

  return (
    <div className={cn("flex flex-col rounded-lg border border-border bg-card", compact ? "h-[28rem]" : "h-[36rem]")}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">AI Tutor</span>
        {context && <span className="ml-auto truncate text-xs text-muted-foreground">{context}</span>}
      </div>
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground">
            Ask anything about this topic — definitions, examples, a worked problem, or "explain it like I'm new to the field."
          </div>
        )}
        {messages.map((m) => {
          const text = partsToText(m);
          return (
            <div key={m.id} className={cn("flex flex-col gap-1", m.role === "user" ? "items-end" : "items-start")}>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.role === "user" ? "You" : "Tutor"}
              </div>
              <div
                className={cn(
                  "max-w-[90%] rounded-lg px-3 py-2 text-sm",
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                {m.role === "assistant" ? (
                  <div className="markdown text-sm leading-relaxed">
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{text}</div>
                )}
              </div>
            </div>
          );
        })}
        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="text-xs text-muted-foreground">Tutor is thinking…</div>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-end gap-2 border-t border-border p-3"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          rows={2}
          placeholder="Ask the tutor…"
          className="flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}