import type { Week } from "../types";

export const week04: Week = {
  week: 4,
  title: "Microeconomics for Managers",
  tagline: "Supply, demand, elasticity, and why markets reach the prices they do.",
  topics: ["Supply and demand", "Elasticity", "Marginal analysis", "Market structure"],
  lessons: [
    {
      id: "l1",
      title: "Supply, demand, equilibrium",
      summary: "Markets coordinate strangers through prices. Shifts in supply or demand move equilibrium predictably.",
      body: `# Supply, demand, equilibrium

Microeconomics starts with the most elegant model in social science: two curves on a single graph that, taken together, explain why coffee costs what it costs, why housing in San Francisco is unaffordable, and why a sudden tariff ripples through dozens of industries. Think of this model as the 'operating system' of a market; it tells you how millions of independent decisions by buyers and sellers eventually settle on a single price.

## The demand curve

At higher prices, less is purchased; at lower prices, more. The curve slopes downward because (a) consumers substitute away from expensive goods toward cheaper alternatives (substitution effect) and (b) higher prices effectively reduce real income (income effect) — basically, when your favorite lunch spot raises prices by $5, you feel slightly 'poorer' because that same paycheck buys fewer meals. Shifters of the *whole curve* — not just movement along it — include changes in consumer income, prices of substitutes and complements (like how a spike in gasoline prices might decrease the demand for SUVs), expectations, tastes, and the number of buyers in the market. A shifter doesn't just change the price; it changes the underlying desire for the product at *every* price point.

## The supply curve

At higher prices, suppliers are willing to produce more; at lower prices, less. Slopes upward because rising prices cover the increasing marginal cost of bringing additional units to market (overtime labor, lower-quality ore, marginal acreage). Marginal cost is simply the extra cost of producing one more unit. For example, a bakery can make 100 loaves easily, but making 200 might require paying staff time-and-a-half or buying a second oven, so they'll only do it if the market price is high enough to cover those new expenses. Shifters of the whole curve include input prices (like the cost of flour), technology, taxes and subsidies, and the number of sellers.

## Equilibrium

The price at which the curves cross — quantity demanded equals quantity supplied. *Markets clear.* At any other price there is a shortage (price too low — demand exceeds supply) or a surplus (price too high). The price mechanism puts pressure on both sides to converge back to equilibrium. Imagine a popular concert where tickets are sold too cheaply: hundreds of people want them, but only 50 are available. That's a shortage. The 'pressure' to converge often comes from buyers offering to pay more, or sellers realizing they can raise prices without losing customers.

## Price controls — what really happens

Binding *price ceilings* set below equilibrium create persistent shortages, queues, black markets, and quality deterioration. Examples: rent control, gasoline price caps in the 1970s, ticket scalping. Binding *price floors* set above equilibrium create surpluses — agricultural commodities, minimum-wage unemployment in some labor markets. Whatever the goal, prevent the price mechanism from working and someone has to ration the goods by another method (waiting in line, political favor, queuing apps). If a manager ignores these signals, they might invest in a market where they aren't allowed to charge enough to cover their costs, leading to a slow death of the business through under-maintenance and poor service.

## Comparative statics

The real value of the model: predicting what happens when something exogenous shifts. Exogenous simply means something 'outside' the market—like a weather event or a new law—that forces the curves to move.

- A tariff on imported steel → leftward shift of supply for steel-using industries → higher equilibrium price, lower equilibrium quantity, deadweight loss.
- A new technology that halves the cost of solar panels → rightward shift of supply → falling price, rising quantity, displaced incumbents.
- A health scare about beef → leftward shift of demand for beef and rightward shift for chicken → relative price moves.

Managers who can sketch the four basic shifts (left/right on each curve) can reason about most market disruptions in seconds. For instance, if you run a pizza shop and a new low-carb diet trend goes viral, you should anticipate a leftward demand shift and potentially lower your prices or change your menu before your inventory spoils.

## Consumer and producer surplus

The area between the demand curve and the price line is **consumer surplus** — the value buyers got above what they paid. If you were willing to pay $4 for a coffee but it only cost $3, you enjoyed $1 of surplus. The area between the price line and the supply curve is **producer surplus** — sellers' margin above marginal cost. Their sum is *total welfare*. Anything that prevents trade (tax, tariff, quota, price control) destroys some of this surplus, called **deadweight loss**. Deadweight loss represents 'lost' happiness or profit—trades that *should* have happened because the buyer valued the item more than it cost to make, but didn't occur because of market interference.`,
      videos: [
        { title: "Supply and Demand \u2014 Crash Course Economics", source: "YouTube \u2014 Crash Course", url: "https://www.youtube.com/watch?v=g6lQl_EgIvw", fallbackSearchQuery: "supply demand crash course" },
        { title: "How the Price System Works \u2014 Hayek", source: "YouTube \u2014 Marginal Revolution University", url: "https://www.youtube.com/watch?v=R5Wn5n5SBYI", fallbackSearchQuery: "Hayek price system" },
        { title: "Supply and Demand \u2014 Crash Course Economics", source: "YouTube", videoId: "g9aDizJpd_s", fallbackSearchQuery: "supply demand equilibrium explained" },
        { title: "The Price System", source: "YouTube", videoId: "mr2fexY-utY", fallbackSearchQuery: "price system market coordination" },
      ],
      readings: [
        { title: "How Markets Fail", source: "Harvard Business Review", url: "https://hbr.org/2010/01/the-failure-of-free-market-economics" },
        { title: "The Hidden Wealth of Customers", source: "Harvard Business Review", url: "https://hbr.org/2012/05/the-hidden-wealth-of-customers" },
      ],
      exercise: { id: "ex1", scenario: "You manage a mid-sized regional airline. A massive new study is published globally proving that short-haul flights are significantly more harmful to the environment than previously thought, leading to a sudden 'shame' trend among your primary customer base. Simultaneously, a global oil crisis causes the price of jet fuel to double in a single month.", task: "Identify which way the demand curve and the supply curve for your flights will shift, and predict the resulting impact on the equilibrium price and quantity of your tickets." }
    },
    {
      id: "l2",
      title: "Elasticity",
      summary: "Quantifies how strongly quantity responds to price — the most actionable number in pricing.",
      body: `# Elasticity

The slope of a demand curve depends on units. *Elasticity* doesn't — it's the percentage change in quantity divided by the percentage change in price. Think of it as a measure of "stretchiness." If you pull the price string (change the price), how much does the quantity string stretch or shrink in response? Because it uses percentages, it allows managers to compare apples to oranges—or in this case, a $2 price drop on a $50 yoga mat versus a $2,000 price drop on a $50,000 car.

\`Price elasticity of demand = %ΔQ / %ΔP\`

## The cases

- |E| > 1 — **elastic.** Buyers are price-sensitive; cutting price raises revenue. Common for goods with many substitutes, large share of wallet, or non-urgent purchase (airline economy seats, branded cereal, restaurant meals). If you raise the price of a specific brand of cereal by 20%, customers simply reach for the cheaper box next to it.
- |E| < 1 — **inelastic.** Buyers are not very responsive; cutting price *lowers* revenue. Common for necessities, addictive goods, near-monopolies (insulin, gasoline in the short run, electricity). If the price of electricity goes up, you might turn off a few lights, but you likely won't stop using your refrigerator or charging your phone. You are "stuck" paying the higher price.
- |E| = 1 — **unit elastic.** Revenue is constant as price changes. This is the "sweet spot" where the gains from a higher price are exactly cancelled out by the loss in volume.

## Why managers care

The profit-maximizing markup is tied to elasticity. A markup is the difference between what it costs you to make one more unit (Marginal Cost) and what you sell it for (Price).

\`(P − MC) / P = 1 / |E|\`

The more inelastic demand, the higher the markup the firm can sustain. Branded prescription drugs (elasticity near 0 for patients with insurance) carry 90%+ gross margins; commodity steel (highly elastic) carries 10%. If a manager misjudges this—for example, raising prices on a highly elastic product—they may find that the small gain in per-unit profit is wiped out by a massive exodus of customers, leading to a total collapse in net profit.

## Determinants of elasticity

- **Substitutes available** — more substitutes → more elastic. Coke vs Pepsi is elastic at the brand level; soda overall is inelastic. If your product is unique, you have more power over price.
- **Share of budget** — bigger share → more elastic. A 10% rise in salt prices barely registers; a 10% rise in rent does. People don't shop around to save $0.10 on salt, but they will move houses to save $200 on rent.
- **Necessity vs luxury** — necessities tend toward inelastic. You need a heart medication regardless of price; you only want a designer handbag if the price feels right.
- **Time horizon** — demand is more elastic in the long run. Gasoline demand barely responds to a price spike this week; over five years, drivers buy more efficient cars. Humans are creatures of habit in the short term, but we adapt our lifestyles when prices stay high for years.

## Cross-price and income elasticity

- **Cross-price elasticity** = %ΔQ_A / %ΔP_B. This measures how the price of *one* thing affects the sales of *another*. Positive → substitutes (margarine vs butter); if butter gets expensive, people buy more margarine. Negative → complements (printers and ink); if printers get expensive, nobody buys them, so nobody needs to buy ink either.
- **Income elasticity** = %ΔQ / %ΔIncome. Positive → normal good (most things); as you make more money, you buy more clothes. Positive and >1 → luxury (fine wine, jewelry); these see huge sales booms when the economy is good. Negative → inferior good (bus rides, ramen); as people get richer, they stop taking the bus and buy a car, or stop eating ramen and buy steak.

## Estimating elasticity in practice

Nobody hands you E. You estimate it from controlled experiments (A/B price tests on a website), historical price changes, conjoint surveys (where you ask customers to choose between different price/feature bundles), or by analogy to comparable products. Even a rough estimate — "more elastic than 1, less than 3" — beats none. Without an estimate, you are flying blind; you might be leaving money on the table or accidentally driving away your most loyal customers.

## Worked example

A SaaS firm cuts price 10% and sees signups jump 25%. Elasticity = 2.5 — clearly elastic. Revenue effect: 1.10 × 1.25 / 1.0 = 1.375 — a 37% revenue lift even after the price cut. But variable cost rose 25% in line with units, and acquisition cost may also scale. The pricing decision needs gross-profit elasticity, not just revenue elasticity. Managers must remember that selling more units isn't always good if the cost to serve those extra customers consumes all the new revenue.`,
      videos: [
        { title: "Price Elasticity of Demand", source: "YouTube \u2014 Khan Academy", url: "https://www.youtube.com/watch?v=HHcblIxiAAk", fallbackSearchQuery: "price elasticity of demand" },
      ],
      readings: [
        { title: "The Power of Pricing", source: "Harvard Business Review", url: "https://hbr.org/2003/09/the-power-of-pricing" },
        { title: "Pricing to Create Shared Value", source: "Harvard Business Review", url: "https://hbr.org/2018/03/pricing-to-create-shared-value" },
      ],
      exercise: { id: "ex1", scenario: "You manage a regional coffee chain. Currently, a large latte costs $5.00, and you sell 1,000 units per day. Internal data suggests that your latte demand elasticity is 0.5 because you are the only high-end coffee shop in the downtown business district.", task: "Predict what will happen to your total daily revenue if you increase the price of a latte by 20%, and explain whether this move is likely to increase or decrease your total profit based on the elasticity provided." }
    },
    {
      id: "l3",
      title: "Market structure",
      summary: "Perfect competition, monopoly, oligopoly, monopolistic competition — each implies a different profit pool.",
      body: `# Market structure

Four archetypes shape the competitive dynamics — and the profit potential — of every industry. Understanding these structures is vital because a manager at a software startup faces fundamentally different challenges than a manager at a local bakery; the environment dictates how much power you have over your own prices.

## Perfect competition

Many small firms, identical products, free entry and exit, perfect information. Each firm is a *price taker* — too small to influence the market price. In the long run, economic profit is driven to zero by entry. Examples: commodity agriculture, foreign exchange spot trading, generic memory chips. 

Think of a wheat farmer. Wheat is wheat; no matter how hard they work, they cannot charge $1.00 more per bushel than the guy next door because the buyer will just walk to the next farm. If wheat farming becomes very profitable, more people start farms (free entry), which increases the supply and pushes prices back down until no one is making excess cash. Managers here have no "pricing power," which is the ability to raise prices without losing all your customers.

Managerial implication: don't get stuck here. Competing on price in a perfectly competitive market is a perpetual race to zero margin. Either find a way to differentiate (brand, location, service) or accept that the business is a cost-discipline grind. 

## Monopolistic competition

Many firms, *differentiated* products, free entry. Each firm has a small downward-sloping demand curve and some pricing power. Long-run profit still tends toward zero because entry erodes margins, but the products and brands are distinguishable. Examples: restaurants, fashion brands, most local services.

In this structure, you have some "wiggle room." If you own a Mexican restaurant, you can charge slightly more than the place down the street because people like your specific salsa or your patio atmosphere. However, if you start making huge profits, a new taco stand will open across the street, stealing some of your customers and forcing your profits back toward a break-even point. Success depends on constant marketing and branding to keep your product feeling "different."

## Oligopoly

A few large firms, products either standardized (commodity chemicals) or differentiated (airliner manufacturing — Airbus and Boeing). Strategic interaction is everything: each firm's optimal move depends on what rivals do. Game theory was invented largely to analyze this case. Outcomes range from near-monopoly profits (tacit collusion) to brutal price wars.

In an oligopoly, the players are so big that they are constantly watching each other's every move. If Verizon cuts their cell phone plan prices, AT&T and T-Mobile usually have to react immediately. The risk here is a "price war," where everyone cuts prices to win customers, but ends up destroying the profits for the whole industry.

## Monopoly

One firm, no close substitutes, blocked entry. Sets price by equating marginal revenue and marginal cost — typically high price, restricted quantity, large deadweight loss. Sources: legal barriers (patents, regulated utilities), economies of scale (natural monopolies like water distribution), network effects, control of a key input.

Deadweight loss is simply the economic value that is lost to society because the monopolist chooses to sell fewer items at a higher price rather than more items at a lower price. If you own the only bridge in town, you can charge a high toll. People who would have paid a fair price to cross now stay home, so the "value" of those potential trips vanishes. Monopolies are profit machines, but they often face heavy government scrutiny or regulation because of this lack of consumer choice.

## The competitive escalator

Industries shift between archetypes as conditions change. Early-stage software platforms behave like monopolies (winner-takes-most network effects); mature ones may slip toward oligopoly as challengers emerge. Deregulation can drag a monopolist into competitive territory (telecoms, airlines after 1978). Antitrust enforcement can break a monopoly outright (AT&T 1984, possibly Big Tech today).

## Where the profit pools are

A rule of thumb: structural profitability is highest in monopoly and oligopoly with high entry barriers, lowest in perfect competition. This is the foundation of Porter's Five Forces (Week 6) — the *industry* sets the ceiling on returns; the *firm* fights for a share of what the industry allows. Many great operators in bad industries (US airlines historically) earn less than mediocre operators in great industries (rating agencies, defense primes, ratings-protected pharma).

If you are a brilliant manager in a perfectly competitive industry, you are paddling upstream against a powerful current. If you are a mediocre manager in a monopoly, you are floating downstream on a raft. It is much easier to be successful when the market structure protects your margins.

## Worked example

A grocery chain operates in monopolistic competition. Margins are 2-3%. The same chain's payments-processing subsidiary operates in an oligopoly with Visa, Mastercard, and a handful of acquirers — margins 25%+. The structure of the market explains most of the gap; operational excellence explains the rest. Even though the same leadership team runs both, the payments business is simply a "better" house to live in because there are fewer neighbors to compete with.`,
      videos: [
        { title: "Market Structures \u2014 Crash Course", source: "YouTube \u2014 Crash Course Economics", url: "https://www.youtube.com/watch?v=u9_sckYM-Vk", fallbackSearchQuery: "market structures explained" },
        { title: "Monopoly and Antitrust", source: "YouTube \u2014 Marginal Revolution University", url: "https://www.youtube.com/watch?v=tjHmRBoYsg8", fallbackSearchQuery: "monopoly antitrust MRU" },
        { title: "Market Structures", source: "YouTube", videoId: "eNxk5-EJFrY", fallbackSearchQuery: "perfect competition monopoly oligopoly" },
        { title: "Monopoly and Antitrust", source: "YouTube", videoId: "Sb_-wfmJnHA", startSeconds: 59, fallbackSearchQuery: "monopoly antitrust regulation" },
      ],
      readings: [
        { title: "The Five Competitive Forces That Shape Strategy", source: "Harvard Business Review", url: "https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy" },
        { title: "Why Strategy Execution Unravels — and What to Do About It", source: "Harvard Business Review", url: "https://hbr.org/2015/03/why-strategy-execution-unravelsand-what-to-do-about-it" },
      ],
      exercise: { id: "ex1", scenario: "You are the CEO of a small startup that has developed a new type of organic, ultra-durable yoga mat. Currently, the yoga mat market is saturated with hundreds of brands selling products that look almost identical, and your competitors are constantly undercutting each other on price to survive.", task: "Identify which of the four market structures this yoga mat market currently represents, and propose two specific strategic actions you could take to move your product toward 'monopolistic competition' to avoid a race to the bottom on price." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "If a 10% price cut leads to a 25% sales increase, demand is:", choices: ["Inelastic", "Unit elastic", "Elastic", "Perfectly inelastic"], answerIndex: 2, explanation: "|E| = 2.5 > 1." },
    { id: "q2", prompt: "An increase in the price of a complementary good will cause the demand curve for the original good to:", choices: ["Shift right", "Shift left", "Stay flat", "Become vertical"], answerIndex: 1, explanation: "Complements consumed together; a costlier complement reduces demand for the paired good." },
    { id: "q3", prompt: "At market equilibrium:", choices: ["Producer surplus is zero", "Quantity demanded equals quantity supplied", "Price equals marginal cost of the most efficient producer only", "There are shortages"], answerIndex: 1, explanation: "Equilibrium clears the market." },
    { id: "q4", prompt: "A binding price floor above equilibrium (e.g., minimum wage above market) causes:", choices: ["Shortage", "Surplus", "Higher tax revenue", "No effect"], answerIndex: 1, explanation: "Quantity supplied exceeds quantity demanded." },
    { id: "q5", prompt: "The 'invisible hand' insight from Hayek's price-system argument is that:", choices: ["Central planners can optimize markets", "Prices aggregate dispersed information about scarcity and value", "Prices should be regulated", "Markets fail without intervention"], answerIndex: 1, explanation: "Prices coordinate decisions across millions of actors without any single planner." },
    { id: "q6", prompt: "A price ceiling set below equilibrium creates:", choices: ["Surplus", "Shortage", "Higher tax revenue", "No effect"], answerIndex: 1, explanation: "Quantity demanded exceeds quantity supplied." },
    { id: "q7", prompt: "Necessities such as insulin are typically:", choices: ["Highly elastic", "Highly inelastic", "Unit elastic", "Perfectly elastic"], answerIndex: 1, explanation: "Few substitutes and urgent need make demand insensitive to price." },
    { id: "q8", prompt: "A firm raises prices 5% and revenue falls 3%. Demand was:", choices: ["Inelastic — raising price further would reduce revenue further", "Elastic — revenue fell because quantity fell by more than 5%", "Unit elastic", "Perfectly inelastic"], answerIndex: 1, explanation: "Only elastic demand causes total revenue to fall when price rises." },
    { id: "q9", prompt: "Cross-price elasticity between coffee and tea is likely:", choices: ["Negative (complements)", "Zero", "Positive (substitutes)", "Undefined"], answerIndex: 2, explanation: "Substitutes have positive cross-elasticity: higher tea price raises coffee demand." },
    { id: "q10", prompt: "A luxury handbag brand raises price and sees demand rise. The best explanation is:", choices: ["Demand curve is upward sloping in general", "A Veblen / status good where high price signals quality/status shifts the demand curve", "The law of demand is wrong", "Prices don't matter"], answerIndex: 1, explanation: "Positional / Veblen goods are exceptions where price is part of the perceived value." },
    { id: "q11", prompt: "In perfect competition, long-run economic profit is:", choices: ["Maximized", "Zero", "Equal to fixed cost", "Negative"], answerIndex: 1, explanation: "Free entry drives profit to zero." },
    { id: "q12", prompt: "A monopolist maximizes profit where:", choices: ["Price = marginal cost", "Marginal revenue = marginal cost", "Price = average cost", "Marginal revenue = 0"], answerIndex: 1, explanation: "MR = MC is the general profit-maximization rule; a monopolist then sets price on the demand curve." },
    { id: "q13", prompt: "Which market structure best describes commercial airlines on major routes?", choices: ["Perfect competition", "Monopoly", "Oligopoly", "Monopolistic competition"], answerIndex: 2, explanation: "A few interdependent firms dominate route-level competition." },
    { id: "q14", prompt: "A firm with sustained economic profit in a competitive industry likely has:", choices: ["Government subsidy only", "A source of durable competitive advantage (a moat)", "Higher costs", "No customers"], answerIndex: 1, explanation: "Persistent above-normal returns require barriers to entry." },
    { id: "q15", prompt: "Antitrust concern about a proposed merger primarily depends on:", choices: ["Total revenue of the combined firm", "Post-merger concentration and its effect on prices and choice for consumers", "Number of employees", "Location of headquarters"], answerIndex: 1, explanation: "Regulators weigh market power impact on consumers, not size alone." },
  ],
  assignment: {
    id: "a1",
    title: "Elasticity-driven pricing memo",
    prompt: "Pick a product you know well. Estimate its price elasticity using whatever evidence you can (analogous products, A/B tests, intuition). Recommend a price change and project the effect on revenue and gross profit. Note one strategic risk (cannibalization, brand perception, competitor reaction).",
    rubric: "Defensible elasticity estimate (3 pts). Correct revenue/profit math (3 pts). Strategic risk identified (2 pts). Recommendation tied to the math (2 pts).",
  },
};