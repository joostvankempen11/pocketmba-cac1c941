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

The point isn't to launch the business in your capstone. It's to have built the *mental model* of a complete business that you can re-apply to every situation you encounter for the rest of your career. Reading a 10-K (the massive annual report large public companies must file), evaluating a new initiative, considering a job offer at a startup, sitting on a board — the same integrated framework applies. You now have it.

## A worked example: integrating the five sections for one business

Abstract advice about "consistency" only becomes real once you watch it happen. Imagine a capstone built around a hypothetical company called Northstar Meal Kits, a subscription service delivering pre-portioned dinner ingredients to urban professionals. Here is how a student's five sections should visibly lean on each other, sentence by sentence, rather than sitting side by side as five unrelated essays stapled together.

In the industry section, the student runs Five Forces (a framework from Michael Porter that scores how much profit an industry can sustain based on the bargaining power of buyers and suppliers, the threat of new entrants, substitutes, and rivalry among existing players) and concludes that meal-kit delivery is a brutal, low-moat business: rivalry is fierce (Blue Apron, HelloFresh, and grocery-chain private-label kits all compete), switching costs for customers are close to zero (cancel one subscription, start another, in five minutes), and suppliers of fresh produce have some power because volume matters for freshness contracts. The one lever available is a "moat" built on hyper-local sourcing relationships and a tightly optimized last-mile delivery network that is expensive for a new entrant to replicate quickly.

That conclusion should then visibly shape the marketing section. If the moat is local sourcing and delivery density, the STP (Segmentation, Targeting, Positioning) work should target a *geographically concentrated* segment — say, professionals within a 12-mile radius of three specific metro hubs — rather than a vague national audience, because delivery density is what makes the economics work. The value proposition should foreground freshness and local farm partnerships (the actual moat), not "convenience" alone, since convenience is trivially copied by every competitor already in the market. CLV and CAC numbers should reflect a premium price point consistent with a "quality, not just convenience" position: if the plan claims a $14.99/meal premium price, the CAC assumptions (what it costs in advertising and promotions to acquire one paying subscriber) cannot casually borrow numbers from a discount competitor's investor deck.

The operating model section must then make the moat operationally real. If the pitch depends on local sourcing and delivery density, the plan needs regional micro-fulfillment centers, not one centralized national warehouse — a structural choice with real cost consequences. This is also where org design and culture (Week 8 material) matter: a company betting on "farm relationships" needs regional purchasing managers with authority to build supplier trust, not a single centralized buyer optimizing purely for the lowest unit cost across the country.

The financial plan then has to carry the cost structure that these operating choices imply. Regional micro-fulfillment centers cost more per unit than one giant warehouse — the three-statement projection should show higher fixed costs per region but the premium pricing and higher retention (lower churn, because local freshness is harder for competitors to match) should still produce a positive contribution margin and a path to a healthy NPV. If a student's spreadsheet quietly reverts to industry-average costs because that was easier to find, the financial plan silently contradicts the operating model and the whole story falls apart under scrutiny.

Finally, the execution roadmap sequences the real risks in this specific story: can the company actually sign exclusive-enough regional produce contracts before a well-funded competitor enters the same three metro hubs? What is the earliest, cheapest experiment that would tell you whether local sourcing genuinely improves retention, before you spend millions building micro-fulfillment centers everywhere? A generic roadmap ("hire salespeople, launch marketing, scale") ignores the one risk this specific plan actually depends on.

Notice what happened across all five sections: one strategic idea (local sourcing as a moat) touched the customer targeting, the pricing, the org chart, the cost structure, and the risk list. That is what "integration" means in practice, and it is exactly what separates a capstone that reads like five independent homework assignments from one that reads like an executive actually thinking about one business.

## Common failure patterns and how to catch them in your own draft

Having graded and reviewed many capstones, a few failure patterns recur constantly. Learning to spot them in your own draft before submission will save you a full revision cycle.

**The "copy-paste industry" failure.** A student writes a generic Five Forces analysis that could describe almost any industry — "there is some competition, some buyer power, moderate entry barriers" — without any numbers or named competitors specific to their business. The fix: force yourself to name at least three real or realistic competitors, cite at least one real cost or price figure (even an estimate, clearly labeled as such), and state which force is strongest *and why it matters for your specific strategy*.

**The "financials from nowhere" failure.** A financial plan appears with reasonable-looking numbers (a 20% revenue growth rate, a 60% gross margin) that have no visible link to the strategy or operating model described elsewhere in the plan. If your operating model says you hire a lean, highly automated team, your labor costs as a percentage of revenue should be low; if your strategy is "white-glove, high-touch service," they should be high. Every major assumption in your model should be traceable to a sentence somewhere else in your plan.

**The "risk section as afterthought" failure.** Many students write four strong sections and then a perfunctory risk paragraph — "there is competitive risk and economic risk" — with no mitigation and no early warning signs to watch for. A strong risk section instead names the two or three risks that would actually kill *this specific plan* (not generic business risks that apply to every company on earth) and states what evidence, visible within the first six to twelve months, would tell you the risk is materializing.

**The "adjective inflation" failure.** Phrases like "massive market opportunity," "unparalleled customer experience," and "best-in-class operations" convey confidence but zero information. Replace every such adjective with a number, a comparison, or a named example: not "massive market opportunity" but "a $4.2B addressable market growing 8% annually, per a cited source, with the top three incumbents holding a combined 35% share, leaving room for a focused regional entrant."

## Time management across the five sections

A realistic way to budget your capstone time, assuming roughly 15–20 hours total across a week or two, looks like this:

| Section | Approx. hours | Primary risk if rushed |
|---|---|---|
| Industry & competitive analysis | 2–3 | Generic, uncited claims that don't inform strategy |
| Customer & marketing strategy | 3–4 | Value proposition disconnected from the moat identified in industry analysis |
| Operating model | 2–3 | Org design that couldn't actually deliver the promised customer experience |
| Financial plan | 4–5 | Numbers that don't reconcile with strategy or operating costs |
| Execution roadmap & risks | 2–3 | Generic risks instead of the specific ones this plan depends on |
| Integration pass (final read-through) | 2 | Skipping this step is the single most common reason plans feel disjointed |

That final integration pass deserves special emphasis: block time, after all five sections are individually complete, to read the whole plan start to finish as if you were a skeptical investor seeing it for the first time. Look specifically for numbers or claims in one section that contradict another. This single pass, more than any individual section's polish, is usually what moves a plan from a B to an A.

## Applying this beyond the classroom

The habit you are building — checking that a strategic story and its supporting numbers are mutually consistent — is exactly the skill a board member uses when reviewing a CEO's quarterly presentation, that a private equity analyst uses when diligencing an acquisition target, and that a hiring manager should use (but often doesn't) when evaluating a candidate's resume against the story they tell in an interview. If someone claims to be a "detail-oriented, careful operator" but their resume shows three jobs abandoned within six months each, the story and the evidence don't match — and that mismatch is worth noticing, in a capstone or in a real boardroom. The capstone is deliberately built to give you practice doing this once, thoroughly, on a business simple enough to hold in your head, so that you can do it faster and more instinctively on the far messier, higher-stakes situations you'll face afterward.
`,
      takeaways: [
        "A capstone earns a strong grade only when one strategic idea visibly constrains the targeting, pricing, org design, cost structure, and risk list in every other section.",
        "Generic claims like \"massive opportunity\" or \"unmatched service\" carry no information; replace every adjective with a number, a named competitor, or a cited source.",
        "Financial assumptions must trace back to a specific sentence in your strategy or operating model, not to an industry-average number pulled from a generic source.",
        "The risk section should name the two or three failure modes specific to your plan, plus the early evidence that would reveal each one, not a generic list that fits any business.",
        "Reserve a final integration pass, reading the whole plan as a skeptical investor would, because that single step catches the contradictions individual sections miss.",
        "The underlying skill \u2014 checking that a story and its numbers agree \u2014 is the same one boards, investors, and hiring managers use to evaluate claims for the rest of your career."
      ],
      videos: [
        { title: "How to Write a Business Plan", source: "YouTube", videoId: "n6ecdYd8T6o", fallbackSearchQuery: "how to write business plan" },
        { title: "The Business of Storytelling", source: "YouTube", videoId: "WKIZ0bicfFw", fallbackSearchQuery: "business of storytelling numbers narrative" },
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
