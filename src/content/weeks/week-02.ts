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
      body: `# Cost behavior

Financial accounting reports to outsiders. Managerial accounting helps insiders decide. The first move in any managerial problem — pricing, outsourcing, capacity planning, product-line decisions — is classifying costs by how they *behave* when volume changes, not by what GAAP label they wear. Think of this like a chef looking at ingredients: financial accounting tells you the price of the basket, but managerial accounting tells you which ingredients run out after ten orders and which ones stay on the shelf no matter how many customers walk in.

## The four behaviors

- **Variable** — change in lock-step with output (raw materials, hourly labor, payment processing, shipping). Variable cost per unit is roughly constant; total variable cost scales linearly with volume. For a pizza shop, the dough and cheese are variable costs; if you sell zero pizzas, you spend $0 on cheese. If you sell 100, you spend 100 times the cost of one pizza's worth of cheese.
- **Fixed** — constant within a *relevant range* (rent, salaried headcount, depreciation, software licenses). Total fixed cost is flat; fixed cost per unit falls as volume rises — this is *economies of scale* in its simplest form. Your rent stays the same whether you sell one pizza or a thousand. This is why high-volume businesses can charge less; they spread that static rent cost over more units.
- **Mixed / semi-variable** — fixed base plus variable component (utilities with a connection charge, sales reps with base + commission, cloud bills with a minimum commit). Think of your cell phone bill: you pay a flat $50 monthly fee (fixed) plus extra for any international roaming minutes you use (variable).
- **Step costs** — fixed within a capacity band, then jump when capacity is added (a second shift, another truck, another warehouse). Step costs are why scaling never feels smooth. A single delivery driver can handle 20 deliveries a night. As soon as you get the 21st order, you have to hire a second driver, doubling your labor cost instantly even though you only added one order of revenue.

## Why GAAP labels mislead

A single GAAP line — "SG&A" (Selling, General, and Administrative expenses) or "cost of revenue" — usually contains a mix of all four behaviors. The CFO's monthly report may show that SG&A "grew with revenue," but the actionable question is *which part* of SG&A is variable and would shrink if revenue fell next quarter. Managerial accounting strips off the GAAP wrapper and re-cuts costs by behavior, by product, by customer, or by activity — whatever the decision requires. If you don't do this, you might mistakenly cut a 'fixed' cost thinking it will save you money, only to find you've destroyed your ability to produce anything at all.

## Operating leverage

The ratio of fixed to total cost determines *operating leverage*: how much a 1% change in revenue moves operating profit. High-fixed-cost businesses (airlines, semiconductor fabs, hotels, SaaS) have brutal operating leverage — wonderful on the way up, catastrophic on the way down. Low-fixed-cost businesses (consulting, staffing agencies, dropshipping) flex with the cycle but never enjoy the same upside. Imagine a software company: it costs millions to write the code (fixed cost), but $0 to sell it to an extra customer (zero variable cost). Every new sale is almost pure profit. Conversely, a supermarket has low leverage; they have to buy every apple they sell, so their profit margins stay thin even when sales boom.

## Decomposing a mixed cost

The **high-low method**: take the highest and lowest activity months. This helps you separate the 'static' part of a bill from the 'usage' part.

\`Variable rate = (cost_high − cost_low) / (units_high − units_low)\`

Then back-solve for the fixed component using either point. Crude but quick. Linear regression on 12+ months of data is better when you have it, and a scatter plot will instantly show whether the relationship is even linear (it usually isn't — there are step jumps).

## The relevant range warning

Every "fixed" cost is fixed only inside a range. Double the volume and you'll need a bigger warehouse, more managers, more IT. Treat fixed costs as fixed for the decision in front of you, not forever. In business, 'fixed' is just a temporary state of being until your success forces you to expand.`,
      videos: [
        { title: "Managerial Accounting Full Course Step by Step", source: "YouTube", videoId: "Axeecq5TByU", fallbackSearchQuery: "cost behavior managerial accounting explained" },
        { title: "Operating Leverage Explained", source: "YouTube", videoId: "Ea7sXAGTGXE", fallbackSearchQuery: "operating leverage fixed variable costs" },
      ],
      exercise: { id: "ex1", scenario: "You run a boutique fitness studio. Your monthly rent is $5,000, and you pay your yoga instructors $40 per hour-long class they teach. Last month (July), you held 100 classes and had total costs of $9,000. In August, you expect to grow to 150 classes and are considering hiring a full-time receptionist for $3,000/month to handle the extra foot traffic.", task: "Identify which costs in this scenario are fixed vs. variable, and calculate what the total cost for August will be if you decide to hire the receptionist." }
    },
    {
      id: "l2",
      title: "Contribution margin and break-even",
      summary: "The single most useful framework for short-run decisions.",
      body: `# Contribution margin

\`Contribution margin per unit = Price − Variable cost per unit\`

It's what each additional sale *contributes* to covering fixed costs, and after that, to profit. The CM ratio — CM ÷ Price — is the same idea expressed as a percentage of revenue. Both numbers answer the central short-run question: *if we sell one more unit, how much does the bottom line move?* 

Think of each sale as filling a bucket. The first few dollars cover the immediate costs of making the product (like the beans in a cup of coffee) and the rest—the Contribution Margin—is poured into a larger bin to pay for your rent and insurance (Fixed Costs). Once that rent bin is full, every extra dollar of CM goes straight into your pocket as profit.

## Break-even

\`Break-even units = Fixed costs / Contribution margin per unit\`

\`Break-even revenue = Fixed costs / Contribution margin ratio\`

Break-even isn't a goal — it's a *reference point*. It tells you the volume below which you bleed and above which you print. Plot total revenue and total cost on the same chart; the intersection is break-even, the gap to the right is profit, the gap to the left is loss. The slope of the profit line equals the contribution margin. Managers use this to determine viability: if your break-even point is 500 units but your factory can only produce 400, your business model is fundamentally broken even before you open the doors.

## Worked example — coffee shop

Price $5, variable cost $1.50, fixed costs $14,000/month.

- CM per cup = $3.50, CM ratio = 70%.
- Break-even = 14,000 / 3.50 = **4,000 cups/month** (~133/day).
- To earn $7,000 profit: (14,000 + 7,000) / 3.50 = **6,000 cups**.
- To earn $7,000 profit *after* a $1 price cut (CM falls to $2.50): 21,000 / 2.50 = **8,400 cups** — a 40% volume lift to absorb a 20% price cut.

The last line is why discounting is dangerous. A small price cut requires a large volume gain just to break even on profit. If the coffee shop owner thinks a $1 discount will attract more customers, they must realize they need to sell over 2,000 more cups just to end up with the same $7,000 profit they had before. If they can't handle that extra traffic, the discount actually loses them money.

## Margin of safety

\`Margin of safety = (Actual − Break-even) / Actual revenue\`

How far revenue can fall before the business loses money. A 30% margin of safety is comfortable; a 5% margin of safety means a bad month wipes out the year. It represents your "breathing room." If a sudden recession or a new competitor hits the neighborhood, a high margin of safety ensures you can survive a dip in sales without going into debt.

## Decisions CM solves cleanly

- **Drop a product?** If it has positive CM and contributes to shared fixed costs that won't go away, dropping it *reduces* total profit. For example, if a restaurant stops selling dessert because it's "unprofitable," they might find that the kitchen rent (a fixed cost) stays the same, but they no longer have the $2 margin from every cake slice to help pay it.
- **Accept a special order?** Compare the price to *variable* cost only, provided fixed costs are unchanged and the order doesn't cannibalize regular customers. If a hotel has empty rooms (fixed costs already paid), selling a room for $60 is better than $0, as long as the laundry and cleaning (variable costs) are less than $60.
- **Make vs buy?** Compare the *avoidable* cost of making (variable + truly avoidable fixed) to the purchase price plus any quality/lead-time cost.
- **Promotional discount?** Compute the volume lift required at the lower CM to net the same profit. Usually sobering.
- **Sales-mix shift?** Push the mix toward higher-CM products even if their revenue is smaller; revenue is vanity, CM is sanity. In a software company, selling a $1,000 subscription with $0 variable cost is much better than selling a $2,000 computer that costs you $1,800 to build.

## Multi-product break-even

When the mix is stable, use a weighted-average CM across products. When the mix shifts dramatically with volume (luxury cars vs economy cars), break-even shifts with it; one number won't cover both.`,
      videos: [
        { title: "Managerial Accounting Full Course Step by Step", source: "YouTube", videoId: "6lwZUrDK69c", fallbackSearchQuery: "contribution margin break-even analysis explained" },
        { title: "Break-even and CVP", source: "YouTube", videoId: "tuKLU6aQnJg", fallbackSearchQuery: "break-even and CVP analysis" },
        { title: "Contribution Margin", source: "YouTube", videoId: "pm6Eo9qiUIY", fallbackSearchQuery: "contribution margin explained" },
      ],
      exercise: { id: "ex1", scenario: "You manage a boutique gym with $10,000 in monthly fixed costs (rent, utilities, equipment leases). Memberships are $100/month, and each member costs you $20/month in variable expenses like cleaning supplies and credit card fees. Currently, you have 150 members.", task: "Calculate your current monthly profit and your margin of safety percentage, then determine if you should accept a local corporate deal offering 30 new memberships at heavily discounted rate of $40/month (assume no change to fixed costs)." }
    },
    {
      id: "l3",
      title: "Allocating overhead",
      summary: "Traditional allocation distorts product profitability. ABC fixes it when products consume resources differently.",
      body: `# Overhead allocation

Direct materials and direct labor trace cleanly to products — you can point at a unit and see the steel and the assembly hour. Overhead doesn't trace. It's the supervisor's salary, the factory rent, the IT department, the procurement function. To know whether each product is profitable, you have to spread overhead somehow, and the *somehow* is where great managerial errors are born. Think of overhead like a shared household utility bill; if one person uses 90% of the hot water but you split the bill evenly by the number of people, you are subsidizing that person's long showers. In business, if you don't assign these costs correctly, you might think you’re making money on a product while actually losing it on every sale.

## Traditional allocation

Pick one driver (historically direct labor hours, more recently machine hours or revenue). Compute the overhead rate:

\`Overhead rate = Total overhead / Total driver units\`

Multiply by each product's driver consumption to get its allocated overhead, then add direct costs to get full cost. Done.

The problem: high-volume, simple products consume a lot of the driver and absorb most of the overhead, even though they barely touch overhead activities. Low-volume, complex products consume little of the driver but tie up disproportionate amounts of engineering, setup, and quality time. The result — *cross-subsidy*: simple products look unprofitable, complex products look like gold. Managers respond by pushing the wrong products and walking away from the right ones. 

Imagine a bakery that makes 1,000 plain loaves of bread (simple) and 10 custom wedding cakes (complex). If you allocate overhead (rent/power) based on the number of units, the bread eats 99% of the rent. But the cakes required hours of custom design and special storage that the bread didn't. This "cross-subsidy" makes the bread look expensive to make and the cakes look like pure profit, leading the baker to stop making bread—the very thing keeping the lights on.

## Activity-based costing (ABC)

ABC, developed at HBS by Robin Cooper and Robert Kaplan in the late 1980s, replaces the single driver with multiple cost pools and activity drivers. Instead of one big bucket of "overhead," we break it into smaller buckets based on what actually causes the work.

1. **Identify activities** that consume resources — machine setup, quality inspection, order processing, customer service, engineering changes. These are the specific things employees do that cost the company money.
2. **Pool the cost** of each activity (people, equipment, space). If the quality team costs $100,000 a year, that is your "Inspection Pool."
3. **Pick a driver** that causes the cost of each activity — number of setups, inspections, orders, change orders, support tickets. A driver is the "Why." Why was the quality team busy? Because they had to perform *inspections*.
4. **Allocate** by actual consumption of each driver. If a product requires 10 inspections, it gets charged for 10 units of the quality pool.

ABC typically reveals:
- Low-volume specialty products are *less* profitable than they looked — sometimes negatively profitable.
- High-volume standard products are *more* profitable than they looked.
- A long tail of small customers may be destroying value. These are customers who order tiny amounts but call customer service every day, essentially consuming more in support costs than they pay in profit margin.

## The classic case — Schrader Bellows

An early ABC study at a valve manufacturer found that the 75% lowest-volume SKUs (Stock Keeping Units, or individual product versions) were collectively losing money, while a handful of high-volume SKUs were subsidizing them. Pruning the tail (discontinuing those money-losers) and repricing the rest doubled operating profit without losing meaningful revenue.

## When ABC is worth the trouble

ABC has a real implementation cost — interviews, data collection, ongoing maintenance. It's worth it when:
- Overhead is a *large* share of total cost. (If your rent and tech stack are huge compared to your raw materials, you need to know where that money is going).
- Products or customers vary widely in complexity.
- Decisions (pricing, line pruning, customer segmentation) hinge on per-unit profitability.

If overhead is 5% of cost and all products are similar, a simple driver is fine. Investing in complex tracking for a tiny cost is like spending $100 on a spreadsheet to track $5 worth of stamps.

## Time-driven ABC

A simplified successor. Estimate the practical capacity (in time) of each resource and the time each activity takes. Multiply. Avoids the interview-heavy surveys of classic ABC and updates cleanly as processes change. Used widely in services and healthcare. Instead of asking staff what percentage of their time they spend on a task (which is often guessed), managers simply measure how many minutes a task takes and multiply it by the cost-per-minute of the staff.`,
      videos: [
        { title: "Managerial Accounting Full Course Step by Step", source: "YouTube", videoId: "6lwZUrDK69c", fallbackSearchQuery: "activity based costing explained" },
        { title: "Allocating Overhead", source: "YouTube", videoId: "vMdxzH5IUQ4", fallbackSearchQuery: "allocating overhead cost accounting" },
        { title: "Activity-Based Costing", source: "YouTube", videoId: "uIyydrCcWiM", fallbackSearchQuery: "activity-based costing explained" },
        { title: "Time-Driven ABC", source: "YouTube", videoId: "o2TQyrmGsd4", startSeconds: 240, fallbackSearchQuery: "time-driven activity based costing" },
      ],
      exercise: { id: "ex1", scenario: "You manage a regional printing company. Your 'Standard Flyer' (high volume, automated) and 'Custom Wedding Invite' (low volume, requires heavy graphic design and manual ink mixing) are both allocated overhead based on total machine hours. Currently, your accounting shows the flyers are barely breaking even, so you are considering a 20% price hike that might drive customers to competitors.", task: "Identify two specific activity cost pools (besides machine hours) that likely distinguish these two products, and explain how switching to ABC might change your decision regarding the flyer price hike." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "A bakery has fixed costs of $6,000/month, sells loaves for $5 with $2 variable cost each. Break-even is:", choices: ["1,200 loaves", "2,000 loaves", "3,000 loaves", "6,000 loaves"], answerIndex: 1, explanation: "CM = $3. 6000/3 = 2000 loaves." },
    { id: "q2", prompt: "Which cost is best classified as fixed within the relevant range?", choices: ["Raw materials", "Salaried plant manager", "Shipping per unit", "Credit card processing fees"], answerIndex: 1, explanation: "Salaried headcount does not change with each additional unit sold." },
    { id: "q3", prompt: "Doubling output but paying a second warehouse rent is an example of:", choices: ["Variable cost", "Step cost", "Sunk cost", "Mixed cost"], answerIndex: 1, explanation: "Fixed inside a capacity band, jumping when capacity is added." },
    { id: "q4", prompt: "A firm has fixed cost $100k and variable cost 60% of sales. If revenue rises 10%, operating profit rises approximately:", choices: ["10%", "15%", "25% or more (depends on current margin)", "0%"], answerIndex: 2, explanation: "High operating leverage amplifies revenue changes into much larger profit changes." },
    { id: "q5", prompt: "A manager sees SG&A grow with revenue and calls it 'variable.' The actionable next step is to:", choices: ["Assume it will always scale", "Decompose SG&A into its variable, fixed, and step components", "Cut SG&A across the board", "Ignore SG&A"], answerIndex: 1, explanation: "Managerial decisions require cost behavior detail, not GAAP labels." },
    { id: "q6", prompt: "Accepting a special one-time order at a price below full cost is rational when:", choices: ["The price exceeds variable cost and fixed capacity is available", "It's never rational", "The price covers allocated overhead", "Customer is a big brand"], answerIndex: 0, explanation: "Only avoidable costs are relevant; idle capacity makes the extra CM pure profit." },
    { id: "q7", prompt: "Contribution margin per unit equals:", choices: ["Price − full cost", "Price − variable cost per unit", "Revenue − fixed cost", "Gross profit ÷ units"], answerIndex: 1, explanation: "CM measures the amount each unit contributes to covering fixed cost and profit." },
    { id: "q8", prompt: "A product cut its price 20% and CM ratio fell from 50% to 40%. To keep operating profit constant, volume must rise approximately:", choices: ["10%", "25%", "33%", "50%"], answerIndex: 1, explanation: "New CM per dollar of new revenue is 40%; roughly 25% more volume is needed to make up the lost CM." },
    { id: "q9", prompt: "A product line has positive CM but is being considered for discontinuation because it 'loses money' after allocated fixed costs. The likely result of cutting it is:", choices: ["Higher total profit", "Lower total profit if the fixed costs remain", "No effect", "Higher variable costs"], answerIndex: 1, explanation: "Unavoidable fixed costs stay behind and must be absorbed by remaining products." },
    { id: "q10", prompt: "Margin of safety measures:", choices: ["Cash cushion in the bank", "How far revenue can fall before losses begin", "Gross margin buffer", "Warranty reserves"], answerIndex: 1, explanation: "It is (Actual revenue − Break-even revenue) ÷ Actual revenue." },
    { id: "q11", prompt: "Activity-based costing most improves accuracy when:", choices: ["Products are identical", "Overhead is small", "Products consume resources very differently", "Direct labor dominates costs"], answerIndex: 2, explanation: "ABC matters when activity consumption varies across products." },
    { id: "q12", prompt: "A traditional overhead allocation based on direct labor hours will typically:", choices: ["Under-cost high-volume products and over-cost low-volume complex products", "Over-cost high-volume products and under-cost low-volume complex products", "Be perfectly accurate", "Ignore overhead"], answerIndex: 1, explanation: "High-volume products absorb overhead disproportionate to their true resource use." },
    { id: "q13", prompt: "A cost pool for 'machine setups' would use which activity driver?", choices: ["Direct labor hours", "Number of setups", "Square footage", "Sales revenue"], answerIndex: 1, explanation: "Each setup causes its cost; the driver should match the cost cause." },
    { id: "q14", prompt: "A firm using ABC discovers that a specialty product is actually loss-making. Which action is best justified by the analysis alone?", choices: ["Raise price, redesign for less complexity, or exit the line", "Cut all marketing", "Move to variable-cost pricing", "Reduce direct labor"], answerIndex: 0, explanation: "ABC pinpoints the source of loss; corrective actions target the drivers." },
    { id: "q15", prompt: "Time-driven ABC's main advantage over traditional ABC is:", choices: ["It eliminates all overhead", "It scales more easily via time equations and unused-capacity tracking", "It uses only one driver", "It ignores complexity"], answerIndex: 1, explanation: "TDABC (Kaplan and Anderson) replaces interviews with time estimates per activity, making it maintainable." },
  ],
  assignment: {
    id: "a1",
    title: "Price and break-even analysis",
    prompt: "Design the unit economics of a hypothetical small business (food truck, e-commerce SKU, agency engagement). Specify price, variable cost per unit, fixed cost per month. Compute (1) contribution margin per unit and ratio, (2) break-even units and revenue, (3) units needed to make $10k/month profit, (4) one strategic recommendation based on your numbers.",
    rubric: "Realistic, internally consistent numbers (3 pts). Correct CM and BE math (3 pts). Correct target-profit calc (2 pts). Insightful recommendation tied to the math (2 pts).",
  },
};