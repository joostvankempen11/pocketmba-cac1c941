import type { Week } from "../types";

export const week10: Week = {
  week: 10,
  title: "Data Analytics for Managers",
  tagline: "You don't need to be a data scientist — you do need to read, question, and act on data without being fooled.",
  topics: ["Descriptive vs predictive", "Statistics fundamentals", "A/B testing", "Causal inference", "Dashboards"],
  lessons: [
    {
      id: "l1",
      title: "From data to decision",
      summary: "Most data work fails not at modeling but at framing — wrong question, wrong metric, wrong audience.",
      body: `# Data analytics

The promise of data is decisions that are better informed than gut alone. The pitfall is the opposite: producing volumes of analysis that don't change decisions, or worse, *validate* decisions already made. Mature analytics organizations close the loop from question to action. Think of this as the difference between looking in a rearview mirror to see where you've been versus using a GPS to decide which turn to take next. If data doesn't change a choice, it’s just noise.

## Four ladders of analytics

- **Descriptive** — what happened? (dashboards, reporting)
- **Diagnostic** — why did it happen? (drill-down, root-cause)
- **Predictive** — what is likely to happen? (forecasting, ML)
- **Prescriptive** — what should we do? (optimization, recommendations)

Most organizations live in descriptive and dabble in diagnostic. Diagnostic-and-up is where the value lies. The discipline: don't build the next layer until the previous one is reliable. To put this into a real-world context: Imagine a bakery. *Descriptive* tells them they sold 50% fewer croissants today. *Diagnostic* reveals it rained and foot traffic was low. *Predictive* warns that next Tuesday will also be rainy. *Prescriptive* tells the baker to halve the dough order and run a 'Rainy Day' delivery special to keep revenue steady. If the baker doesn't trust the descriptive data (e.g., the cash register is broken), the higher-level predictions are useless.

## The DIKW pyramid

Data → Information → Knowledge → Wisdom.

Most companies are awash in data, short on information, weak on knowledge, and starved for wisdom. The constraint is rarely *more* data; it's the human and process work to turn it into something a decision-maker uses. Data is just raw numbers (e.g., '10,000 users logged in'). Information gives those numbers context ('Login volume is up 20% since the update'). Knowledge identifies the pattern ('Updates drive logins'). Wisdom is the ability to use that knowledge to make a strategic bet ('We should update monthly to maintain engagement').

## The framing principle

Before any analysis, define:
1. **Decision** — what will change as a result of this work?
2. **Decision-maker** — who will act on it, and what would they need to be convinced?
3. **Decision deadline** — when do they need it?
4. **Decision criterion** — what evidence would change their action vs. confirm it?

Without these, analysis becomes an end in itself. The right shape: hypothesis → analysis → decision → action → measured impact, in a loop. For example, if you are analyzing employee turnover, your **Decision** might be whether to increase salaries by 10%. If you haven't defined a **Criterion** (e.g., 'only if turnover is 5% higher than the industry average'), you'll likely just stare at a spreadsheet until you feel like you've done 'enough work,' without actually solving the problem.

## Choosing metrics

Three categories of metrics every business should track:
- **North-star metric** — the single number that best captures customer value delivered. Examples: Spotify's time spent listening, Airbnb's nights booked, Slack's messages sent in active teams. This should be the 'pulse' of the company's health.
- **Input metrics** — the things you can actually change that drive the north star. For Spotify: catalog quality, recommendation accuracy, onboarding completion, retention curves. These are the 'levers' you can pull. You can't just 'make people listen more,' but you *can* add 1,000 new songs to the catalog.
- **Guardrail metrics** — things that must not regress (latency, error rate, churn, NPS) while you push the input metrics. NPS (Net Promoter Score) measures customer loyalty; if you increase ads to boost revenue but your NPS plummets, you are destroying the business to hit a short-term goal.

A frequent failure mode: optimizing a single metric until the system breaks elsewhere (Goodhart's Law: "when a measure becomes a target, it ceases to be a good measure"). Guardrails prevent this. If a call center manager is only measured on 'speed of call,' they will hang up on customers to hit their goal—this is why customer satisfaction must be a guardrail.

## The pyramid of analytical maturity

1. *Anecdote* — "I heard from a customer..."
2. *Aggregate report* — "Last month we did X."
3. *Cohort and segment views* — "X improved overall but Y segment declined." A **cohort** is just a group of people who share a common characteristic over time, like 'users who signed up in January.'
4. *Trend and forecast* — "Here is X over time; here is what we expect next quarter."
5. *Correlation analysis* — "X moves with Y; the relationship strengthens in periods Z." For example, sales go up when the temperature goes up.
6. *Causal inference* — "Doing X caused Y by amount Z, with this confidence interval." This is the gold standard: proving that your specific action, and not luck or the weather, created a result.

Most decisions in most organizations are made at levels 1-3. Moving the median decision up a rung is one of the highest-leverage investments a leadership team can make. It moves the company away from 'guessing based on feelings' toward 'investing based on evidence.'`,
      videos: [
        { title: "Hans Rosling \u2014 The Best Stats You've Ever Seen (TED)", source: "YouTube \u2014 TED", url: "https://www.youtube.com/watch?v=hVimVzgtD6w", fallbackSearchQuery: "Hans Rosling best stats" },
        { title: "What is Decision Intelligence", source: "YouTube", videoId: "iLu9XyZ55oI", fallbackSearchQuery: "decision intelligence explained" },
      ],
      exercise: { id: "ex1", scenario: "You are the operations manager for a regional gym chain. Your North Star metric is 'Total Monthly Check-ins,' but recently you noticed that while check-ins are steady, your membership cancellations (churn) are spiking. You need to present a plan to the CEO that addresses this problem without hurting the North Star metric.", task: "Identify one specific Input Metric you would change to reduce cancellations, and define one Guardrail Metric you will monitor to ensure your changes don't negatively impact the gym's profitability or overall atmosphere." }
    },
    {
      id: "l2",
      title: "Statistics every manager should not get fooled by",
      summary: "A handful of foundational concepts protect against most common analytical errors.",
      body: `# Statistics for managers

You don't need to derive distributions from scratch. You do need to read a chart, evaluate a claim, and ask the right questions without being snowed by jargon. 

Managers who get "snowed" by statistics often make the mistake of assuming a single number represents the whole truth. In reality, statistics are just tools to summarize complex reality; if you pick the wrong tool, you get a distorted picture of your business.

## Distributions and central tendency

Mean (average), median (middle value), mode (most frequent). For skewed distributions — incomes, file sizes, project durations, time on site — the mean is misleading; the median tells you about the typical case, and the mean tells you about the tail. Most business data is right-skewed; report both.

Think of a small coffee shop where five employees earn $30,000 a year, and the owner takes home $300,000. The **mean** (average) income is $75,000, but that doesn't represent anyone's reality. The **median** (the middle point if you lined them all up) is $30,000. In business, if you only look at the mean, a few "whales" or outliers can trick you into thinking your typical customer is much wealthier or more active than they actually are.

**Variance** and **standard deviation** measure spread. "Average revenue per customer is $50" with σ=$200 is a completely different business than σ=$5. Without spread, averages mislead.

Standard deviation (represented by the Greek letter sigma, σ) tells you how much your data points wander away from the average. If σ is $5, almost everyone is spending near $50. If σ is $200, you have a wild mix of people spending nothing and a few people spending thousands. You can't market to both groups using the same strategy.

## Distribution shapes you must recognize

- **Normal** (bell curve) — sums of independent factors. Heights, measurement errors. Mean and median coincide. This is the "fair" distribution where most things are average and extremes are rare.
- **Lognormal** — products of independent factors. Incomes, stock returns, project costs. Skewed right. This happens when factors multiply each other; a small delay in a project causes further delays, leading to a "long tail" of late finishes.
- **Power law** — winner-take-all dynamics. City sizes, web traffic, customer LTV. A small fraction accounts for most of the mass. This is the 80/20 rule on steroids—like how the top 1% of mobile apps get 90% of all downloads.
- **Bimodal** — two underlying populations mixed (commuter vs leisure travelers; weekday vs weekend customers). This looks like a camel with two humps. If you average them, you get a number in the "valley" that represents nobody.

Treating a power-law distribution as if it were normal causes most "we couldn't have predicted this" disasters in finance and operations. 

## Correlation vs causation

Two variables can move together for any of:
- X causes Y
- Y causes X
- Both caused by Z (a confounder)
- Pure coincidence (especially in high-dimensional searches)
- Selection effect (only the cases where both happen show up in the data)

For example, ice cream sales and shark attacks are highly correlated. Does eating ice cream make you tasty to sharks? No. Both are caused by "Variable Z": warm summer weather. 

Establishing *causation* requires either a controlled experiment or careful causal inference (Lesson 4). Until then, correlations are hypotheses, not conclusions. If a manager sees that "users who use the dark mode feature stay longer" and orders everyone to be switched to dark mode, they are assuming causation. In reality, it might just be that power users (who stay longer anyway) are the only ones who bother to find the dark mode setting.

## Sample size and confidence

A 5% difference between two cohorts of 50 is statistical noise. The same difference between cohorts of 50,000 is a real effect. Sample size determines whether you can detect a given effect; small samples make small effects invisible and make noise look like signal.

Useful intuition: standard error of a percentage scales as 1/√n. To halve the noise, you need 4x the sample. To detect a 1% change reliably you need huge samples. This is why short A/B tests on small sites are often statistically meaningless.

If you flip a coin 4 times and get 3 heads, you don't conclude the coin is broken; that's just a small sample size creating "noise." But if you flip it 4,000 times and get 3,000 heads, you have a significant problem. In business, making massive pivots based on a survey of 10 people is high-stakes gambling, not data-driven management.

## Survivorship bias

The most common analytical poison. Studies of "successful CEOs" miss everyone who tried the same approach and failed. Surveys of customers miss everyone who churned. World War II bomber armor based on returning planes' damage patterns miss the planes that didn't return (Abraham Wald's famous insight).

If you only interview the customers who still use your product after two years, they will tell you everything is great. But they are the "survivors." The people who hated the interface or found it too expensive already left and aren't there to answer your survey. Your data is biased because the failures are invisible.

The fix: explicitly enumerate the population you're sampling from. If you can't see the failures, your conclusions are about success conditioned on having succeeded, which is rarely what you want to know.

## Base rates and Bayes

When a test for a rare event flags positive, the probability the event actually occurred is much lower than the test's accuracy suggests. A 99%-accurate test for a 1-in-1000 condition produces 10 false positives for every true positive. Doctors, managers, and security teams routinely miscalibrate.

The "Base Rate" is the starting probability before you see new evidence. If you're looking for fraud, and only 0.1% of transactions are fraudulent, your "base rate" is very low. Even a very "smart" algorithm will flag a lot of innocent people just because there are so many more innocent people than thieves.

The Bayesian update: posterior ∝ likelihood × prior. Always ask "what was the base rate?" before treating a positive signal as evidence.`,
      videos: [
        { title: "StatQuest \u2014 Hypothesis Testing and the Null Hypothesis", source: "YouTube", videoId: "vemZtEM63GY", fallbackSearchQuery: "hypothesis testing explained statistics" },
        { title: "Why Most Published Research Findings Are False", source: "YouTube", videoId: "vY9mGJQFdyE", fallbackSearchQuery: "Ioannidis research findings false" },
      ],
      exercise: { id: "ex1", scenario: "You are the Operations Manager for a high-end delivery startup. Your CEO notices that the 'Average Delivery Time' last month was 28 minutes, which meets the company goal of under 30 minutes, and wants to issue a press release. However, you notice the Standard Deviation (σ) is 25 minutes, and the distribution is heavily right-skewed (Bimodal), with local deliveries taking 15 minutes and suburban deliveries often taking 75 minutes.", task: "Draft a 3-sentence internal memo to the CEO explaining why the '28-minute average' is a dangerous metric to use for marketing and suggest a specific alternative way to report this data that wouldn't mislead customers." }
    },
    {
      id: "l3",
      title: "A/B testing done right",
      summary: "Experiments are the gold standard for learning what works — and a minefield of misuse.",
      body: `# Controlled experiments

A randomized experiment (A/B test) is the closest a business gets to a clean causal estimate. This means we aren't just looking at things that happen together (correlation); we are proving one thing *caused* another. Random assignment balances every confounder, known and unknown. A confounder is a hidden variable that might trick you—like assuming a new website design caused a sales spike when the spike was actually caused by a holiday weekend. Done well, it answers: *did the change cause the outcome, and by how much?* with quantified uncertainty.

Imagine a coffee shop owner wants to know if offering a "Buy 9 get 1 free" card increases visits. If they only give it to regulars, they won't know if the card worked or if those people were already coming daily. By giving it to a random half of all customers, they isolate the card's actual impact.

## Designing an experiment

1. **Define a clear hypothesis** — "Changing X to Y will improve metric Z by at least Δ within T weeks."
2. **Pick the success metric in advance** — and the guardrail metrics that must not regress. Guardrail metrics are the things you don't want to break while trying to fix something else. If you increase sales but destroy your profit margin to do it, you haven't really won.
3. **Compute required sample size** — based on the smallest effect worth detecting, baseline variance, desired power (typically 80%), and significance level (typically 95%). Statistical power is your ability to detect a change if there actually is one; 80% power means you have an 80% chance of seeing the 'win'.
4. **Randomize at the right unit** — usually user, sometimes session, sometimes market or geography.
5. **Run the test for at least one full business cycle** — weekly behaviors mean a 3-day test is usually too short. Most businesses see different behavior on Mondays than on Saturdays.
6. **Pre-register the analysis plan** — to prevent p-hacking after the fact. P-hacking is the dangerous practice of digging through data until you find something—anything—that looks like it worked, even if it was just a fluke.
7. **Analyze and decide** — including practical significance, not just statistical significance.

## The traps

- **Peeking** — checking results repeatedly and stopping when p<0.05. Inflates false positive rate dramatically. Either pre-commit to a sample size, or use sequential testing methods (mSPRT, alpha-spending). Think of this like a coin toss: if you flip until you get three heads in a row and then stop immediately, you haven't proven the coin is weighted; you just waited for a lucky streak.
- **Multiple comparisons** — testing 20 metrics, finding 1 "significant" at p<0.05 by chance. Apply Bonferroni or false-discovery-rate corrections.
- **Wrong unit of randomization** — randomizing pageviews when behavior is per-user creates correlated errors. If a user sees a 'blue' button on their phone and a 'red' button on their laptop, their experience is inconsistent and your data is muddied.
- **Survivorship-style cohort definitions** — comparing "active users in week 4" misses everyone who didn't make it. This ignores the people who were so annoyed by your change that they quit entirely.
- **Novelty effects** — users may engage briefly with anything new; the durable effect is what matters. A bright neon flashing button will get clicks at first because it's new, not because it's better.
- **Network effects** — testing a social feature on individuals when value comes from the network produces meaningless results. If you give one person a telephone but no one else has one, they can't use it, making the test fail even if the telephone is a great invention.
- **Statistical significance ≠ practical significance** — a 0.1% lift might be highly significant with 10M users and economically meaningless. If it costs $50,000 in engineering time to implement a change that only brings in $50 in extra revenue, it's not a business win.

## The Lift vs Impact distinction

A test result of "+5% conversion" is meaningless without context. Always compute:
- **Absolute effect** — how many additional customers/dollars
- **Relative effect** — the percentage uplift
- **Confidence interval** — the plausible range. This is the "margin of error." If your result is +5% but the interval is -2% to +12%, you can't be sure the change was actually positive.
- **Generalizability** — would the effect persist at scale and over time?

## Beyond A/B

- **Multi-armed bandits** — adaptive experiments that shift traffic to winners as evidence accumulates. Useful for headline optimization, where speed matters and there are many variants. It's like a slot machine that notices which lever pays out most and starts pulling that one more often automatically.
- **Switchback / time-based experiments** — for markets with strong network effects (ride-share, marketplaces), randomize *time periods* across treatments rather than users. Uber might toggle a feature on and off for the whole city of Chicago every 60 minutes to see the impact without splitting the supply of drivers.
- **Geo experiments** — for marketing measurement when user-level randomization is infeasible.
- **Diff-in-diff and synthetic control** — quasi-experimental methods when you can't randomize but have a credible comparison group. This is often used when a new law is passed in one state (the treatment) and you compare it to a similar neighboring state (the control).

## Building an experimentation culture

The hard part is organizational, not technical. The patterns that work:
- A standard tool everyone uses, with guardrails built in
- A pre-registration step that's friction-free
- A culture of celebrating *learning*, not just winning (losing tests are also valuable). If a test fails, you've saved the company from making a bad permanent change.
- Honest reporting of failed experiments
- Leadership that uses experiment results to make decisions, including overturning their own intuitions

Booking.com, Microsoft, Airbnb, and Netflix have published extensively about their experimentation programs — running tens of thousands of experiments per year and finding that ~10-30% of changes actually improve the metric the team confidently expected to improve. The base rate of confident-but-wrong is humbling.`,
      videos: [
        { title: "A/B Testing \u2014 Trustworthy Online Controlled Experiments", source: "YouTube", videoId: "VuKIN9S8Ivs", fallbackSearchQuery: "A/B testing controlled experiments" },
        { title: "Experimentation at Scale \u2014 Airbnb", source: "YouTube", videoId: "8F3k9nNVf5Q", fallbackSearchQuery: "Airbnb experimentation scale" },
      ],
      exercise: { id: "ex1", scenario: "You are the Product Manager for a food delivery app. Your team wants to change the 'Checkout' button color from green to orange, believing it will stand out more and increase completed orders. You run a test for 2 days mid-week and see a 4% increase with a p-value of 0.04 (just under the 0.05 threshold), but your developers note that the app crashed for 2% of users during the test due to an unrelated bug.", task: "Identify two specific 'traps' or errors mentioned in the lesson that make this specific test result unreliable, and explain how you would fix the experimental design before presenting the results to leadership." }
    },
    {
      id: "l4",
      title: "Causal inference and reading the world",
      summary: "When experiments aren't possible, careful causal methods beat correlations — but require more care.",
      body: `# Causal inference

Most business decisions can't be tested cleanly. You can't randomize whether some customers experience a price change. You can't run a true experiment on whether to enter a new market. Causal inference methods let you extract reasonably credible causal estimates from observational data — when used carefully. In plain English, causal inference is the art of figuring out if X actually *caused* Y, or if they just happened to change at the same time by coincidence or due to a third factor.

## The fundamental problem

The "counterfactual" — what *would have happened* if you'd made the other choice — is never observed. We can only see one branch of the choice. Causal inference is the discipline of estimating that counterfactual. Imagine a bakery that starts a loyalty program and sees sales rise. Is it the program (the treatment), or would sales have risen anyway because it's December (the counterfactual)? Since we can't go back in time and *not* launch the program, we use math to approximate that alternate reality.

## Methods

**Randomized trials** (Lesson 3) are the gold standard. When unavailable:

- **Difference-in-differences** — compare the change in a treated group to the change in a control group over the same period. Controls for time trends and group-level differences. Works when the parallel trends assumption holds (the two groups would have evolved similarly without treatment). For example, if you raise prices in your Chicago stores but not your Detroit stores, you compare the *jump* in Chicago sales to the *jump* in Detroit sales to filter out general economic trends affecting both cities.

- **Synthetic control** — construct a weighted average of untreated units that best matches the treated unit's pre-treatment trajectory. Compare post-treatment paths. Used to evaluate state-level policies, marketing campaigns, store openings. If you open a unique flagship store in NYC, you might create a "virtual NYC" by blending data from smaller stores in London, Tokyo, and Paris to see how the flagship is actually performing relative to a prediction.

- **Regression discontinuity** — when treatment is assigned by a threshold (test score, age, income), units just above and just below are essentially comparable. The discontinuity in outcome at the threshold estimates the causal effect. Think of a scholarship given only to students who score above 90. A student who gets a 91 is almost identical to one who gets an 89; any massive difference in their future earnings likely comes from the scholarship itself, not their intelligence.

- **Instrumental variables** — find a variable that affects the treatment but not the outcome except through the treatment. Quasi-randomness from rainfall, distance to clinics, military draft lotteries. This "instrument" acts as a nudge. If you want to know if exercise improves productivity, you can't just look at gym-goers (they might be more disciplined people anyway). Instead, you might look at people who live closer to a gym—the distance is the "instrument" that makes them more likely to go without being related to their work ethic.

- **Propensity score matching** — match treated and untreated units with similar predicted probability of treatment. Reduces but doesn't eliminate omitted-variable bias. This is essentially "finding your twin." If you want to see if an MBA helps salary, you find two people with the same GPA, same industry, and same years of experience, where one got the degree and the other didn't.

Each method has strong assumptions. None is bulletproof. Honest causal analysis specifies the assumptions and tests them.

## Confounders, mediators, colliders

Three things that destroy naive analysis:
- **Confounder** — a third variable that affects both X and Y. Coffee and lung cancer correlate because smokers drink coffee. Smoking is the confounder. In business, a marketing campaign might look successful (X caused Y), but the "confounder" is actually the holiday season causing both the campaign and the high sales.
- **Mediator** — variable on the causal path from X to Y. Controlling for the mediator removes the effect you're trying to estimate. If a new UI (X) increases sales (Y) by making the checkout faster (Mediator), and you "correct" for checkout speed, you'll wrongly conclude the UI change did nothing.
- **Collider** — a variable that X and Y both affect. Conditioning on a collider creates *spurious* (fake) correlation between X and Y. This is the trap behind much of "selection bias." For instance, if a VC firm only looks at startups that are either very profitable OR have a genius founder, they might mistakenly conclude that genius founders aren't profitable, just because they've excluded the average startups that have neither.

The discipline of Directed Acyclic Graphs (DAGs) makes these relationships explicit and tells you which variables to control for and which to leave alone. Causal Inference: The Mixtape (Cunningham, free online) and The Effect (Huntington-Klein, free online) are excellent introductions.

## Reading evidence in the world

When you encounter a claim like "companies with X grow Y% faster":
- Was this an experiment or observational data? (Observational data just watches what happens; experiments involve active intervention).
- What was the sample, and is survivorship bias likely? (Are we only looking at the winners who survived?)
- What confounders might explain the correlation? 
- How big is the effect, and how big is the uncertainty? (Is it a 1% gain with a high margin of error, or a solid 20%?)
- Have others replicated it?

Calibrated skepticism beats both naive belief and reflexive dismissal. A weak study is evidence, just weaker than a strong study. Update accordingly.

## Becoming data-literate without being a data scientist

The minimum viable analytical skill set for a senior manager:
- Read charts critically (axis tricks like starting the Y-axis at 100 to make a tiny change look like a cliff, cherry-picked baselines, missing context)
- Distinguish correlation (two things moving together) from causation (one thing making the other happen)
- Demand sample size and confidence with effect sizes (don't bet the company on a survey of 5 people)
- Ask about base rates (if an alarm is 99% accurate but a crime only happens 1 in 10,000 times, most alarms are still false positives)
- Insist on guardrail metrics, not just topline (if sales go up but customer satisfaction scores crater, you're "burning the furniture to heat the house")
- Pre-register the decision criterion before seeing results (decide what a "win" looks like *before* you see the data so you don't move the goalposts)
- Update beliefs incrementally, not all-or-nothing

Most analytical disasters in business are not from wrong models — they're from these basics not being applied to clear analyses.`,
      videos: [
        { title: "StatQuest \u2014 R-squared explained", source: "YouTube", videoId: "2AQKmw14mHM", fallbackSearchQuery: "correlation vs causation explained" },
        { title: "Judea Pearl \u2014 The Causal Revolution", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=zHjdd--W6o4", fallbackSearchQuery: "Judea Pearl causal revolution" },
      ],
      exercise: { id: "ex1", scenario: "Your software company recently launched a 15-minute 'Live Concierge' onboarding call for all new premium subscribers. Three months later, data shows that users who attended the call have 40% higher retention rates than those who skipped it. Your CEO wants to make this call mandatory for every single user, assuming it's the 'magic bullet' for churn.", task: "Identify at least two potential confounders or sources of selection bias that could explain this 40% difference without the call actually causing the retention, and propose an alternative way to measure the call's true causal impact." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "Goodhart's Law states that:", choices: ["More data is always better", "When a measure becomes a target, it ceases to be a good measure", "Past data predicts future data", "Correlation implies causation"], answerIndex: 1, explanation: "Strong incentives on a single metric warp behavior to optimize that metric at the expense of what it was supposed to proxy." },
    { id: "q2", prompt: "A dashboard with 40 KPIs is likely to:", choices: ["Give leaders more clarity", "Diffuse focus and hide the few metrics that actually drive decisions", "Increase speed", "Be free of Goodhart's Law"], answerIndex: 1, explanation: "Too many metrics dilute attention and rarely map to real decisions." },
    { id: "q3", prompt: "The most useful metric structure is usually:", choices: ["Vanity metrics", "A small number of actionable, outcome-oriented metrics with clear owners", "One metric per person", "Only lagging KPIs"], answerIndex: 1, explanation: "Actionable + owned metrics change behavior; vanity metrics don't." },
    { id: "q4", prompt: "Decision intelligence emphasizes:", choices: ["Building more dashboards", "Framing the decision first, then choosing the analysis and data", "Automating all decisions", "Only using AI"], answerIndex: 1, explanation: "Start with the decision and its options, not the data lake." },
    { id: "q5", prompt: "A leader who says 'the data will tell us what to do' is:", choices: ["Correct", "Under-appreciating that data informs but does not replace judgment on values and trade-offs", "Overly cautious", "Innovative"], answerIndex: 1, explanation: "Data supports decisions; it doesn't make them." },
    { id: "q6", prompt: "A 99%-accurate test for a 1-in-1000 condition produces roughly:", choices: ["No false positives", "1 false positive per true positive", "10 false positives per true positive", "100 true positives per false positive"], answerIndex: 2, explanation: "Bayes' rule: low base rate means most positives are false even with high test accuracy." },
    { id: "q7", prompt: "A p-value of 0.03 means:", choices: ["There is a 3% chance the null hypothesis is true", "Under the null, we would see data at least this extreme 3% of the time", "The effect is 97% likely to replicate", "The result is causal"], answerIndex: 1, explanation: "A common misinterpretation — p-values are frequentist tail probabilities under the null." },
    { id: "q8", prompt: "Regression to the mean explains why:", choices: ["Extreme performers usually stay extreme", "Extreme outcomes tend to be followed by more average ones", "Managers should always fire poor performers", "Trends always continue"], answerIndex: 1, explanation: "Selection on extremes plus noise produces reversion in the next period." },
    { id: "q9", prompt: "Correlation between ice cream sales and drownings is high. Best explanation:", choices: ["Ice cream causes drownings", "A confounder (summer / heat) drives both", "Reverse causation", "The correlation is spurious noise"], answerIndex: 1, explanation: "Classic confounding by season." },
    { id: "q10", prompt: "A manager reports that an initiative 'increased sales 10%' with no control group. The main problem is:", choices: ["Sample size only", "No counterfactual — we don't know what would have happened without the initiative", "Wrong software", "Too much data"], answerIndex: 1, explanation: "Without controls, we cannot attribute change to the initiative." },
    { id: "q11", prompt: "Stopping an A/B test early as soon as p<0.05 is reached:", choices: ["Saves time without bias", "Inflates the false positive rate (peeking)", "Requires a bigger sample size", "Reduces variance"], answerIndex: 1, explanation: "Repeated peeking with no correction dramatically increases the chance of finding 'significant' results by chance." },
    { id: "q12", prompt: "Running many A/B tests simultaneously without correction risks:", choices: ["Nothing", "Multiple-comparisons inflation of false positives", "Slower decisions", "Better decisions automatically"], answerIndex: 1, explanation: "The chance of at least one false 'winner' grows with the number of tests." },
    { id: "q13", prompt: "Sample size for an experiment depends primarily on:", choices: ["Ambition of the PM", "Baseline rate, minimum detectable effect, variance, and desired power", "Company size", "Weather"], answerIndex: 1, explanation: "These four inputs determine required N." },
    { id: "q14", prompt: "An A/B test 'wins' on click-through but loses on downstream revenue. The correct decision usually is to:", choices: ["Ship the winner on CTR", "Optimize on the metric closest to true value (revenue/retention), not intermediate proxies", "Ignore the test", "Rerun forever"], answerIndex: 1, explanation: "Choose the north-star metric aligned with actual outcomes." },
    { id: "q15", prompt: "Novelty effects in an experiment can cause:", choices: ["Winners that persist forever", "Short-term lifts that fade as users habituate; long horizons are needed for durable effects", "Perfectly stable metrics", "Regulatory issues"], answerIndex: 1, explanation: "New treatments often outperform temporarily before decaying." },
    { id: "q16", prompt: "Survivorship bias is at play when:", choices: ["Only customers who churned are surveyed", "Only winners are visible in the data and conclusions ignore those who tried and failed", "Sample size is too small", "Confidence intervals are wide"], answerIndex: 1, explanation: "Studies of 'successful' companies/CEOs/strategies miss the population that tried the same approach and failed." },
    { id: "q17", prompt: "Difference-in-differences requires which key assumption?", choices: ["Random assignment", "Parallel trends between treated and control groups in the absence of treatment", "Normality", "Independence of observations"], answerIndex: 1, explanation: "DiD's identifying assumption is that, without treatment, the two groups would have evolved on parallel trends." },
    { id: "q18", prompt: "An instrumental variable is used to:", choices: ["Increase R-squared", "Isolate exogenous variation in a treatment when randomization isn't possible", "Replace a control group", "Reduce sample size"], answerIndex: 1, explanation: "IVs help identify causal effects in the presence of endogeneity." },
    { id: "q19", prompt: "A firm sees stores that raised prices had higher revenue. Concluding 'raise prices everywhere' ignores:", choices: ["Selection — those stores likely raised prices because demand was strong", "Sample size", "Statistical software choice", "P-values"], answerIndex: 0, explanation: "Selection into treatment confounds naive comparisons." },
    { id: "q20", prompt: "Judea Pearl's causal ladder puts which rung highest?", choices: ["Association", "Intervention", "Counterfactual reasoning", "Correlation"], answerIndex: 2, explanation: "Counterfactuals ('what if') are the top rung; interventions are middle; association is the bottom." },
  ],
  assignment: {
    id: "a1",
    title: "Design an experiment",
    prompt: "Design an experiment to test a meaningful change in a business or product you know. Write 400-600 words covering: (1) The hypothesis and specific decision the test will inform, (2) The success metric, guardrail metrics, and minimum detectable effect, (3) Unit and method of randomization, (4) Sample size justification (at the level of intuition is fine), (5) Risks (novelty effect, network effects, peeking) and how you'll mitigate them, (6) The decision rule and what action will follow each outcome.",
    rubric: "Sharp hypothesis tied to decision (2 pts). Right metric and guardrails (2 pts). Sensible randomization design (2 pts). Honest sample size reasoning (2 pts). Risks and mitigations (2 pts).",
  },
};
