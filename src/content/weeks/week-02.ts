import type { Week } from "../types";

export const week02: Week = {
  week: 2,
  title: "Managerial Accounting",
  tagline: "Use numbers to make decisions inside the firm.",
  topics: ["Cost behavior", "Break-even", "Contribution margin", "Activity-based costing"],
  lessons: [
    {
      id: "l1",
      title: "Cost behavior",
      summary: "Classify costs by how they change with volume — the foundation for every operating decision.",
      body: `# Cost behavior\n\nFinancial accounting reports to outsiders. Managerial accounting helps insiders decide. The first move is classifying costs:\n\n- **Variable** — change in lock-step with output (raw materials, hourly labor).\n- **Fixed** — constant within a *relevant range* (rent, salaries).\n- **Mixed/semi-variable** — fixed base plus variable component (utilities, sales reps with base + commission).\n- **Step costs** — fixed up to a capacity limit, then jump (adding a second shift).\n\n## Why it matters\n\nManagement decisions — pricing, outsourcing, expansion — depend on which costs change with the decision. The accounting label ("SG&A") often hides the answer.\n\n## Decomposing a mixed cost\n\nThe **high-low method**: take the highest and lowest activity months.\n\n\`Variable rate = (cost_high − cost_low) / (units_high − units_low)\`\n\nThen back-solve for the fixed component. Crude but quick. Regression is better when you have data.`,
    },
    {
      id: "l2",
      title: "Contribution margin and break-even",
      summary: "The single most useful framework for short-run decisions.",
      body: `# Contribution margin\n\n\`Contribution margin per unit = Price − Variable cost per unit\`\n\nIt's what each additional sale *contributes* to covering fixed costs and then profit.\n\n## Break-even\n\n\`Break-even units = Fixed costs / Contribution margin per unit\`\n\n\`Break-even revenue = Fixed costs / Contribution margin ratio\`\n\nwhere CM ratio = CM / Price.\n\n## Worked example\n\nA coffee shop: price $5, variable cost $1.50, fixed costs $14,000/month.\n\n- CM per cup = $3.50\n- Break-even = 14,000 / 3.50 = **4,000 cups/month** (~133/day)\n- To earn $7,000 profit: (14,000 + 7,000) / 3.50 = 6,000 cups.\n\n## Decisions that use CM\n\n- **Drop a product?** If it has positive CM and contributes to shared fixed costs, dropping it may hurt total profit.\n- **Accept a special order?** Compare price to *variable* cost only, if fixed costs don't change.\n- **Make vs buy?** Avoidable cost vs purchase price.`,
    },
    {
      id: "l3",
      title: "Allocating overhead",
      summary: "Traditional allocation distorts product profitability. ABC fixes it when products consume resources differently.",
      body: `# Overhead allocation\n\nDirect materials and direct labor trace cleanly to products. Overhead doesn't. Allocation methods spread it.\n\n## Traditional allocation\n\nPick one driver (usually direct labor hours or machine hours). Compute overhead rate = total overhead / total driver. Multiply by each product's driver consumption.\n\nProblem: high-volume simple products subsidize low-volume complex ones.\n\n## Activity-based costing (ABC)\n\nIdentify activities (machine setup, quality inspection, order processing). For each, pick a cost driver (setups, inspections, orders). Allocate cost pools by actual consumption.\n\nABC typically reveals:\n- Low-volume specialty products are *less* profitable than they looked.\n- High-volume standard products are *more* profitable.\n\n## When to use ABC\n\nWorth the complexity when (a) overhead is large, (b) products vary in complexity, (c) decisions hinge on per-product profitability. Otherwise a simple driver is fine.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "A bakery has fixed costs of $6,000/month, sells loaves for $5 with $2 variable cost each. Break-even is:", choices: ["1,200 loaves", "2,000 loaves", "3,000 loaves", "6,000 loaves"], answerIndex: 1, explanation: "CM = $3. 6000/3 = 2000 loaves." },
    { id: "q2", prompt: "Accepting a special one-time order at a price below full cost is rational when:", choices: ["The price exceeds variable cost and fixed capacity is available", "It's never rational", "The price covers allocated overhead", "Customer is a big brand"], answerIndex: 0, explanation: "Only avoidable costs are relevant; idle capacity makes the extra CM pure profit." },
    { id: "q3", prompt: "Activity-based costing most improves accuracy when:", choices: ["Products are identical", "Overhead is small", "Products consume resources very differently", "Direct labor dominates costs"], answerIndex: 2, explanation: "ABC matters when activity consumption varies across products." },
  ],
  assignment: {
    id: "a1",
    title: "Price and break-even analysis",
    prompt: "Design the unit economics of a hypothetical small business (food truck, e-commerce SKU, agency engagement). Specify price, variable cost per unit, fixed cost per month. Compute (1) contribution margin per unit and ratio, (2) break-even units and revenue, (3) units needed to make $10k/month profit, (4) one strategic recommendation based on your numbers.",
    rubric: "Realistic, internally consistent numbers (3 pts). Correct CM and BE math (3 pts). Correct target-profit calc (2 pts). Insightful recommendation tied to the math (2 pts).",
  },
};