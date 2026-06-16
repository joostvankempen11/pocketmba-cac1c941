import type { Week } from "../types";

export const week01: Week = {
  week: 1,
  title: "Financial Accounting",
  tagline: "Read the three statements and trace a dollar through them.",
  topics: ["Income statement", "Balance sheet", "Cash flow statement", "Accruals"],
  lessons: [
    {
      id: "l1",
      title: "Why accounting exists",
      summary: "Accounting is the language of business. Managers, investors, and lenders all read the same three statements to answer different questions.",
      body: `# Why accounting exists\n\nEvery business eventually has to answer three questions: *Are we profitable? What do we own and owe? Where did the cash go?* Financial accounting answers them with three statements:\n\n- **Income statement** — profitability over a period.\n- **Balance sheet** — financial position at a point in time.\n- **Cash flow statement** — actual cash movement over a period.\n\n## The fundamental equation\n\n\`Assets = Liabilities + Equity\`\n\nThis identity must hold at every instant. Every transaction touches at least two accounts (double-entry) so the equation stays balanced.\n\n## Accrual vs cash accounting\n\nGAAP uses *accrual* accounting: revenue is recognized when *earned*, expenses when *incurred*, regardless of cash. If you deliver a $100 consulting job in March but get paid in May, March's income statement shows the $100 revenue; March's balance sheet shows a $100 *accounts receivable*; May's cash flow shows the $100 inflow.\n\n## Worked example\n\nA SaaS startup sells a $1,200 annual contract in January and collects cash up front.\n\n- **Income statement (Jan):** $100 revenue (1/12).\n- **Balance sheet (end of Jan):** Cash +$1,200, Deferred revenue +$1,100, Equity +$100.\n- **Cash flow (Jan):** +$1,200 from operations.\n\nNotice the gap: $1,200 cash, $100 revenue. The deferred revenue liability is the promise to deliver 11 more months of service.\n\n## Why this matters\n\nA company can be wildly profitable on paper and bankrupt in cash, or wildly cash-rich and unprofitable. Reading all three statements together is how you avoid surprises.`,
    },
    {
      id: "l2",
      title: "The income statement",
      summary: "Revenue minus costs equals profit — but in layers that reveal where the business creates and loses value.",
      body: `# The income statement\n\nAlso called the P&L. It walks from top-line revenue down to bottom-line net income through standardized layers:\n\n\`\`\`\nRevenue\n- COGS (cost of goods sold)\n= Gross profit\n- Operating expenses (SG&A, R&D)\n= Operating income (EBIT)\n- Interest expense\n- Taxes\n= Net income\n\`\`\`\n\n## Margins\n\nEach subtotal divided by revenue is a margin:\n- **Gross margin** — pricing power and unit economics.\n- **Operating margin** — operating efficiency.\n- **Net margin** — what's left for shareholders.\n\nApple has ~45% gross margin; Walmart ~25%. Different business models, different cost structures.\n\n## Fixed vs variable costs\n\n- **Variable** scale with units sold (raw materials, payment processing).\n- **Fixed** stay roughly constant (rent, salaried headcount).\n\nMore fixed costs → higher *operating leverage*: extra revenue drops mostly to profit, but losses compound fast when revenue falls.\n\n## Common red flags\n\n- Revenue grows but gross margin falls → discounting or input costs.\n- Operating income grows slower than revenue → costs scaling badly.\n- Net income > operating income → one-time gains; check the footnotes.`,
    },
    {
      id: "l3",
      title: "The balance sheet",
      summary: "A snapshot of what the company owns, owes, and what's left for owners.",
      body: `# The balance sheet\n\nThree sections that satisfy \`Assets = Liabilities + Equity\`.\n\n## Assets\n\n- **Current** (convert to cash within 12 months): cash, receivables, inventory.\n- **Non-current**: PP&E (property/plant/equipment), intangibles, goodwill.\n\n## Liabilities\n\n- **Current**: payables, short-term debt, accrued expenses.\n- **Non-current**: long-term debt, lease obligations, deferred taxes.\n\n## Equity\n\n- **Paid-in capital** — what investors put in.\n- **Retained earnings** — cumulative net income minus dividends.\n\n## Key ratios\n\n- **Current ratio** = current assets / current liabilities. >1 means short-term solvent.\n- **Debt-to-equity** = total debt / equity. Capital structure aggressiveness.\n- **Return on equity (ROE)** = net income / equity. How efficiently shareholders' money earns returns.\n\n## Working capital\n\n\`Working capital = current assets - current liabilities\`\n\nFast-growing businesses with long receivable cycles or heavy inventory consume cash even when profitable. This is why "growth companies" raise money.`,
    },
    {
      id: "l4",
      title: "The cash flow statement",
      summary: "Reconciles accrual profit to actual cash, broken into operating, investing, and financing.",
      body: `# The cash flow statement\n\nStarts with net income, undoes the non-cash items, and tells you where cash actually went.\n\n## Three sections\n\n1. **Operating** — cash from the core business. Add back depreciation, adjust for working-capital changes.\n2. **Investing** — capex, acquisitions, asset sales.\n3. **Financing** — debt issued/repaid, equity issued/bought back, dividends paid.\n\n## Free cash flow\n\n\`FCF = Operating cash flow - Capex\`\n\nThis is the cash a business actually generates for owners after maintaining its asset base. It's the number investors care about most.\n\n## Why CFO ≠ Net income\n\nDepreciation reduces net income but is non-cash, so it gets added back. A growing receivables balance means revenue was booked but cash not yet collected — subtract it. Inventory build-up consumes cash — subtract it.\n\n## Worked example\n\nNet income $100, depreciation $30, accounts receivable up $20, inventory up $10, payables up $5.\n\n\`CFO = 100 + 30 − 20 − 10 + 5 = $105\`\n\nMore cash than profit — the depreciation add-back swamped the working capital build.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "Which equation must always hold on a balance sheet?", choices: ["Revenue = Costs + Profit", "Assets = Liabilities + Equity", "Cash = Income − Expenses", "Equity = Assets + Liabilities"], answerIndex: 1, explanation: "The fundamental accounting identity; double-entry bookkeeping preserves it." },
    { id: "q2", prompt: "Under accrual accounting, when is revenue recognized?", choices: ["When cash is received", "When the contract is signed", "When the product/service is delivered", "At year end"], answerIndex: 2, explanation: "Revenue is recognized when earned (delivered), not when cash moves." },
    { id: "q3", prompt: "Free cash flow is best defined as:", choices: ["Net income + depreciation", "Operating cash flow − capex", "Revenue − COGS", "Cash on the balance sheet"], answerIndex: 1, explanation: "FCF removes the cash needed to sustain the asset base." },
    { id: "q4", prompt: "A company with high operating leverage has:", choices: ["Mostly variable costs", "Mostly fixed costs", "Low debt", "High inventory"], answerIndex: 1, explanation: "Fixed-cost-heavy structures amplify both gains and losses with revenue swings." },
  ],
  assignment: {
    id: "a1",
    title: "Read a 10-K",
    prompt: "Pick any public company. Write a 300–500 word memo answering: (1) What are revenue, gross margin, operating margin, and net margin for the most recent year? (2) Did working capital consume or release cash? (3) What is free cash flow, and how does it compare to net income? Cite specific numbers and explain what they suggest about the business.",
    rubric: "Specific numbers cited (3 pts). Correct interpretation of margins (3 pts). Correct identification of working-capital impact (2 pts). Clear FCF vs. NI comparison and insight (2 pts).",
  },
};