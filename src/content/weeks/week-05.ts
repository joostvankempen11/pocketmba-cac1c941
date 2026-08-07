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
      summary: "Marketing strategy starts with whom you serve and what you stand for in their mind.",
      body: `# STP

The central insight of modern marketing — usually credited to Wendell Smith (1956) and made canonical by Philip Kotler — is that markets are not monolithic. Buyers differ in needs, willingness to pay, channels, and decision criteria. The firm that *chooses* whom to serve and *what* to stand for in their mind will beat the firm that tries to be everything to everyone. In plain English, if you try to sell a product to 'everyone,' your message becomes so vague that it resonates with no one. Managers must realize that a smaller piece of a specific pie is often more profitable than a tiny, ignored slice of the whole market.

## Segmentation

Cut the market into groups whose members are similar to each other and different from other groups. Think of this like a chef prepping ingredients: you group things by how they behave and what they need so you can treat each group correctly. Common cuts:

- **Demographic** — age, income, household composition, occupation. Easy data, often weak predictor of behavior. Just because two people are both 40-year-old men earning $80k doesn't mean they want the same car.
- **Geographic** — region, density, climate. Critical for retail and some services. You wouldn't market heavy snow parkas in Miami.
- **Psychographic** — values, lifestyle, attitudes (VALS framework, sustainability-driven, status-driven). This is about the 'internal' driver—why they buy, not just who they are.
- **Behavioral** — usage rate, occasion, benefits sought, loyalty stage. Often the strongest predictor. Are they a 'heavy user' or a 'once-a-year' buyer?
- **Firmographic (B2B)** — industry, size, tech stack, buying process. This is essentially 'demographics' but for companies instead of people.
- **Jobs-to-be-done** (Christensen) — what *progress* is the customer trying to make? Often the most actionable framing. For example, a person doesn't buy a drill because they want a drill; they buy it because they have a 'job' to do: making a hole in the wall to hang a picture.

A good segment is **measurable, accessible, substantial, differentiable, actionable**. "People who like nice things" fails most of these tests because you can't easily find them on a map, count exactly how many there are, or create a unique ad that only they see.

## Targeting

Not every segment is equally attractive. You have to pick your battles. Score segments on:

- Size and growth.
- Competitive intensity. Is the segment already 'crowded' with huge brands?
- Fit with the firm's capabilities and brand. Can you actually deliver what this group wants?
- Profit potential (willingness to pay × cost to serve). High-revenue customers aren't great if it costs you a fortune to reach them.
- Strategic option value (entry point to adjacent segments).

The most common targeting mistake is *picking too many* segments and serving none well. This leads to 'brand dilution,' where your product feels like a watered-down version of what people actually want. The next most common is picking the largest segment by default, ignoring that it's also where every competitor lives (the 'Red Ocean' effect).

## Positioning

The place a brand occupies in the customer's mind relative to alternatives. This isn't just your logo; it's the 'mental real estate' you own. When people think of your brand, what is the very first word that pops into their head? A useful template (Geoffrey Moore):

> *For (target customer) who (statement of need), our (product) is a (category) that (key benefit). Unlike (primary competitive alternative), our product (key differentiator).*

Positioning is *chosen* — you decide what to *not* be. Volvo chose "safety" and let others own "speed" or "luxury." Apple chose "design" and let others own "specs." Trying to occupy more than one position dilutes both. If a manager tries to claim their product is the 'cheapest' AND the 'highest quality,' customers will likely believe neither.

## Worked example

A new electric pickup truck startup could segment by income (luxury vs mass), by use case (worksite vs lifestyle), or by environmental attitude. Targeting the "affluent eco-conscious adventurer" segment (psychographic + behavioral) gives them a defensible position — premium pricing, dealer-free distribution, design-forward — that the legacy F-150 can't easily attack without alienating its core fleet buyers. By focusing on the 'adventurer' rather than the 'general worker,' the startup can charge more for specialized features like built-in camping gear, which a construction company would never pay for.`,
      videos: [
        { title: "Marketing Strategy \u2014 STP", source: "YouTube \u2014 Two Teachers", url: "https://www.youtube.com/watch?v=ZBR1HJxn-X8", fallbackSearchQuery: "segmentation targeting positioning" },
        { title: "Jobs to Be Done \u2014 Clayton Christensen", source: "YouTube \u2014 HBS", url: "https://www.youtube.com/watch?v=Stc0beAxavY", fallbackSearchQuery: "jobs to be done Christensen" },
        { title: "Marketing Strategy \u2013 STP", source: "YouTube", videoId: "K400f3nvtrI", fallbackSearchQuery: "STP marketing strategy explained" },
      ],
      readings: [
        { title: "Marketing Myopia", source: "Harvard Business Review", url: "https://hbr.org/2004/07/marketing-myopia" },
        { title: "Know Your Customers' Jobs to Be Done", source: "Harvard Business Review", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" },
      ],
      exercise: { id: "ex1", scenario: "You are the Marketing Manager for an upscale dog food startup that uses human-grade ingredients and a customized subscription model. While your product is clearly higher quality than grocery store brands, it costs three times as much, and legacy pet food giants are beginning to launch their own 'natural' lines to compete with you.", task: "Using the Geoffrey Moore positioning template, write a single positioning statement for this startup that differentiates it from a legacy competitor (like Purina) by focusing on a specific behavioral or psychographic segment rather than just 'dog owners.'" }
    },
    {
      id: "l2",
      title: "The 4 Ps",
      summary: "Product, price, place, promotion — operationalize positioning into a coherent marketing mix.",
      body: `# The 4 Ps

E. Jerome McCarthy's 1960 framing of the marketing mix has survived sixty years of fashion because it forces a coherent answer to four questions every business has to settle. Think of these as the four dials a manager can turn to change how a product performs in the marketplace. If the dials aren't synced, the music sounds terrible.

## Product

What are you offering — features, design, quality level, packaging, services, warranty, brand? The *whole bundle*, not just the physical good. Theodore Levitt: customers don't want a quarter-inch drill, they want a quarter-inch hole. The product is the bundle that delivers the hole. To a manager, this means thinking about the "job to be done." For example, a high-end coffee shop isn't just selling caffeine; it's selling a quiet workspace, a status symbol, and a reliable morning routine. If they ignore the WiFi quality or the comfort of the chairs, they have fundamentally misunderstood their "product."

Decisions: depth (premium, mid, value tiers) and breadth (number of product lines). Apple sells few products; Procter & Gamble sells thousands; both work because the choice fits the strategy. Depth is about how many versions of a specific item you offer (like an iPhone Pro vs. an iPhone SE), while breadth is about how many different categories you compete in (like P&G selling both diapers and dish soap).

## Price

The most underused lever. McKinsey's classic finding: a 1% price improvement, with volume held constant, lifts operating profit ~11% for the average S&P 500 company — more than a 1% volume gain or a 1% variable-cost cut. Pricing is powerful because every dollar of a price increase goes straight to the bottom line (profit) without any extra work or manufacturing costs.

Approaches:
- **Cost-plus** — variable cost × markup. Simple, ignores customer value, common in commodity contexts. This is the "safe" method where you just ensure you cover your bills and add a bit for yourself, but it risks leaving money on the table if customers would have paid more.
- **Value-based** — price to the customer's willingness to pay (their next-best alternative + your differentiated value). Hardest to estimate, most profitable when done well. This requires knowing exactly how much a problem costs your customer. If your software saves a company $10,000 a month in labor, charging $2,000 is a steal, regardless of what the software cost you to build.
- **Competition-based** — price to a benchmark of comparable products.
- **Penetration vs skimming** — low introductory price to grab share, or high price to extract from early adopters and reduce over time. Think of Apple: they "skim" the market by charging early adopters a premium, then eventually offer older models at lower prices to reach the masses.
- **Dynamic / personalized pricing** — different prices to different buyers (airline yield management, Uber surge, Amazon individualized pricing).

## Place (distribution)

Where and how customers buy — direct vs indirect, online vs physical, exclusive vs intensive distribution. The choice shapes cost structure, customer experience, brand control. Luxury brands choose exclusive distribution; consumer staples choose intensive distribution; SaaS (Software as a Service) chooses inside sales (selling over the phone/internet) for SMB (Small and Medium Businesses) and field sales (in-person meetings) for enterprise. 

If you are selling a luxury watch, you don't want it next to the chewing gum at a gas station—that's poor "Place" management. You want it in a controlled environment that makes the customer feel special.

Channel conflict is real: launching a direct-to-consumer channel can alienate the resellers who built your business. Nike's DTC push (and 2020s partial reversal) is a case study. If you own a brand and start selling on your own website for cheaper than the local shops that carry your brand, those shops will stop stocking your items. This is a classic management headache called channel conflict.

## Promotion

How customers find out. Advertising, PR, sales, sales promotions, direct marketing, content, social, influencer, search, lifecycle email. The mix depends on the buying journey — awareness, consideration, decision, retention — and on the channel economics. B2B SaaS pours money into search and content; CPG (Consumer Packaged Goods) into TV and shelf placement; luxury into PR and experience.

Promotion isn't just about "shouting" at the market. It's about matching the message to the moment. For instance, a coupon (sales promotion) is great for someone already in the store deciding which cereal to buy, but a billboard (awareness) is better for someone who doesn't even know your brand exists yet.

## Coherence is the point

The four Ps must reinforce each other. Premium product + low price = confused brand. Mass-market product + boutique distribution = under-scaled. The framework's value is *not* checking each box; it's noticing when a planned change in one P breaks another. If your manager decides to make your product's design more high-end (Product), you must also rethink if your cheap social media ads (Promotion) or discount store shelves (Place) still make sense.`,
      videos: [
        { title: "The Marketing Mix Explained", source: "YouTube \u2014 2-minute Classroom", url: "https://www.youtube.com/watch?v=H3KTKVAdHTw", fallbackSearchQuery: "4Ps marketing mix" },
        { title: "Pricing Strategy \u2014 McKinsey", source: "YouTube \u2014 McKinsey", url: "https://www.youtube.com/watch?v=BvE_2_NUWMA", fallbackSearchQuery: "McKinsey pricing strategy" },
        { title: "The Marketing Mix", source: "YouTube", videoId: "Mco8vBAwOmA", fallbackSearchQuery: "marketing mix 4Ps product price place promotion" },
        { title: "Pricing Strategy", source: "YouTube", videoId: "sF6AMj3H0jg", fallbackSearchQuery: "pricing strategy explained" },
      ],
      readings: [
        { title: "The Power of Pricing", source: "Harvard Business Review", url: "https://hbr.org/2003/09/the-power-of-pricing" },
        { title: "Pricing to Create Shared Value", source: "Harvard Business Review", url: "https://hbr.org/2018/03/pricing-to-create-shared-value" },
      ],
      exercise: { id: "ex1", scenario: "You are the founder of 'GreenSprout,' a startup that has developed a revolutionary organic fertilizer that is 100% odorless and safe for indoor plants. You have spent all your budget on high-end minimalist packaging and a premium 'artisan' brand identity. However, your initial plan is to sell large 20lb bags through discount hardware warehouses at a low introductory price to beat the chemical competition.", task: "Identify two 'Ps' in this scenario that are currently in conflict with your brand identity and explain how you would adjust them to create a coherent marketing mix." }
    },
    {
      id: "l3",
      title: "Customer lifetime value (CLV)",
      summary: "The single number that ties marketing spend to long-term economics.",
      body: `# Customer lifetime value

The present value of profits a customer generates over their relationship with the firm. CLV reframes marketing from a cost center into an investment with a return — and gives a hard ceiling on what you can spend to acquire a customer. Think of CLV as the "sticker price" on a customer’s head. If a person is worth $500 to your business over five years, you should never spend $501 to get them in the door. By viewing customers as long-term assets rather than one-off sales, you stop treating marketing as just an expense and start viewing it like a stock portfolio.

## A working formula

For a subscription business with monthly churn:

\`CLV ≈ ARPU × Gross margin / Monthly churn rate\` 

*   **ARPU (Average Revenue Per User)**: The total monthly revenue divided by the number of customers. It’s the average monthly bill.
*   **Gross Margin %**: What’s left of the revenue after paying for the direct costs to serve that customer (like server costs or shipping fees).
*   **Churn Rate**: The percentage of customers who cancel their subscription each month.

For longer-horizon, multi-period thinking:

\`CLV = Σ_t (Margin_t × Retention_t) / (1 + r)^t\` 

This formula accounts for the "Time Value of Money" using a discount rate ($r$). Because a dollar today is worth more than a dollar five years from now, we discount future profits back to their present value to keep our math realistic.

## Worked example

SaaS firm: $30 ARPU, 75% gross margin, 4% monthly churn, 10% annual discount rate.

- Gross profit per customer-month = $22.50. (This is the cash left over to pay for overhead and marketing every single month).
- Average customer life = 1 / 0.04 = 25 months. (If you lose 4% of people each month, it takes 25 months for an average cohort to disappear).
- CLV ≈ $22.50 × 25 ≈ **$562** (close enough for planning; the exact discounted figure is slightly lower).

If your blended customer acquisition cost (CAC) is $180, your LTV/CAC = 3.1×, which is healthy. 

*   **CAC (Customer Acquisition Cost)**: Every dollar spent on marketing and sales divided by the new customers gained. 
*   The **LTV/CAC ratio** tells you the efficiency of your growth engine. Below ~3× is concerning; it means you might not be making enough to cover your rent and salaries. Above ~5× usually means you're under-investing in growth; you are being "too cheap" and letting competitors grab market share while you sit on your profits.

## Why CLV transforms decisions

- **How much to spend on acquisition?** CLV / 3 is a defensible rule of thumb in steady-state. If you know a customer is worth $600, you can confidently spend $200 to get one. 
- **Which segments to target?** Pursue high-CLV segments even if CAC is higher; avoid low-CLV segments even if CAC is low. For example, a gym might pay $100 to acquire a "professional athlete" member because they stay for years (high CLV), rather than spending $10 on a "New Year's Resolutioner" who quits in three weeks (low CLV).
- **How much to spend on retention?** Reducing churn from 4% to 3% in the example raises average life to 33 months and CLV to ~$750 — a 33% lift from one point of churn. This shows that fixing a "leaky bucket" is often much more profitable than pouring more water (new leads) into it.
- **Should we discount?** Promotional discounting that attracts low-CLV customers and accelerates churn destroys CLV even when it grows top-line. Top-line revenue looks good on a graph, but if those customers leave immediately, you’ve actually lost money on the acquisition cost.

## CLV and CAC payback

**CAC payback period** = CAC / (ARPU × Gross margin). How many months before a customer's gross profit covers the cost to acquire them. <12 months is excellent in SaaS; >24 months puts pressure on cash even when LTV/CAC looks great. Even if a customer is worth a fortune eventually, if it takes two years to break even on them, you might run out of cash in the bank before you ever see that profit.

## Where CLV models go wrong

- **Linear churn assumption.** Real churn cohorts have early-life spikes and long-tail loyalists. In reality, customers usually quit in the first month or stay for five years—there is rarely a steady 4% every single month.
- **Static margin assumption.** Pricing, mix, and cost-to-serve all evolve with the relationship. Long-term customers might actually become cheaper to serve because they stop calling customer support.
- **Ignored network effects.** Some customers (creators on a platform, anchor tenants in a mall) carry value beyond their direct revenue. They attract *other* customers for free.
- **Ignored cannibalization.** A new customer acquired by a discount may have replaced a full-price purchase. You didn't "gain" a customer; you just lowered the price for someone who was already coming.

Use CLV as a *steering wheel*, not a verdict. The number is less important than the model behind it.`,
      videos: [
        { title: "Customer Lifetime Value Explained", source: "YouTube \u2014 David Skok / Matrix", url: "https://www.youtube.com/watch?v=hpVT3OkUWfo", fallbackSearchQuery: "customer lifetime value" },
        { title: "Unit Economics \u2014 Brian Balfour", source: "YouTube \u2014 Reforge", url: "https://www.youtube.com/watch?v=8YHTk6F0pgU", fallbackSearchQuery: "unit economics Brian Balfour" },
        { title: "Customer Lifetime Value Explained", source: "YouTube", videoId: "GPSysUOV240", fallbackSearchQuery: "CLV customer lifetime value calculation" },
        { title: "Unit Economics \u2014 Brian Balfour", source: "YouTube", videoId: "26tDd5rsjX4", fallbackSearchQuery: "unit economics SaaS startup" },
      ],
      readings: [
        { title: "E-Loyalty: Your Secret Weapon on the Web", source: "Harvard Business Review", url: "https://hbr.org/2000/07/e-loyalty-your-secret-weapon-on-the-web" },
        { title: "The Right Way to Use Customer Lifetime Value", source: "Harvard Business Review", url: "https://hbr.org/2019/01/the-mistake-companies-make-when-they-use-data-to-plan-discounts" },
      ],
      exercise: { id: "ex1", scenario: "You are the growth manager for 'FreshBox', a meal-kit delivery service with a $60 ARPU, 50% gross margin, and a 10% monthly churn rate. Your current CAC (acquisition cost) is $150 per customer, and your CFO is worried that you are spending too much on Facebook ads because the business isn't profitable yet.", task: "Calculate the current CLV and LTV/CAC ratio, then write a one-sentence recommendation to the CFO explaining whether you should increase, decrease, or maintain marketing spend based on the '3x Rule of Thumb'." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "A positioning statement should specify all of the following EXCEPT:", choices: ["Target customer", "Key benefit", "Reason to believe", "Manufacturing process"], answerIndex: 3, explanation: "Positioning is about perceived value, not internal process." },
    { id: "q2", prompt: "Which is NOT a common basis for market segmentation?", choices: ["Demographic", "Behavioral", "Geographic", "Alphabetical"], answerIndex: 3, explanation: "Segmentation groups customers by meaningful differences in behavior or needs." },
    { id: "q3", prompt: "Jobs-to-be-done reframes marketing around:", choices: ["Demographics", "The progress a customer is trying to make in a given context", "Competitor positioning", "Product features"], answerIndex: 1, explanation: "Christensen: customers 'hire' products to do jobs." },
    { id: "q4", prompt: "A firm targeting a narrow, distinct segment with a tailored offer is following which STP strategy?", choices: ["Undifferentiated", "Concentrated / niche", "Mass-market", "Cost leadership"], answerIndex: 1, explanation: "Concentrated targeting focuses on one segment deeply." },
    { id: "q5", prompt: "A positioning statement's 'reason to believe' answers:", choices: ["What we sell", "Why customers should believe the promised benefit is true", "Where we sell", "Who founded the company"], answerIndex: 1, explanation: "RTB is the proof — features, credentials, evidence." },
    { id: "q6", prompt: "SaaS company with $30 ARPU, 75% margin, 4% monthly churn. CLV ≈", choices: ["$200", "$375", "$563", "$900"], answerIndex: 2, explanation: "22.5 × 25 = 562.5." },
    { id: "q7", prompt: "Which of the 4 Ps is most closely tied to profitability per unit?", choices: ["Product", "Price", "Place", "Promotion"], answerIndex: 1, explanation: "Small pricing changes flow almost entirely to profit." },
    { id: "q8", prompt: "A firm shifts from selling through retailers to direct-to-consumer online. This is primarily a change to:", choices: ["Product", "Price", "Place (distribution)", "Promotion"], answerIndex: 2, explanation: "Place is the channel structure." },
    { id: "q9", prompt: "Value-based pricing sets price based on:", choices: ["Cost plus a target margin", "The customer's willingness-to-pay based on perceived value", "Competitor prices only", "Regulatory ceilings"], answerIndex: 1, explanation: "Cost-plus and competitive parity are alternatives; value-based captures more of the created value." },
    { id: "q10", prompt: "A brand cuts advertising to hit quarterly earnings. The most likely long-run cost is:", choices: ["Immediate revenue loss", "Brand equity erosion and slower growth over time", "No cost", "Improved margins forever"], answerIndex: 1, explanation: "Underinvestment in brand shows up gradually in weaker pricing power and CAC." },
    { id: "q11", prompt: "Skimming pricing is most appropriate when:", choices: ["Market is price sensitive", "Product is new and differentiated", "Competitors are entrenched", "Channel is mass-market"], answerIndex: 1, explanation: "Skimming captures willingness-to-pay from early adopters before competitors arrive." },
    { id: "q12", prompt: "CAC payback measures:", choices: ["Months of gross profit needed to recover customer acquisition cost", "Total customer count", "Revenue per marketing dollar in one month", "Marketing budget as % of revenue"], answerIndex: 0, explanation: "Payback focuses on speed of recovery, complementing CLV." },
    { id: "q13", prompt: "A healthy consumer subscription business often targets a CLV / CAC ratio of at least:", choices: ["1", "3", "10", "0.5"], answerIndex: 1, explanation: "3x is a common heuristic; below 1x is destructive." },
    { id: "q14", prompt: "A rise in monthly churn from 3% to 5% will impact CLV by:", choices: ["Almost nothing", "Roughly a 40% reduction", "Improve CLV", "Only affects new customers"], answerIndex: 1, explanation: "CLV is roughly ARPU × margin / churn; churn is in the denominator." },
    { id: "q15", prompt: "The clearest way to raise CLV without changing price is to:", choices: ["Increase CAC", "Reduce churn and/or expand ARPU via upsell", "Cut marketing", "Reduce headcount"], answerIndex: 1, explanation: "Retention and expansion revenue amplify each cohort's economic value." },
  ],
  assignment: {
    id: "a1",
    title: "Positioning + GTM",
    prompt: "Pick a product (real or invented). Write a one-paragraph positioning statement using the Moore template. Then sketch the four Ps and compute a back-of-envelope CLV with stated assumptions. Identify the single biggest risk to the plan.",
    rubric: "Sharp positioning with clear target and differentiator (3 pts). Coherent 4 Ps (3 pts). Defensible CLV math (2 pts). Honest risk identified (2 pts).",
  },
};