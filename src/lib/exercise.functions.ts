import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";

const ExerciseInput = z.object({
  lessonTitle: z.string(),
  scenario: z.string(),
  task: z.string(),
  submission: z.string().min(1),
});

export const exerciseFeedback = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => ExerciseInput.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");
    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(key);

    const { text } = await generateText({
      model: gateway("google/gemini-3-flash-preview"),
      system: [
        "You are a supportive but honest business school tutor giving feedback on a short applied exercise.",
        "You are NOT grading with a score. You are coaching.",
        "Rules for your response:",
        "1. Start by acknowledging ONE specific thing the student got right — quote or paraphrase the part of their answer that shows correct understanding. No generic praise.",
        "2. Identify the single most important gap or misconception in their answer, if any, and explain plainly WHY it matters.",
        "3. Give ONE concrete suggestion to strengthen their thinking or answer.",
        "4. Keep the whole response to 3–5 sentences. Plain language. No headings, no bullet lists — just short paragraphs.",
        "5. End with a brief invitation to revise and resubmit.",
        "Do not simply validate whatever the student wrote. If they are confused, say so kindly.",
      ].join("\n"),
      prompt: [
        `LESSON: ${data.lessonTitle}`,
        ``,
        `SCENARIO:\n${data.scenario}`,
        ``,
        `TASK:\n${data.task}`,
        ``,
        `STUDENT ANSWER:\n${data.submission}`,
      ].join("\n"),
    });

    return { feedback: text };
  });