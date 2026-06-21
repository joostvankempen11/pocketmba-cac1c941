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
      body: `# Porter's Five Forces\n\nMichael Porter's 1979 framework remains the most widely taught tool in strategy because it cleanly explains why some industries (rating agencies, pharma, defense) are reliably profitable and others (airlines, retail, restaurants) are reliably not. The five forces *together* set the *industry's* attractiveness; individual firms fight within that ceiling.\n\n## 1. Rivalry among existing competitors\n\nHigh when: many comparable competitors, slow industry growth, high fixed costs (pressure to fill capacity), low switching costs, undifferentiated products, high exit barriers. US airlines historically check every box; rivalry is brutal, average industry returns barely cover cost of capital.\n\n## 2. Threat of new entrants\n\nHigh when entry barriers are low — capital requirements, scale economies, brand strength, regulatory licenses, network effects, access to distribution. Software-as-a-service had low barriers a decade ago and rivers of capital flowed in; today AI infrastructure has high barriers (model training cost, chip access) and few entrants.\n\n## 3. Bargaining power of suppliers\n\nHigh when suppliers are concentrated, switching costs are high, no substitutes, the input is critical. The premier example: the relationship between TSMC and almost every fabless chip company in the world.\n\n## 4. Bargaining power of buyers\n\nHigh when buyers are concentrated, switching costs are low, the product is undifferentiated, buyers are price-sensitive or vertically integrated. Walmart's relationship with most of its CPG suppliers is the textbook case.\n\n## 5. Threat of substitutes\n\nHigh when substitutes offer comparable value at lower price or higher quality. Long-distance phone calls were destroyed by email and then by free internet voice calls. Video rental stores were destroyed by streaming. Coal-fired electricity is being destroyed by gas and renewables.\n\n## How to use it\n\n- **Industry selection** — entrepreneurs and investors should pick *good* industries, not just good companies. A mediocre operator in a great industry (Moody's, Visa) routinely outperforms a great operator in a bad one.\n- **Competitive moves** — *change* the forces in your favor: lock in customers, integrate a critical supplier, raise entry barriers with brand or scale, kill substitutes by matching their value at lower cost.\n- **Investment thesis** — when an industry's forces are shifting (consolidation, deregulation, technology disruption), profit pools migrate. Spotting the migration early is the strategist's job.\n\n## A note on completeness\n\nPorter's framework misses *complementors* (Brandenburger-Nalebuff added them as a sixth force in *Co-opetition*) and arguably understates *demand-side network effects* — both critical to modern platform businesses. Use Five Forces as the structural skeleton, then layer on platform and ecosystem thinking.`,
      videos: [
        { title: "Michael Porter's 5 Forces model explained", source: "YouTube", videoId: "33XmkfbzwO8", fallbackSearchQuery: "Porter's Five Forces explained" },
        { title: "The Explainer — Porter's Five Forces", source: "YouTube — HBR", url: "https://www.youtube.com/watch?v=mYF2_FBCvXw" },
        { title: "Michael Porter on Strategy", source: "YouTube — HBS", url: "https://www.youtube.com/watch?v=ibrXBC0gJBM" },
      ],
      readings: [
        { title: "The Five Competitive Forces That Shape Strategy", source: "Harvard Business Review", url: "https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy" },
        { title: "What Is Strategy?", source: "Harvard Business Review", url: "https://hbr.org/1996/11/what-is-strategy" },
      ],
    },
    {
      id: "l2",
      title: "Generic strategies",
      summary: "Cost leadership, differentiation, focus — and the strategic decision to make trade-offs.",
      body: `# Generic strategies\n\nPorter argued firms must pick one of three positions, and *commit*:\n\n## Cost leadership\n\nBecome the lowest-cost producer in the industry. Capture share at average prices, or earn average margins at low prices. Requires obsessive scale, process discipline, low overhead, automation, hard supplier negotiation. Examples: Walmart, Costco, Southwest historically, Vanguard.\n\nDanger: *one* lower-cost competitor enters and the position collapses. The pursuit of cost leadership often kills the capacity to differentiate later.\n\n## Differentiation\n\nOffer something the market perceives as unique — design, brand, performance, service, distribution. Customers pay a premium. Examples: Apple, Hermès, Disney, Mercedes.\n\nDanger: customers stop perceiving the difference (commoditization), or the price gap to good-enough alternatives gets too wide.\n\n## Focus\n\nPick a narrow segment — geographic, demographic, vertical — and serve it better than the generalists can. Within focus, you can still be cost-focused (regional grocer) or differentiation-focused (veterinary EHR software).\n\n## The "stuck in the middle" warning\n\nPorter's most famous claim: trying to be both low-cost *and* differentiated leaves you stuck in the middle — out-priced by the low-cost player, out-featured by the differentiator. Empirically this is too strong (Toyota arguably achieved both; IKEA built a focused-cost-differentiation hybrid), but the underlying caution stands: strategy is the choice of what *not* to do.\n\n## Strategy as fit\n\nIn *What Is Strategy?* (1996) Porter sharpened this: strategy is a *coherent set of activities* that reinforce each other and create trade-offs competitors can't replicate. Southwest's point-to-point routing, single aircraft type, fast turnarounds, no meals, and direct booking are *each* small advantages — their interlock creates a position that hub-and-spoke airlines literally cannot copy without dismantling their own systems.\n\n## Operational effectiveness ≠ strategy\n\nDoing the same activities better than rivals (operational effectiveness) is necessary but not sufficient — best practices diffuse. *Strategy* is doing *different* activities, or the same ones in a different configuration.`,
      videos: [
        { title: "Michael Porter's Generic Strategies explained", source: "YouTube", videoId: "Nz53CopmFig", fallbackSearchQuery: "Porter's generic strategies explained" },
        { title: "Porter's Generic Strategies", source: "YouTube — MindToolsVideos", url: "https://www.youtube.com/watch?v=h31IO5cEZcA" },
        { title: "What Is Strategy? — Michael Porter", source: "YouTube — HBS", url: "https://www.youtube.com/watch?v=GsmDvkPzCBM" },
      ],
      readings: [
        { title: "What Is Strategy?", source: "Harvard Business Review", url: "https://hbr.org/1996/11/what-is-strategy" },
        { title: "Reinventing Your Business Model", source: "Harvard Business Review", url: "https://hbr.org/2008/12/reinventing-your-business-model" },
      ],
    },
    {
      id: "l3",
      title: "Moats",
      summary: "Sources of durable competitive advantage — the structural reasons one firm's profits don't get competed away.",
      body: `# Moats\n\nWarren Buffett's term for durable competitive advantage. A moat is the structural reason a profitable business *stays* profitable when copycats arrive. The strategist's job is to identify, deepen, and defend the moat.\n\n## Categories of moat\n\n1. **Network effects.** The product becomes more valuable as more users join — both within a side (telephone, social networks) and across sides (marketplaces, payment networks, app stores). Often winner-takes-most.\n2. **Scale economies.** Average cost falls with volume — manufacturing (chip fabs, autos), distribution (Amazon logistics), R&D amortization (pharma). Hard to challenge without enormous capital and time.\n3. **Switching costs.** Users incur cost or risk to change suppliers — workflow integration (Salesforce, ERP), data lock-in (banking), retraining (productivity software), contractual penalty (telecom). Switching costs let the incumbent raise prices over time.\n4. **Intangible assets.** Brand (Coca-Cola, Hermès), patents (pharma, biotech), regulatory licenses (banking charters, taxi medallions historically). Hardest moat to *build*, easy to *erode* if mismanaged.\n5. **Cost advantage.** Privileged access to a low-cost input, location, or process (Saudi oil reserves, hydropower aluminum smelters).\n6. **Counter-positioning.** The incumbent *can't* adopt your model without cannibalizing their existing business (Vanguard's index funds vs active-management houses, Netflix streaming vs Blockbuster stores). A favorite of Hamilton Helmer's *7 Powers*.\n7. **Process power.** Hard-to-replicate operational know-how built over years (Toyota Production System, Pixar's creative workflow).\n8. **Cornered resource.** Exclusive access to a critical input — talent, IP, location, supply contract.\n\n## What a moat is *not*\n\n- **Operational excellence** — replicable.\n- **A great product** — replicable on a 12-24 month lag.\n- **Being first** — first-mover advantage is overrated; first-*scaler* advantage is the real prize.\n- **Customer love** without switching costs — admirable, fragile.\n\n## Measuring moats quantitatively\n\nReturn on invested capital (ROIC) sustained above WACC for >10 years is the empirical signal of a moat. Mauboussin's research shows that companies with persistent ROIC > 20% are rare and the lever is almost always one of the categories above.\n\n## How moats erode\n\n- Technology shifts (Kodak, Blockbuster, Nokia).\n- Regulation (deregulation of telecoms, airlines).\n- New business models that the incumbent can't adopt (Vanguard, Wikipedia, Craigslist's destruction of classifieds).\n- Self-inflicted brand damage (Volkswagen emissions, Boeing 737 MAX).\n\nManagers' job: deepen the moat with every reinvested dollar. Investors' job: pay only for moats they can underwrite for a decade.`,
      videos: [
        { title: "Treacy & Wiersema's Value Strategies explained", source: "YouTube", videoId: "NtuArGXUP9Y", fallbackSearchQuery: "economic moat competitive advantage explained" },
        { title: "Pat Dorsey — The Five Rules for Successful Stock Investing", source: "YouTube — Talks at Google", url: "https://www.youtube.com/watch?v=tA0Ol1zlPgU" },
        { title: "Hamilton Helmer — 7 Powers", source: "YouTube — Acquired", url: "https://www.youtube.com/watch?v=lQQXxnAuPDc" },
      ],
      readings: [
        { title: "How Strategy Shapes Structure", source: "Harvard Business Review", url: "https://hbr.org/2009/09/how-strategy-shapes-structure" },
        { title: "The Quest for Resilience", source: "Harvard Business Review", url: "https://hbr.org/2003/09/the-quest-for-resilience" },
      ],
    },
  ],
  quiz: [
    { id: "q1", prompt: "Which is NOT one of Porter's five forces?", choices: ["Buyer power", "Threat of substitutes", "Government regulation", "Rivalry"], answerIndex: 2, explanation: "Regulation can affect forces but isn't itself one of the five." },
    { id: "q2", prompt: "A network effect is strongest in:", choices: ["A solo CRM tool", "A two-sided marketplace", "A commodity producer", "A discount airline"], answerIndex: 1, explanation: "Two-sided markets get more valuable to each side as the other grows." },
    { id: "q3", prompt: "Operational effectiveness differs from strategy in that:", choices: ["It's harder to copy", "It involves trade-offs", "It's about doing the same things better", "It requires more capital"], answerIndex: 2, explanation: "Strategy makes trade-offs; ops effectiveness improves the same activities and is easily replicated." },
  ],
  assignment: {
    id: "a1",
    title: "Five Forces analysis",
    prompt: "Pick an industry you know. Score each of the five forces (low/medium/high) with one sentence of evidence. Identify the dominant moat type for the industry leader. Recommend one structural move (M&A, vertical integration, ecosystem play) that would strengthen the leader's position.",
    rubric: "Five forces correctly identified with evidence (4 pts). Moat type defensible (2 pts). Strategic recommendation grounded in the analysis (2 pts). Concise and well-argued (2 pts).",
  },
};