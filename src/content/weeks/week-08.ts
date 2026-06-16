import type { Week } from "../types";

export const week08: Week = {
  week: 8,
  title: "Organizational Behavior",
  tagline: "How individuals, teams, and structures shape what an organization can do.",
  topics: ["Motivation", "Teams", "Culture", "Org design"],
  lessons: [
    {
      id: "l1",
      title: "Motivation",
      summary: "Pay matters less than autonomy, mastery, purpose, and a fair process.",
      body: `# Motivation\n\n## Foundational theories\n\n- **Maslow** — physiological → safety → belonging → esteem → self-actualization. Useful as intuition, weak as predictive model.\n- **Herzberg's two-factor** — *hygiene* (pay, conditions) prevents dissatisfaction; *motivators* (achievement, recognition, growth) drive engagement. Pay alone doesn't motivate beyond fairness.\n- **Self-determination theory (Deci & Ryan)** — intrinsic motivation requires *autonomy, competence, relatedness*.\n- **Expectancy theory (Vroom)** — Motivation = Expectancy × Instrumentality × Valence. Effort produces performance, performance produces reward, reward is valued. Break any link and effort drops.\n\n## Practical implication\n\nIncentive systems frequently backfire when they (a) reward outputs that are easy to game, (b) crowd out intrinsic motivation, or (c) violate perceived fairness. Use them for routine work; rely on intrinsic motivators for creative work.`,
    },
    {
      id: "l2",
      title: "Teams and group dynamics",
      summary: "Smart people in groups don't automatically make smart decisions. Process matters.",
      body: `# Teams\n\n## Tuckman stages\n\nForming → Storming → Norming → Performing → Adjourning. Skipping storming usually means it shows up later, worse.\n\n## What makes a team effective\n\nGoogle's Project Aristotle found *psychological safety* — the ability to take interpersonal risks — was the strongest predictor of team performance. Beyond that: dependability, structure/clarity, meaning, impact.\n\n## Common dysfunctions\n\n- **Groupthink** — pressure toward conformity suppresses dissent.\n- **Social loafing** — individual effort drops in groups.\n- **Diffusion of responsibility** — "someone else will."\n\nCountermeasures: explicit dissent roles (red team), individual accountability, smaller groups.`,
    },
    {
      id: "l3",
      title: "Culture and org design",
      summary: "Structure is strategy. Reporting lines and incentives shape what decisions get made.",
      body: `# Org design\n\n## Structural archetypes\n\n- **Functional** — by discipline (eng, sales, marketing). Deep expertise, slow cross-functional decisions.\n- **Divisional** — by product or geography. Customer/market focus, duplicated overhead.\n- **Matrix** — both. Flexibility, role conflict, slow decisions.\n- **Network/platform** — small core, external partners. Agile, governance-heavy.\n\nThe right structure depends on strategy. Functional fits standardization; divisional fits diverse markets.\n\n## Culture\n\nSchein's three layers: artifacts (visible), espoused values (stated), basic assumptions (taken-for-granted). Culture changes via what gets *rewarded, hired, fired, and promoted* — not posters.\n\n## Conway's Law\n\nOrganizations design systems that mirror their communication structure. If you want a modular product, organize as modular teams.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "According to self-determination theory, intrinsic motivation requires:", choices: ["High pay, low pay, options", "Autonomy, competence, relatedness", "Fear, reward, recognition", "Authority, control, hierarchy"], answerIndex: 1, explanation: "Deci & Ryan's three needs." },
    { id: "q2", prompt: "Project Aristotle found the strongest predictor of team performance is:", choices: ["Average IQ", "Psychological safety", "Tenure", "Diverse skills"], answerIndex: 1, explanation: "Safety to take interpersonal risk." },
    { id: "q3", prompt: "Conway's Law states:", choices: ["Bureaucracies expand to consume resources", "Systems mirror the org's communication structure", "Power corrupts", "Pay scales with span of control"], answerIndex: 1, explanation: "Conway 1968." },
  ],
  assignment: {
    id: "a1",
    title: "Diagnose a team",
    prompt: "Describe a team you've been on (work, school, sports). (1) Where on Tuckman's stages was it? (2) Identify one dysfunction it suffered from. (3) Propose two specific interventions — one structural and one behavioral — that would have addressed it. Tie each to a concept from this week.",
    rubric: "Honest, specific description (2 pts). Correct theoretical framing (3 pts). Two distinct, well-targeted interventions (3 pts). Clear linkage to course concepts (2 pts).",
  },
};