import type { Week } from "../types";

export const week12: Week = {
  week: 12,
  title: "Capstone: Integrated Business Plan",
  tagline: "Synthesize the program into a complete strategic plan for a real or hypothetical business.",
  topics: ["Synthesis", "Strategic plan", "Financial projections", "Go-to-market", "Risk and execution"],
  lessons: [
    {
      id: "l1",
      title: "How to use the capstone",
      summary: "Read this first. The capstone has five sections; submit each separately for AI feedback, then integrate.",
      body: `# Capstone overview

The capstone integrates every previous week into one coherent strategic plan for a business of your choosing — an existing company you would transform, a startup idea, or a new line of business inside a company you know.

This is where the program becomes real. Knowing each framework in isolation is useful. Applying all of them to one situation, with internal consistency, is the harder skill, and the one that separates business intuition from business *judgment*.

## The five sections

1. **Industry & competitive analysis** (Weeks 4, 6) — Five Forces, structure, your positioning, the moat or path to one.
2. **Customer & marketing strategy** (Week 5) — STP, value proposition, 4Ps, CLV/CAC.
3. **Operating model** (Weeks 7, 8) — process, capacity, org design, culture.
4. **Financial plan** (Weeks 1–3) — three-statement projection, NPV/IRR, funding ask.
5. **Execution roadmap & risks** (Weeks 9, 10, 11) — sequencing, key experiments, top risks and mitigations, the pitch.

## How to work the capstone

- Submit each section to AI grading individually; iterate based on feedback before moving on.
- Sections compound — your industry analysis should constrain your strategy; your strategy should drive your financials; your financials should match your operating model.
- Word target per section: 600–1,000 words. Less is often better than more if it's denser.
- Include a one-page summary at the start of your final integrated plan: the business, the customer, the strategy, the financial ask, the key risk.

## What separates an A from a B

The AI grader looks for:
- **Internal consistency** — does the strategy match the industry, the financials match the strategy, the operating model match the financials?
- **Specificity** — numbers, not adjectives; named customers and competitors, not "the customer" and "competitors"; specific timelines, not "soon"
- **Honest engagement with risk** — what could go wrong, and what would early evidence of that look like?
- **Use of frameworks** — Five Forces, STP, unit economics, NPV, situational leadership, jobs-to-be-done. Cite them or use them implicitly, but show that the analysis is grounded.
- **A coherent story** — at the end, do all the pieces add up to a business an investor or board would believe in?

## A note on standards

This is harder than it looks. Expect to revise each section at least once based on AI feedback. Plan to spend a few hours per section to do it well. The output — a complete integrated plan you could show to a sophisticated reader — is a genuine artifact of business judgment and a great keepsake of what you've learned.

## After the capstone

The point isn't to launch the business in your capstone. It's to have built the *mental model* of a complete business that you can re-apply to every situation you encounter for the rest of your career. Reading a 10-K, evaluating a new initiative, considering a job offer at a startup, sitting on a board — the same integrated framework applies. You now have it.`,
      videos: [
        { title: "How to write a business plan (search)", source: "YouTube search", fallbackSearchQuery: "how to write a business plan explained" },
        { title: "How to Write a Business Plan (Y Combinator)", source: "YouTube — Y Combinator", url: "https://www.youtube.com/watch?v=PHHl6JKzC6w" },
        { title: "Aswath Damodaran — The Business of Storytelling", source: "YouTube — NYU Stern", url: "https://www.youtube.com/watch?v=zoaG93muvKs" },
      ],
      readings: [
        { title: "How to Write a Great Business Plan", source: "Harvard Business Review (Sahlman)", url: "https://hbr.org/1997/07/how-to-write-a-great-business-plan" },
        { title: "The Strategist's Eye", source: "Harvard Business Review", url: "https://hbr.org/2016/01/strategy-needs-creativity" },
      ],
    },
  ],
  quiz: [
    { id: "q1", prompt: "The capstone's main goal is to:", choices: ["Test memorization", "Integrate concepts across the program into one coherent plan", "Generate revenue", "Replace formal MBA"], answerIndex: 1, explanation: "Synthesis is the point — applying many frameworks consistently to one situation." },
    { id: "q2", prompt: "Strong capstone work is mostly characterized by:", choices: ["Length", "Internal consistency, specificity, and honest risk analysis", "Beautiful design", "Citations of every reading"], answerIndex: 1, explanation: "Substance beats form; the grader looks for a coherent, evidence-rich plan that hangs together end-to-end." },
  ],
  assignment: {
    id: "a1",
    title: "Pick your capstone business",
    prompt: "Write 200-300 words describing the business your capstone will analyze: what it does, why you chose it, who its customers are, what makes it interesting strategically, and what one or two questions or challenges will anchor your plan. Be specific — name the company or describe the startup concept in a few crisp sentences.",
    rubric: "Clear description (3 pts). Compelling reason for choice (2 pts). Identifiable strategic question (3 pts). Feasibility for a 5-section analysis (2 pts).",
  },
};
