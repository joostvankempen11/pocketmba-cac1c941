import type { Week } from "../types";

export const week07: Week = {
  week: 7,
  title: "Operations & Supply Chain",
  tagline: "Process design, capacity, inventory, and quality — where strategy meets execution.",
  topics: ["Process flow", "Little's Law", "Inventory management", "Lean / Six Sigma"],
  lessons: [
    {
      id: "l1",
      title: "Process analysis",
      summary: "Every operation is a network of activities. Throughput is set by the slowest step.",
      body: `# Process analysis\n\nMap any operation as a flow of inputs → activities → outputs.\n\n## Key metrics\n\n- **Cycle time** — time per unit at a station.\n- **Throughput** — units per period the whole process produces.\n- **Capacity** — max throughput a resource can sustain.\n- **Bottleneck** — the lowest-capacity step. It sets system throughput.\n- **Utilization** — actual output / capacity.\n\n## Little's Law\n\n\`Inventory = Throughput × Flow time\`\n\nProfound and underused. Cut WIP and either throughput or flow time must change. Common applications: kitchens, ERs, software dev (story points in progress).\n\n## Improving throughput\n\nFocus on the bottleneck. Improving non-bottlenecks does nothing for system output (Theory of Constraints). Once a bottleneck is broken, it moves elsewhere.`,
    },
    {
      id: "l2",
      title: "Inventory management",
      summary: "Holding inventory costs money; running out costs more. EOQ balances them.",
      body: `# Inventory\n\n## Types\n\nRaw materials, WIP, finished goods, safety stock, cycle stock, pipeline.\n\n## Economic Order Quantity (EOQ)\n\n\`EOQ = sqrt( 2DS / H )\`\n\n- D: annual demand\n- S: setup/order cost per order\n- H: holding cost per unit per year\n\nMinimizes total ordering + holding cost. Assumes constant demand.\n\n## Safety stock and service level\n\n\`Safety stock = z × σ_LT\`\n\nz = service-level z-score (95% → 1.65), σ_LT = std dev of demand during lead time.\n\n## JIT and pull systems\n\nToyota's insight: large inventories *hide* problems (defects, breakdowns, bad forecasts). Cutting inventory forces you to fix the underlying issues. Trade-off: less buffer against disruption (visible since 2020).`,
    },
    {
      id: "l3",
      title: "Lean and quality",
      summary: "Reduce waste, reduce variation. The two pillars of operational excellence.",
      body: `# Lean and Six Sigma\n\n## Seven wastes (Lean)\n\nTransport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects. Mnemonic: TIM WOOD.\n\n## Six Sigma\n\nReduce *variation*. A process at "six sigma" produces 3.4 defects per million opportunities. Uses DMAIC: Define, Measure, Analyze, Improve, Control.\n\n## Statistical process control\n\nControl charts: track means and ranges; investigate points outside ±3σ or trends. Distinguishes *common cause* (random) from *special cause* (assignable) variation.\n\n## Why both matter\n\nLean speeds you up by removing waste. Six Sigma makes you reliable by reducing variation. Modern operations programs combine them.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "If a process has throughput of 50/hr and flow time of 2 hours, average inventory is:", choices: ["25", "50", "100", "200"], answerIndex: 2, explanation: "Little's Law: I = T × FT = 50 × 2 = 100." },
    { id: "q2", prompt: "Annual demand 10,000; order cost $50; holding cost $4/unit/year. EOQ:", choices: ["250", "500", "1,000", "2,000"], answerIndex: 1, explanation: "sqrt(2×10000×50/4) = sqrt(250000) = 500." },
    { id: "q3", prompt: "In the Theory of Constraints, improving a non-bottleneck step:", choices: ["Increases throughput proportionally", "Has no effect on throughput", "Decreases throughput", "Always reduces cost"], answerIndex: 1, explanation: "System throughput is set by the bottleneck." },
  ],
  assignment: {
    id: "a1",
    title: "Process redesign",
    prompt: "Pick a real process you know (a café, your work intake process, an admissions pipeline). (1) Map the steps with cycle times. (2) Identify the bottleneck. (3) Propose two changes — one to relieve the bottleneck and one to reduce waste. (4) Predict the throughput impact.",
    rubric: "Clear process map (2 pts). Correct bottleneck identification (2 pts). Two distinct, sensible changes (3 pts). Quantitative impact estimate (3 pts).",
  },
};