import type { Week } from "../types";

export const week03: Week = {
  week: 3,
  title: "Corporate Finance",
  tagline: "Time, risk, and the value of a future dollar.",
  topics: ["Time value of money", "NPV/IRR", "Cost of capital", "Capital structure"],
  lessons: [
    {
      id: "l1",
      title: "Time value of money",
      summary: "A dollar today is worth more than a dollar tomorrow. Quantify the gap and most of finance falls out.",
      body: `# Time value of money

The single most important idea in finance: **a dollar today is worth more than a dollar tomorrow.** Today's dollar can be invested to earn a return; tomorrow's dollar is exposed to inflation, default, and opportunity cost. Every valuation technique in corporate finance — DCF, bond pricing, mortgage math, lease analysis, pension funding — is just an application of this one idea.

Think of it this way: If I offer you $100 today or $100 next year, you take it today because you could put that cash in a savings account and have $105 by next year. By waiting, you lose that potential growth (opportunity cost) and your money might buy fewer groceries later (inflation).

To a manager, time isn't just a clock; it's a cost. If you have $1 million sitting in a non-interest-bearing checking account, you are effectively losing money every day because that capital isn't out in the world working for you. 

## Present value and future value

\`FV = PV × (1 + r)^n\`

\`PV = FV / (1 + r)^n\`

where *r* is the periodic discount rate and *n* is the number of periods. The discount rate represents the *opportunity cost* of capital: the return you could earn on an equivalent-risk alternative. Riskier cash flows are discounted at higher rates and therefore have lower present values.

In plain English, "discounting" is the process of stripping away the interest to see what a future payment is worth in today's terms (**Present Value**). If a manager ignores this, they might greenlight a project that returns $1 million in 20 years, not realizing that after accounting for the risk and the wait, that $1 million is only worth a fraction of that amount today.

Think of "r" (the discount rate) as your hurdle. If you could easily get a 5% return by buying safe government bonds, you shouldn't accept a 5% return on a risky new taco truck startup. You would "discount" the taco truck's future earnings at a much higher rate (perhaps 15%) to account for the risk that the business might fail. The higher the risk, the less that future promise is worth to you right now.

## Compounding and the rule of 72

Money compounds — last period's interest earns this period's interest. The **Rule of 72** is the back-of-envelope shortcut: at *r%* growth, money doubles in roughly *72/r* years. At 8% you double every nine years; at 12% every six. Compounding is also why credit-card debt is ruinous — interest charged monthly at 18% APR compounds to ~19.6% effective annual rate.

Compounding is essentially "interest on interest." Imagine you save $1,000. In Year 1, you earn interest on that $1,000. In Year 2, you earn interest on the $1,000 *plus* the interest you earned in Year 1. This creates an exponential curve that can make small, consistent investments explode in value over decades.

For a business, compounding works on growth too. If a SaaS company grows its user base by 10% every month, it isn't just adding the same number of users; it's adding 10% of a larger and larger number each time. This is why "early-stage growth" is so highly prized in venture capital.

## Annuities and perpetuities

An **annuity** is a stream of equal cash flows for a fixed number of periods (mortgages, bond coupons, lease payments). A **perpetuity** is one that lasts forever (preferred stock, the British consol bonds of the 19th century).

\`PV of perpetuity = C / r\`

\`PV of growing perpetuity (Gordon) = C / (r − g)\`

The growing perpetuity formula is the engine of the **terminal value** in every DCF — it captures the value of cash flows beyond the explicit forecast horizon. Tiny changes in *r − g* swing the answer enormously, which is why DCFs are sensitive to assumptions you can barely defend.

In a business context, an annuity is like your monthly office rent or a fixed gym membership. A growing perpetuity is how we value an entire company that we expect to keep growing at a steady rate (*g*) forever. If you underestimate the discount rate (*r*), you will massively overpay for the business.

Think of "g" as the long-term growth rate. If you assume a company will grow its profits at 3% forever, but it actually only grows at 1%, the "r - g" denominator gets larger, making the calculated value of the company drop significantly. Managers who are too optimistic about "g" often end up making bad acquisitions.

## Real vs nominal

Nominal rates include inflation; real rates strip it out. \`(1 + r_nominal) = (1 + r_real)(1 + inflation)\`. When forecasting in nominal dollars, discount at nominal rates; when forecasting in real dollars, discount at real rates. Mixing them is a common student error — and a common professional one.

Think of "nominal" as the number printed on the bill, and "real" as the number of apples that bill can actually buy. If your bank pays 5% interest (nominal) but inflation is 5%, your "real" return is 0%. You have more paper, but no more purchasing power.

If you are a manager planning a 10-year factory expansion, you must decide: Are your revenue projections including the fact that you'll raise prices for inflation? If yes, you are using nominal dollars and must use a nominal discount rate. If you ignore inflation in your sales numbers but use a high interest rate from the bank to discount them, your project will look much worse than it actually is.

## Worked example

You're offered $10,000 in ten years or some smaller sum today. At a 7% discount rate, the present value of the future $10,000 is \`10,000 / 1.07^10 ≈ $5,083\`. Anything above $5,083 today is the better deal — and the higher your opportunity cost of capital, the more you'd demand to defer.

## Common mistakes managers make with discounting

The single biggest error in practice is **using the wrong discount rate for the wrong purpose**. Managers often grab a single "company hurdle rate" off a wall poster and apply it to every decision, from buying a delivery van to launching a biotech joint venture. But the discount rate should reflect the *riskiness of the specific cash flow*, not the comfort of having one number to remember. A stable, contractually guaranteed cash flow (like a signed lease payment from a AAA-rated tenant) deserves a low discount rate close to the risk-free rate, because there's little uncertainty about whether it arrives. A speculative cash flow (like projected revenue from an unlaunched product in a market you've never tested) deserves a much higher rate, because a meaningful share of those "expected" dollars will simply never show up. Blending these into one company-wide rate systematically overvalues risky bets and undervalues safe ones — which is precisely backwards from what a disciplined capital allocator wants.

A second common mistake is **forgetting that later cash flows shrink dramatically under compounding**, so people anchor too much attention on distant, glamorous payoffs and too little on near-term cash needs. At a 10% discount rate, a dollar 30 years out is worth about nine cents today. Executives pitching 20-year forecasts with a dramatic "hockey stick" in year 15 are often, whether they realize it or not, hiding weak near-term economics behind cash flows that barely move the present-value needle. A sharp analyst always asks: how much of this project's NPV comes from the first five years versus everything after? If the answer is "almost all of it comes from year 18," that's a signal to be skeptical, not excited.

A third mistake is treating **precision as accuracy**. Spreadsheets happily compute a present value to the penny, but the underlying inputs — growth rate, discount rate, terminal assumptions — are often accurate to only one significant figure. A discounted cash flow that spits out "$47,382,911" isn't more rigorous than a rough estimate of "roughly $45–50 million"; it just hides the uncertainty behind false precision. Good managers report a *range* driven by a few sensitivity scenarios (low, base, high discount rate; low, base, high growth) rather than a single deceptively exact figure.

## Applying time value of money on Monday morning

In practice, a manager encounters time value of money constantly, often without naming it. Negotiating payment terms with a supplier — net 30 versus net 90 — is a time-value decision: the longer you can hold your cash, the more it's worth to you, and the supplier should be charging (implicitly, through price) for financing your purchase over that window. Deciding whether to pay a lump sum for annual software licensing versus a monthly subscription is a time-value decision: whoever bears the financing cost of the gap should get a discount for doing so. Even a simple decision like "should we prepay a vendor for a discount" is a time-value calculation: a 2% discount for paying 20 days early is equivalent to an annualized return well over 30%, which is usually a phenomenal rate of return that beats almost any other use of that cash.

The practical habit worth building is this: whenever cash moves at a different time than value moves, stop and ask what discount rate makes the two sides of the deal fair. If you can quantify that rate and it is higher than your cost of capital, the deal is unusually attractive; if it's lower, you're subsidizing the other side of the table, whether you meant to or not.`,
      videos: [
        { title: "Time Value of Money \u2014 Full Tutorial", source: "YouTube \u2014 Khan Academy", url: "https://www.youtube.com/watch?v=733mgqrzNKs", fallbackSearchQuery: "time value of money Khan Academy" },
        { title: "Damodaran \u2014 Time Value of Money", source: "YouTube \u2014 NYU Stern", videoId: "kaYz15vwb9k", fallbackSearchQuery: "Damodaran time value of money" },
      ],
      exercise: { id: "ex1", scenario: "You are a manager at an industrial firm looking to upgrade a piece of machinery. The new machine costs $45,000 today, but it is guaranteed to save the company exactly $12,000 per year in labor costs for the next 5 years (a $60,000 total nominal saving). Your company's discount rate for equipment projects is 10%.", task: "Calculate the Present Value (PV) of the five years of savings and determine whether the company should purchase the machine today." }
    },
    {
      id: "l2",
      title: "NPV vs IRR",
      summary: "NPV measures value created; IRR is the discount rate that zeros it. When they conflict, NPV wins.",
      body: `# NPV vs IRR

Two techniques dominate capital budgeting. Capital budgeting is the process a business uses to decide which "big ticket" items—like a new factory or a software upgrade—are worth the investment. They usually agree. When they disagree, NPV wins.

## Net present value (NPV)

\`NPV = Σ CF_t / (1 + r)^t − Initial investment\`

Discount every projected cash flow back to today at the firm's cost of capital, sum them, and subtract the upfront cost. The "cost of capital" (r) is essentially the company's interest rate or the minimum return investors expect; it represents what it costs the firm to get the money it is spending. NPV measures the **dollar value created** by the project. Positive NPV = value-additive; take it. Negative NPV = value-destroying; pass. Think of NPV as the absolute increase in the company's wealth. If you found a suitcase of money on the street that was worth $1,000, you wouldn't care if you had to spend $1 or $10 to pick it up—you care about the final amount in your pocket. 

Managers care about NPV because it translates complex future estimates into a single, concrete "today value." If you ignore NPV, you risk taking on projects that look profitable on paper but actually erode the company's bank account because they don't earn enough to cover the interest on the money borrowed to start them.

## Internal rate of return (IRR)

IRR is the discount rate that makes NPV exactly zero. Compare IRR to the hurdle rate (cost of capital). A "hurdle rate" is the break-even percentage a project must beat to be considered. Higher IRR than hurdle = good project. Intuitive — expressed as a percentage, easy to compare. Most managers like IRR because it sounds like a "return on investment." If a bank account offers 5% interest, that 5% is the IRR of your savings project. 

Think of IRR as the project's "internal speed." If a project has an IRR of 15% and your bank loan costs 8%, you are essentially pocketing a 7% spread. It matters because it tells you how much "breathing room" you have before the project becomes a net loss if things don't go perfectly.

## When NPV and IRR disagree

Three pathologies:

1. **Mutually exclusive projects of different scale.** A $1M project earning 50% IRR creates $500k of value; a $10M project earning 20% IRR creates $2M of value. IRR picks the first; NPV picks the second. Shareholders care about dollars, not percentages. Imagine owning two lemonade stands: one costs $10 and returns $20 (100% return), and the other costs $1,000 and returns $1,500 (50% return). If you can only pick one, you'd pick the second because you walk away with $500 profit instead of just $10, even though the percentage return was lower.
2. **Different timing of cash flows.** Frontloaded projects often show higher IRR than backloaded ones with greater NPV, because IRR implicitly assumes interim cash flows are reinvested at the IRR itself — usually unrealistic. If a project has a 40% IRR, the math assumes you can take every dollar you earn in Year 1 and immediately find another 40% return investment for it. In reality, most firms can only reinvest at their standard cost of capital (e.g., 10%). 
3. **Non-conventional cash flows.** Sign changes in cash flows (mining, decommissioning, advertising spikes) can produce multiple IRRs or none. NPV is always well-defined. "Non-conventional" just means money flows out, then in, then out again—like a mine that makes money for 10 years but then costs millions to safely shut down in Year 11.

The modified IRR (MIRR) patches the reinvestment assumption but is rarely used in practice. MIRR is more "honest" because it assumes you reinvest cash at the cost of capital, not at the project's high IRR rate.

## Payback and discounted payback

Simple payback ignores time value and post-payback cash flows. Discounted payback fixes the time-value part (acknowledging that $1 tomorrow is worth less than $1 today). Both are useful as *risk* metrics (how long is my money at risk?) but neither should override NPV for the *decision*. A project could pay for itself in 2 days but then lose money for the next 10 years; payback alone would call that a "success" while NPV would correctly flag it as a loser.

## Worked example

Project A: invest $1,000 today, receive $1,500 in year 1. NPV at 10% = 1,500/1.10 − 1,000 = $364.
Project B: invest $10,000 today, receive $13,500 in year 1. NPV at 10% = 13,500/1.10 − 10,000 = $2,273.

IRR of A = 50%. IRR of B = 35%. A has the higher rate; B creates 6× the value. If mutually exclusive, take B. 

## Real options

Classical NPV ignores managerial flexibility — the option to expand, contract, defer, or abandon mid-project. **Real options** valuation (an offshoot of Black-Scholes thinking) captures that flexibility and can rescue projects that look NPV-negative under a single fixed scenario. Especially relevant in R&D, natural resources, and platform investments. For example, a tech company might build a small, money-losing prototype (Negative NPV). However, this creates the "option" to launch a global product if the prototype works. That future possibility has value today that simple math might miss. If a manager ignores real options, they might get "analysis paralysis" and kill a project that could have become a massive future success just because the immediate numbers look tight.

## Sensitivity analysis and scenario planning

Because NPV depends on estimates of future cash flows, growth rates, and discount rates that nobody can know with certainty, a single NPV number is really a bet on a specific set of assumptions holding true. A rigorous manager never presents "the NPV is $2.3 million" as if it were a fact; they present a **sensitivity table** showing how NPV changes as key assumptions move. The two variables worth stress-testing first are almost always the discount rate and the terminal growth or exit assumption, because those two levers tend to swing the answer the most for the least amount of underlying uncertainty resolved.

Concretely, imagine a project with a base-case NPV of $2 million at a 10% discount rate and 3% terminal growth. Recompute NPV at 8% and 12% discount rates, and at 1% and 5% terminal growth, holding everything else fixed. If the NPV stays positive across the entire 3×3 grid of combinations, you have a genuinely robust project. If the NPV flips negative under any remotely plausible combination — say, an 8% discount rate would still work but 12% turns it negative — you've learned that the project's attractiveness depends heavily on interest rates staying low, which is valuable information the single base-case number would have hidden completely.

**Scenario planning** goes a step further than sensitivity tables by changing multiple assumptions together in internally consistent bundles: a "recession" scenario might combine lower revenue growth, lower prices, *and* a higher discount rate (because risk premia rise in downturns) all at once, rather than varying one input in isolation. This matters because assumptions are often correlated — a recession doesn't just lower your sales forecast, it simultaneously raises the market's required return on risky cash flows, so testing those changes independently understates how bad the joint downside case really looks.

## A named-company example: Amazon's early profitless growth

Amazon spent roughly a decade after its 1997 IPO posting thin or negative accounting profits while aggressively expanding warehouses, logistics networks, and infrastructure. A naive NPV analysis using only reported net income would have looked terrible, and many Wall Street analysts at the time argued the stock was wildly overvalued on that basis. What the skeptics missed is exactly the real-options logic and long-horizon compounding this lesson covers: each dollar Amazon poured into fulfillment centers and Amazon Web Services bought the *option* to dominate categories and infrastructure markets that didn't fully monetize for years. Jeff Bezos explicitly told shareholders to judge the company on long-term free cash flow generation and market position, not near-term GAAP earnings — effectively asking investors to discount a very different, much larger and later cash-flow stream than the one visible in any single year's income statement. Investors who ran a traditional multi-year NPV using only near-term visible profits underestimated the company; investors who modeled the option value of owning the logistics and cloud infrastructure layer for decades to come got closer to the right answer. The lesson generalizes: whenever a company is deliberately trading near-term profit for a strategic option on a much larger future market, standard single-scenario NPV built on near-term numbers will systematically undervalue it, and analysts need to bring in real-options or scenario-based thinking to avoid killing a genuinely good long-run bet.

## Building the habit: a decision checklist

Before approving or rejecting any capital project, a disciplined manager runs through a short checklist: Are the cash flow estimates built from a bottom-up operating model or a top-down guess? Is the discount rate matched to the risk of *this* project rather than borrowed from the company average? Have we tested at least a low and high case for the two or three assumptions the NPV is most sensitive to? Is there embedded optionality — the ability to expand, delay, or abandon — that a static single-path NPV would miss? And finally, does the recommendation change if we use IRR instead of NPV, and if so, do we understand exactly why, so we can defend the choice of NPV as the tie-breaker to a skeptical board?`,
      videos: [
        { title: "NPV and IRR Explained", source: "YouTube", videoId: "Fw5-wccViOM", fallbackSearchQuery: "NPV vs IRR project evaluation" },
        { title: "Capital Budgeting Conflicts", source: "YouTube", videoId: "9rqPpuIrFLA", fallbackSearchQuery: "capital budgeting decision conflicts" },
      ],
      exercise: { id: "ex1", scenario: "Your logistics company is choosing between two software upgrades. Upgrade X costs $50,000 and has an IRR of 45% because it saves labor costs immediately. Upgrade Y costs $500,000 and has an IRR of 18% because it renovates the entire warehouse tracking system, leading to massive long-term savings. Your firm's cost of capital is 10%.", task: "Explain which project you would recommend to the Board of Directors and justify your choice by explaining why the higher IRR might be a 'value trap' in this specific comparison." }
    },
    {
      id: "l3",
      title: "Cost of capital (WACC)",
      summary: "The blended hurdle rate the firm must clear to create value for every capital provider.",
      body: `# Cost of capital

Every dollar a firm invests has to be earned back at the required return of the investors who put it up. Think of it like a "hurdle rate": if you borrow money from a bank at 5% to start a bakery, your bakery needs to earn more than 5% just to break even on those interest costs. That blended required return for an entire corporation is the **weighted average cost of capital (WACC)**. It represents the average interest rate a company pays to its "funders"—both the lenders who gave them debt and the shareholders who bought equity.

\`WACC = (E/V) × r_e + (D/V) × r_d × (1 − t)\`

where E = market value of equity, D = market value of debt, V = E + D (the total value of the company), r_e = cost of equity, r_d = pre-tax cost of debt, t = marginal tax rate. In simple terms, we are taking a weighted average of what our shareholders want (equity) and what our lenders want (debt).

## Cost of debt

The yield-to-maturity on the firm's existing debt, or the rate it would pay if it issued new debt today. Adjusted *down* by (1 − t) because interest is tax-deductible — the famous **tax shield** that makes debt cheaper than equity on an after-tax basis. Because the government lets you subtract interest payments from your taxable income, they are effectively "subsidizing" a portion of your interest expense. If a manager ignores this, they will overestimate their costs and potentially pass up on profitable investments.

## Cost of equity — CAPM

Equity is riskier than debt because if a company goes bankrupt, the lenders get paid first; shareholders might get nothing. Therefore, the return shareholders demand (the cost of equity) is always higher than the cost of debt. The Capital Asset Pricing Model is the workhorse for calculating this:

\`r_e = r_f + β × (r_m − r_f)\`

- *r_f* — risk-free rate, usually the 10-year Treasury. This is the baseline return you get for taking zero risk.
- *β* (Beta) — sensitivity of the stock to broad market moves (1.0 = market; 1.5 = 50% more volatile). If a stock has a beta of 2.0, it's like a rollercoaster that moves twice as fast as the market; investors will demand a huge return to buckle into that seat.
- *(r_m − r_f)* — equity risk premium, historically ~5-6% in the US. This is the "extra" return investors demand for choosing the messy stock market over safe government bonds.

CAPM has well-known flaws — beta is unstable, the equity risk premium is unobservable, returns aren't normally distributed. Use it as a starting point, not a sacred number. Cross-check with multi-factor models (Fama-French) and with peer comps.

## Capital weights — book or market?

*Always* market values for the weights. Book values reflect historical accounting (what the equipment or stock was worth years ago), not what investors require today. To get the weights, use current share price × shares outstanding for equity (the "Market Cap"); use the market price of bonds (or PV of remaining payments at current yield) for debt.

## When WACC is the wrong rate

WACC is the right discount rate only for projects whose risk is comparable to the firm's overall risk. Imagine a safe, established grocery chain with a low WACC of 6% deciding to open a high-risk cryptocurrency exchange. If they use their 6% grocery hurdle rate, the crypto project will look like a goldmine, but that fails to account for the massive new risk. 

A drug company evaluating a wildcat oil project should use the *oil project's* cost of capital (typically by pulling a beta from pure-play oil companies and re-levering it), not the drug-company WACC. Forgetting this is how conglomerates destroy value — they fund mediocre divisional projects with the average rate and turn down great divisional projects for the same reason. 

## Worked example

Firm with $600M equity (β = 1.2), $400M debt (yield 6%), tax rate 25%. Risk-free 4%, equity risk premium 5.5%.

- Cost of equity = 4% + 1.2 × 5.5% = 10.6%.
- After-tax cost of debt = 6% × (1 − 0.25) = 4.5%.
- Equity weight = $600M / ($600M + $400M) = 60%; Debt weight = 40%.
- WACC = 0.6 × 10.6% + 0.4 × 4.5% = 6.36% + 1.8% = **8.16%**.

Every project the firm undertakes has to clear ~8.2% just to break even on value creation. If a project returns 7%, the company is actually "losing" money for its investors because it could have given that cash back to them to invest elsewhere for better returns.

## Beta in more depth: where it comes from and why it moves

Beta is not handed down from on high; it is estimated by regressing a stock's historical returns against the returns of a broad market index, typically using two to five years of monthly data. The slope of that regression line is beta. A beta of 1.3 means that, historically, when the market moved 1%, this stock tended to move about 1.3% in the same direction — some of that extra swing comes from operating leverage (high fixed costs relative to revenue, so profits swing more than sales), and some comes from financial leverage (debt fixes an obligation regardless of how sales perform, amplifying the swings left over for equity holders).

This is why **unlevering and relevering beta** matters when comparing companies with different debt loads. If you want to compare the pure business risk of a heavily indebted retailer to a debt-free retailer, you first strip out the effect of each company's specific financing (unlever), compare the underlying business betas on an apples-to-apples basis, and then relever using the target company's own capital structure to get a beta appropriate for its actual financing. Skipping this step is a common analyst error: comparing a raw, levered beta from a heavily indebted peer to your own less-indebted company will overstate how risky your equity really is, inflating your cost of equity and killing projects that are actually attractive.

## Worked mini-example of unlevering and relevering

Suppose a comparable company has a levered beta of 1.5, debt-to-equity ratio of 0.8, and a 25% tax rate. The unlevered (asset) beta formula is \`β_u = β_levered / (1 + (1 − t) × D/E)\`. Plugging in: \`1.5 / (1 + 0.75 × 0.8) = 1.5 / 1.6 = 0.94\`. That 0.94 represents the pure business risk with no financing effect. Now suppose your own company has a lower debt-to-equity ratio of 0.3. Relevering: \`β_levered = β_u × (1 + (1 − t) × D/E) = 0.94 × (1 + 0.75 × 0.3) = 0.94 × 1.225 ≈ 1.15\`. That 1.15, not the comparable company's original 1.5, is the beta you should plug into your own CAPM calculation, because it reflects your own actual financial risk rather than a more indebted peer's.

## Why the discount rate is the single most argued-over number in finance

Because WACC compounds over many years in a discounted cash flow, small disagreements about inputs — is the risk-free rate 3.8% or 4.2%? is the equity risk premium 4.5% or 6%? — translate into large disagreements about valuation. A one-percentage-point change in WACC can move a company's estimated value by 10-20% or more, especially for long-duration businesses like utilities or pharmaceutical patents with cash flows stretching decades into the future. This is exactly why investment bankers, activist investors, and corporate finance teams can look at the same company and produce wildly different valuations: they aren't disagreeing about the arithmetic, they're disagreeing about which discount rate assumptions are defensible. A savvy manager learns to ask not "what is the WACC?" but "what discount rate is this analysis implicitly assuming, and is that assumption reasonable given the risk of these specific cash flows?"

## Applying WACC on Monday morning

When a division head brings a project to the CFO for approval, the first question shouldn't be "what's the NPV?" — it should be "what discount rate did you use, and is it the company's average WACC or a rate specific to this project's risk?" If a low-risk cost-cutting initiative (say, automating an accounts-payable process) is discounted at the same 12% WACC the firm uses for volatile new-market expansions, it may get rejected even though its near-certain savings deserve a much lower, more forgiving discount rate. Conversely, a speculative new-market entry discounted at the company's blended 12% WACC, when its true risk profile deserves 18-20%, will sail through approval processes it shouldn't. Matching the discount rate to the risk of the specific initiative — not defaulting to a single corporate number — is one of the highest-leverage judgment calls a finance-literate manager makes every quarter.`,
      videos: [
        { title: "Corporate Finance Explained | Cost of Capital", source: "YouTube", videoId: "90e-EV1kL9I", fallbackSearchQuery: "WACC weighted average cost of capital explained" },
        { title: "WACC \u2014 A Comprehensive Walkthrough", source: "YouTube \u2014 The Finance Storyteller", url: "https://www.youtube.com/watch?v=0inqw9cCJnM", fallbackSearchQuery: "WACC walkthrough" },
        { title: "Estimating Cost of Equity", source: "YouTube", videoId: "JyUBm9M7Wyw", fallbackSearchQuery: "estimating cost of equity CAPM" },
      ],
      exercise: { id: "ex1", scenario: "You are the CFO of 'SteadyStream,' a utility company with a low WACC of 5% due to its extremely stable, low-risk power grid business. The CEO wants to diversify by launching 'SteadyGaming,' a competitive esports platform—a high-risk industry where pure-play competitors typically have a WACC of 14%. The CEO argues that because the parent company has cheap access to capital, the esports project only needs to return 6% to be profitable.", task: "Write a brief memo (3-4 sentences) explaining to the CEO why using the 5% WACC for the esports project is a mistake, and specify which rate the company should actually use to evaluate the project's success." }
    },
    {
      id: "l4",
      title: "Capital structure",
      summary: "Modigliani-Miller, tax shields, distress costs, and the trade-off theory of debt and equity.",
      body: `# Capital structure

How should a firm split its financing between debt and equity? The answer determines WACC, financial risk, and ultimately the firm's resilience. 

**WACC** stands for Weighted Average Cost of Capital—the average rate a company pays to finance its assets. It matters because if your WACC is 10%, you must earn more than 10% on your projects just to break even.

When we talk about **Capital Structure**, we are looking at the company's "funding mix." Imagine building a house: you can pay for it with your own savings (**Equity**) or take out a mortgage (**Debt**). In business, managers must decide the right ratio of these two sources to keep the lights on and the growth steady. 

## Modigliani-Miller (Nobel-winning baseline)

In a world with no taxes, no bankruptcy costs, no information asymmetry, and perfect capital markets, **capital structure doesn't matter**. The value of the firm is set by its assets, not by how they're financed. Slicing the pie into more or fewer pieces doesn't change the size of the pie. Useful as a thought experiment that isolates *why* capital structure does matter in the real world.

Think of this like a pizza: whether you cut it into 4 slices or 8 slices, the amount of food stays the same. While this theory sounds unrealistic (because taxes and bankruptcy are very real), it helps us understand that value comes from the *business operations* (the quality of the pizza) rather than just clever accounting tricks.

## Why debt is cheaper — the tax shield

Interest is tax-deductible; dividends and retained earnings are not. The PV (Present Value) of the tax shield is approximately \`t × D\` (tax rate × debt). All else equal, more debt = more tax shield = higher firm value. If this were the whole story, every firm would be 100% debt-financed.

To understand a **Tax Shield**, think of it as a discount from the government. When a company pays interest on a loan, it can subtract that interest from its taxable income. This means the company pays less in taxes, leaving more cash in the bank. For example, if a firm earns $100 and pays $20 in interest, it only pays taxes on $80. If it had no debt, it would pay taxes on the full $100. This is why debt is often called "cheap capital"—Uncle Sam is essentially subsidizing part of the loan cost.

## Why debt is risky — distress costs

It isn't the whole story. As leverage rises:
- Bondholders demand higher yields (cost of debt itself rises). Lenders get nervous when they see a company is "leveraged" (carrying a lot of debt) and will charge higher interest rates to compensate for the risk.
- Equity becomes more volatile (β rises). **Beta (β)** measures how much a stock moves in relation to the market. High debt makes a stock "jumpier" or riskier for investors.
- Probability of financial distress rises — direct costs (legal fees, fire sales) and indirect costs (lost customers, defecting employees, deferred R&D). **Financial distress** occurs when a company struggles to meet its debt obligations, which is distracting and expensive.
- **Underinvestment** (Myers): debt-laden firms skip positive-NPV projects whose payoffs go disproportionately to bondholders. Managers might pass on a great new product idea because all the profits would just go to paying off the bank instead of rewarding the owners.
- **Asset substitution** (Jensen-Meckling): equity holders of a distressed firm gamble with bondholders' money. This is like a person who is broke using their last $100 to buy lottery tickets—if they win, they keep the profit; if they lose, they were going to be broke anyway.

## Trade-off theory

Optimal leverage balances the marginal tax shield against the marginal expected distress cost. The optimum varies by industry:
- Capital-intensive, stable cash flows (utilities, REITs, infrastructure) — high leverage is rational. These businesses are like a steady government job; because the paycheck is reliable, they can safely handle a big mortgage.
- Volatile cash flows, intangible assets (biotech, software, fashion) — low leverage; assets evaporate in distress. These are like freelance artists; a bad month could mean they can't pay the bills, so they should avoid high fixed debt payments. If a software company has too much debt and misses a payment, its best coders leave, and the company's value disappears overnight because its "assets" (people) walked out the door.

## Pecking order theory (Myers-Majluf)

Managers know more about the firm than investors. Issuing equity signals overvaluation, so firms prefer financing in this order:
1. **Internal funds** (retained earnings).
2. **Debt**.
3. **Equity** — last resort.

This theory suggests that managers are like car sellers. If a seller is suddenly very eager to sell you a share of their car, you might wonder if there is something wrong with the engine. Because investors fear this "asymmetric information" (the manager knows more than the buyer), issuing new stock often makes the stock price drop. 

Explains why profitable firms often carry *less* debt than trade-off theory predicts (they fund themselves out of cash flow) and why equity issues often depress the stock.

## Practical signals you've over-levered

These are the "red alerts" that a manager's debt strategy is becoming dangerous:
- Interest coverage (EBIT / interest) below 3×. This means your operating profit (EBIT) is less than 3 times your interest bill—too close for comfort.
- Debt / EBITDA above 4-5× for non-investment-grade industries. **EBITDA** is a quick shorthand for cash flow; if your total debt is more than 5 years' worth of cash flow, lenders will view you as "junk" quality.
- Credit rating downgrade.
- Bond covenants binding (restrict capex, dividends, M&A). **Covenants** are rules in a loan contract that act like a "parental lock," preventing the company from spending money or taking risks until the debt is safer.
- Customers asking about your balance sheet before signing contracts. If a customer is afraid you'll go bankrupt before you can deliver the product, your debt is killing your sales.

## Buybacks vs dividends

Returns of capital to shareholders. Mechanically similar in the textbook (both reduce equity); behaviorally different (dividends are sticky and signal commitment; buybacks are flexible and signal opportunism). Buybacks have ballooned since the SEC's 1982 Rule 10b-18 safe harbor and now exceed dividends for the S&P 500.

A **Dividend** is a regular cash payment to shareholders, like a steady allowance. A **Buyback** is when the company uses its cash to buy its own stock off the market, which makes the remaining shares more valuable. While both return cash to investors, companies hate cutting dividends because it looks like a failure, whereas they can stop buybacks anytime without much drama. Think of dividends as a monthly rent payment you *must* make, while buybacks are like choosing to pay extra toward your mortgage—helpful, but optional if cash gets tight.

## A named example: leveraged buyouts and the limits of debt

Private equity firms specialize in loading target companies with debt in a **leveraged buyout (LBO)**, then using the acquired company's own future cash flows to pay down that debt over five to seven years before selling or taking it public again. The classic cautionary tale is Toys R Us, acquired in a 2005 LBO for about $6.6 billion, roughly $5.3 billion of which was funded with debt. The retailer was saddled with hundreds of millions of dollars a year in interest payments in an industry already being squeezed by Amazon and Walmart. Every dollar that would otherwise have funded store renovations, e-commerce investment, or competitive pricing instead went to bondholders. By 2017 the company filed for bankruptcy and by 2018 it liquidated, eliminating roughly 30,000 jobs. The business itself wasn't hopeless — rivals in the same category survived — but the capital structure left no margin for the ordinary volatility of retail, turning a manageable competitive challenge into an existential one. This is trade-off theory playing out in real life: the private equity sponsors captured a large tax shield and the potential for outsized equity returns if things went well, but they also imposed the classic costs of financial distress — deferred investment, spooked suppliers, and a business unable to react to a changing market — onto a company that, with a more conservative balance sheet, might still exist today.

## Real-world capital structure benchmarks by industry

| Industry archetype | Typical Debt / Total Capital | Why |
|---|---|---|
| Regulated utilities | 50-60% | Predictable regulated cash flows and tangible assets support heavy borrowing |
| Consumer staples (grocery, packaged food) | 35-45% | Stable demand, moderate asset base |
| Industrials / manufacturing | 30-40% | Cyclical but with tangible collateral (plants, equipment) |
| Technology / software | 0-15% | Intangible assets, volatile revenue, and a preference for equity-funded flexibility |
| Early-stage biotech | Near 0% | No revenue to service debt; equity (including venture capital) is the only realistic funder |

These benchmarks aren't laws of physics — they shift with interest rates, investor sentiment, and company-specific circumstances — but they reflect decades of trade-off theory being tested in the market. When a company's leverage deviates sharply from its industry benchmark in either direction, it's worth asking why: is management unusually conservative because of a past distress scare, or unusually aggressive because private equity ownership is pushing for higher equity returns?

## How a manager decides on capital structure on Monday morning

When a CFO is deciding how to fund a new initiative — cash on hand, new debt, or new equity — the practical sequence usually starts with the pecking order: can retained earnings cover it without disrupting other priorities? If not, is there unused debt capacity (interest coverage comfortably above 3-4x, leverage below industry benchmarks) that can be tapped without threatening the credit rating or triggering restrictive covenants? Only if both of those are exhausted, or if the company specifically wants to signal confidence or delever risk from its own balance sheet, does issuing new equity become the default choice, and even then management will weigh the signaling cost — the market may interpret a surprise equity raise as a sign that insiders think the stock is fully or overvalued.

Beyond the financing choice itself, capital structure decisions ripple into negotiating power, hiring, and strategic flexibility. A company with low leverage and ample cash can walk away from a bad acquisition negotiation, wait out a downturn, or double down on R&D when competitors are forced to retrench. A highly levered company loses exactly that optionality at the moment it usually matters most — during a downturn, when opportunities to acquire distressed competitors cheaply are most attractive, an over-levered firm is instead fighting to avoid covenant breaches. The discipline of matching leverage to the volatility and tangibility of your own cash flows, rather than chasing the tax shield or imitating a differently-situated competitor, is the single most durable lesson of this entire topic.`,
      videos: [
        { title: "Modigliani-Miller and Capital Structure", source: "YouTube", videoId: "Zzsf4O1_02M", fallbackSearchQuery: "Modigliani Miller theorem" },
        { title: "How Much Debt Should a Company Have", source: "YouTube", videoId: "jsRuWaP2pnA", fallbackSearchQuery: "optimal capital structure debt equity" },
      ],
      exercise: { id: "ex1", scenario: "You are the CFO of 'CloudStream,' a software-as-a-service company with highly unpredictable monthly subscription growth. Your engineering team just requested $50 million to develop a new AI feature, but your company currently has no debt and $10 million in cash. Your CEO suggests taking out a massive high-interest bank loan to fund it, arguing that the tax shield will make the company more valuable.", task: "Identify two specific risks from the 'Distress Costs' or 'Trade-off Theory' sections that make the CEO's plan dangerous for a software firm, and propose which source of funding from the 'Pecking Order' the company should prioritize instead." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "PV of $10,000 in 10 years at 7% discount rate is approximately:", choices: ["$5,083", "$7,000", "$8,200", "$10,000"], answerIndex: 0, explanation: "10000/1.07^10 ≈ 5083." },
    { id: "q2", prompt: "A dollar today is worth more than a dollar tomorrow primarily because:", choices: ["Inflation is guaranteed", "It can be invested to earn a return; also risk and preference for present consumption", "Governments print money", "Dollars decay physically"], answerIndex: 1, explanation: "Opportunity cost of capital is the core reason." },
    { id: "q3", prompt: "The future value of $1,000 invested at 8% for 5 years, compounded annually, is closest to:", choices: ["$1,400", "$1,469", "$1,500", "$1,610"], answerIndex: 1, explanation: "1000 × 1.08^5 ≈ 1469." },
    { id: "q4", prompt: "An annuity paying $2,000 per year for 10 years at 6% has a present value closest to:", choices: ["$12,000", "$14,720", "$18,000", "$20,000"], answerIndex: 1, explanation: "PV of an ordinary 10-year annuity at 6% ≈ 2000 × 7.360 = 14,720." },
    { id: "q5", prompt: "Doubling the discount rate for a long-dated cash flow will:", choices: ["Barely change its present value", "Sharply lower its present value", "Increase its present value", "Have no effect"], answerIndex: 1, explanation: "Discount rates compound; long horizons make PV highly sensitive to rate changes." },
    { id: "q6", prompt: "When NPV and IRR conflict on mutually exclusive projects, use:", choices: ["IRR", "Payback", "NPV", "Whichever is larger"], answerIndex: 2, explanation: "NPV measures absolute value creation." },
    { id: "q7", prompt: "A project has an IRR of 20% and the firm's cost of capital is 12%. NPV is:", choices: ["Zero", "Negative", "Positive", "Cannot tell from IRR alone"], answerIndex: 2, explanation: "IRR above cost of capital implies value creation, though NPV magnitude also depends on scale." },
    { id: "q8", prompt: "Payback period is a poor stand-alone metric because it:", choices: ["Uses the wrong currency", "Ignores time value and cash flows beyond the payback point", "Is too complex", "Requires a discount rate"], answerIndex: 1, explanation: "It rewards early cash and ignores everything after the threshold." },
    { id: "q9", prompt: "A project with unconventional cash flows (sign changes) may produce:", choices: ["No IRR at all", "Multiple IRRs", "One IRR always", "A negative NPV always"], answerIndex: 1, explanation: "Multiple sign changes can yield multiple internal rates of return, so NPV is preferred." },
    { id: "q10", prompt: "Two mutually exclusive projects: A has NPV $500k / IRR 25%; B has NPV $2m / IRR 18%. Cost of capital 12%. Choose:", choices: ["A, because IRR is higher", "B, because NPV is higher", "Cannot decide", "Neither"], answerIndex: 1, explanation: "NPV maximizes absolute wealth, the correct criterion for mutually exclusive projects." },
    { id: "q11", prompt: "Why does debt have an after-tax cost of r_d × (1−t)?", choices: ["Banks discount it", "Interest is tax deductible", "Inflation lowers it", "Default risk"], answerIndex: 1, explanation: "The tax shield is the deductibility of interest." },
    { id: "q12", prompt: "A firm with 40% debt at 6% pre-tax cost, 60% equity at 12%, tax 25%. WACC ≈:", choices: ["6.0%", "7.2%", "9.0%", "10.0%"], answerIndex: 2, explanation: "0.4×6×0.75 + 0.6×12 = 1.8 + 7.2 = 9.0%." },
    { id: "q13", prompt: "Cost of equity via CAPM = r_f + β × ERP. Doubling beta from 1 to 2, r_f = 4%, ERP = 6% raises cost of equity from:", choices: ["10% to 16%", "4% to 10%", "4% to 12%", "6% to 12%"], answerIndex: 0, explanation: "4 + 1×6 = 10; 4 + 2×6 = 16." },
    { id: "q14", prompt: "Which use of WACC is inappropriate?", choices: ["Discounting free cash flows for the firm as a whole", "Discounting a project with materially different risk than the firm", "Comparing to a project's IRR of similar risk", "Valuing a stable public company"], answerIndex: 1, explanation: "WACC applies to projects with risk similar to the firm; project-specific rates are required otherwise." },
    { id: "q15", prompt: "A firm should use the market value (not book value) of debt and equity for WACC because:", choices: ["Book values are inflated", "Market values reflect the current opportunity cost of capital for investors", "Book values ignore taxes", "Regulators require it"], answerIndex: 1, explanation: "Investors' required returns are set on market values, not historical accounting balances." },
    { id: "q16", prompt: "A perpetuity paying $500/year at 5% is worth:", choices: ["$2,500", "$5,000", "$10,000", "$25,000"], answerIndex: 2, explanation: "500/0.05 = 10,000." },
    { id: "q17", prompt: "Modigliani–Miller Proposition I (no taxes) states that:", choices: ["More debt always increases firm value", "Capital structure is irrelevant to firm value in perfect markets", "Equity is always cheaper", "Debt is always cheaper"], answerIndex: 1, explanation: "Without frictions, value depends on assets and earning power, not financing mix." },
    { id: "q18", prompt: "Introducing corporate taxes into M&M implies:", choices: ["Debt reduces firm value", "Debt increases firm value via the interest tax shield", "Capital structure remains irrelevant", "Equity becomes tax-free"], answerIndex: 1, explanation: "Interest deductibility creates value up to the point offset by distress costs." },
    { id: "q19", prompt: "The main cost limiting debt in the trade-off theory is:", choices: ["Underwriting fees", "Financial distress and bankruptcy costs", "Currency risk", "Interest rates"], answerIndex: 1, explanation: "Higher leverage raises the expected cost of distress, eventually outweighing the tax shield." },
    { id: "q20", prompt: "A capital-intensive utility usually carries more debt than a biotech because:", choices: ["Utilities have volatile cash flows", "Stable regulated cash flows support higher leverage without excessive distress risk", "Biotechs prefer debt", "Utilities are riskier"], answerIndex: 1, explanation: "Debt capacity rises with cash flow stability and asset tangibility." },
  ],
  assignment: {
    id: "a1",
    title: "NPV evaluation",
    prompt: "Pick a real-or-hypothetical capital project (open a second store, launch a SaaS feature, replace a piece of equipment). Project five years of incremental cash flows, assume a terminal value, choose a defensible discount rate, and compute NPV and IRR. Then run two sensitivities (discount rate ±2%, revenue ±20%) and write a one-paragraph go/no-go recommendation.",
    rubric: "Reasonable cash flow projection (3 pts). Correct NPV/IRR math (3 pts). Sensible discount rate with justification (2 pts). Clear recommendation grounded in the numbers (2 pts).",
  },
};