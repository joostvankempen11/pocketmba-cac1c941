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
      body: `# Why accounting exists

Every business eventually has to answer three questions: *Are we profitable? What do we own and owe? Where did the cash go?* Financial accounting answers them with three statements:

- **Income statement** — profitability over a period. It tells you if your operations are actually generating a surplus after costs, or if you're losing money on every sale.
- **Balance sheet** — financial position at a point in time. Think of this as a "snapshot" of your business's health right now, like a bank account balance combined with a list of your property and debts.
- **Cash flow statement** — actual cash movement over a period. This tracks the cold, hard cash coming in and out of the door, which is vital because you can't pay employees with "theoretical" profit.

Together they form a closed system: net income on the income statement flows into retained earnings on the balance sheet, and reconciles to the top line of the cash flow statement. Master that loop and you can read any 10-K in the world. A 10-K is simply the comprehensive annual report that public companies are required by law to file, detailing their financial performance.

## A short history

Double-entry bookkeeping was codified by the Venetian friar Luca Pacioli in 1494, but it had been used by Italian merchants for at least two centuries. The breakthrough was simple: every transaction is recorded twice — once as a *debit*, once as a *credit* — so that the books always balance. Modern GAAP (Generally Accepted Accounting Principles) and IFRS (International Financial Reporting Standards) are just elaborate extensions of Pacioli's system, shaped by a century of investor scandals (the 1929 crash, Enron in 2001, Lehman in 2008) that progressively tightened disclosure. These standards act as a "universal language" for business, ensuring that a dollar of profit reported by a tech company in California means the same thing as a dollar of profit from a bank in London.

## The fundamental equation

\`Assets = Liabilities + Equity\`

This identity must hold at every instant. 

- **Assets** are what the company owns (cash, inventory, buildings).
- **Liabilities** are what the company owes to others (loans, unpaid bills).
- **Equity** is what is left for the owners; it's the "net worth" of the business.

Every transaction touches at least two accounts (double-entry) so the equation stays balanced. If you buy a $10,000 machine with cash, assets stay flat (cash −$10k, PP&E +$10k). PP&E stands for Property, Plant, and Equipment. If you buy it with a loan, assets and liabilities both rise by $10k. Imagine buying a home: the house is the Asset, the mortgage is the Liability, and your down payment plus any value gained is your Equity. If the house value goes up, your equity goes up.

## Accrual vs cash accounting

GAAP uses *accrual* accounting: revenue is recognized when *earned*, expenses when *incurred*, regardless of cash. If you deliver a $100 consulting job in March but get paid in May, March's income statement shows the $100 revenue; March's balance sheet shows a $100 *accounts receivable* (money customers owe you); May's cash flow shows the $100 inflow.

The two-fold reason accountants prefer accrual:

1. **Matching principle** — expenses should be recognized in the same period as the revenue they generated. Otherwise a company could look wildly profitable one month and disastrous the next based purely on payment timing. For example, if you pay $5,000 for holiday inventory in October but sell it all in December, accrual accounting "matches" that $5,000 cost to the December sales so you can see your true profit margin.
2. **Going-concern assumption** — financial statements assume the business will continue operating, so they value long-lived assets at cost and depreciate them, rather than at fire-sale prices. Depreciate means to spread the cost of a large purchase, like a delivery truck, over its useful life rather than taking the full hit to your profits the day you buy it.

## Worked example

A SaaS startup sells a $1,200 annual contract in January and collects cash up front. SaaS stands for "Software as a Service," where customers pay a recurring fee (like Netflix or Microsoft 365).

- **Income statement (Jan):** $100 revenue (1/12). Even though you have the cash, you haven't "earned" the full year yet.
- **Balance sheet (end of Jan):** Cash +$1,200, Deferred revenue +$1,100, Equity +$100. *Deferred revenue* is a liability because you owe the customer 11 more months of service.
- **Cash flow (Jan):** +$1,200 from operations.

Notice the gap: $1,200 cash, $100 revenue. The deferred revenue liability is the promise to deliver 11 more months of service. This is why SaaS companies often look unprofitable on a GAAP basis but generate huge operating cash flow — they collect cash early and recognize revenue slowly.

## Who reads these statements, and why

- **Equity investors** — care about long-term earnings power and capital allocation. They lean on the income statement and cash flow. They want to know if the company will grow in value.
- **Lenders and bondholders** — care about debt service (the ability to pay back loans plus interest). They lean on the balance sheet and interest-coverage ratios to see if the company is buried in too much debt.
- **Managers** — care about which units, products, and decisions create value. They translate financials into managerial accounting (Week 2), which is used for internal strategy rather than official reporting.
- **Regulators (SEC, IRS)** — care about completeness and fairness. They require quarterly 10-Qs (shorter updates) and annual 10-Ks.
- **Employees and customers** — increasingly read the statements to gauge stability. No one wants to start a job at a company that is two weeks away from running out of cash.

## Why this matters

A company can be wildly profitable on paper and bankrupt in cash, or wildly cash-rich and unprofitable. Imagine a restaurant that sells out every night (profitable) but hasn't collected any money from its catering clients yet and can't pay its own rent (cash poor). Reading all three statements together is how you avoid surprises. By the end of this week you should be able to open any public company's 10-K and explain, in plain English, where the money came from and where it went.`,
      videos: [
        { title: "Aswath Damodaran \u2014 Income Statement", source: "YouTube \u2014 NYU Stern", videoId: "Q8wKr1QDSwg", fallbackSearchQuery: "why accounting exists explained" },
        { title: "How The Economic Machine Works", source: "YouTube \u2014 Ray Dalio (30 min)", url: "https://www.youtube.com/watch?v=PHe0bXAIuk0", fallbackSearchQuery: "Ray Dalio how the economic machine works" },
      ],
      readings: [
        { title: "How to Read a Financial Report", source: "Harvard Business Review", url: "https://hbr.org/1980/03/how-to-read-a-financial-report" },
        { title: "What Top Executives Don't Know About Their Finance Function", source: "Harvard Business Review", url: "https://hbr.org/2018/07/the-finance-function-needs-to-be-rebooted" },
      ],
      exercise: { id: "ex1", scenario: "You are the manager of a new landscaping business called 'GreenGrowth.' In June, you complete $5,000 worth of work for a corporate office, but the office won't actually send you the check until August. Meanwhile, you spent $1,000 on fuel and labor in June to get the job done.", task: "Explain how this scenario would appear differently on your June Income Statement versus your June Cash Flow Statement, and identify which specific balance sheet account represents the $5,000 owed to you." }
    },
    {
      id: "l2",
      title: "The income statement",
      summary: "Revenue minus costs equals profit — but in layers that reveal where the business creates and loses value.",
      body: `# The income statement

Also called the P&L (profit and loss). It walks from top-line revenue down to bottom-line net income through standardized layers:

\`\`\`
Revenue
- COGS (cost of goods sold)
= Gross profit
- Operating expenses (SG&A, R&D)
= Operating income (EBIT)
- Interest expense
- Taxes
= Net income
\`\`\`

Think of the Income Statement as a movie of a business over time (a quarter or a year), showing exactly how much money came in and where it leaked out. Each line is a story. Revenue tells you how much customers paid. COGS (Cost of Goods Sold) tells you what it cost to physically deliver the product—like the cost of the beans and the cup for a coffee shop. Gross profit is what's left to cover everything else. SG&A (Selling, General, and Administrative) tells you how much it cost to run the company around the product—think office rent, marketing, and corporate lawyers. R&D (Research and Development) tells you how much you're investing in the future. Interest tells you how aggressive the capital structure is (how much debt the company is carrying). Taxes tell you the jurisdiction game. Finally, Net Income—the "bottom line"—is the actual profit left for the owners after everyone else has been paid.

## Revenue recognition — harder than it looks

Under ASC 606 / IFRS 15, revenue is recognized in five steps: identify the contract, identify performance obligations, determine transaction price, allocate price to obligations, recognize revenue as obligations are satisfied. In plain English, you can't record a sale just because a customer promised to pay; you have to actually "earn" it by delivering the goods or services. A car dealership recognizes the entire price at delivery; a SaaS (Software as a Service) company recognizes ratably over the contract (1/12th each month for a year-long subscription); a construction firm recognizes based on percentage of completion.

This is where shenanigans happen. Managers are often under pressure to meet quarterly targets, leading to "earnings management." Channel stuffing (shipping unwanted inventory to distributors to book revenue), bill-and-hold arrangements (billing a customer for goods you haven't shipped), and round-tripping have collapsed several public companies. Read the revenue recognition footnote in any 10-K to see when a company considers a sale "done."

## Margins

Each subtotal divided by revenue is a margin, expressed as a percentage. It tells you how many cents of every dollar earned you get to keep at different stages of the process:
- **Gross margin** — pricing power and unit economics. High gross margins mean customers value your product way more than it costs to make.
- **Operating margin** — operating efficiency. This shows how well the management team controls the "overhead" costs of running the business.
- **Net margin** — what's left for shareholders.

Apple has ~45% gross margin; Walmart ~25%. Different business models, different cost structures. Software companies routinely exceed 75% gross margin because the marginal cost of an additional download is near zero—it costs almost nothing to let one more person download an app. Airlines often run on 5-10% net margin in good years.

Compare margins to *industry peers*, not across industries. Walmart's 25% gross margin would be world-class for a grocer and disastrous for a software firm. A manager who ignores declining margins might be winning new customers but doing so by selling at prices that won't sustain the business long-term.

## Fixed vs variable costs

- **Variable** scale with units sold (raw materials, payment processing, hourly labor). If you sell one more burger, you need one more patty.
- **Fixed** stay roughly constant within a relevant range (rent, salaried headcount, depreciation). Your rent stays the same whether you sell one burger or one thousand.

More fixed costs → higher *operating leverage*: extra revenue drops mostly to profit (because you've already paid the rent), but losses compound fast when revenue falls. Airlines, cruise lines, and chip foundries have brutal operating leverage; consulting firms can flex headcount and have low operating leverage. Understanding this helps a manager know how much risk they face if the economy slows down.

## EBITDA — the most misused number in finance

Earnings Before Interest, Taxes, Depreciation, and Amortization. Used as a proxy for operating cash flow. It strips out capital structure (interest) and accounting choices (depreciation), making companies comparable. But — and Warren Buffett has been loud about this — depreciation *is* a real cost. Depreciation is the way accountants spread out the cost of expensive equipment over its useful life. A trucking company that ignores depreciation will end up with broken trucks and no money to replace them because they thought their "EBITDA" was actual profit. Use EBITDA, but always check capex (Capital Expenditures—the actual cash spent on equipment).

## GAAP vs non-GAAP

GAAP stands for Generally Accepted Accounting Principles—the official rulebook. Most public tech companies report a "non-GAAP" or "adjusted" net income that excludes stock-based compensation (SBC), restructuring charges, and acquisition costs. Sometimes legitimate (like a one-time fire loss), often abusive — SBC in particular is a real economic cost to existing shareholders even if no cash leaves the building, because it dilutes the value of their shares. Be skeptical of any "adjusted" metric you can't reconcile back to GAAP.

## Common red flags

- Revenue grows but gross margin falls → discounting or input cost pressure. You're selling more, but it's costing you more to make each unit.
- Operating income grows slower than revenue → costs scaling badly. The business is becoming more complex and bloated as it grows.
- Net income > operating income → one-time gains; check the footnotes. Did they sell an office building to hide a bad year of sales?
- Revenue growth from acquisitions only → organic growth is stalling. The company is "buying" growth because its own products aren't selling.
- Frequent "non-recurring" charges that recur every year → ongoing operating costs in disguise. If a company has a "one-time" restructuring charge every single year, it’s just a normal cost of doing business that they are trying to hide.`,
      videos: [
        { title: "The Ultimate Guide to Financial Statements", source: "YouTube", videoId: "eorpdJUWfTA", startSeconds: 935, fallbackSearchQuery: "income statement explained" },
        { title: "How to Read a P&L Statement", source: "YouTube \u2014 The Finance Storyteller", url: "https://www.youtube.com/watch?v=uVHGgSXtQmE", fallbackSearchQuery: "how to read a P&L statement" },
      ],
      readings: [
        { title: "The Earnings Game: Everyone Plays, Nobody Wins", source: "Harvard Business Review", url: "https://hbr.org/2002/03/the-earnings-game-everyone-plays-nobody-wins" },
        { title: "Profits Without Prosperity", source: "Harvard Business Review", url: "https://hbr.org/2014/09/profits-without-prosperity" },
      ],
      exercise: { id: "ex1", scenario: "You are the manager of 'PureStream,' a subscription-based water filtration company. This year, your revenue grew by 20%, but your Net Income stayed flat, and your Gross Margin dropped from 60% to 52% because the cost of filter components rose significantly. To keep investors happy, your CEO wants to report a 'Non-GAAP Adjusted Profit' that ignores the increased cost of components, labeling it a 'temporary supply chain anomaly.'", task: "Analyze the relationship between the dropping Gross Margin and the CEO's suggested 'Adjusted Profit'—explain why this adjustment might mislead investors about the company's long-term unit economics and identify one legitimate fixed cost you could potentially optimize instead to improve the bottom line." }
    },
    {
      id: "l3",
      title: "The balance sheet",
      summary: "A snapshot of what the company owns, owes, and what's left for owners.",
      body: `# The balance sheet

Three sections that satisfy \`Assets = Liabilities + Equity\`. The income statement is a *video* of the period; the balance sheet is a *photograph* on the last day.

Think of the Balance Sheet as a snapshot of your company's "net worth" at a precise moment in time. While the Income Statement shows the flow of money over a month or year (the video), the Balance Sheet shows what stays behind after the action stops (the photograph). The core equation \`Assets = Liabilities + Equity\` must always be in balance. If you buy a $1,000 laptop (Asset) with a credit card (Liability), both sides increase by $1,000. If you pay for it with your own cash, one asset (cash) goes down while another (equipment) goes up, keeping the equation steady.

## Assets

Assets are economic resources controlled by the firm. Listed in order of *liquidity*.

Liquidity refers to how quickly an asset can be turned into cold, hard cash without losing its value. A dollar bill is perfectly liquid; a specialized factory building is "illiquid" because it might take months or years to find a buyer and finalize a sale.

- **Current** (convert to cash within 12 months): cash and equivalents, marketable securities, accounts receivable (money customers owe you for products they've already received), inventory (goods waiting to be sold), prepaid expenses (like insurance you've paid for in advance).
- **Non-current**: PP&E (property/plant/equipment), intangibles (like patents or trademarks), goodwill, long-term investments, deferred tax assets.

**Goodwill** is the difference between what an acquirer paid and the fair value of identifiable assets — it represents the premium for synergies, brand, and customer relationships. It's the most subjective number on most balance sheets and is the first place to look for impairment risk.

For example, if you buy a local coffee shop for $500,000, but the espresso machines and beans are only worth $200,000, that extra $300,000 is "Goodwill." You paid it because the shop has a famous name and a loyal line out the door. However, if a scandal ruins the brand's reputation, that $300,000 might vanish (an "impairment"), forcing you to admit the business is worth less than you claimed.

## Liabilities

Obligations to outsiders. Listed in order of when they come due.

Liabilities are simply the debts you owe to others. Managing them is a balancing act: too much debt can crush you with interest payments, but too little debt might mean you aren't growing as fast as you could.

- **Current**: accounts payable (money you owe suppliers for materials), short-term debt, accrued expenses (bills you haven't received yet but know you owe, like employee wages for the last week of the month), deferred revenue (money customers paid you for work you haven't finished yet).
- **Non-current**: long-term debt, lease obligations (now on-balance-sheet under ASC 842 / IFRS 16), deferred taxes, pension obligations.

Off-balance-sheet liabilities — operating leases pre-2019, special-purpose entities (Enron), purchase commitments — are where the buried bodies live. Modern standards have pulled most of them on-balance-sheet, but always read the contingencies footnote.

## Equity

Equity is what belongs to the owners after all the bills are paid. It is the "residual interest" in the company.

- **Paid-in capital** (common stock + APIC) — what investors put in.
- **Retained earnings** — cumulative net income minus dividends. This is the profit the company has kept over the years to reinvest in itself, rather than paying it out to shareholders.
- **Treasury stock** — shares the company has bought back, held as a contra-equity account. (A "contra-equity" account is just a fancy way of saying it subtracts from the total equity).
- **Accumulated other comprehensive income (AOCI)** — currency translation, mark-to-market on certain securities.

## Key ratios

Managers use ratios to see if the company is healthy or headed for a crash. Ratios turn big, abstract numbers into comparable scores.

**Liquidity:**
- **Current ratio** = current assets / current liabilities. >1 means short-term solvent. If this is below 1, you essentially don't have enough cash or near-cash to pay the bills coming due this year.
- **Quick ratio** = (cash + receivables) / current liabilities. Excludes inventory — useful for businesses where inventory is slow to turn.

**Solvency:**
- **Debt-to-equity** = total debt / equity. Capital structure aggressiveness. High debt-to-equity means you are taking a big risk by betting others' money on your success.
- **Interest coverage** = EBIT / interest expense. How many times over the business can pay its interest. Think of this as a "safety buffer." If your interest coverage is 1.5x, one bad month could mean you miss a payment.

**Efficiency:**
- **Asset turnover** = revenue / total assets. How much revenue each dollar of assets produces. This tells you if you are getting your money's worth out of your equipment and buildings.
- **Inventory days** = (inventory / COGS) × 365. How long inventory sits before being sold.
- **Days sales outstanding (DSO)** = (receivables / revenue) × 365. How long customers take to pay. If your DSO is 60 days but your suppliers want to be paid in 30, you have a cash gap you'll have to fill somehow.

**Returns:**
- **Return on assets (ROA)** = net income / assets.
- **Return on equity (ROE)** = net income / equity. The DuPont decomposition: \`ROE = Net margin × Asset turnover × Equity multiplier\` — efficiency, asset use, and leverage.

## Working capital

\`Working capital = current assets - current liabilities\`

The **cash conversion cycle** = DSO + Inventory days − Days payable outstanding. This is how many days a dollar is tied up between paying suppliers and being paid by customers. Amazon famously runs *negative* working capital — they collect from customers before paying suppliers, so growth funds itself.

Imagine you run a lemonade stand. You buy lemons on Monday (Accounts Payable) but don't pay the store until Friday. You sell the lemonade on Tuesday for cash. You have the money in your pocket for three days before you have to pay the lemon store. That’s negative working capital—a huge advantage for growth.

Fast-growing businesses with long receivable cycles or heavy inventory consume cash even when profitable. This is why "growth companies" raise money. The fastest way to destroy a profitable business is to scale it without managing working capital. If you grow so fast that you spend all your cash on inventory and your customers don't pay you for 90 days, you will run out of money and go bankrupt, even if you are selling your product for a huge profit.`,
      videos: [
        { title: "The Ultimate Guide to Financial Statements", source: "YouTube", videoId: "eorpdJUWfTA", startSeconds: 540, fallbackSearchQuery: "balance sheet explained" },
        { title: "Aswath Damodaran \u2014 Balance Sheet", source: "YouTube \u2014 NYU Stern", videoId: "cSuc2HHQpxc", fallbackSearchQuery: "Damodaran balance sheet explained" },
      ],
      readings: [
        { title: "Why Discounted Cash Flow Doesn't Work for Banks", source: "Harvard Business Review", url: "https://hbr.org/2009/05/why-discounted-cash-flow-doesnt-work-for-banks" },
        { title: "A Refresher on Return on Assets and Return on Equity", source: "Harvard Business Review", url: "https://hbr.org/2016/04/a-refresher-on-return-on-assets-and-return-on-equity" },
      ],
      exercise: { id: "ex1", scenario: "You are the manager of 'GadgetFlow,' a wholesale electronics distributor that is growing revenue by 50% year-over-year. Despite reporting high profits on your income statement, your bank account is nearly empty, and you are struggling to pay your warehouse rent this month because your customers (retail stores) take 60 days to pay you, while your suppliers demand payment in 15 days.", task: "Identify the specific 'Efficiency' ratio you should prioritize improving to solve your cash shortage, and propose one operational change to GadgetFlow's business model to move toward a more favorable cash conversion cycle." }
    },
    {
      id: "l4",
      title: "The cash flow statement",
      summary: "Reconciles accrual profit to actual cash, broken into operating, investing, and financing.",
      body: `# The cash flow statement

Starts with net income, undoes the non-cash items, and tells you where cash actually went. Many investors read it first, because it's the hardest to manipulate. While profits on an Income Statement can be massaged by accounting rules, cash is objective: you either have the dollars in the bank or you don't. Think of it as the "truth serum" of financial reporting.

## Three sections

1. **Operating (CFO)** — cash from the core business. Add back depreciation and amortization, adjust for working-capital changes, add back stock-based compensation. This section shows if the company's daily operations actually generate money. For a bakery, this is the cash from selling bread minus the cash paid for flour and electricity.
2. **Investing (CFI)** — capex, acquisitions, asset sales, purchases/sales of marketable securities. This tracks how the company is betting on its future. If a tech company buys new servers or a competitor, the cash outflow shows up here.
3. **Financing (CFF)** — debt issued/repaid, equity issued/bought back, dividends paid. This reflects how the company moves money between itself and its owners or lenders. Taking out a loan is a cash inflow; paying a dividend is a cash outflow.

The sum equals the change in cash on the balance sheet. That's the audit check: if the cash flow statement says cash went up $50, the cash line on the balance sheet must rise by $50. If these numbers don't match, the books are broken.

## Direct vs indirect method

The **indirect method** (what 99% of companies use) starts with net income and adjusts. The **direct method** shows actual cash receipts and disbursements. Both arrive at the same CFO number, but the indirect method makes the reconciliation between accrual and cash explicit, which is why analysts prefer it. The indirect method is like explaining your bank balance by starting with your salary and listing why your actual savings are different (bills, taxes, etc.), rather than just listing every single grocery receipt.

## Free cash flow

\`FCF = Operating cash flow - Capex\` 

This is the cash a business actually generates for owners after maintaining its asset base. It's the number investors care about most because it's what's actually available to pay dividends, buy back shares, pay down debt, or reinvest. Imagine a lemonade stand that makes $100 in profit but needs to spend $40 every year just to replace broken pitchers and squeezed-out juicers. Its "Free Cash Flow" is only $60. That $60 is what the owner can actually take home without the business falling apart.

Variations:
- **FCF to firm (FCFF)** — available to *all* capital providers (debt and equity). Used in enterprise valuation. This represents the total "pie" available before anyone—bankers or shareholders—gets paid.
- **FCF to equity (FCFE)** — after debt service. Used in equity valuation. This is what's left for the shareholders after the bank takes its cut of interest and principal.
- **Owner earnings** (Buffett's term) — net income + D&A − maintenance capex (excluding growth capex).

## Capex: maintenance vs growth

Maintenance capex keeps the existing business running. Growth capex builds new capacity. Companies rarely separate them, but smart analysts try. A business with $100m total capex and only $30m needed for maintenance has much more "true" free cash flow than the headline FCF suggests — the other $70m is voluntary reinvestment for growth. If a manager ignores maintenance capex, the business will eventually crumble because the equipment will fail, even if the "profits" look good on paper today.

## Why CFO ≠ Net income

Depreciation reduces net income but is non-cash, so it gets added back. A growing receivables balance means revenue was booked but cash not yet collected — subtract it. This happens when you sell a product on credit; your profit goes up, but your wallet stays empty until the customer pays. Inventory build-up consumes cash — subtract it. You spent money to put products on shelves that haven't sold yet. Higher payables = haven't paid suppliers yet = source of cash — add.

Stock-based compensation (SBC) is the modern wedge: it's a real cost (existing owners are diluted) but no cash leaves the building, so it's added back to CFO. Tech companies with huge SBC look much cash-richer than they really are. While the company avoids spending cash by giving employees shares, the original shareholders are paying for it because their slice of the company pie is getting smaller.

## Worked example

Net income $100, depreciation $30, SBC $15, accounts receivable up $20, inventory up $10, payables up $5.

\`CFO = 100 + 30 + 15 − 20 − 10 + 5 = $120\` 

More cash than profit — the non-cash add-backs swamped the working capital build. But $15 of that came from stock-based compensation — economically a real cost to shareholders.

## Reading patterns

- **Mature, healthy business**: Positive CFO, modest negative CFI (maintenance capex), negative CFF (dividends + buybacks). Cash steady. This is a "cash cow" that funds itself and gives money back to owners.
- **Growth company**: Positive but lumpy CFO, large negative CFI (growth capex), positive CFF (raising money). Cash building. They are burning cash to build their future, usually funded by outside investors.
- **Distress**: Negative or shrinking CFO, no CFI (can't invest), positive CFF that's all debt. Watch out. The business is losing money on its operations and surviving only by borrowing more from the bank.
- **Mature decliner**: Strong CFO, near-zero CFI (over-harvested asset base), huge CFF outflows. Buybacks funded by underinvestment — short-term beautiful, long-term fatal. This is like a landlord who stops repairing the roof to keep the rental income high—eventually, the building becomes uninhabitable.`,
      videos: [
        { title: "The Ultimate Guide to Financial Statements", source: "YouTube", videoId: "eorpdJUWfTA", startSeconds: 1196, fallbackSearchQuery: "cash flow statement explained" },
        { title: "Warren Buffett on EBITDA", source: "YouTube", videoId: "l82kIjqBtqw", fallbackSearchQuery: "Warren Buffett EBITDA criticism" },
      ],
      readings: [
        { title: "Cash Is King: Lessons from the 2008 Storm", source: "Harvard Business Review", url: "https://hbr.org/2009/09/leadership-in-a-crisis-2" },
        { title: "Stop Making Plans; Start Making Decisions", source: "Harvard Business Review", url: "https://hbr.org/2006/01/stop-making-plans-start-making-decisions" },
      ],
      exercise: { id: "ex1", scenario: "You are analyzing a high-growth SaaS company that reports a Net Income of $5M but an Operating Cash Flow (CFO) of negative $2M. You notice that their Accounts Receivable increased by $8M over the year because they allowed large enterprise clients to wait 120 days to pay their invoices.", task: "Explain why this company has a cash shortage despite being profitable, and advise the CEO on one specific change to their credit terms that would improve their Free Cash Flow." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "Which equation must always hold on a balance sheet?", choices: ["Revenue = Costs + Profit", "Assets = Liabilities + Equity", "Cash = Income − Expenses", "Equity = Assets + Liabilities"], answerIndex: 1, explanation: "The fundamental accounting identity; double-entry bookkeeping preserves it." },
    { id: "q2", prompt: "Which primary financial statement answers 'Are we profitable over this period?'", choices: ["Balance sheet", "Income statement", "Cash flow statement", "Statement of shareholders' equity"], answerIndex: 1, explanation: "The income statement measures profitability across a period, not a point in time." },
    { id: "q3", prompt: "A firm delivers a $10,000 consulting engagement in March and is paid in May. Under GAAP, revenue is recognized in:", choices: ["March", "April", "May", "When the invoice is issued"], answerIndex: 0, explanation: "Accrual accounting recognizes revenue when earned (service delivered), not when cash is received." },
    { id: "q4", prompt: "Which stakeholder is most likely to focus on the balance sheet and interest coverage rather than earnings growth?", choices: ["Equity analyst", "Bondholder / lender", "Marketing manager", "Retail customer"], answerIndex: 1, explanation: "Debt investors care about the firm's ability to service and repay obligations." },
    { id: "q5", prompt: "A SaaS company collects $1,200 up front for a 12-month contract in January. What appears on the January balance sheet?", choices: ["$1,200 revenue and no liability", "Cash +$1,200 and deferred revenue +$1,100", "Cash +$1,200 and equity +$1,200", "Accounts receivable +$1,200"], answerIndex: 1, explanation: "Only 1/12 is earned; the remaining $1,100 sits as deferred revenue, a liability." },
    { id: "q6", prompt: "Under accrual accounting, when is revenue recognized?", choices: ["When cash is received", "When the contract is signed", "When the product/service is delivered", "At year end"], answerIndex: 2, explanation: "Revenue is recognized when earned (delivered), not when cash moves." },
    { id: "q7", prompt: "Gross profit equals:", choices: ["Revenue − operating expenses", "Revenue − COGS", "Revenue − all costs", "EBITDA − depreciation"], answerIndex: 1, explanation: "Gross profit sits above operating expenses on the P&L." },
    { id: "q8", prompt: "A software company posts 78% gross margin; a supermarket posts 25%. The best interpretation is:", choices: ["Software company is better managed", "Different cost structures — margins are only comparable within an industry", "Supermarket is losing money", "Software company is over-charging"], answerIndex: 1, explanation: "Margins vary by business model; compare within peer groups only." },
    { id: "q9", prompt: "Which is a common red flag on the income statement?", choices: ["Revenue and gross margin both rising", "Non-recurring charges that recur every year", "Operating expenses growing slower than revenue", "R&D reported separately from SG&A"], answerIndex: 1, explanation: "'Non-recurring' items appearing every year usually mask ongoing operating costs." },
    { id: "q10", prompt: "Warren Buffett's chief criticism of EBITDA as a proxy for cash generation is:", choices: ["It ignores taxes", "It treats depreciation as if it weren't a real cost, though the underlying assets must eventually be replaced", "It excludes revenue", "It is not GAAP"], answerIndex: 1, explanation: "Depreciation reflects wear on real productive assets that will require reinvestment." },
    { id: "q11", prompt: "Free cash flow is best defined as:", choices: ["Net income + depreciation", "Operating cash flow − capex", "Revenue − COGS", "Cash on the balance sheet"], answerIndex: 1, explanation: "FCF removes the cash needed to sustain the asset base." },
    { id: "q12", prompt: "Which asset is typically the most subjective figure on a balance sheet?", choices: ["Cash", "Accounts receivable", "Goodwill", "Inventory"], answerIndex: 2, explanation: "Goodwill represents the premium paid over identifiable assets and is highly judgment-driven." },
    { id: "q13", prompt: "Amazon has historically run negative working capital because:", choices: ["It doesn't sell inventory", "It collects from customers before paying suppliers", "It has no fixed assets", "It is unprofitable"], answerIndex: 1, explanation: "Fast cash conversion combined with long payables lets growth fund itself." },
    { id: "q14", prompt: "A firm has current assets $200, current liabilities $250. Its current ratio and interpretation:", choices: ["0.8 — potential short-term liquidity risk", "1.25 — comfortable", "0.5 — insolvent", "1.0 — break-even"], answerIndex: 0, explanation: "Below 1.0 means current obligations exceed current resources — a liquidity warning." },
    { id: "q15", prompt: "Using DuPont, ROE decomposes into:", choices: ["Margin × Turnover × Leverage", "Margin + Turnover + Leverage", "Revenue × Assets ÷ Equity", "Gross margin × tax rate"], answerIndex: 0, explanation: "ROE = Net margin × Asset turnover × Equity multiplier." },
    { id: "q16", prompt: "A company with high operating leverage has:", choices: ["Mostly variable costs", "Mostly fixed costs", "Low debt", "High inventory"], answerIndex: 1, explanation: "Fixed-cost-heavy structures amplify both gains and losses with revenue swings." },
    { id: "q17", prompt: "Which item is added back to net income to arrive at operating cash flow (indirect method)?", choices: ["Interest income", "Depreciation and amortization", "Dividends paid", "Capex"], answerIndex: 1, explanation: "D&A is non-cash, so it's added back." },
    { id: "q18", prompt: "A company reports positive net income but consistently negative operating cash flow. Most likely explanation:", choices: ["Rapidly growing receivables and inventory tying up cash", "Excessive dividends", "Too little depreciation", "High tax rate"], answerIndex: 0, explanation: "Working capital build-up consumes cash even when the P&L looks healthy." },
    { id: "q19", prompt: "Stock-based compensation is added back to CFO because:", choices: ["It is not a real cost", "No cash leaves the business", "It is tax-deductible", "It is paid to executives"], answerIndex: 1, explanation: "SBC dilutes shareholders — a real economic cost — but does not consume operating cash." },
    { id: "q20", prompt: "A mature, healthy business usually shows:", choices: ["Positive CFO, modest negative CFI, negative CFF", "Negative CFO, positive CFF from debt, zero CFI", "Positive CFF only", "Positive CFI"], answerIndex: 0, explanation: "Cash generated from operations funds maintenance capex and returns to shareholders." },
  ],
  assignment: {
    id: "a1",
    title: "Read a 10-K",
    prompt: "Pick any public company. Write a 300–500 word memo answering: (1) What are revenue, gross margin, operating margin, and net margin for the most recent year? (2) Did working capital consume or release cash? (3) What is free cash flow, and how does it compare to net income? Cite specific numbers and explain what they suggest about the business.",
    rubric: "Specific numbers cited (3 pts). Correct interpretation of margins (3 pts). Correct identification of working-capital impact (2 pts). Clear FCF vs. NI comparison and insight (2 pts).",
  },
};