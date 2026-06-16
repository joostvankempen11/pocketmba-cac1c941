import type { Week } from "../types";

export const week09: Week = {
  week: 9,
  title: "Leadership & Negotiation",
  tagline: "Influence without authority, decide under uncertainty, and create value in deals.",
  topics: ["Leadership styles", "Decision making", "BATNA", "Integrative negotiation"],
  lessons: [
    {
      id: "l1",
      title: "Leadership",
      summary: "Leadership is mobilizing people to tackle hard problems. Style matters less than situational fit and credibility.",
      body: `# Leadership\n\n## Styles (Goleman)\n\nCommanding, visionary, affiliative, democratic, pacesetting, coaching. Best leaders flex among them based on context. Pacesetting and commanding work in crises but damage culture if overused.\n\n## Transformational vs transactional\n\n- **Transactional** — exchange of effort for rewards. Works for stable, defined work.\n- **Transformational** — inspire toward a shared vision, build self-belief, model behavior. Works for change and growth.\n\n## Credibility\n\nKouzes & Posner: leaders are believed when they are *honest, forward-looking, competent, inspiring*. Credibility is the foundation; without it, the rest is noise.\n\n## Adaptive leadership (Heifetz)\n\nDistinguish *technical* problems (known solution, expert applies it) from *adaptive* challenges (require people to change values/behaviors). Most leadership failures come from applying technical fixes to adaptive challenges.`,
    },
    {
      id: "l2",
      title: "Decision making under uncertainty",
      summary: "Humans systematically misjudge probability. Build processes that counter your biases.",
      body: `# Decision making\n\n## Common biases (Kahneman)\n\n- **Anchoring** — first number sticks.\n- **Availability** — vivid events feel more likely.\n- **Confirmation** — seek confirming evidence.\n- **Sunk cost** — throwing good money after bad.\n- **Overconfidence** — calibration is poor; 90% confidence intervals contain truth ~50% of the time.\n\n## Counter-techniques\n\n- **Pre-mortem** — assume the decision failed, work backward to causes.\n- **Reference class forecasting** — compare to base rates of similar past decisions.\n- **Red team** — assign someone to argue the opposite.\n- **Disagree and commit** — surface dissent, then unify on action.\n\n## Expected value\n\n\`EV = Σ probability × outcome\`\n\nSimple, undervalued. Most "tough" decisions become obvious once probabilities and payoffs are written down.`,
    },
    {
      id: "l3",
      title: "Negotiation",
      summary: "Prepare your BATNA, separate positions from interests, and expand the pie before dividing it.",
      body: `# Negotiation\n\n## BATNA\n\nBest Alternative To a Negotiated Agreement. Your walkaway. The party with the better BATNA has the leverage. Always know yours and *estimate* the other side's.\n\n## ZOPA\n\nZone of Possible Agreement = overlap between buyer's max and seller's min. No ZOPA → no deal.\n\n## Distributive vs integrative\n\n- **Distributive** — fixed pie, one issue. Anchor early, justify with standards, concede slowly.\n- **Integrative** — multiple issues with different valuations. Trade across issues — give up what you value less for what you value more. This is where most real value gets created.\n\n## Tactics that work\n\n- Negotiate multiple issues simultaneously, not sequentially.\n- Make multiple equivalent offers (MESOs) — reveals counterparty's priorities.\n- Use objective standards (market rates, precedent).\n- Separate the people from the problem (Fisher & Ury).`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "Heifetz's adaptive challenges differ from technical problems because they:", choices: ["Are technically harder", "Require changes in values and behaviors", "Have no solution", "Are cheaper to solve"], answerIndex: 1, explanation: "Adaptive challenges require learning and change, not expertise." },
    { id: "q2", prompt: "Your leverage in a negotiation is mostly determined by:", choices: ["Confidence", "Your BATNA relative to theirs", "Talking first", "Patience"], answerIndex: 1, explanation: "BATNA defines your walkaway and therefore your power." },
    { id: "q3", prompt: "Making multiple equivalent simultaneous offers (MESOs) helps you:", choices: ["Hide your priorities", "Discover their priorities", "Anchor low", "Avoid commitment"], answerIndex: 1, explanation: "Their reaction reveals which dimensions they value." },
  ],
  assignment: {
    id: "a1",
    title: "Negotiation plan",
    prompt: "Describe a real or hypothetical negotiation you face (salary, vendor, partnership). Write a one-page plan covering: (1) your interests (not positions), (2) the other side's likely interests, (3) your BATNA and an estimate of theirs, (4) the issues that could be traded for integrative value, (5) your opening move and reasoning.",
    rubric: "Interests separated from positions (3 pts). Realistic BATNA analysis (2 pts). Identification of integrative trades (3 pts). Concrete opening move (2 pts).",
  },
};