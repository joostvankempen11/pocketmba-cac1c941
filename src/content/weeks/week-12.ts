import type { Week } from "../types";

export const week12: Week = {
  week: 12,
  title: "Capstone: Integrated Business Plan",
  tagline: "Synthesize the program into a complete strategic plan for a real or hypothetical business.",
  topics: ["Synthesis", "Strategic plan", "Financial projections", "Go-to-market"],
  lessons: [
    {
      id: "l1",
      title: "How to use the capstone",
      summary: "Read this first. The capstone has five sections; submit each separately for AI feedback, then integrate.",
      body: `# Capstone overview\n\nThe capstone integrates every previous week into one coherent strategic plan for a business of your choosing — an existing company you'd transform, a startup idea, or a new line of business inside a company.\n\n## The five sections\n\n1. **Industry & competitive analysis** (Weeks 4, 6) — Five Forces, structure, your positioning.\n2. **Customer & marketing strategy** (Week 5) — STP, value prop, 4Ps, CLV.\n3. **Operating model** (Weeks 7, 8) — process, capacity, org design.\n4. **Financial plan** (Weeks 1–3) — three-statement projection, NPV/IRR, funding ask.\n5. **Execution roadmap & risks** (Weeks 9, 10, 11) — sequencing, key experiments, top risks and mitigations.\n\n## How to work the capstone\n\n- Submit each section to AI grading; iterate based on feedback.\n- Sections compound — your industry analysis should constrain your strategy; your strategy should drive your financials.\n- Word target per section: 600–1,000 words.\n- The final integrated plan is the artifact you'd hand to a serious investor or board.\n\n## A note on standards\n\nThe AI grader looks for: internal consistency, specificity (numbers, not adjectives), use of frameworks from the program (cited or implied), and honest engagement with risk.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "The capstone's main goal is to:", choices: ["Test memorization", "Integrate concepts across the program into one coherent plan", "Generate revenue", "Replace formal MBA"], answerIndex: 1, explanation: "Synthesis is the point." },
  ],
  assignment: {
    id: "a1",
    title: "Pick your capstone business",
    prompt: "Write 200–300 words describing the business your capstone will analyze: what it does, why you chose it, who its customers are, and what strategic question or challenge will anchor your plan.",
    rubric: "Clear description (3 pts). Compelling reason for choice (2 pts). Identifiable strategic question (3 pts). Feasibility for a 5-section analysis (2 pts).",
  },
};