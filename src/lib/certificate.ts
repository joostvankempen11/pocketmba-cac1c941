import { weeks } from "@/content/curriculum";
import type { AssignmentResult, QuizResult } from "@/lib/progress-store";

export const CAPSTONE_SECTIONS = 5;

export type ProgressSnapshot = {
  completedLessons: Record<string, true>;
  quizzes: Record<number, QuizResult>;
  assignments: Record<string, AssignmentResult>;
  capstone: Record<string, AssignmentResult>;
};

export type CompletionState = {
  done: number;
  total: number;
  pct: number;
  complete: boolean;
  /** epoch ms of the latest graded item, used as the completion date */
  completedAt: number | null;
};

export function computeCompletion(p: ProgressSnapshot): CompletionState {
  const totalLessons = weeks.reduce((a, w) => a + w.lessons.length, 0);
  const doneLessons = weeks.reduce(
    (a, w) => a + w.lessons.filter((l) => p.completedLessons[`${w.week}-${l.id}`]).length,
    0,
  );
  const doneQuizzes = weeks.filter((w) => p.quizzes[w.week]).length;
  const doneAssignments = weeks.filter((w) => p.assignments[`${w.week}-${w.assignment.id}`]).length;
  const doneCapstone = Math.min(Object.keys(p.capstone).length, CAPSTONE_SECTIONS);

  const total = totalLessons + weeks.length * 2 + CAPSTONE_SECTIONS;
  const done = doneLessons + doneQuizzes + doneAssignments + doneCapstone;

  const stamps: number[] = [
    ...Object.values(p.quizzes).map((q) => q.takenAt),
    ...Object.values(p.assignments).map((a) => a.submittedAt),
    ...Object.values(p.capstone).map((a) => a.submittedAt),
  ].filter((n) => typeof n === "number" && n > 0);

  return {
    done,
    total,
    pct: Math.round((done / total) * 100),
    complete: done >= total,
    completedAt: stamps.length ? Math.max(...stamps) : null,
  };
}

/** Stable, human-readable certificate reference derived from the user id. */
export function certificateId(userId: string, completedAt: number | null) {
  const clean = userId.replace(/-/g, "").toUpperCase();
  const year = new Date(completedAt ?? Date.now()).getFullYear();
  return `UMBA-${year}-${clean.slice(0, 4)}-${clean.slice(4, 8)}`;
}

export function formatCertDate(ms: number | null) {
  return new Date(ms ?? Date.now()).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CRIMSON = "#A51C30";
const INK = "#2A2320";
const PAPER = "#F4F0EA";

function wrapDraw(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, max: number, lh: number) {
  const words = text.split(" ");
  let line = "";
  let cy = y;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > max && line) {
      ctx.fillText(line, x, cy);
      line = w;
      cy += lh;
    } else line = test;
  }
  if (line) ctx.fillText(line, x, cy);
}

export async function drawCertificate(
  canvas: HTMLCanvasElement,
  opts: { name: string; date: string; certId: string; logoUrl: string },
) {
  const W = 1600;
  const H = 1130;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);

  // Outer + inner border
  ctx.strokeStyle = CRIMSON;
  ctx.lineWidth = 10;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#B99A86";
  ctx.strokeRect(64, 64, W - 128, H - 128);

  // Logo
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = opts.logoUrl;
    });
    const h = 210;
    const w = (img.width / img.height) * h;
    ctx.drawImage(img, (W - w) / 2, 105, w, h);
  } catch {
    /* logo optional */
  }

  ctx.textAlign = "center";

  ctx.fillStyle = INK;
  ctx.font = "500 30px Georgia, 'Times New Roman', serif";
  ctx.letterSpacing = "8px";
  ctx.fillText("CERTIFICATE OF COMPLETION", W / 2, 400);
  ctx.letterSpacing = "0px";

  ctx.fillStyle = "#6B5F58";
  ctx.font = "italic 26px Georgia, serif";
  ctx.fillText("This is to certify that", W / 2, 470);

  ctx.fillStyle = CRIMSON;
  ctx.font = "600 74px Georgia, serif";
  ctx.fillText(opts.name, W / 2, 566);

  ctx.strokeStyle = "#C9B7A8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 380, 596);
  ctx.lineTo(W / 2 + 380, 596);
  ctx.stroke();

  ctx.fillStyle = INK;
  ctx.font = "26px Georgia, serif";
  wrapDraw(
    ctx,
    "has successfully completed the 12-Week Unofficial MBA programme, covering ten core business disciplines, weekly assessments, applied assignments and a final capstone project.",
    W / 2,
    652,
    1000,
    42,
  );

  // Footer blocks
  ctx.font = "22px Georgia, serif";
  ctx.fillStyle = "#6B5F58";
  ctx.textAlign = "left";
  ctx.fillText("Date of completion", 180, 900);
  ctx.fillText("Certificate ID", 180, 970);
  ctx.fillStyle = INK;
  ctx.font = "600 22px Georgia, serif";
  ctx.fillText(opts.date, 480, 900);
  ctx.fillText(opts.certId, 480, 970);

  ctx.textAlign = "right";
  ctx.fillStyle = CRIMSON;
  ctx.font = "600 26px Georgia, serif";
  ctx.fillText("The Unofficial MBA", W - 180, 900);
  ctx.fillStyle = "#6B5F58";
  ctx.font = "italic 20px Georgia, serif";
  ctx.fillText("Learning beyond credentials", W - 180, 936);
}
