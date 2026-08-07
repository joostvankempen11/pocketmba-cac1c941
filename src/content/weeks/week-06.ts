import type { Week } from "../types";

export const week06: Week = {
  week: 6,
  title: "Competitive Strategy",
  tagline: "Industry structure, sustainable advantage, and the choice of where to play.",
  topics: ["Five Forces", "Generic strategies", "Resource-based view", "Moats"],
  lessons: [
    {
      id: "l1",
      title: "Porter's Five Forces",
      summary: "Industry structure sets the ceiling on long-run profitability. The firm fights for a share of what structure allows.",
      body: `# Porter's Five Forces

Michael Porter's 1979 framework remains the most widely taught tool in strategy because it cleanly explains why some industries (rating agencies, pharma, defense) are reliably profitable and others (airlines, retail, restaurants) are reliably not. The five forces *together* set the *industry's* attractiveness; individual firms fight within that ceiling. For a manager, understanding these forces is like checking the weather before a voyage; you need to know if you are sailing into a calm harbor where profits come easy or a hurricane where even the best-run ship might sink. If a manager ignores these forces, they might blame their team for low profits when, in reality, the industry structure makes it impossible for anyone to earn a decent return.

## 1. Rivalry among existing competitors

High when: many comparable competitors, slow industry growth, high fixed costs (pressure to fill capacity), low switching costs, undifferentiated products, high exit barriers. US airlines historically check every box; rivalry is brutal, average industry returns barely cover cost of capital. Think of high fixed costs like a restaurant that must pay rent and chef salaries regardless of whether customers show up; this creates a desperate urge to cut prices just to get people in the door, which eventually hurts everyone's profits. Low switching costs mean customers can walk across the street to a competitor for a 5-cent difference without any hassle. When products are "undifferentiated," they are seen as commodities—like salt or gasoline—where the customer doesn't care about the brand, only the price. This forces companies into a "race to the bottom."

## 2. Threat of new entrants

High when entry barriers are low — capital requirements, scale economies, brand strength, regulatory licenses, network effects, access to distribution. Software-as-a-service had low barriers a decade ago and rivers of capital flowed in; today AI infrastructure has high barriers (model training cost, chip access) and few entrants. If it is easy for a "guy in a garage" to start a business exactly like yours tomorrow, your profit margins will constantly be under pressure. High entry barriers act like a moat around a castle, protecting the gold inside from outsiders. Capital requirements refer to how much cash you need just to get started; for example, it costs billions to build a car factory (high barrier), but only a few hundred dollars to start a dog-walking service (low barrier).

## 3. Bargaining power of suppliers

High when suppliers are concentrated, switching costs are high, no substitutes, the input is critical. The premier example: the relationship between TSMC and almost every fabless chip company in the world. If you run a coffee shop and there is only one company in town that roasts beans, they can raise prices whenever they want because they know you have nowhere else to go. When suppliers have the upper hand, they "squeeze" your margins by capturing the value for themselves. "Concentrated" means there are only a few big players who provide what you need. If they collude or simply realize they are the only game in town, you have no leverage to negotiate a better deal.

## 4. Bargaining power of buyers

High when buyers are concentrated, switching costs are low, the product is undifferentiated, buyers are price-sensitive or vertically integrated. Walmart's relationship with most of its CPG suppliers is the textbook case. "Concentrated" buyers means a few large customers hold all the cards. If 80% of your sales go to one big retailer, that retailer effectively dictates your profit margin because losing their business would end your company. They are the ones in the driver's seat during price negotiations. Consider a freelance graphic designer who gets all their work from one local agency; if the agency demands a 30% discount, the designer often has to say "yes" just to survive.

## 5. Threat of substitutes

High when substitutes offer comparable value at lower price or higher quality. Long-distance phone calls were destroyed by email and then by free internet voice calls. Video rental stores were destroyed by streaming. Coal-fired electricity is being destroyed by gas and renewables. A substitute isn't just a direct competitor (like Pepsi vs. Coke); it's a different way of solving the same problem. If you sell expensive glass bottles, your threat isn't just other glass makers—it's the aluminum can and the plastic pouch. Substitutes are dangerous because they often come from outside your industry, meaning you might not see them coming until your customers are already leaving.

## How to use it

- **Industry selection** — entrepreneurs and investors should pick *good* industries, not just good companies. A mediocre operator in a great industry (Moody's, Visa) routinely outperforms a great operator in a bad one. It is much easier to succeed when the structural "gravity" of the industry is pulling you upward.
- **Competitive moves** — *change* the forces in your favor: lock in customers, integrate a critical supplier, raise entry barriers with brand or scale, kill substitutes by matching their value at lower cost. For example, a gym might use a 12-month contract to artificially raise "switching costs," making it harder for a rival to steal their members. By forcing a member to pay a cancellation fee, the gym makes the cost of Leaving (switching) higher than staying.
- **Investment thesis** — when an industry's forces are shifting (consolidation, deregulation, technology disruption), profit pools migrate. Spotting the migration early is the strategist's job. If three of the five major players in an industry merge, rivalry usually drops, and the remaining players often see profits rise. This is called "consolidation," where fewer players lead to a more stable, less aggressive market environment.

## A note on completeness

Porter's framework misses *complementors* (Brandenburger-Nalebuff added them as a sixth force in *Co-opetition*) and arguably understates *demand-side network effects* — both critical to modern platform businesses. Complementors are products that make yours more valuable (like apps making a smartphone more useful). Network effects occur when a service becomes more valuable as more people use it, like how eBay is only useful because there are millions of buyers and sellers already there. Use Five Forces as the structural skeleton, then layer on platform and ecosystem thinking to see the full picture of modern competition.`,
      videos: [
        { title: "Michael Porter's 5 Forces Model Explained", source: "YouTube", videoId: "XCWHSeDU-zk", fallbackSearchQuery: "Porter's Five Forces explained" },
        { title: "The Explainer \u2014 Porter's Five Forces", source: "YouTube \u2014 HBR", url: "https://www.youtube.com/watch?v=mYF2_FBCvXw", fallbackSearchQuery: "HBR explainer five forces" },
      ],
      readings: [
        { title: "The Five Competitive Forces That Shape Strategy", source: "Harvard Business Review", url: "https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy" },
        { title: "What Is Strategy?", source: "Harvard Business Review", url: "https://hbr.org/1996/11/what-is-strategy" },
      ],
      exercise: { id: "ex1", scenario: "You are a consultant for 'QuickClean,' a franchise of ultra-convenience dry cleaners located in a city with hundreds of independent laundry shops. A new government regulation is about to be passed that requires all dry cleaners to purchase a $100,000 specialized air-filtration system, and a major chemical supplier has just acquired its two biggest rivals, becoming the sole provider of cleaning fluid in the region.", task: "Analyze how these two specific changes (the regulation and the supplier merger) alter two of Porter's Five Forces for QuickClean, and explain whether the industry's overall 'attractiveness' for a current owner has increased or decreased based on those shifts." }
    },
    {
      id: "l2",
      title: "Generic strategies",
      summary: "Cost leadership, differentiation, focus — and the strategic decision to make trade-offs.",
      body: `# Generic strategies

Porter argued firms must pick one of three positions, and *commit*. In business, this is called a "Generic Strategy" because these paths apply to any industry, whether you are selling software or soda. A strategy is essentially your company's "identity" in the marketplace. Without choosing, a company risks being mediocre at everything and profitable at nothing.

## Cost leadership

Become the lowest-cost producer in the industry. Capture share at average prices, or earn average margins at low prices. This isn't just about being "cheap" for the customer; it's about having the lowest internal expenses. It matters because if you can produce a widget for $5 while everyone else spends $8, you hold all the power: you can start a price war to kill competition or bank massive profits to reinvest. Requires obsessive scale (buying in huge volumes to get discounts), process discipline, low overhead (minimal fancy offices or perks), automation, hard supplier negotiation. Examples: Walmart, Costco, Southwest historically, Vanguard.

Think of a local bakery that buys flour by the ton to get a 40% discount and uses a specialized machine to bag loaves faster than any human. Because their costs are so low, they can sell bread for $2 and still make a profit, while a smaller rival would lose money at that price.

Danger: *one* lower-cost competitor enters and the position collapses. If someone else finds a cheaper way to make the same product, your only advantage vanishes. The pursuit of cost leadership often kills the capacity to differentiate later because your culture becomes focused entirely on cutting, not creating. If a manager ignores the rising cost of labor and fails to automate, their low-cost advantage can evaporate overnight.

## Differentiation

Offer something the market perceives as unique — design, brand, performance, service, distribution. Customers pay a premium, meaning they are willing to pay more than the "utility" value (the basic functional worth) of the item because of the prestige or better experience. This matters because it protects you from price wars; a fan of the brand won't switch to a competitor just to save five dollars. Examples: Apple, Hermès, Disney, Mercedes.

Imagine a different bakery that uses organic, heirloom grains and offers a beautiful café experience with expert baristas. People pay $9 for a loaf here not because it fills them up better, but because it tastes unique and feels like a luxury.

Danger: customers stop perceiving the difference (commoditization), which happens when high-end features become standard everywhere, or the price gap to good-enough alternatives gets too wide. If the $2 bread tastes almost as good as the $9 bread, the differentiator is in trouble. This is why constant innovation is required to keep the "gap" between you and the average product wide.

## Focus

Pick a narrow segment — geographic, demographic, vertical — and serve it better than the generalists can. A "vertical" simply means a specific industry niche. Instead of trying to sell to everyone, you focus on being the absolute best for a tiny slice of the population. Within focus, you can still be cost-focused (regional grocer) or differentiation-focused (veterinary EHR software—Electronic Health Records built specifically for vets rather than general doctors).

Suppose you open a cleaning business. Instead of cleaning all houses (generalist), you only clean high-end dental offices. Because you understand the specific hygiene regulations and specialized equipment of dentists, you can charge more and become more efficient than a general maid service.

## The "stuck in the middle" warning

Porter's most famous claim: trying to be both low-cost *and* differentiated leaves you stuck in the middle — out-priced by the low-cost player, out-featured by the differentiator. You end up being a "Jack of all trades, master of none." Being stuck in the middle is dangerous because you have no clear reason for existing; you aren't the cheapest and you aren't the best. Empirically this is too strong (Toyota arguably achieved both through supreme manufacturing efficiency; IKEA built a focused-cost-differentiation hybrid), but the underlying caution stands: strategy is the choice of what *not* to do.

## Strategy as fit

In *What Is Strategy?* (1996) Porter sharpened this: strategy is a *coherent set of activities* that reinforce each other and create trade-offs competitors can't replicate. A trade-off is a "fork in the road" where choosing Path A makes Path B impossible. Southwest's point-to-point routing, single aircraft type (which simplifies maintenance and training), fast turnarounds, no meals, and direct booking are *each* small advantages — their interlock creates a position that hub-and-spoke airlines literally cannot copy without dismantling their own systems. If a legacy airline tried to copy Southwest's no-meal policy, they'd still have the high costs of their complex fleets (different planes, different spare parts), so they wouldn't actually achieve the low-cost benefit. Efficiency in one area is useless if it doesn't align with the rest of the business model.

## Operational effectiveness ≠ strategy

Doing the same activities better than rivals (operational effectiveness) is necessary but not sufficient — best practices diffuse. This means that if everyone starts using the same efficient software, no one has an advantage anymore; you've just raised the floor (the minimum standard) for everyone. *Strategy* is doing *different* activities, or the same ones in a different configuration. If you are just "running the race faster," you are being effective. If you are "choosing a different race entirely," you have a strategy. For example, if two car companies both adopt the same robot arm to weld doors faster, they are just keeping up. But if one car company decides to stop selling cars and starts an app-based car-sharing service, they have changed their strategy.`,
      videos: [
        { title: "Michael Porter's Generic Strategies Explained", source: "YouTube", videoId: "V14kuqYEsxE", fallbackSearchQuery: "Porter generic strategies" },
        { title: "What is Strategy", source: "YouTube", videoId: "06sk4JdN-Pw", fallbackSearchQuery: "what is strategy Michael Porter" },
      ],
      readings: [
        { title: "What Is Strategy?", source: "Harvard Business Review", url: "https://hbr.org/1996/11/what-is-strategy" },
        { title: "Reinventing Your Business Model", source: "Harvard Business Review", url: "https://hbr.org/2008/12/reinventing-your-business-model" },
      ],
      exercise: { id: "ex1", scenario: "You are the manager of 'Urban Grind,' a high-end independent coffee shop known for its rare beans and expert baristas. A massive international chain just opened across the street offering basic coffee at half your price, and a new 'automated' kiosk opened nearby that serves decent lattes with zero staff. Your investors are panicked and suggesting you should start offering 'budget' coffee combos to compete with the chain while also buying even more expensive roasting equipment to stay ahead of the kiosk.", task: "Identify which of the three generic strategies Urban Grind is currently using, then write a one-paragraph response to your investors explaining why attempting to compete on both price and premium quality simultaneously risks leaving the business 'stuck in the middle' and what specific trade-off you must protect." }
    },
    {
      id: "l3",
      title: "Moats",
      summary: "Sources of durable competitive advantage — the structural reasons one firm's profits don't get competed away.",
      body: `# Moats

Warren Buffett's term for durable competitive advantage. In medieval times, a moat was a wide, water-filled trench surrounding a castle to keep invaders out. In business, a moat is the structural reason a profitable business *stays* profitable when copycats arrive. Think of it as your "unfair advantage." Without a moat, high profits act like a beacon, attracting competitors who will eventually drive prices down to the point where no one makes a profit. The strategist's job is to identify, deepen, and defend the moat.

## Categories of moat

1. **Network effects.** The product becomes more valuable as more users join — both within a side (telephone, social networks) and across sides (marketplaces, payment networks, app stores). Often winner-takes-most. Imagine a social media app: if yours is the only one on it, it's useless. If a billion people are on it, it's indispensable. This creates a "virtuous cycle" where popularity breeds more popularity.
2. **Scale economies.** Average cost falls with volume — manufacturing (chip fabs, autos), distribution (Amazon logistics), R&D amortization (pharma). Hard to challenge without enormous capital and time. Amortization is just a fancy word for spreading the cost of a one-time expense, like a $500 million research project, over millions of units sold. A small competitor simply can't spread those costs thin enough to compete on price.
3. **Switching costs.** Users incur cost or risk to change suppliers — workflow integration (Salesforce, ERP), data lock-in (banking), retraining (productivity software), contractual penalty (telecom). Switching costs let the incumbent raise prices over time. Think of your own bank account: even if a new bank offers a slightly better interest rate, the sheer headache of moving your direct deposits, bill pays, and history keeps you from leaving.
4. **Intangible assets.** Brand (Coca-Cola, Hermès), patents (pharma, biotech), regulatory licenses (banking charters, taxi medallions historically). Hardest moat to *build*, easy to *erode* if mismanaged. A brand is a mental shortcut; people pay $5 for a Starbucks coffee not just for the beans, but for the guaranteed consistency and status it signals.
5. **Cost advantage.** Privileged access to a low-cost input, location, or process (Saudi oil reserves, hydropower aluminum smelters). If you own the only oil well that produces for $5 a barrel while everyone else pays $40, you win no matter what the market price is.
6. **Counter-positioning.** The incumbent *can't* adopt your model without cannibalizing their existing business (Vanguard's index funds vs active-management houses, Netflix streaming vs Blockbuster stores). A favorite of Hamilton Helmer's *7 Powers*. Cannibalizing means eating your own profits. Blockbuster couldn't go all-in on streaming because it would have killed their profitable brick-and-mortar stores, leaving them paralyzed as Netflix grew.
7. **Process power.** Hard-to-replicate operational know-how built over years (Toyota Production System, Pixar's creative workflow). This isn't just a manual; it's a culture of efficiency and quality that competitors can't simply copy-paste into their own offices.
8. **Cornered resource.** Exclusive access to a critical input — talent, IP, location, supply contract.

## What a moat is *not*

- **Operational excellence** — running your business well is great, but it is replicable. If your only edge is that your employees work hard, a competitor can just hire them away.
- **A great product** — replicable on a 12-24 month lag. Features are easy to copy; structures are not.
- **Being first** — first-mover advantage is overrated; first-*scaler* advantage is the real prize. MySpace was first; Facebook was the first to scale and lock in the network.
- **Customer love** without switching costs — admirable, fragile. If customers love you but it's easy to leave, they will vanish the moment a cheaper or "cooler" alternative arrives.

## Measuring moats quantitatively

Return on invested capital (ROIC) sustained above WACC for >10 years is the empirical signal of a moat. ROIC measures how much profit a company generates for every dollar put into the business. WACC (Weighted Average Cost of Capital) is effectively what it costs the company to get that money from investors or banks. If ROIC is higher than WACC, the company is creating value; if it's lower, they are actually destroying money. Mauboussin's research shows that companies with persistent ROIC > 20% are rare and the lever is almost always one of the categories above.

## How moats erode

- Technology shifts (Kodak, Blockbuster, Nokia). A moat is useless if the castle it protects is no longer relevant.
- Regulation (deregulation of telecoms, airlines). When the government changes the rules, a legal moat can vanish overnight.
- New business models that the incumbent can't adopt (Vanguard, Wikipedia, Craigslist's destruction of classifieds).
- Self-inflicted brand damage (Volkswagen emissions, Boeing 737 MAX). Trust is an intangible asset that takes decades to build and minutes to lose.

Managers' job: deepen the moat with every reinvested dollar. Investors' job: pay only for moats they can underwrite for a decade.`,
      videos: [
        { title: "Economic Moats Explained", source: "YouTube", videoId: "FkmWzdztCqE", startSeconds: 10, fallbackSearchQuery: "economic moat competitive advantage explained" },
        { title: "Five Rules for Successful Stock Investing", source: "YouTube", videoId: "NlrEW3kUu2Q", fallbackSearchQuery: "Pat Dorsey five rules investing moats" },
        { title: "Hamilton's 7 Powers", source: "YouTube", videoId: "2tiQrNtTzPA", fallbackSearchQuery: "Hamilton Helmer 7 Powers strategy" },
      ],
      readings: [
        { title: "How Strategy Shapes Structure", source: "Harvard Business Review", url: "https://hbr.org/2009/09/how-strategy-shapes-structure" },
        { title: "The Quest for Resilience", source: "Harvard Business Review", url: "https://hbr.org/2003/09/the-quest-for-resilience" },
      ],
      exercise: { id: "ex1", scenario: "You are the CEO of 'FreshFit,' a premium meal-kit delivery service that has grown rapidly because your recipes are unique and your packaging is biodegradable. However, three new competitors have just launched similar services, offering 50% discounts to your current customers to get them to switch.", task: "Identify which specific moat category (from the eight listed) would be most effective for FreshFit to build right now to prevent customer churn, and explain one concrete action you would take to implement it." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "Which is NOT one of Porter's five forces?", choices: ["Buyer power", "Threat of substitutes", "Government regulation", "Rivalry"], answerIndex: 2, explanation: "Regulation can affect forces but isn't itself one of the five." },
    { id: "q2", prompt: "High supplier power typically reflects:", choices: ["Many undifferentiated suppliers", "Few suppliers with a critical differentiated input", "Vertical integration by buyers", "Low switching costs"], answerIndex: 1, explanation: "Concentration plus differentiation gives suppliers leverage." },
    { id: "q3", prompt: "A commodity industry with low switching costs and easy entry will have:", choices: ["High long-run profitability", "Low long-run profitability due to intense rivalry and entry", "No effect on profits", "High supplier power"], answerIndex: 1, explanation: "Multiple hostile forces compress margins toward cost of capital." },
    { id: "q4", prompt: "The threat of substitutes is best assessed by looking at:", choices: ["Direct competitors only", "Alternative ways a customer could satisfy the same underlying need", "Regulator reports", "Historical prices"], answerIndex: 1, explanation: "Netflix's substitute is any evening entertainment, not only other streamers." },
    { id: "q5", prompt: "Five Forces is primarily used to answer:", choices: ["Which customer to target", "Whether the industry structure is attractive and where value is captured", "How to design an org chart", "What KPIs to set"], answerIndex: 1, explanation: "The framework diagnoses structural profitability." },
    { id: "q6", prompt: "Operational effectiveness differs from strategy in that:", choices: ["It's harder to copy", "It involves trade-offs", "It's about doing the same things better", "It requires more capital"], answerIndex: 2, explanation: "Strategy makes trade-offs; ops effectiveness improves the same activities and is easily replicated." },
    { id: "q7", prompt: "Porter's generic strategies are:", choices: ["Cost leadership, differentiation, focus", "Grow, harvest, exit", "Buy, hold, sell", "Innovate, imitate, ignore"], answerIndex: 0, explanation: "Plus their focused variants (cost focus, differentiation focus)." },
    { id: "q8", prompt: "A firm that tries to be both the lowest cost and the most differentiated risks:", choices: ["Winning on both dimensions", "Being 'stuck in the middle' — best at neither", "Higher margins", "Regulatory scrutiny"], answerIndex: 1, explanation: "The trade-offs between the strategies typically make hybrid positions weak." },
    { id: "q9", prompt: "Southwest Airlines' historical strategy was cost leadership enabled by:", choices: ["Buying every route", "A tightly integrated set of trade-offs (single aircraft type, point-to-point, quick turns, no meals)", "Charging more than rivals", "Long-haul international flights"], answerIndex: 1, explanation: "Strategy is a system of reinforcing choices, not a single decision." },
    { id: "q10", prompt: "Fit among activities matters because:", choices: ["It reduces cost only", "It makes the strategy hard to imitate — competitors must copy the whole system, not one piece", "It simplifies management", "It removes the need for choice"], answerIndex: 1, explanation: "Imitators would need to replicate the entire linked system." },
    { id: "q11", prompt: "A network effect is strongest in:", choices: ["A solo CRM tool", "A two-sided marketplace", "A commodity producer", "A discount airline"], answerIndex: 1, explanation: "Two-sided markets get more valuable to each side as the other grows." },
    { id: "q12", prompt: "Which is NOT typically considered a durable moat?", choices: ["Network effects", "Switching costs", "Regulatory or intangible-asset barriers", "Slightly better marketing this quarter"], answerIndex: 3, explanation: "Short-term tactical wins do not constitute a structural advantage." },
    { id: "q13", prompt: "Economies of scale as a moat mainly protect firms when:", choices: ["Demand is very small", "Fixed costs are large and market share is concentrated", "Products are undifferentiated commodities", "Competition is regulated"], answerIndex: 1, explanation: "Scale advantages need large fixed costs and a large enough share to spread them meaningfully." },
    { id: "q14", prompt: "Cornered-resource moats (per Helmer's 7 Powers) look like:", choices: ["Exclusive access to a critical input on preferential terms", "Great customer service", "Aggressive advertising", "Low prices"], answerIndex: 0, explanation: "Exclusive rights, unique talent, or preferential contracts." },
    { id: "q15", prompt: "A firm with high customer switching costs (e.g., an ERP vendor) benefits by:", choices: ["Being able to raise prices modestly with limited churn", "Losing customers faster", "Facing more entrants", "Higher CAC"], answerIndex: 0, explanation: "Lock-in gives pricing power at the margin." },
  ],
  assignment: {
    id: "a1",
    title: "Five Forces analysis",
    prompt: "Pick an industry you know. Score each of the five forces (low/medium/high) with one sentence of evidence. Identify the dominant moat type for the industry leader. Recommend one structural move (M&A, vertical integration, ecosystem play) that would strengthen the leader's position.",
    rubric: "Five forces correctly identified with evidence (4 pts). Moat type defensible (2 pts). Strategic recommendation grounded in the analysis (2 pts). Concise and well-argued (2 pts).",
  },
};