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

This is where the program becomes real. Knowing each framework in isolation is useful. Applying all of them to one situation, with internal consistency, is the harder skill, and the one that separates business intuition from business *judgment*. Think of it like cooking a five-course meal: it is one thing to know how to sear a steak or whip a mousse separately; it is a much higher level of skill to ensure the flavors don't clash, the timing is perfect, and you don't run out of stovetop burners halfway through.

## The five sections

1. **Industry & competitive analysis** (Weeks 4, 6) — Five Forces, structure, your positioning, the moat or path to one. A "moat" is your competitive advantage—the thing that keeps competitors from stealing your customers, much like a water-filled trench protects a castle.
2. **Customer & marketing strategy** (Week 5) — STP, value proposition, 4Ps, CLV/CAC. Remember that CLV (Customer Lifetime Value) is how much profit one customer brings you over years, while CAC (Customer Acquisition Cost) is what you pay in ads or sales effort to get them. If your CAC is higher than your CLV, you don't have a business; you have a charity.
3. **Operating model** (Weeks 7, 8) — process, capacity, org design, culture. This is the "how" of your business. It's the difference between a high-end restaurant with 20 chefs and a vending machine—both sell food, but their internal gears turn very differently.
4. **Financial plan** (Weeks 1–3) — three-statement projection, NPV/IRR, funding ask. This is the math that proves your idea works on paper. We use NPV (Net Present Value) to decide if the money we make in the future is worth the investment we make today, accounting for the fact that a dollar today is worth more than a dollar next year.
5. **Execution roadmap & risks** (Weeks 9, 10, 11) — sequencing, key experiments, top risks and mitigations, the pitch.

## How to work the capstone

- Submit each section to AI grading individually; iterate based on feedback before moving on. Iteration is just the business word for "polishing." You won't get it perfect the first time, and that's expected.
- Sections compound — your industry analysis should constrain your strategy; your strategy should drive your financials; your financials should match your operating model. For example, if your strategy is to be a "luxury, high-touch concierge service," your financial plan shouldn't show low labor costs. High-touch service requires many expensive employees.
- Word target per section: 600–1,000 words. Less is often better than more if it's denser. Precision matters more than page count.
- Include a one-page summary at the start of your final integrated plan: the business, the customer, the strategy, the financial ask, the key risk.

## What separates an A from a B

The AI grader looks for:
- **Internal consistency** — does the strategy match the industry, the financials match the strategy, the operating model match the financials? If you tell a story about being a low-cost leader like Walmart, but your operating model involves handcrafted custom parts, your plan is inconsistent.
- **Specificity** — numbers, not adjectives; named customers and competitors, not "the customer" and "competitors"; specific timelines, not "soon". "We will be very profitable soon" is a hope. "We will achieve a 15% net margin by Q3 of Year 2" is a plan.
- **Honest engagement with risk** — what could go wrong, and what would early evidence of that look like? Managers who ignore risk get blindsided. Showing you have a backup plan (a mitigation) proves you are ready to lead.
- **Use of frameworks** — Five Forces, STP, unit economics, NPV, situational leadership, jobs-to-be-done. Cite them or use them implicitly, but show that the analysis is grounded.
- **A coherent story** — at the end, do all the pieces add up to a business an investor or board would believe in?

## A note on standards

This is harder than it looks. Expect to revise each section at least once based on AI feedback. Plan to spend a few hours per section to do it well. The output — a complete integrated plan you could show to a sophisticated reader — is a genuine artifact of business judgment and a great keepsake of what you've learned.

## After the capstone

The point isn't to launch the business in your capstone. It's to have built the *mental model* of a complete business that you can re-apply to every situation you encounter for the rest of your career. Reading a 10-K (the massive annual report large public companies must file), evaluating a new initiative, considering a job offer at a startup, sitting on a board — the same integrated framework applies. You now have it.`,
      videos: [
        { title: "How to Write a Business Plan", source: "YouTube", videoId: "n6ecdYd8T6o", fallbackSearchQuery: "how to write business plan" },
        { title: "The Business of Storytelling", source: "YouTube", videoId: "WKIZ0bicfFw", fallbackSearchQuery: "business of storytelling numbers narrative" },
      ],
      readings: [
        { title: "How to Write a Great Business Plan", source: "Harvard Business Review (Sahlman)", url: "https://hbr.org/1997/07/how-to-write-a-great-business-plan" },
        { title: "The Strategist's Eye", source: "Harvard Business Review", url: "https://hbr.org/2016/01/strategy-needs-creativity" },
      ],
      exercise: { id: "ex1", scenario: "You are preparing your capstone for a boutique cat-sitting subscription service. In your marketing section, you claim your competitive advantage is 'unmatched personalized care,' but your financial plan shows you are hiring unskilled gig workers at minimum wage to keep costs low.", task: "Identify the internal inconsistency in this plan and explain how you would adjust either the marketing strategy or the operating model to ensure the story 'adds up' for an investor." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "The capstone's main goal is to:", choices: ["Test memorization", "Integrate concepts across the program into one coherent plan", "Generate revenue", "Replace formal MBA"], answerIndex: 1, explanation: "Synthesis is the point — applying many frameworks consistently to one situation." },
    { id: "q2", prompt: "Strong capstone work is mostly characterized by:", choices: ["Length", "Internal consistency, specificity, and honest risk analysis", "Beautiful design", "Citations of every reading"], answerIndex: 1, explanation: "Substance beats form; the grader looks for a coherent, evidence-rich plan that hangs together end-to-end." },
    { id: "q3", prompt: "A capstone financial model is most useful when it:", choices: ["Contains 20 tabs", "Ties assumptions transparently to strategy and shows how the business generates cash under multiple scenarios", "Hides sensitivities", "Uses only one scenario"], answerIndex: 1, explanation: "Models are decision tools; transparent assumptions and scenario analysis matter more than complexity." },
    { id: "q4", prompt: "A common capstone weakness is:", choices: ["Too much data", "A gap between strategic narrative and the financial or operational plan", "Being too specific", "Considering competitors"], answerIndex: 1, explanation: "Great capstones align story, numbers, and execution steps." },
    { id: "q5", prompt: "Damodaran's 'business of storytelling' point is that:", choices: ["Numbers alone convince investors", "A strong plan pairs a credible narrative with disciplined numbers, each constraining the other", "Stories don't matter", "Only spreadsheets matter"], answerIndex: 1, explanation: "The best plans bridge story and number so that both are testable." },
  ],
  assignment: {
    id: "a1",
    title: "Pick your capstone business",
    prompt: "Write 200-300 words describing the business your capstone will analyze: what it does, why you chose it, who its customers are, what makes it interesting strategically, and what one or two questions or challenges will anchor your plan. Be specific — name the company or describe the startup concept in a few crisp sentences.",
    rubric: "Clear description (3 pts). Compelling reason for choice (2 pts). Identifiable strategic question (3 pts). Feasibility for a 5-section analysis (2 pts).",
  },
};
