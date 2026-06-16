import { createServerFn } from "@tanstack/react-start";
import { generateText, Output } from "ai";
import { z } from "zod";

const FeedbackSchema = z.object({
  score: z.number().min(0).max(10),
  maxScore: z.number().default(10),
  strengths: z.array(z.string()).min(1).max(5),
  improvements: z.array(z.string()).min(1).max(5),
  summary: z.string(),
});

const GradeInput = z.object({
  assignmentTitle: z.string(),
  prompt: z.string(),
  rubric: z.string(),
  submission: z.string().min(1),
});

export const gradeAssignment = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => GradeInput.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");
    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(key);

    const { experimental_output: output } = await generateText({
      model: gateway("google/gemini-3-flash-preview"),
      experimental_output: Output.object({ schema: FeedbackSchema }),
      system:
        "You are a rigorous but supportive MBA professor. Grade student work strictly against the rubric (out of 10). Be specific, cite passages, and give actionable improvements. Avoid vague praise.",
      prompt: `ASSIGNMENT: ${data.assignmentTitle}\n\nPROMPT:\n${data.prompt}\n\nRUBRIC:\n${data.rubric}\n\nSTUDENT SUBMISSION:\n${data.submission}\n\nReturn a JSON object with: score (0-10), maxScore (10), strengths (1-5 bullet phrases), improvements (1-5 specific actionable bullets), summary (2-3 sentences).`,
    });

    return output;
  });