
# 12-Week MBA Program App

A personal, self-paced MBA you complete inside the app. Twelve weeks of written lessons covering the generalist core, an AI tutor for questions, AI-graded assignments and quizzes, and a capstone project at the end. Progress is saved locally in your browser — no login.

## Curriculum (12 weeks, generalist core)

```text
W1  Financial Accounting          W7  Operations & Supply Chain
W2  Managerial Accounting & Finance I  W8  Organizational Behavior
W3  Corporate Finance II          W9  Leadership & Negotiation
W4  Microeconomics for Managers   W10 Data Analytics & Decision Making
W5  Marketing Strategy            W11 Entrepreneurship & Innovation
W6  Competitive Strategy          W12 Capstone: Integrated Business Plan
```

Each of weeks 1–11 contains:
- 4–5 written lessons (long-form, with worked examples and a summary)
- 1 quiz (auto-graded, multiple choice + short answer)
- 1 written assignment (AI-graded against a rubric, with feedback)
- "Ask the tutor" available on every lesson

Week 12 is the capstone: a multi-part business plan / strategic analysis you submit section by section; the AI evaluates each section against a detailed rubric and gives consolidated feedback.

## App structure

```text
/                       Dashboard — progress, current week, resume button
/curriculum             All 12 weeks overview
/week/$week             Week page — lessons, quiz, assignment list
/lesson/$week/$lesson   Lesson reader + inline tutor chat
/quiz/$week             Quiz taker with instant grading
/assignment/$week/$id   Assignment editor + submit for AI grading
/capstone               Capstone hub with sections + final feedback
/tutor                  General AI tutor (any topic)
```

Single root layout with sidebar nav showing week progress.

## Data & persistence

All progress in `localStorage` under one namespaced key:
- completed lessons, quiz scores, assignment submissions + AI feedback, capstone sections, current week pointer
- Export/Import JSON buttons so you can back up or move browsers

Lesson and assignment **content** ships in the app as TypeScript data files (`src/content/week-01.ts` … `week-12.ts`), so it loads instantly and works offline. The AI is used only for: tutor chat, grading short-answer quiz items, grading written assignments, and capstone evaluation.

## AI features (Lovable AI Gateway, server-side)

Three TanStack server functions, all using `google/gemini-3-flash-preview`:
1. `tutorChat` — streaming chat, scoped with system prompt to the current lesson's topic
2. `gradeAssignment` — takes rubric + submission, returns structured `{ score, strengths, improvements, rewrittenExample }`
3. `gradeCapstoneSection` — same shape, tuned per capstone section

Tutor uses the streaming chat pattern (`/api/chat` route + `useChat`). Grading uses `createServerFn` with structured output.

## UI/UX

- Clean, reading-first design (think Notion/Readwise): generous typography, max ~70ch line length, dark mode
- Per-week progress ring on the dashboard; overall 0–100% bar
- Lesson page: prose on left, sticky tutor panel on right (collapsible on mobile)
- Quiz: one-question-at-a-time with progress bar; results screen with explanations
- Assignment: markdown editor + word count + "Submit for AI feedback" → feedback card with score, strengths, improvements

## Technical notes

- Stack: TanStack Start (already configured), Tailwind, shadcn components
- AI: Lovable AI Gateway via `@/lib/ai-gateway.server`, server fns in `src/lib/ai.functions.ts`, chat route at `src/routes/api/chat.ts`
- Content: typed `Week`, `Lesson`, `Quiz`, `Assignment` models in `src/content/types.ts`; one file per week
- Progress store: a small Zustand store backed by localStorage (no Lovable Cloud needed)
- SEO: per-route `head()` titles for dashboard, curriculum, each week

## Scope notes

- Writing genuinely useful long-form lessons for all 12 weeks is the bulk of the work. I'll author them at solid-textbook depth (think ~1,500–2,500 words per lesson) covering core frameworks, formulas, and worked examples. If you want even deeper treatment for specific weeks, we can extend later.
- No accounts, no cloud sync, no certificates — pure single-user local app per your choices.

