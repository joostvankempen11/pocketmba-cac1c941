import type { Week } from "../types";

export const week11: Week = {
  week: 11,
  title: "Entrepreneurship & Innovation",
  tagline: "How new businesses are built — and how mature firms keep innovating.",
  topics: ["Opportunity discovery", "Lean startup", "Business models", "Innovation in incumbents"],
  lessons: [
    {
      id: "l1",
      title: "Opportunity, problem, and market",
      summary: "Most startups fail because they build something nobody urgently wants. The discipline is to validate before scaling.",
      body: `# Where opportunities come from

Entrepreneurship is the discovery and exploitation of opportunities to create value. Opportunities don't fall from the sky — they emerge from shifts in technology, regulation, demographics, behavior, or competitor weakness.

## Four foundational opportunity types (Drucker)

In *Innovation and Entrepreneurship*, Peter Drucker named seven sources of innovation; the four most fertile:

1. **The unexpected** — surprises in your business or the market. A product is purchased by an unexpected customer (Pampers in Japan for "easier laundry"). An expected hit flops (Microsoft Bob). Pay attention to surprises; they reveal mismatches between mental models and reality.
2. **Incongruities** — a gap between what is and what "ought to be." Banking customers hated branch hours; mobile banking emerged. Photo developing took a week; one-hour photo emerged; then digital eliminated it.
3. **Process needs** — a step in an existing workflow is painful, slow, or expensive. The opportunity is to fix that step.
4. **Industry / market structure changes** — deregulation, technology, demographics shift power. The shift from offline to online retail; the rise of cloud; aging populations.

Three more — demographics, perception changes, new knowledge — are slower-moving but profoundly important.

## Problem-first vs solution-first

Many founders fall in love with a solution (a technology, a product) and shop it for a problem. This succeeds occasionally (rarely) and produces most startup failure.

The discipline that works: start with a real, urgent, common problem; deeply understand who has it, why existing solutions fail them, and what they'd pay to make it go away; *then* design.

Christensen's **Jobs to Be Done** framing (Week 5) is the most rigorous version of this. Before building anything, articulate the customer's job — the functional, emotional, and social progress they're trying to make — and the situation in which the job arises.

## Market size and the "TAM/SAM/SOM" trap

Investors will ask about market size. The standard answer:
- **TAM** (Total Addressable Market) — every dollar that could conceivably be spent on solving this problem globally
- **SAM** (Serviceable Addressable Market) — the portion you could realistically reach with your model
- **SOM** (Serviceable Obtainable Market) — what you could realistically capture in the next few years

The trap: top-down TAM estimates ("the global ride-hailing market is $500B, so we need just 1%...") are almost always fantasies. Bottom-up estimates ("we can win 5 cities in 3 years × 1M rides each × $5 take") are more credible and force operational thinking.

What investors are really asking: *if everything goes right, is this big enough to matter?* They are not asking for spreadsheet precision; they want evidence the opportunity is worth the risk.

## The "vitamins vs painkillers" test

Bryce Roberts's classic distinction: customers buy painkillers (urgent relief from a real pain) reliably. Vitamins (nice-to-haves, vague improvements) require huge sales effort, churn fast, and resist pricing power. Most enterprise SaaS that fails is a vitamin in painkiller's clothing.

The honest test: would the customer call *you* if you didn't email them this week? Would they tell other people about this without prompting? Would they pay 2x the current price rather than lose it? If the answers are mostly no, you have a vitamin.

## Founder-market fit

Investors look for fit between the founders and the problem. The strongest signal: the founder has *lived* the problem for years, has unfair access to early customers, and has unusual insight that competitors lack ("the unfair advantage").

Solo founders are rarer and harder than co-founder teams in early stage; the data suggests teams of 2-3 with complementary skills (technical + go-to-market) outperform both solo founders and large founding teams.`,
      videos: [
        { title: "Peter Thiel \u2014 Competition is for Losers", source: "YouTube \u2014 Stanford eCorner / How to Start a Startup", url: "https://www.youtube.com/watch?v=3Fx5Q8xGU8k", fallbackSearchQuery: "Peter Thiel competition losers" },
        { title: "Y Combinator \u2014 How to Get Startup Ideas (Paul Graham)", source: "YouTube \u2014 Y Combinator", url: "https://www.youtube.com/watch?v=Th8JoIan4dg", fallbackSearchQuery: "Paul Graham startup ideas" },
      ],
      readings: [
        { title: "Why Startups Fail: A New Postmortem", source: "Harvard Business Review", url: "https://hbr.org/2021/05/why-start-ups-fail" },
        { title: "The Discipline of Innovation", source: "Harvard Business Review (Drucker)", url: "https://hbr.org/2002/08/the-discipline-of-innovation" },
      ],
    },
    {
      id: "l2",
      title: "Lean startup and validated learning",
      summary: "Treat the startup as a series of experiments. The goal is learning fast, not executing a plan.",
      body: `# Lean Startup

Eric Ries's *The Lean Startup* (2011) synthesized customer development (Steve Blank), agile development, and lean manufacturing into a single framework: a startup is a temporary organization searching for a repeatable, scalable business model. The fundamental activity is *validated learning* — running experiments to test assumptions about what customers will value and pay for.

## The build-measure-learn loop

1. **Build** the smallest thing that can test the riskiest assumption
2. **Measure** what customers actually do (not what they say)
3. **Learn** whether to persevere, pivot, or kill

The faster this loop runs, the more learning per dollar. The mistake most new founders make: spending a year building "the product" before showing it to real customers, then discovering the assumptions were wrong.

## MVP — Minimum Viable Product

The smallest experiment that produces validated learning about the next decision. Not "version 1.0 with fewer features" — often *no product at all*. Famous early MVPs:

- **Dropbox**: a 3-minute video showing the product working. Email signups jumped from 5,000 to 75,000 overnight, validating demand without writing storage code.
- **Zappos**: founder Nick Swinmurn photographed shoes at local stores, posted them online, bought them when ordered. No inventory; the experiment validated that people would buy shoes online.
- **Airbnb**: original three founders rented airbeds in their own apartment. Three guests, $1,000 in revenue, and a validation that strangers would pay to sleep in strangers' homes.

The MVP is *not* the final product. It's the simplest experiment that can resolve the most uncertain assumption.

## The riskiest assumption test

Most early-stage assumptions cluster around:
- Does the problem exist for enough people?
- Is our solution genuinely better than the alternatives (including doing nothing)?
- Will people pay enough to make this a business?
- Can we acquire customers profitably?
- Can we deliver at the unit economics we need?

The discipline: list every belief required for the business to work, rank them by uncertainty and impact, and design experiments that resolve the highest-priority ones cheaply.

## Persevere, pivot, or kill

After each cycle:
- **Persevere** — the assumption was validated; keep going
- **Pivot** — change one core element of the business model (problem, customer, solution, model, channel) while keeping others
- **Kill** — the opportunity isn't there; redirect resources

Famous pivots: Slack started as a game company (Tiny Speck) and pivoted when the internal chat tool became more valuable than the game. Twitter began as a podcasting platform (Odeo). Instagram pivoted from a check-in app called Burbn to focus on the most-used feature (photos).

Pivoting is not failure; it's adaptation. The discipline is to pivot on evidence, not on whim.

## Where Lean Startup ends

Lean Startup excels at finding *product-market fit* in fast-feedback consumer and SMB contexts. It struggles when:
- Sales cycles are long (deep enterprise, regulated industries)
- Up-front investment is irreducibly large (biotech, hard tech, semiconductors)
- The product's value depends on a critical mass not present in the MVP (marketplaces, social networks)

For these, the discipline transfers but the *methods* adapt — pilot programs, design partnerships, dosing studies, signed letters of intent.

## After product-market fit

Once you have signal — customers using, retaining, referring; revenue growing without you pushing — the game changes. The new question is whether *the business model* scales: can you acquire customers at acceptable cost, deliver at acceptable margins, and build the operational capacity for 10x? Many startups achieve product-market fit and then die in the scaling phase because they assumed scale would be easy.`,
      videos: [
        { title: "Eric Ries \u2014 The Lean Startup", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=fEvKo90qBns", fallbackSearchQuery: "Eric Ries lean startup" },
        { title: "Steve Blank \u2014 Customer Development", source: "YouTube \u2014 Stanford", url: "https://www.youtube.com/watch?v=xOOEvKBJfTU", fallbackSearchQuery: "Steve Blank customer development" },
        { title: "Steve Blank \u2014 Customer Development", source: "YouTube", videoId: "xr2zFXblSRM", fallbackSearchQuery: "Steve Blank customer development" },
      ],
      readings: [
        { title: "Why the Lean Start-Up Changes Everything", source: "Harvard Business Review (Eric Ries / Steve Blank)", url: "https://hbr.org/2013/05/why-the-lean-start-up-changes-everything" },
        { title: "The Founder's Dilemma", source: "Harvard Business Review", url: "https://hbr.org/2008/02/the-founders-dilemma" },
      ],
    },
    {
      id: "l3",
      title: "Business model design",
      summary: "Great products inside bad business models lose. The model is the architecture of value capture.",
      body: `# Business models

A business model describes how the firm creates, delivers, and captures value. The product is one component; the model encompasses everything that makes that product an economically viable business.

## The Business Model Canvas

Osterwalder's nine-box canvas:

| Key Partners | Key Activities | Value Propositions | Customer Relationships | Customer Segments |
|---|---|---|---|---|
| | Key Resources | | Channels | |
| Cost Structure | | | | Revenue Streams |

The discipline: any change in one box should be checked for consistency with all others. Adding a new segment requires asking what channel reaches them, what relationship they expect, whether the value proposition needs to change for them, and how that affects costs and revenue.

## Revenue model patterns

- **Direct sale** — single transaction (cars, software licenses, consulting)
- **Subscription** — recurring access (Netflix, SaaS, gym memberships)
- **Marketplace / transaction fee** — take a percentage of transactions facilitated (Airbnb, eBay, Stripe)
- **Advertising** — content is free; advertisers pay for attention (Google, Meta, traditional media)
- **Freemium** — free tier with paid upgrade (Spotify, Dropbox, Slack)
- **Licensing / royalties** — IP rented out (pharma, semiconductors, franchises)
- **Razor and blades** — cheap durable, expensive consumable (printers, coffee pods, console gaming)
- **Bundling** — sell goods together at a price the segment would pay (Microsoft Office, cable TV)
- **Outcome-based** — pay for results (performance marketing, some healthcare)

Most successful businesses combine 2-3 patterns. The most powerful innovations are often business model innovations on top of unchanged technology — Netflix's subscription replacing per-rental Blockbuster; Salesforce's SaaS replacing on-premise software.

## Network effects and platforms

A platform's value depends on the number and quality of participants. Three types of network effect:
- **Direct (same-side)** — more users make the product more valuable to other users (Facebook, WhatsApp)
- **Indirect (cross-side)** — more buyers attract more sellers and vice versa (Uber, Airbnb, App Store)
- **Data network effects** — more users generate more data which improves the product (Google search, fraud detection)

Platforms with strong network effects can dominate winner-take-most markets. They also face the **cold-start problem**: the product is bad when small, so attracting the first cohort is brutal. Solutions: subsidize one side, focus geographically, start in a niche where critical mass is small, or piggyback on an existing network.

Andrew Chen's *The Cold Start Problem* is the contemporary canon on this topic.

## The unit economics gate

Regardless of model, the same test applies eventually: do unit economics work? At the customer (or transaction, or order) level:

\`Contribution per unit > 0\` (necessary, not sufficient)
\`CLV / CAC > ~3\` (sustainable)
\`CAC payback < 18-24 months\` (cash-efficient)

Startups that pass this test grow into healthy businesses. Startups that don't, even when funded, eventually die — sometimes spectacularly. Many of the 2020-22 venture failures were companies whose unit economics never worked but were masked by cheap capital and growth-at-all-costs.

## Defensibility

Day-one moats are rare. But the business model should have a credible path to one of:
- Network effects
- Scale economies
- Switching costs / lock-in
- Brand and trust
- Proprietary data
- Regulatory licenses
- Cost advantage from process / location / IP

A great product without a path to defensibility gets copied and competed to zero margin. Defensibility doesn't come from the technology alone — it comes from the *system* of choices that compound over time.`,
      videos: [
        { title: "Alex Osterwalder \u2014 Business Model Canvas Explained", source: "YouTube \u2014 Strategyzer", url: "https://www.youtube.com/watch?v=QoAOzMTLP5s", fallbackSearchQuery: "business model canvas" },
        { title: "Andrew Chen \u2014 The Cold Start Problem (Network Effects)", source: "YouTube \u2014 a16z", url: "https://www.youtube.com/watch?v=qBKvgYDGZjI", fallbackSearchQuery: "Andrew Chen cold start problem" },
        { title: "Andrew Chen \u2014 The Cold Start Problem", source: "YouTube", videoId: "-ILjMq1T13g", fallbackSearchQuery: "Andrew Chen cold start network effects" },
      ],
      readings: [
        { title: "Reinventing Your Business Model", source: "Harvard Business Review (Johnson, Christensen, Kagermann)", url: "https://hbr.org/2008/12/reinventing-your-business-model" },
        { title: "Pipelines, Platforms, and the New Rules of Strategy", source: "Harvard Business Review", url: "https://hbr.org/2016/04/pipelines-platforms-and-the-new-rules-of-strategy" },
      ],
    },
    {
      id: "l4",
      title: "Innovation in established companies",
      summary: "Big companies have everything startups lack — except the ability to act like startups. Closing that gap is the discipline.",
      body: `# Corporate innovation

Established companies have capital, customers, distribution, talent, and brand. They also have processes, politics, and metrics optimized for the existing business — which actively block new businesses from emerging. The result: many breakthrough innovations come from startups, even though the incumbents could afford to fund 100 of them.

## The Innovator's Dilemma

Clayton Christensen's foundational insight (1997): the *very practices* that make great companies great — listening to best customers, investing in highest-margin segments, optimizing existing processes — make them vulnerable to disruption from below. Disruptors enter at the low end with inferior products that don't matter to current customers, then improve until they take the mainstream market.

Examples: mini-mills vs integrated steel, PCs vs minicomputers, smartphones vs PCs, streaming vs cable.

The dilemma: rational allocation of resources by talented managers serving great customers can lead inexorably to losing the company. The "rational" decision is to ignore the small, low-margin disruptor; that decision is also fatal.

## The three horizons (McKinsey)

A useful model:
- **Horizon 1** — extend and defend the core business (most resources, predictable returns)
- **Horizon 2** — build emerging businesses (medium resources, medium uncertainty)
- **Horizon 3** — create options on future businesses (small resources, high uncertainty, mostly fail)

The error: starving H2 and H3 to feed H1. The pipeline dies; in 5-10 years there's nothing to replace the core.

## Organizational designs that work

Christensen and many others (Govindarajan, Trimble, O'Reilly, Tushman) converge on a few patterns:

1. **Ambidextrous organization** — separate units for explore vs exploit, with different metrics, processes, and culture, but shared executive sponsorship.
2. **Skunk works** — a small, autonomous team protected from corporate processes (Lockheed's original; Apple's iPhone team).
3. **Corporate venture capital** — strategic investment in startups for option value and learning.
4. **Acquihires and M&A** — buy capability rather than build it (Cisco's classic model).
5. **Internal venture studios** — apply lean startup methods at scale inside the company.

Each has trade-offs. The pattern that fails: bolting innovation onto an existing business unit and asking it to deliver both quarterly results *and* breakthrough innovation. The metrics will kill the innovation every time.

## Why most corporate innovation fails

- **Innovation theater** — visible programs (hackathons, accelerators, innovation labs) without real authority to deploy capital or change products
- **Antibodies** — the existing business's processes (legal, finance, brand, IT) reject new ventures as exceptions
- **Wrong metrics** — measuring small ventures by mature-business metrics (revenue scale, gross margin) kills them in year 1
- **Risk aversion** — punishing failure crushes the willingness to take the experiments innovation requires
- **No exit ramp** — successful internal ventures have no clear path to scale into the mother ship

Govindarajan and Trimble's *The Other Side of Innovation* documents these dynamics extensively.

## A simple test for a corporate innovation program

Three questions:
1. Has any new venture from the program reached a meaningful share of revenue in the past 5 years?
2. Does the program leadership report to the CEO, with autonomous capital allocation?
3. Is there a clear, used path for promising ventures to scale into existing business units or be spun out?

If the answer to all three is no, the program is theater. If yes to all three, it's the real thing — and it's rare.

## The personal lesson

Even if you never start a company, learning startup methods is now a leadership skill. The pace of change in most industries means that every senior leader will be responsible for some H2 or H3 venture inside their organization. The discipline of validated learning, MVPs, business model design, and protecting innovation from antibodies is general-purpose — not just startup folklore.`,
      videos: [
        { title: "Clayton Christensen \u2014 The Innovator's Dilemma", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=qDrMAzCHFUU", fallbackSearchQuery: "Christensen innovator's dilemma" },
        { title: "Rita McGrath \u2014 The End of Competitive Advantage", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=Si9DphPEXJM", fallbackSearchQuery: "Rita McGrath end competitive advantage" },
        { title: "Rita McGrath \u2014 The End of Competitive Advantage", source: "YouTube", videoId: "wqmVsECbG8E", fallbackSearchQuery: "Rita McGrath transient advantage" },
      ],
      readings: [
        { title: "The Innovator's DNA", source: "Harvard Business Review (Christensen, Dyer, Gregersen)", url: "https://hbr.org/2009/12/the-innovators-dna" },
        { title: "Building an Innovation Factory", source: "Harvard Business Review", url: "https://hbr.org/2000/05/building-an-innovation-factory-2" },
      ],
    },
  ],
  quiz: [
    { id: "q1", prompt: "The riskiest assumption to test first in an early-stage startup is usually:", choices: ["The pricing page conversion rate", "Whether the problem is real and urgent for a defined segment", "Server scalability", "The logo and brand voice"], answerIndex: 1, explanation: "Most startup failure is building something nobody urgently wants; validate the problem before optimizing anything else." },
    { id: "q2", prompt: "A market that is small but growing fast, with underserved customers, is often better than:", choices: ["A large, mature market with dominant incumbents", "Any small market", "No market", "A regulated market"], answerIndex: 0, explanation: "Non-consensus small-and-growing markets have historically produced outsized outcomes." },
    { id: "q3", prompt: "Peter Thiel's 'competition is for losers' argues that:", choices: ["Never enter a competitive market", "Durable value comes from carving out a monopoly-like position, not competing on undifferentiated features", "Ignore competitors", "Only fund monopolies"], answerIndex: 1, explanation: "Escape competition through differentiation, network effects, or new markets." },
    { id: "q4", prompt: "A founder should evaluate an opportunity primarily by:", choices: ["Their personal excitement", "Depth and urgency of the problem, market size/growth, and unfair advantage", "Whether investors like it", "Competitor count only"], answerIndex: 1, explanation: "Excitement is table stakes; the three variables above determine expected value." },
    { id: "q5", prompt: "A 'painkiller' offer is preferable to a 'vitamin' offer because:", choices: ["Painkillers are cheaper", "Urgent, high-pain problems produce faster adoption and willingness to pay", "Vitamins are illegal", "Painkillers require less marketing"], answerIndex: 1, explanation: "Solving an acute problem shortens sales cycles and increases retention." },
    { id: "q6", prompt: "An MVP is best defined as:", choices: ["Version 1.0 of the product with fewer features", "The smallest experiment that produces validated learning about the next decision", "A prototype shown to investors", "The first paid version"], answerIndex: 1, explanation: "MVPs are often not products at all — videos, landing pages, manual delivery — anything that resolves uncertainty fast." },
    { id: "q7", prompt: "Vanity metrics differ from actionable metrics in that they:", choices: ["Are hard to measure", "Look good but do not inform decisions", "Are always wrong", "Require more data"], answerIndex: 1, explanation: "Focus on metrics that change behavior, not those that make slides look good." },
    { id: "q8", prompt: "Steve Blank's customer development starts with:", choices: ["Building the product", "Getting out of the building to talk to potential customers about their problem", "Fundraising", "Hiring sales"], answerIndex: 1, explanation: "Discovery precedes validation, creation, and scaling in the model." },
    { id: "q9", prompt: "Pivoting is best defined as:", choices: ["Giving up", "A structured change of strategy or product hypothesis based on validated learning", "Cutting the team", "Changing the logo"], answerIndex: 1, explanation: "Pivots are informed by what tests actually revealed, not panic." },
    { id: "q10", prompt: "A founder who runs a 'concierge MVP' is:", choices: ["Building sophisticated software up front", "Delivering the solution manually to a few customers to validate demand and learn the workflow", "Outsourcing to an agency", "Skipping validation"], answerIndex: 1, explanation: "Manual delivery lets you learn the job-to-be-done before automating it." },
    { id: "q11", prompt: "Indirect (cross-side) network effects occur when:", choices: ["More users of the same type make the product more valuable to each other", "More users on one side attract more users on another side", "Data improves the product", "Switching costs rise"], answerIndex: 1, explanation: "Marketplaces have cross-side network effects: more buyers attract more sellers and vice versa." },
    { id: "q12", prompt: "The Business Model Canvas's nine building blocks include all EXCEPT:", choices: ["Customer segments", "Key partners", "Cost structure", "Vision statement"], answerIndex: 3, explanation: "The canvas focuses on operational and economic building blocks; vision sits above the canvas." },
    { id: "q13", prompt: "A common failure of two-sided marketplaces is:", choices: ["Too much liquidity", "The 'cold start' problem — neither side shows up without the other", "Regulatory approval", "Excess supply"], answerIndex: 1, explanation: "Solving cold start usually requires seeding one side or focusing on a narrow initial slice." },
    { id: "q14", prompt: "A firm's business model is more defensible when:", choices: ["It relies solely on a single low price", "It combines strong unit economics with network effects, switching costs, or scale advantages", "It copies a competitor exactly", "It ignores costs"], answerIndex: 1, explanation: "Layered advantages make imitation harder." },
    { id: "q15", prompt: "Revenue model choice (subscription vs one-time vs marketplace take-rate) primarily affects:", choices: ["Nothing important", "Retention economics, cash flow patterns, and required CAC discipline", "Only accounting", "Only tax"], answerIndex: 1, explanation: "The model shapes CLV, working capital, and the entire growth engine." },
    { id: "q16", prompt: "Christensen's Innovator's Dilemma argues that great incumbents struggle with disruption because:", choices: ["They lack capital", "They listen too closely to best customers and best margins, which steers them away from low-end disruptors", "Their employees are less talented", "They don't believe in disruption"], answerIndex: 1, explanation: "Rational resource allocation to existing customers leads incumbents to ignore disruptors until too late." },
    { id: "q17", prompt: "A corporate innovation program is most likely to be 'theater' when:", choices: ["It runs hackathons", "It reports to the CEO with autonomous capital", "Promising ventures have no clear path to scale and no real authority to deploy capital", "It funds external startups"], answerIndex: 2, explanation: "Visible activity without authority, capital, or exit ramps signals innovation theater rather than real practice." },
    { id: "q18", prompt: "A useful structural response to the innovator's dilemma is:", choices: ["Ignore new entrants", "Create separate autonomous units with different metrics, resources, and freedom to cannibalize", "Cut R&D", "Merge with the disruptor immediately"], answerIndex: 1, explanation: "Ambidextrous organizations protect the core while allowing new models to grow with different rules." },
    { id: "q19", prompt: "Rita McGrath's 'transient advantage' thesis is that:", choices: ["Advantages are permanent once earned", "Competitive advantages are increasingly short-lived, requiring a portfolio of moves rather than one big bet", "Advantage is irrelevant", "Only cost advantages matter"], answerIndex: 1, explanation: "Firms need continuous reconfiguration, not a single defensible position forever." },
    { id: "q20", prompt: "A large incumbent evaluating a disruptive opportunity should measure success by:", choices: ["Same margins as core business", "Learning velocity and option value early on, with different KPIs from the mature business", "Immediate profit", "Legacy customer approval only"], answerIndex: 1, explanation: "New ventures need discovery-driven metrics, not core-business hurdle rates." },
  ],
  assignment: {
    id: "a1",
    title: "Startup opportunity memo",
    prompt: "Identify a real problem you observe in your life, work, or community. Write 500-800 words: (1) Who has the problem, how often, and how painfully? (2) What does the customer do today? Why is that unsatisfactory? (3) Sketch a business model using the Business Model Canvas categories. (4) Estimate unit economics with explicit assumptions (price, CAC, repeat behavior). (5) Identify the riskiest assumption and design the cheapest experiment to test it in the next 30 days. (6) State what evidence would convince you to (a) persevere, (b) pivot, (c) kill the idea.",
    rubric: "Real, urgent problem with evidence (2 pts). Coherent business model (2 pts). Defensible unit economics (2 pts). Sharp riskiest-assumption identification (2 pts). Concrete, cheap experiment with decision rules (2 pts).",
  },
};
