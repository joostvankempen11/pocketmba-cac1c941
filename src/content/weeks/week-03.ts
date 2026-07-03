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
      body: `# Time value of money\\n\\nThe single most important idea in finance: **a dollar today is worth more than a dollar tomorrow.** Today's dollar can be invested to earn a return; tomorrow's dollar is exposed to inflation, default, and opportunity cost. Every valuation technique in corporate finance — DCF, bond pricing, mortgage math, lease analysis, pension funding — is just an application of this one idea.\\n\\nThink of it this way: If I offer you $100 today or $100 next year, you take it today because you could put that cash in a savings account and have $105 by next year. By waiting, you lose that potential growth (opportunity cost) and your money might buy fewer groceries later (inflation).\\n\\nTo a manager, time isn't just a clock; it's a cost. If you have $1 million sitting in a non-interest-bearing checking account, you are effectively losing money every day because that capital isn't out in the world working for you. \\n\\n## Present value and future value\\n\\n\`FV = PV × (1 + r)^n\`\\n\\n\`PV = FV / (1 + r)^n\`\\n\\nwhere *r* is the periodic discount rate and *n* is the number of periods. The discount rate represents the *opportunity cost* of capital: the return you could earn on an equivalent-risk alternative. Riskier cash flows are discounted at higher rates and therefore have lower present values.\\n\\nIn plain English, "discounting" is the process of stripping away the interest to see what a future payment is worth in today's terms (**Present Value**). If a manager ignores this, they might greenlight a project that returns $1 million in 20 years, not realizing that after accounting for the risk and the wait, that $1 million is only worth a fraction of that amount today.\\n\\nThink of "r" (the discount rate) as your hurdle. If you could easily get a 5% return by buying safe government bonds, you shouldn't accept a 5% return on a risky new taco truck startup. You would "discount" the taco truck's future earnings at a much higher rate (perhaps 15%) to account for the risk that the business might fail. The higher the risk, the less that future promise is worth to you right now.\\n\\n## Compounding and the rule of 72\\n\\nMoney compounds — last period's interest earns this period's interest. The **Rule of 72** is the back-of-envelope shortcut: at *r%* growth, money doubles in roughly *72/r* years. At 8% you double every nine years; at 12% every six. Compounding is also why credit-card debt is ruinous — interest charged monthly at 18% APR compounds to ~19.6% effective annual rate.\\n\\nCompounding is essentially "interest on interest." Imagine you save $1,000. In Year 1, you earn interest on that $1,000. In Year 2, you earn interest on the $1,000 *plus* the interest you earned in Year 1. This creates an exponential curve that can make small, consistent investments explode in value over decades.\\n\\nFor a business, compounding works on growth too. If a SaaS company grows its user base by 10% every month, it isn't just adding the same number of users; it's adding 10% of a larger and larger number each time. This is why "early-stage growth" is so highly prized in venture capital.\\n\\n## Annuities and perpetuities\\n\\nAn **annuity** is a stream of equal cash flows for a fixed number of periods (mortgages, bond coupons, lease payments). A **perpetuity** is one that lasts forever (preferred stock, the British consol bonds of the 19th century).\\n\\n\`PV of perpetuity = C / r\`\\n\\n\`PV of growing perpetuity (Gordon) = C / (r − g)\`\\n\\nThe growing perpetuity formula is the engine of the **terminal value** in every DCF — it captures the value of cash flows beyond the explicit forecast horizon. Tiny changes in *r − g* swing the answer enormously, which is why DCFs are sensitive to assumptions you can barely defend.\\n\\nIn a business context, an annuity is like your monthly office rent or a fixed gym membership. A growing perpetuity is how we value an entire company that we expect to keep growing at a steady rate (*g*) forever. If you underestimate the discount rate (*r*), you will massively overpay for the business.\\n\\nThink of "g" as the long-term growth rate. If you assume a company will grow its profits at 3% forever, but it actually only grows at 1%, the "r - g" denominator gets larger, making the calculated value of the company drop significantly. Managers who are too optimistic about "g" often end up making bad acquisitions.\\n\\n## Real vs nominal\\n\\nNominal rates include inflation; real rates strip it out. \`(1 + r_nominal) = (1 + r_real)(1 + inflation)\`. When forecasting in nominal dollars, discount at nominal rates; when forecasting in real dollars, discount at real rates. Mixing them is a common student error — and a common professional one.\\n\\nThink of "nominal" as the number printed on the bill, and "real" as the number of apples that bill can actually buy. If your bank pays 5% interest (nominal) but inflation is 5%, your "real" return is 0%. You have more paper, but no more purchasing power.\\n\\nIf you are a manager planning a 10-year factory expansion, you must decide: Are your revenue projections including the fact that you'll raise prices for inflation? If yes, you are using nominal dollars and must use a nominal discount rate. If you ignore inflation in your sales numbers but use a high interest rate from the bank to discount them, your project will look much worse than it actually is.\\n\\n## Worked example\\n\\nYou're offered $10,000 in ten years or some smaller sum today. At a 7% discount rate, the present value of the future $10,000 is \`10,000 / 1.07^10 ≈ $5,083\`. Anything above $5,083 today is the better deal — and the higher your opportunity cost of capital, the more you'd demand to defer.`,
      videos: [
        { title: "Time Value of Money \u2014 Full Tutorial", source: "YouTube \u2014 Khan Academy", url: "https://www.youtube.com/watch?v=733mgqrzNKs", fallbackSearchQuery: "time value of money Khan Academy" },
        { title: "Damodaran \u2014 Time Value of Money", source: "YouTube \u2014 NYU Stern", videoId: "kaYz15vwb9k", fallbackSearchQuery: "Damodaran time value of money" },
      ],
      readings: [
        { title: "A Refresher on Net Present Value", source: "Harvard Business Review", url: "https://hbr.org/2014/11/a-refresher-on-net-present-value" },
        { title: "How Finance Works", source: "Harvard Business Review", url: "https://hbr.org/podcast/2019/03/how-finance-works" },
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

Classical NPV ignores managerial flexibility — the option to expand, contract, defer, or abandon mid-project. **Real options** valuation (an offshoot of Black-Scholes thinking) captures that flexibility and can rescue projects that look NPV-negative under a single fixed scenario. Especially relevant in R&D, natural resources, and platform investments. For example, a tech company might build a small, money-losing prototype (Negative NPV). However, this creates the "option" to launch a global product if the prototype works. That future possibility has value today that simple math might miss. If a manager ignores real options, they might get "analysis paralysis" and kill a project that could have become a massive future success just because the immediate numbers look tight.`,
      videos: [
        { title: "NPV and IRR Explained", source: "YouTube \u2014 Ben Felix", url: "https://www.youtube.com/watch?v=GtSf-BPaUf4", fallbackSearchQuery: "NPV IRR explained" },
        { title: "Capital Budgeting Conflicts", source: "YouTube \u2014 Edspira", url: "https://www.youtube.com/watch?v=lFu-MTH6_x4", fallbackSearchQuery: "capital budgeting NPV IRR conflict" },
        { title: "NPV and IRR Explained", source: "YouTube", videoId: "Fw5-wccViOM", fallbackSearchQuery: "NPV vs IRR project evaluation" },
        { title: "Capital Budgeting Conflicts", source: "YouTube", videoId: "9rqPpuIrFLA", fallbackSearchQuery: "capital budgeting decision conflicts" },
      ],
      readings: [
        { title: "Do You Know Your Cost of Capital?", source: "Harvard Business Review", url: "https://hbr.org/2014/07/do-you-know-your-cost-of-capital" },
        { title: "Investment Opportunities as Real Options", source: "Harvard Business Review", url: "https://hbr.org/1998/07/investment-opportunities-as-real-options-getting-started-on-the-numbers" },
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

Every project the firm undertakes has to clear ~8.2% just to break even on value creation. If a project returns 7%, the company is actually "losing" money for its investors because it could have given that cash back to them to invest elsewhere for better returns.`,
      videos: [
        { title: "Corporate Finance Explained | Cost of Capital", source: "YouTube", videoId: "90e-EV1kL9I", fallbackSearchQuery: "WACC weighted average cost of capital explained" },
        { title: "WACC \u2014 A Comprehensive Walkthrough", source: "YouTube \u2014 The Finance Storyteller", url: "https://www.youtube.com/watch?v=0inqw9cCJnM", fallbackSearchQuery: "WACC walkthrough" },
        { title: "Damodaran \u2014 Estimating Cost of Equity", source: "YouTube \u2014 NYU Stern", url: "https://www.youtube.com/watch?v=oTQukNB-CC4", fallbackSearchQuery: "Damodaran cost of equity" },
        { title: "Estimating Cost of Equity", source: "YouTube", videoId: "JyUBm9M7Wyw", fallbackSearchQuery: "estimating cost of equity CAPM" },
      ],
      readings: [
        { title: "Best Practice — Estimating Cost of Capital", source: "Harvard Business Review", url: "https://hbr.org/2014/07/do-you-know-your-cost-of-capital" },
        { title: "The Real Reason Companies Are So Focused on the Short Term", source: "Harvard Business Review", url: "https://hbr.org/2017/12/the-real-reason-companies-are-so-focused-on-the-short-term" },
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

A **Dividend** is a regular cash payment to shareholders, like a steady allowance. A **Buyback** is when the company uses its cash to buy its own stock off the market, which makes the remaining shares more valuable. While both return cash to investors, companies hate cutting dividends because it looks like a failure, whereas they can stop buybacks anytime without much drama. Think of dividends as a monthly rent payment you *must* make, while buybacks are like choosing to pay extra toward your mortgage—helpful, but optional if cash gets tight.`,
      videos: [
        { title: "Modigliani-Miller and Capital Structure", source: "YouTube \u2014 Aswath Damodaran", url: "https://www.youtube.com/watch?v=ufHbFRtRyaQ", fallbackSearchQuery: "Modigliani Miller capital structure" },
        { title: "How Much Debt Should a Company Have?", source: "YouTube \u2014 The Plain Bagel", url: "https://www.youtube.com/watch?v=ScKK57Mws6w", fallbackSearchQuery: "how much debt should a company have" },
        { title: "Modigliani-Miller and Capital Structure", source: "YouTube", videoId: "Zzsf4O1_02M", fallbackSearchQuery: "Modigliani Miller theorem" },
        { title: "How Much Debt Should a Company Have", source: "YouTube", videoId: "jsRuWaP2pnA", fallbackSearchQuery: "optimal capital structure debt equity" },
      ],
      readings: [
        { title: "The Capital Structure Puzzle", source: "Harvard Business Review", url: "https://hbr.org/1996/01/the-capital-structure-puzzle-another-look-at-the-evidence" },
        { title: "Are Buybacks Really Shortchanging Investment?", source: "Harvard Business Review", url: "https://hbr.org/2017/03/are-buybacks-really-shortchanging-investment" },
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