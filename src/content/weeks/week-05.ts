import type { Week } from "../types";

export const week05: Week = {
  week: 5,
  title: "Marketing Strategy",
  tagline: "Segment, target, position — then build the four Ps around the customer.",
  topics: ["STP", "4 Ps", "Customer lifetime value", "Brand positioning"],
  lessons: [
    {
      id: "l1",
      title: "Segmentation, targeting, positioning (STP)",
      summary: "Marketing strategy starts with whom you serve and what you stand for in their mind.",
      body: `# STP\n\nThe central insight of modern marketing — usually credited to Wendell Smith (1956) and made canonical by Philip Kotler — is that markets are not monolithic. Buyers differ in needs, willingness to pay, channels, and decision criteria. The firm that *chooses* whom to serve and *what* to stand for in their mind will beat the firm that tries to be everything to everyone.\n\n## Segmentation\n\nCut the market into groups whose members are similar to each other and different from other groups. Common cuts:\n\n- **Demographic** — age, income, household composition, occupation. Easy data, often weak predictor of behavior.\n- **Geographic** — region, density, climate. Critical for retail and some services.\n- **Psychographic** — values, lifestyle, attitudes (VALS framework, sustainability-driven, status-driven).\n- **Behavioral** — usage rate, occasion, benefits sought, loyalty stage. Often the strongest predictor.\n- **Firmographic (B2B)** — industry, size, tech stack, buying process.\n- **Jobs-to-be-done** (Christensen) — what *progress* is the customer trying to make? Often the most actionable framing.\n\nA good segment is **measurable, accessible, substantial, differentiable, actionable**. "People who like nice things" fails most of these tests.\n\n## Targeting\n\nNot every segment is equally attractive. Score segments on:\n\n- Size and growth.\n- Competitive intensity.\n- Fit with the firm's capabilities and brand.\n- Profit potential (willingness to pay × cost to serve).\n- Strategic option value (entry point to adjacent segments).\n\nThe most common targeting mistake is *picking too many* segments and serving none well. The next most common is picking the largest segment by default, ignoring that it's also where every competitor lives.\n\n## Positioning\n\nThe place a brand occupies in the customer's mind relative to alternatives. A useful template (Geoffrey Moore):\n\n> *For (target customer) who (statement of need), our (product) is a (category) that (key benefit). Unlike (primary competitive alternative), our product (key differentiator).*\n\nPositioning is *chosen* — you decide what to *not* be. Volvo chose "safety" and let others own "speed" or "luxury." Apple chose "design" and let others own "specs." Trying to occupy more than one position dilutes both.\n\n## Worked example\n\nA new electric pickup truck startup could segment by income (luxury vs mass), by use case (worksite vs lifestyle), or by environmental attitude. Targeting the "affluent eco-conscious adventurer" segment (psychographic + behavioral) gives them a defensible position — premium pricing, dealer-free distribution, design-forward — that the legacy F-150 can't easily attack without alienating its core fleet buyers.`,
      videos: [
        { title: "Marketing Foundations", source: "LinkedIn Learning", url: "https://www.linkedin.com/learning/search?keywords=marketing%20foundations" }, 
        { title: "Marketing Strategy — STP", source: "YouTube — Two Teachers", url: "https://www.youtube.com/watch?v=ZBR1HJxn-X8" },
        { title: "Jobs to Be Done — Clayton Christensen", source: "YouTube — HBS", url: "https://www.youtube.com/watch?v=Stc0beAxavY" },
      ],
      readings: [
        { title: "Marketing Myopia", source: "Harvard Business Review", url: "https://hbr.org/2004/07/marketing-myopia" },
        { title: "Know Your Customers' Jobs to Be Done", source: "Harvard Business Review", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" },
      ],
    },
    {
      id: "l2",
      title: "The 4 Ps",
      summary: "Product, price, place, promotion — operationalize positioning into a coherent marketing mix.",
      body: `# The 4 Ps\n\nE. Jerome McCarthy's 1960 framing of the marketing mix has survived sixty years of fashion because it forces a coherent answer to four questions every business has to settle.\n\n## Product\n\nWhat are you offering — features, design, quality level, packaging, services, warranty, brand? The *whole bundle*, not just the physical good. Theodore Levitt: customers don't want a quarter-inch drill, they want a quarter-inch hole. The product is the bundle that delivers the hole.\n\nDecisions: depth (premium, mid, value tiers) and breadth (number of product lines). Apple sells few products; Procter & Gamble sells thousands; both work because the choice fits the strategy.\n\n## Price\n\nThe most underused lever. McKinsey's classic finding: a 1% price improvement, with volume held constant, lifts operating profit ~11% for the average S&P 500 company — more than a 1% volume gain or a 1% variable-cost cut.\n\nApproaches:\n- **Cost-plus** — variable cost × markup. Simple, ignores customer value, common in commodity contexts.\n- **Value-based** — price to the customer's willingness to pay (their next-best alternative + your differentiated value). Hardest to estimate, most profitable when done well.\n- **Competition-based** — price to a benchmark of comparable products.\n- **Penetration vs skimming** — low introductory price to grab share, or high price to extract from early adopters and reduce over time.\n- **Dynamic / personalized pricing** — different prices to different buyers (airline yield management, Uber surge, Amazon individualized pricing).\n\n## Place (distribution)\n\nWhere and how customers buy — direct vs indirect, online vs physical, exclusive vs intensive distribution. The choice shapes cost structure, customer experience, brand control. Luxury brands choose exclusive distribution; consumer staples choose intensive distribution; SaaS chooses inside sales for SMB and field sales for enterprise.\n\nChannel conflict is real: launching a direct-to-consumer channel can alienate the resellers who built your business. Nike's DTC push (and 2020s partial reversal) is a case study.\n\n## Promotion\n\nHow customers find out. Advertising, PR, sales, sales promotions, direct marketing, content, social, influencer, search, lifecycle email. The mix depends on the buying journey — awareness, consideration, decision, retention — and on the channel economics. B2B SaaS pours money into search and content; CPG into TV and shelf placement; luxury into PR and experience.\n\n## Coherence is the point\n\nThe four Ps must reinforce each other. Premium product + low price = confused brand. Mass-market product + boutique distribution = under-scaled. The framework's value is *not* checking each box; it's noticing when a planned change in one P breaks another.`,
      videos: [
        { title: "Marketing Foundations", source: "LinkedIn Learning", url: "https://www.linkedin.com/learning/search?keywords=marketing%20foundations" }, 
        { title: "The Marketing Mix Explained", source: "YouTube — 2-minute Classroom", url: "https://www.youtube.com/watch?v=H3KTKVAdHTw" },
        { title: "Pricing Strategy — McKinsey", source: "YouTube — McKinsey", url: "https://www.youtube.com/watch?v=BvE_2_NUWMA" },
      ],
      readings: [
        { title: "The Power of Pricing", source: "Harvard Business Review", url: "https://hbr.org/2003/09/the-power-of-pricing" },
        { title: "Pricing to Create Shared Value", source: "Harvard Business Review", url: "https://hbr.org/2018/03/pricing-to-create-shared-value" },
      ],
    },
    {
      id: "l3",
      title: "Customer lifetime value (CLV)",
      summary: "The single number that ties marketing spend to long-term economics.",
      body: `# Customer lifetime value\n\nThe present value of profits a customer generates over their relationship with the firm. CLV reframes marketing from a cost center into an investment with a return — and gives a hard ceiling on what you can spend to acquire a customer.\n\n## A working formula\n\nFor a subscription business with monthly churn:\n\n\`CLV ≈ ARPU × Gross margin / Monthly churn rate\`\n\nFor longer-horizon, multi-period thinking:\n\n\`CLV = Σ_t (Margin_t × Retention_t) / (1 + r)^t\`\n\n## Worked example\n\nSaaS firm: $30 ARPU, 75% gross margin, 4% monthly churn, 10% annual discount rate.\n\n- Gross profit per customer-month = $22.50.\n- Average customer life = 1 / 0.04 = 25 months.\n- CLV ≈ $22.50 × 25 ≈ **$562** (close enough for planning; the exact discounted figure is slightly lower).\n\nIf your blended customer acquisition cost (CAC) is $180, your LTV/CAC = 3.1×, which is healthy. Below ~3× is concerning; above ~5× usually means you're under-investing in growth.\n\n## Why CLV transforms decisions\n\n- **How much to spend on acquisition?** CLV / 3 is a defensible rule of thumb in steady-state.\n- **Which segments to target?** Pursue high-CLV segments even if CAC is higher; avoid low-CLV segments even if CAC is low.\n- **How much to spend on retention?** Reducing churn from 4% to 3% in the example raises average life to 33 months and CLV to ~$750 — a 33% lift from one point of churn.\n- **Should we discount?** Promotional discounting that attracts low-CLV customers and accelerates churn destroys CLV even when it grows top-line.\n\n## CLV and CAC payback\n\n**CAC payback period** = CAC / (ARPU × Gross margin). How many months before a customer's gross profit covers the cost to acquire them. <12 months is excellent in SaaS; >24 months puts pressure on cash even when LTV/CAC looks great.\n\n## Where CLV models go wrong\n\n- **Linear churn assumption.** Real churn cohorts have early-life spikes and long-tail loyalists. Cohort-level CLV is more accurate than blended.\n- **Static margin assumption.** Pricing, mix, and cost-to-serve all evolve with the relationship.\n- **Ignored network effects.** Some customers (creators on a platform, anchor tenants in a mall) carry value beyond their direct revenue.\n- **Ignored cannibalization.** A new customer acquired by a discount may have replaced a full-price purchase.\n\nUse CLV as a *steering wheel*, not a verdict. The number is less important than the model behind it.`,
      videos: [
        { title: "Marketing Foundations", source: "LinkedIn Learning", url: "https://www.linkedin.com/learning/search?keywords=marketing%20foundations" }, 
        { title: "Customer Lifetime Value Explained", source: "YouTube — David Skok / Matrix", url: "https://www.youtube.com/watch?v=hpVT3OkUWfo" },
        { title: "Unit Economics — Brian Balfour", source: "YouTube — Reforge", url: "https://www.youtube.com/watch?v=8YHTk6F0pgU" },
      ],
      readings: [
        { title: "E-Loyalty: Your Secret Weapon on the Web", source: "Harvard Business Review", url: "https://hbr.org/2000/07/e-loyalty-your-secret-weapon-on-the-web" },
        { title: "The Right Way to Use Customer Lifetime Value", source: "Harvard Business Review", url: "https://hbr.org/2019/01/the-mistake-companies-make-when-they-use-data-to-plan-discounts" },
      ],
    },
  ],
  quiz: [
    { id: "q1", prompt: "A positioning statement should specify all of the following EXCEPT:", choices: ["Target customer", "Key benefit", "Reason to believe", "Manufacturing process"], answerIndex: 3, explanation: "Positioning is about perceived value, not internal process." },
    { id: "q2", prompt: "SaaS company with $30 ARPU, 75% margin, 4% monthly churn. CLV ≈", choices: ["$200", "$375", "$563", "$900"], answerIndex: 2, explanation: "22.5 × 25 = 562.5." },
    { id: "q3", prompt: "Skimming pricing is most appropriate when:", choices: ["Market is price sensitive", "Product is new and differentiated", "Competitors are entrenched", "Channel is mass-market"], answerIndex: 1, explanation: "Skimming captures willingness-to-pay from early adopters before competitors arrive." },
  ],
  assignment: {
    id: "a1",
    title: "Positioning + GTM",
    prompt: "Pick a product (real or invented). Write a one-paragraph positioning statement using the Moore template. Then sketch the four Ps and compute a back-of-envelope CLV with stated assumptions. Identify the single biggest risk to the plan.",
    rubric: "Sharp positioning with clear target and differentiator (3 pts). Coherent 4 Ps (3 pts). Defensible CLV math (2 pts). Honest risk identified (2 pts).",
  },
};