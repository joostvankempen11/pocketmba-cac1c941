import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useProgress } from "@/lib/progress-store";
import { useProfile } from "@/lib/profile";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import {
  certificateId,
  computeCompletion,
  drawCertificate,
  formatCertDate,
} from "@/lib/certificate";
import logoFull from "@/assets/umba-logo-full.png.asset.json";
import { Award, Download, Linkedin, Share2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/certificate")({
  head: () => ({
    meta: [
      { title: "Your certificate — The Unofficial MBA" },
      { name: "description", content: "View, download and share your Unofficial MBA completion certificate." },
      { property: "og:title", content: "Your certificate — The Unofficial MBA" },
      { property: "og:description", content: "Download and share your Unofficial MBA completion certificate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CertificatePage,
});

const ORG = "The Unofficial MBA";
const CERT_NAME = "The Unofficial MBA — 12-Week Programme";

function CertificatePage() {
  const completedLessons = useProgress((s) => s.completedLessons);
  const quizzes = useProgress((s) => s.quizzes);
  const assignments = useProgress((s) => s.assignments);
  const capstone = useProgress((s) => s.capstone);
  const { data: profile } = useProfile();

  const { data: communityProfile } = useQuery({
    queryKey: ["community-profile-self"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      if (!uid) return null;
      const { data } = await supabase
        .from("community_profiles")
        .select("display_name")
        .eq("id", uid)
        .maybeSingle();
      return data;
    },
    staleTime: 60_000,
  });

  const state = computeCompletion({ completedLessons, quizzes, assignments, capstone });

  const defaultName =
    communityProfile?.display_name ?? (profile?.email ? profile.email.split("@")[0] : "");
  const [name, setName] = useState("");
  useEffect(() => {
    if (defaultName) setName((n) => n || defaultName);
  }, [defaultName]);

  const certId = profile ? certificateId(profile.id, state.completedAt) : "UMBA-PENDING";
  const dateStr = formatCertDate(state.completedAt);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!state.complete || !canvasRef.current) return;
    void drawCertificate(canvasRef.current, {
      name: name || "Your Name",
      date: dateStr,
      certId,
      logoUrl: logoFull.url,
    });
  }, [state.complete, name, dateStr, certId]);

  function download() {
    const url = canvasRef.current?.toDataURL("image/png");
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = `unofficial-mba-certificate-${certId}.png`;
    a.click();
  }

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const certUrl = `${siteUrl}/certificate`;
  const issued = new Date(state.completedAt ?? Date.now());
  const linkedInAdd =
    "https://www.linkedin.com/profile/add?" +
    new URLSearchParams({
      startTask: "CERTIFICATION_NAME",
      name: CERT_NAME,
      organizationName: ORG,
      issueYear: String(issued.getFullYear()),
      issueMonth: String(issued.getMonth() + 1),
      certUrl,
      certId,
    }).toString();
  const linkedInShare =
    "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(certUrl);

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center gap-3">
          <Award className="h-7 w-7 text-primary" />
          <h1 className="text-3xl font-semibold tracking-tight">Completion certificate</h1>
        </div>

        {!state.complete ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <p className="text-muted-foreground">
              Your certificate is generated automatically the moment you finish the programme —
              all lessons, quizzes, assignments and the five capstone sections.
            </p>
            <div className="mt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium tabular-nums">
                  {state.done}/{state.total} · {state.pct}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary transition-all" style={{ width: `${state.pct}%` }} />
              </div>
            </div>
            <Link
              to="/dashboard"
              className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Continue the programme
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 text-muted-foreground">
              Congratulations — you've completed all twelve weeks. Check the name below, then
              download or add it to your LinkedIn profile.
            </p>

            <label className="mt-6 block max-w-sm text-sm">
              <span className="text-muted-foreground">Name on certificate</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Your full name"
              />
            </label>

            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card p-3 shadow-sm">
              <canvas ref={canvasRef} className="h-auto w-full rounded-md" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={download}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Download className="h-4 w-4" /> Download PNG
              </button>
              <a
                href={linkedInAdd}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" /> Add to LinkedIn profile
              </a>
              <a
                href={linkedInShare}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                <Share2 className="h-4 w-4" /> Share as a post
              </a>
            </div>

            <div className="mt-6 grid gap-2 rounded-lg border border-border bg-card p-4 text-sm sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Certificate ID</div>
                <div className="mt-1 font-medium">{certId}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Completed</div>
                <div className="mt-1 font-medium">{dateStr}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
