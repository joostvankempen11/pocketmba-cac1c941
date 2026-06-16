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
      summary: "You can't serve everyone. Pick who, decide what they should think of you, then design everything around that.",
      body: `# STP\n\n**Segmentation** — divide the market into groups with distinct needs.\n- Demographic, geographic, psychographic, behavioral.\n- Good segments are *measurable, substantial, accessible, differentiable, actionable*.\n\n**Targeting** — choose which segments to serve.\n- Undifferentiated (mass), differentiated (multiple offerings), concentrated (niche), micromarketing.\n\n**Positioning** — the place you occupy in the customer's mind.\n- Positioning statement template: *For [target] who [need], [brand] is the [category] that [key benefit] because [reason to believe].*\n\n## Example\n\nFor busy professionals who want a quality coffee experience without queueing, Nespresso is the home espresso system that delivers café-grade coffee in 30 seconds because of its precision-engineered capsules and machines.\n\nEverything — pricing, packaging, channel, advertising — flows from this.`,
    },
    {
      id: "l2",
      title: "The 4 Ps",
      summary: "Product, Price, Place, Promotion — the levers you control.",
      body: `# 4 Ps\n\n## Product\n\nFeatures, quality, design, brand, packaging, services. The *augmented product* includes warranty, support, community.\n\n## Price\n\n- **Cost-plus** — markup over cost. Simple, ignores value.\n- **Value-based** — price to customer willingness to pay. Highest margins.\n- **Competition-based** — anchor to rivals.\n- **Penetration** — low price to gain share.\n- **Skimming** — high price, lower over time (electronics).\n\n## Place (distribution)\n\nDirect vs indirect. Intensive (mass), selective (premium), exclusive (luxury). Channel choice shapes brand perception and unit economics.\n\n## Promotion\n\nAdvertising, PR, sales promotions, personal selling, direct/digital. Each works at a different funnel stage: awareness → consideration → purchase → loyalty → advocacy.`,
    },
    {
      id: "l3",
      title: "Customer lifetime value (CLV)",
      summary: "How much a customer is worth — and therefore how much you can spend to acquire one.",
      body: `# CLV\n\nSimple version:\n\n\`CLV = (ARPU × Gross margin) / Churn rate\`\n\nor\n\n\`CLV = ARPU × Gross margin × (1 / (1 − retention rate))\`\n\n## Worked example\n\nSaaS: $50/month ARPU, 80% gross margin, 5% monthly churn.\n- Monthly contribution = $40.\n- Expected lifetime = 1/0.05 = 20 months.\n- CLV ≈ $800.\n\n## CAC and the LTV:CAC ratio\n\n**CAC** = sales + marketing spend / new customers. Healthy SaaS: LTV:CAC ≥ 3 and CAC payback ≤ 12 months.\n\n## Strategic uses\n\n- Set acquisition budgets.\n- Justify retention investments (a 1pp churn reduction can be worth more than a 10% price increase).\n- Differentiate spend by segment — not all customers are equal.`,
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
    prompt: "Choose a real or fictional product. Write (1) a one-sentence positioning statement using the standard template, (2) the target segment with two characteristics, (3) one specific decision for each of the 4 Ps consistent with the positioning, (4) an estimate of CLV with stated assumptions.",
    rubric: "Sharp, specific positioning (3 pts). Coherent 4Ps that reinforce positioning (3 pts). CLV math defensible (2 pts). Internal consistency (2 pts).",
  },
};