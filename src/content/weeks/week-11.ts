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

Entrepreneurship is the discovery and exploitation of opportunities to create value. Opportunities don't fall from the sky — they emerge from shifts in technology, regulation, demographics, behavior, or competitor weakness. In business terms, value isn't just money; it's the benefit a customer receives that makes their life better, easier, or more profitable. If you ignore these shifts, you risk building a product for a world that no longer exists.

## Four foundational opportunity types (Drucker)

In *Innovation and Entrepreneurship*, Peter Drucker named seven sources of innovation; the four most fertile:

1. **The unexpected** — surprises in your business or the market. A product is purchased by an unexpected customer (Pampers in Japan for "easier laundry"). An expected hit flops (Microsoft Bob). Pay attention to surprises; they reveal mismatches between mental models and reality. A mental model is simply the set of assumptions you hold about how your customers behave. When a surprise happens, it suggests your assumptions are wrong and a new market is opening up.
2. **Incongruities** — a gap between what is and what "ought to be." Banking customers hated branch hours; mobile banking emerged. Photo developing took a week; one-hour photo emerged; then digital eliminated it. This is about friction—the little annoyances that people have come to accept as "just the way it is" until someone offers a better way.
3. **Process needs** — a step in an existing workflow is painful, slow, or expensive. The opportunity is to fix that step. Think of a restaurant that struggles to take phone orders during a rush; an online ordering app fixes that specific "pain point" in their workflow.
4. **Industry / market structure changes** — deregulation, technology, demographics shift power. The shift from offline to online retail; the rise of cloud; aging populations. When the rules of the game change (like a new law or a new technology like AI), the old giants often can't move fast enough, creating a vacuum for new businesses to fill.

Three more — demographics, perception changes, new knowledge — are slower-moving but profoundly important.

## Problem-first vs solution-first

Many founders fall in love with a solution (a technology, a product) and shop it for a problem. This succeeds occasionally (rarely) and produces most startup failure. This is often called "a hammer looking for a nail." Just because you've built a high-tech hammer doesn't mean anyone actually has a nail that needs driving.

The discipline that works: start with a real, urgent, common problem; deeply understand who has it, why existing solutions fail them, and what they'd pay to make it go away; *then* design. If a manager ignores this, they end up spending thousands of dollars on marketing for a product that people simply do not want.

Christensen's **Jobs to Be Done** framing (Week 5) is the most rigorous version of this. Before building anything, articulate the customer's job — the functional, emotional, and social progress they're trying to make — and the situation in which the job arises. For example, someone doesn't buy a 1/4 inch drill bit because they want a drill bit; they buy it because they need a 1/4 inch hole in their wall to hang a picture of their family (the "job").

## Market size and the "TAM/SAM/SOM" trap

Investors will ask about market size. The standard answer:
- **TAM** (Total Addressable Market) — every dollar that could conceivably be spent on solving this problem globally. Imagine this as the entire world's appetite for coffee.
- **SAM** (Serviceable Addressable Market) — the portion you could realistically reach with your model. This would be the coffee drinkers in the specific country or city where you have distribution.
- **SOM** (Serviceable Obtainable Market) — what you could realistically capture in the next few years. This is your specific slice of the pie—the people who will actually walk into your shop versus the competitor across the street.

The trap: top-down TAM estimates ("the global ride-hailing market is $500B, so we need just 1%...") are almost always fantasies. Bottom-up estimates ("we can win 5 cities in 3 years × 1M rides each × $5 take") are more credible and force operational thinking. Operational thinking means you are planning based on what your staff, budget, and equipment can actually produce, rather than wishing upon a star.

What investors are really asking: *if everything goes right, is this big enough to matter?* They are not asking for spreadsheet precision; they want evidence the opportunity is worth the risk.

## The "vitamins vs painkillers" test

Bryce Roberts's classic distinction: customers buy painkillers (urgent relief from a real pain) reliably. Vitamins (nice-to-haves, vague improvements) require huge sales effort, churn fast, and resist pricing power. Pricing power is the ability to raise your prices without losing all your customers; if you provide a painkiller, people will pay almost anything to make the pain stop. Most enterprise SaaS (Software as a Service) that fails is a vitamin in painkiller's clothing.

The honest test: would the customer call *you* if you didn't email them this week? Would they tell other people about this without prompting? Would they pay 2x the current price rather than lose it? If the answers are mostly no, you have a vitamin. Think of a tax software that prevents you from going to jail (painkiller) versus a software that makes your email icons look slightly prettier (vitamin).

## Founder-market fit

Investors look for fit between the founders and the problem. The strongest signal: the founder has *lived* the problem for years, has unfair access to early customers, and has unusual insight that competitors lack ("the unfair advantage"). An unfair advantage isn't illegal; it's a unique edge like having a decade of experience in a niche industry or owning a patent that others can't copy.

Solo founders are rarer and harder than co-founder teams in early stage; the data suggests teams of 2-3 with complementary skills (technical + go-to-market) outperform both solo founders and large founding teams. "Go-to-market" refers to the skills needed to actually sell and distribute the product, such as marketing and sales expertise.

## Running a real customer discovery interview

Talking to customers sounds easy; doing it well is a skill most first-time founders lack. The classic mistake is to describe your idea and ask "would you use this?" People are polite; they will say yes to be nice, and that "yes" is worthless data. The discipline, borrowed from Steve Blank and Rob Fitzpatrick's *The Mom Test*, is to ask about the customer's past behavior and current pain, never about your hypothetical future product.

Good questions sound like: "Walk me through the last time you tried to solve this problem." "What did you do? What tools did you use? How much did that cost you in time or money?" "What have you already tried that didn't work?" "Who else has this problem as badly as you do?" Bad questions sound like: "Would you pay $20/month for an app that does X?" — a question about an imaginary future that costs the respondent nothing to answer positively.

A concrete example: a founder exploring a scheduling tool for hair salons might ask twenty salon owners, "How do you currently handle no-show appointments?" If eighteen out of twenty describe manually calling clients the day before and still losing 15% of their bookings to no-shows, that is validated evidence of an urgent, expensive, recurring problem — a completed transaction in the customer's own words, not a hypothetical preference. If instead most owners shrug and say no-shows are "annoying but rare," the problem isn't painful enough to build a company around, however clever the software.

The rule of thumb: run at least 15-20 of these interviews with people who actually match your target segment before writing a line of code. Look for patterns, not individual sob stories — one salon owner with an extreme story is an anecdote; eighteen out of twenty independently describing the identical workaround is a market signal.

## Common opportunity-sizing mistakes and how to catch them

Founders and analysts fall into three predictable traps when sizing a market. First, the "of course everyone needs this" trap — assuming near-100% adoption in a market because the founder personally can't imagine living without the product. Real adoption curves for even excellent products rarely exceed low double-digit percentages of a addressable population within the first several years. Second, the "top-down only" trap discussed above — quoting a huge global statistic without ever building the number up from a channel, a sales rep's daily call capacity, or a marketing budget's expected conversion rate. Third, ignoring the *cost to acquire each unit of that market* — a $50 billion market is meaningless if it costs $500 to acquire a customer who will only ever spend $50.

A useful gut-check: for any market-size claim in a deck or memo, ask "how many actual paying customers, at what actual price, in what actual time period, gets us to this number — and is that customer count plausible given our sales and marketing capacity?" If nobody can answer that question with a specific channel and a specific number of reps, campaigns, or partnerships, the market-size slide is decoration, not analysis.

## A worked example: sizing a meal-kit-for-students opportunity

Suppose a founder wants to sell affordable, pre-portioned meal kits to university students who cook in shared dorm kitchens. The top-down pitch: "the global food delivery market is $150 billion, so even 0.1% is $150 million." That number is fantasy — it says nothing about whether a single student will actually buy this product.

The bottom-up version: there are 40 mid-size universities within a feasible delivery radius of the founder's kitchen facility. Each university has roughly 3,000 students living in dorms with shared kitchens. If the founder can realistically reach and convert 8% of those students in year one (a number benchmarked against comparable subscription services' typical campus penetration), that's 240 students per campus. At $60/month for a 12-kit subscription over an 8-month academic year, one campus generates 240 × $60 × 8 = $115,200 in a year. Across even 5 campuses reachable with one delivery van in year one, that's roughly $576,000 — a real, defensible SOM the founder can build a launch plan and staffing model around, instead of an abstract global fraction.

## Applying this on Monday morning

A manager evaluating any new opportunity — whether launching an external startup or pitching an internal project — should walk through four steps before writing a business plan: (1) name the specific, painful, recurring problem in one sentence, using the customer's own words if possible; (2) interview at least 15 real prospective customers about their *past* behavior, not their hypothetical future preference; (3) build a bottom-up estimate of obtainable revenue from a specific, reachable channel rather than a percentage of a global market; (4) apply the painkiller test — would this customer call you if you disappeared for a week? If the answers to all four hold up under scrutiny from a skeptical colleague, the opportunity is worth further investment; if any step collapses under questioning, that's cheaper to learn now than after building the product.`,
      takeaways: [
        "Opportunities emerge from specific shifts (technology, regulation, incongruities, process pain) — scanning for these systematically beats waiting for inspiration.",
        "Validate the problem before designing the solution: interview customers about their past behavior, never ask them to predict their own future preferences.",
        "Bottom-up market sizing built from a real, reachable channel is more credible and more useful for planning than any top-down percentage-of-TAM claim.",
        "A 'painkiller' — an urgent, costly problem — earns faster adoption, pricing power, and word-of-mouth than a 'vitamin' that merely offers a vague improvement.",
        "Founder-market fit and complementary two-to-three-person teams meaningfully outperform solo founders and oversized founding teams at the earliest stage.",
      ],
      videos: [
        { title: "Peter Thiel \u2014 Competition is for Losers", source: "YouTube \u2014 Stanford eCorner / How to Start a Startup", url: "https://www.youtube.com/watch?v=3Fx5Q8xGU8k", fallbackSearchQuery: "Peter Thiel competition losers" },
        { title: "Y Combinator \u2014 How to Get Startup Ideas (Paul Graham)", source: "YouTube \u2014 Y Combinator", url: "https://www.youtube.com/watch?v=Th8JoIan4dg", fallbackSearchQuery: "Paul Graham startup ideas" },
      ],
      exercise: { id: "ex1", scenario: "You are a former logistics manager who noticed that small independent bakeries struggle to coordinate flour deliveries, often running out of stock because big suppliers prioritize large supermarket chains. You want to launch a digital platform that bundles orders from 50 local bakeries to give them the same buying power as a giant corporation. You estimate there are 10,000 such bakeries in your country, but your initial software can only handle 100 users in your home city.", task: "Perform a 'bottom-up' market analysis by identifying the SAM and SOM for this venture, and explain whether this business is a 'vitamin' or a 'painkiller' based on the specific problem being solved." }
    },
    {
      id: "l2",
      title: "Lean startup and validated learning",
      summary: "Treat the startup as a series of experiments. The goal is learning fast, not executing a plan.",
      body: `# Lean Startup

Eric Ries's *The Lean Startup* (2011) synthesized customer development (Steve Blank), agile development, and lean manufacturing into a single framework: a startup is a temporary organization searching for a repeatable, scalable business model. The fundamental activity is *validated learning* — running experiments to test assumptions about what customers will value and pay for. Validated learning is not a guess; it's factual proof gathered through real-world data. Think of it like a scientist in a lab: you don't declare a discovery until you've run the experiment and seen the results. 

## The build-measure-learn loop

1. **Build** the smallest thing that can test the riskiest assumption
2. **Measure** what customers actually do (not what they say)
3. **Learn** whether to persevere, pivot, or kill

The faster this loop runs, the more learning per dollar. The mistake most new founders make: spending a year building "the product" before showing it to real customers, then discovering the assumptions were wrong. Imagine spending $50,000 and six months building a complex app for dog walkers, only to find out after launch that dog walkers prefer simple text messages. Lean Startup helps you find that out in one week for $100 instead.

## MVP — Minimum Viable Product

The smallest experiment that produces validated learning about the next decision. Not "version 1.0 with fewer features" — often *no product at all*. It is the most basic version of your idea that allows you to collect the maximum amount of information about customers with the least effort. Famous early MVPs:

- **Dropbox**: a 3-minute video showing the product working. Email signups jumped from 5,000 to 75,000 overnight, validating demand without writing storage code.
- **Zappos**: founder Nick Swinmurn photographed shoes at local stores, posted them online, bought them when ordered. No inventory; the experiment validated that people would buy shoes online.
- **Airbnb**: original three founders rented airbeds in their own apartment. Three guests, $1,000 in revenue, and a validation that strangers would pay to sleep in strangers' homes. 

If the Zappos founder had spent years building a warehouse first (the traditional way), he might have gone bankrupt before ever knowing if people trusted buying shoes without trying them on first.

The MVP is *not* the final product. It's the simplest experiment that can resolve the most uncertain assumption.

## The riskiest assumption test

Most early-stage assumptions cluster around:
- Does the problem exist for enough people?
- Is our solution genuinely better than the alternatives (including doing nothing)?
- Will people pay enough to make this a business?
- Can we acquire customers profitably?
- Can we deliver at the unit economics we need? "Unit economics" refers to the direct revenues and costs of just one single sale. For example, if it costs you $10 to make a pizza but you sell it for $8, your unit economics are broken, and scaling up will only lose you money faster.

The discipline: list every belief required for the business to work, rank them by uncertainty and impact, and design experiments that resolve the highest-priority ones cheaply.

## Persevere, pivot, or kill

After each cycle:
- **Persevere** — the assumption was validated; keep going
- **Pivot** — change one core element of the business model (problem, customer, solution, model, channel) while keeping others. A pivot is like having one foot planted firmly on the ground while the other moves to find a better direction. You don't abandon your vision; you change your strategy.
- **Kill** — the opportunity isn't there; redirect resources

Famous pivots: Slack started as a game company (Tiny Speck) and pivoted when the internal chat tool became more valuable than the game. Twitter began as a podcasting platform (Odeo). Instagram pivoted from a check-in app called Burbn to focus on the most-used feature (photos).

Pivoting is not failure; it's adaptation. The discipline is to pivot on evidence, not on whim.

## Where Lean Startup ends

Lean Startup excels at finding *product-market fit* in fast-feedback consumer and SMB (Small and Midsize Business) contexts. It struggles when:
- Sales cycles are long (deep enterprise, regulated industries) — for example, selling software to a hospital might take two years of paperwork before you can even "test" it.
- Up-front investment is irreducibly large (biotech, hard tech, semiconductors) — you can't build a "minimum viable" nuclear reactor in your garage for $500.
- The product's value depends on a critical mass not present in the MVP (marketplaces, social networks)

For these, the discipline transfers but the *methods* adapt — pilot programs, design partnerships, dosing studies, signed letters of intent. A "letter of intent" is a non-binding document where a potential client says, "If you build this specific thing, I intend to buy it."

## After product-market fit

Once you have signal — customers using, retaining, referring; revenue growing without you pushing — the game changes. Product-market fit is that magical moment where the market is finally pulling the product out of the startup, rather than the startup trying to push it onto the market. The new question is whether *the business model* scales: can you acquire customers at acceptable cost, deliver at acceptable margins, and build the operational capacity for 10x? Many startups achieve product-market fit and then die in the scaling phase because they assumed scale would be easy. Growing too fast without the right processes is like putting a Ferrari engine in a bicycle—eventually, the frame will snap under the pressure.

## A worked numerical example of the build-measure-learn loop

Imagine a founder believes small accounting firms will pay for software that automatically flags suspicious expense entries before an audit. Cycle one: **Build** a single landing page describing the product with a "Join the waitlist" button — total cost, $200 and two days. **Measure**: 500 accountants see the page via a targeted LinkedIn ad; 40 join the waitlist, an 8% conversion rate. **Learn**: interest exists, but the team still doesn't know if firms will actually pay, so the riskiest unresolved assumption is willingness to pay, not general interest.

Cycle two: **Build** a "concierge MVP" — the founder personally reviews five real client files by hand for three willing firms, delivering a spreadsheet of flagged entries, and charges $300 per engagement. **Measure**: three of three firms pay, and two ask to make it a recurring monthly service. **Learn**: willingness to pay is validated for this specific service and price point; the next riskiest assumption becomes whether the manual process can be automated profitably at scale, because at $300 per file and eight hours of manual review, the founder is effectively working for less than minimum wage.

Cycle three: **Build** a simple rules engine that automates 70% of the manual flagging, cutting review time from eight hours to ninety minutes. **Measure**: cost per engagement drops from an effective $280 in labor to $35, while firms still pay the same $300. **Learn**: the unit economics now work, and it's time to hire a small sales team and formalize pricing tiers. Three cheap, fast cycles — total spend under $3,000 — replaced what a traditional twelve-month "build the full platform first" plan would have spent discovering the same facts for a fraction of the cost and a fraction of the time.

## Vanity metrics versus actionable metrics

A vanity metric moves in a direction that always looks good regardless of what decisions were made, which makes it useless for deciding what to do next. Total registered users is the classic example: it only ever goes up, even if 95% of those users never return, so a rising total tells a manager nothing about whether the last month's changes helped or hurt the business. Page views, app downloads, and social media followers behave the same way — they inflate a dashboard without informing a decision.

An actionable metric is tied to a specific, repeatable action and lets you compare a before-and-after. Cohort retention (what percentage of users from March are still active in June, compared to the percentage from February who were still active in May) tells you whether a specific change made in March actually improved the product, because you can isolate the effect of that one change on that one group. Weekly active users *as a percentage of total signups* — rather than the raw signup count — tells you whether the product is becoming more or less sticky over time. The test Eric Ries proposes: could you present this metric to your team, have them argue about what caused it to move, and have that argument change what you build next week? If yes, it's actionable; if the number just makes for a nice-looking chart in a board deck, it's vanity.

## Common mistakes when running lean startup experiments

The most frequent failure is designing an experiment that can't actually fail — asking friends and family for feedback (they'll be encouraging regardless), running a survey with leading questions, or launching a "test" with such small sample size that any result is statistical noise. A second common mistake is treating a single positive data point as proof; three friendly beta users loving a product tells you almost nothing about whether 3,000 strangers will pay for it. A third is confusing motion with progress — running many experiments that don't actually test the riskiest assumption, which produces a busy-looking team that isn't reducing the startup's real uncertainty. The fix for all three: before running any experiment, write down in one sentence exactly what result would prove the idea wrong, and make sure that result is genuinely possible to observe.

## Applying lean startup discipline inside an existing company

A manager inside a large organization can use the identical loop for internal projects, even without startup-style freedom. Before requesting a large budget for a new internal tool or process change, propose a two-week pilot with a single team, define in advance the specific metric that would indicate success (for example, a 20% reduction in the time to close a support ticket), and agree with stakeholders up front that a negative result means the project is killed or redesigned, not quietly continued regardless. This turns internal politics — where projects tend to survive on inertia and sunk cost rather than evidence — into a discipline where evidence, not seniority or enthusiasm, decides what continues.`,
      takeaways: [
        "Run the build-measure-learn loop as fast and cheaply as possible; three cheap experiments in weeks often reveal what a year of building would have discovered anyway.",
        "An MVP is often not a product at all — a video, a landing page, or a founder manually delivering the service — chosen to resolve the single riskiest assumption.",
        "Rank every belief the business depends on by uncertainty and impact, and design the next experiment to resolve the highest-priority one, not the easiest one.",
        "Pivot on evidence from a completed experiment, not on mood or boredom; the goal is a structured change to one element of the model, not abandoning the vision.",
        "Actionable metrics (cohort retention, percentage-based engagement) inform decisions because you can compare before and after; vanity metrics like total signups only ever rise.",
      ],
      videos: [
        { title: "Eric Ries \u2014 The Lean Startup", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=fEvKo90qBns", fallbackSearchQuery: "Eric Ries lean startup" },
        { title: "Steve Blank \u2014 Customer Development", source: "YouTube", videoId: "xr2zFXblSRM", fallbackSearchQuery: "Steve Blank customer development" },
      ],
      exercise: { id: "ex1", scenario: "You are launching 'Chef-on-Call,' a premium service that connects busy families with professional chefs who cook weekly meals in the customer's home. You believe the biggest risk is whether families will feel comfortable letting a stranger into their kitchen while they aren't home.", task: "Design a specific MVP experiment that tests this 'trust' assumption in under 48 hours with a budget of less than $100—explain exactly what you will 'Build,' how you will 'Measure' interest, and what result would qualify as 'Learning.'" }
    },
    {
      id: "l3",
      title: "Business model design",
      summary: "Great products inside bad business models lose. The model is the architecture of value capture.",
      body: `# Business models

A business model describes how the firm creates, delivers, and captures value. The product is one component; the model encompasses everything that makes that product an economically viable business. Think of the product as the engine, but the business model is the entire car, including the fuel system, the driver, and the GPS that tells you where the money is coming from.

## The Business Model Canvas

Osterwalder's nine-box canvas:

| Key Partners | Key Activities | Value Propositions | Customer Relationships | Customer Segments |
|---|---|---|---|---|
| | Key Resources | | Channels | |
| Cost Structure | | | | Revenue Streams |

The discipline: any change in one box should be checked for consistency with all others. Adding a new segment requires asking what channel reaches them, what relationship they expect, whether the value proposition needs to change for them, and how that affects costs and revenue. For example, if a high-end coffee shop (Value Proposition: Premium Experience) decides to start selling to office breakrooms (New Segment), they can't just use their existing storefront. They need new Channels (delivery trucks), new Key Activities (logistics), and their Cost Structure will shift from rent to fuel and vehicle maintenance.

## Revenue model patterns

- **Direct sale** — single transaction (cars, software licenses, consulting)
- **Subscription** — recurring access (Netflix, SaaS, gym memberships)
- **Marketplace / transaction fee** — take a percentage of transactions facilitated (Airbnb, eBay, Stripe)
- **Advertising** — content is free; advertisers pay for attention (Google, Meta, traditional media)
- **Freemium** — free tier with paid upgrade (Spotify, Dropbox, Slack). The goal here is to use the free tier as a marketing tool to get users into the ecosystem, then convert them to paying customers for power features.
- **Licensing / royalties** — IP rented out (pharma, semiconductors, franchises)
- **Razor and blades** — cheap durable, expensive consumable (printers, coffee pods, console gaming). You sell the initial hardware at a low margin—or even a loss—to lock the customer into buying high-margin refills for years.
- **Bundling** — sell goods together at a price the segment would pay (Microsoft Office, cable TV)
- **Outcome-based** — pay for results (performance marketing, some healthcare)

Most successful businesses combine 2-3 patterns. The most powerful innovations are often business model innovations on top of unchanged technology — Netflix's subscription replacing per-rental Blockbuster; Salesforce's SaaS replacing on-premise software. Innovation isn't always about inventing a new gadget; sometimes it's just changing how people pay for an old one.

## Network effects and platforms

A platform's value depends on the number and quality of participants. Three types of network effect:
- **Direct (same-side)** — more users make the product more valuable to other users (Facebook, WhatsApp). A phone is useless if you are the only person who owns one; it becomes essential when everyone you know has one.
- **Indirect (cross-side)** — more buyers attract more sellers and vice versa (Uber, Airbnb, App Store). If there are no drivers on Uber, riders won't open the app. If there are no riders, drivers won't log on. They need each other to create value.
- **Data network effects** — more users generate more data which improves the product (Google search, fraud detection). The more people search for "best pizza," the better Google gets at knowing which link people actually want to click.

Platforms with strong network effects can dominate winner-take-most markets. They also face the **cold-start problem**: the product is bad when small, so attracting the first cohort is brutal. Solutions: subsidize one side (e.g., paying drivers to stay on the road even when there are no riders), focus geographically (e.g., launching only in one city at a time), start in a niche where critical mass is small, or piggyback on an existing network.

Andrew Chen's *The Cold Start Problem* is the contemporary canon on this topic.

## The unit economics gate

Regardless of model, the same test applies eventually: do unit economics work? At the customer (or transaction, or order) level. Unit economics are the "micro-profit" of the business—before you pay for your big office or your CEO's salary, does a single sale actually make money?

\`Contribution per unit > 0\` (necessary, not sufficient). This means the selling price must be higher than the variable costs (materials, shipping, sales commissions) to make the item.
\`CLV / CAC > ~3\` (sustainable). **CLV** (Customer Lifetime Value) is the total profit you expect from a customer over time. **CAC** (Customer Acquisition Cost) is what you spent on marketing to get them. If you spend $100 to acquire a customer who only spends $50 before quitting, your business is a leaking bucket.
\`CAC payback < 18-24 months\` (cash-efficient). This is the time it takes to earn back the marketing money you spent to get that customer.

Startups that pass this test grow into healthy businesses. Startups that don't, even when funded, eventually die — sometimes spectacularly. Many of the 2020-22 venture failures were companies whose unit economics never worked but were masked by cheap capital and growth-at-all-costs. You can't "make it up on volume" if you lose money on every single sale.

## Defensibility

Day-one moats are rare. But the business model should have a credible path to one of:
- Network effects
- Scale economies (as you get bigger, your costs per unit drop because you can buy in bulk)
- Switching costs / lock-in (it is so painful or expensive to leave that customers stay—like changing your bank account)
- Brand and trust
- Proprietary data
- Regulatory licenses
- Cost advantage from process / location / IP

A great product without a path to defensibility gets copied and competed to zero margin. Defensibility doesn't come from the technology alone — it comes from the *system* of choices that compound over time. It is the "moat" that keeps competitors from swimming across and stealing your castle.`,
      videos: [
        { title: "Alex Osterwalder \u2014 Business Model Canvas Explained", source: "YouTube \u2014 Strategyzer", url: "https://www.youtube.com/watch?v=QoAOzMTLP5s", fallbackSearchQuery: "business model canvas" },
        { title: "Andrew Chen \u2014 The Cold Start Problem", source: "YouTube", videoId: "-ILjMq1T13g", fallbackSearchQuery: "Andrew Chen cold start network effects" },
      ],
      exercise: { id: "ex1", scenario: "You are launching a high-end mobile pet grooming service. You have high fixed costs for the specialized van and equipment, and high variable costs for the groomer's hourly wage and organic shampoos. You are debating between a 'Direct Sale' model (one-off appointments) or a 'Subscription' model (monthly grooming at a discount).", task: "Perform a 'sanity check' on the Subscription model: identify which three boxes of the Business Model Canvas would change most significantly compared to the Direct Sale model, and explain how these changes impact your CAC (Customer Acquisition Cost) strategy." }
    },
    {
      id: "l4",
      title: "Innovation in established companies",
      summary: "Big companies have everything startups lack — except the ability to act like startups. Closing that gap is the discipline.",
      body: `# Corporate innovation

Established companies have capital, customers, distribution, talent, and brand. They also have processes, politics, and metrics optimized for the existing business — which actively block new businesses from emerging. The result: many breakthrough innovations come from startups, even though the incumbents could afford to fund 100 of them. Think of this like a giant ocean liner: it is powerful and stable, but it is incredibly difficult to turn quickly when an iceberg—or a faster, smaller boat—appears on the horizon.

## The Innovator's Dilemma

Clayton Christensen's foundational insight (1997): the *very practices* that make great companies great — listening to best customers, investing in highest-margin segments, optimizing existing processes — make them vulnerable to disruption from below. Disruptors enter at the low end with inferior products that don't matter to current customers, then improve until they take the mainstream market. 

In business terms, "margins" represent the profit left over after costs are paid. Large companies naturally chase high-margin customers because they are the most profitable. However, by ignoring "low-margin" (less profitable) customers, they leave a door wide open for startups to enter the market under the radar.

Examples: mini-mills vs integrated steel, PCs vs minicomputers, smartphones vs PCs, streaming vs cable.

The dilemma: rational allocation of resources by talented managers serving great customers can lead inexorably to losing the company. The "rational" decision is to ignore the small, low-margin disruptor; that decision is also fatal. For example, Netflix was originally a small mail-order DVD service that Blockbuster ignored because the revenue seemed tiny compared to their massive retail stores. By the time Blockbuster realized streaming was the future, it was too late.

## The three horizons (McKinsey)

A useful model:
- **Horizon 1** — extend and defend the core business (most resources, predictable returns). This is your "bread and butter," like Coca-Cola selling classic Coke.
- **Horizon 2** — build emerging businesses (medium resources, medium uncertainty). These are products with proven demand that are still growing, like Coca-Cola expanding into high-end sparkling water.
- **Horizon 3** — create options on future businesses (small resources, high uncertainty, mostly fail). These are "moonshots," like researching biodegradable, plant-based packaging or new beverage delivery tech.

The error: starving H2 and H3 to feed H1. The pipeline dies; in 5-10 years there's nothing to replace the core. If a manager only focuses on this month's sales, they are effectively "eating their seed corn"—consuming the resources today that should have been planted for tomorrow's harvest.

## Organizational designs that work

Christensen and many others (Govindarajan, Trimble, O'Reilly, Tushman) converge on a few patterns:

1. **Ambidextrous organization** — separate units for explore vs exploit, with different metrics, processes, and culture, but shared executive sponsorship. It's like having one team that runs the existing grocery store and a completely separate team that builds a delivery app; they share the same owner but don't follow the same rules.
2. **Skunk works** — a small, autonomous team protected from corporate processes (Lockheed's original; Apple's iPhone team).
3. **Corporate venture capital** — strategic investment in startups for option value and learning.
4. **Acquihires and M&A** — buy capability rather than build it (Cisco's classic model). M&A stands for "Mergers and Acquisitions," which is essentially shopping for other companies to gain their tech or talent.
5. **Internal venture studios** — apply lean startup methods at scale inside the company.

Each has trade-offs. The pattern that fails: bolting innovation onto an existing business unit and asking it to deliver both quarterly results *and* breakthrough innovation. The metrics will kill the innovation every time. When a manager is judged on "quarterly results" (profits reported every three months), they will always choose a safe, small win today over a potential breakthrough in three years.

## Why most corporate innovation fails

- **Innovation theater** — visible programs (hackathons, accelerators, innovation labs) without real authority to deploy capital or change products. It looks good on LinkedIn, but nothing actually changes.
- **Antibodies** — the existing business's processes (legal, finance, brand, IT) reject new ventures as exceptions. In a large company, a new idea often dies because it doesn't fit the standard 50-page legal template or the current IT infrastructure.
- **Wrong metrics** — measuring small ventures by mature-business metrics (revenue scale, gross margin) kills them in year 1. A new project shouldn't be judged by how much money it makes today, but by what the team is *learning*.
- **Risk aversion** — punishing failure crushes the willingness to take the experiments innovation requires.
- **No exit ramp** — successful internal ventures have no clear path to scale into the mother ship.

Govindarajan and Trimble's *The Other Side of Innovation* documents these dynamics extensively.

## A simple test for a corporate innovation program

Three questions:
1. Has any new venture from the program reached a meaningful share of revenue in the past 5 years?
2. Does the program leadership report to the CEO, with autonomous capital allocation?
3. Is there a clear, used path for promising ventures to scale into existing business units or be spun out?

If the answer to all three is no, the program is theater. If yes to all three, it's the real thing — and it's rare.

## The personal lesson

Even if you never start a company, learning startup methods is now a leadership skill. The pace of change in most industries means that every senior leader will be responsible for some H2 or H3 venture inside their organization. The discipline of validated learning, MVPs (Minimum Viable Products, or the simplest version of a product you can build to start learning), business model design, and protecting innovation from antibodies is general-purpose — not just startup folklore.`,
      videos: [
        { title: "Clayton Christensen \u2014 The Innovator's Dilemma", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=qDrMAzCHFUU", fallbackSearchQuery: "Christensen innovator's dilemma" },
        { title: "Rita McGrath \u2014 The End of Competitive Advantage", source: "YouTube", videoId: "wqmVsECbG8E", fallbackSearchQuery: "Rita McGrath transient advantage" },
      ],
      exercise: { id: "ex1", scenario: "You are a VP at a major hotel chain with 500 locations. A small internal team has developed a 'peer-to-peer' rental platform (similar to Airbnb) that allows homeowners to list guest rooms under your hotel's brand for a small fee. Your CFO wants to shut it down because the profit per booking is 80% lower than a standard hotel room stay.", task: "Write a 3-sentence rebuttal to the CFO explaining why this project should be evaluated as a 'Horizon 3' venture rather than a 'Horizon 1' core business, specifically addressing the danger of using standard profit metrics too early." }
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
