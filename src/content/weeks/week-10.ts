import type { Week } from "../types";

export const week10: Week = {
  week: 10,
  title: "Data Analytics & Decision Making",
  tagline: "Distributions, regression, and experiments — enough to ask hard questions of any analysis.",
  topics: ["Descriptive stats", "Regression", "A/B testing", "Causal inference"],
  lessons: [
    {
      id: "l1",
      title: "Descriptive statistics and distributions",
      summary: "Means lie. Always look at the distribution.",
      body: `# Distributions\n\n## Center and spread\n\n- **Mean** — sensitive to outliers.\n- **Median** — robust; use for skewed distributions (income, deal size).\n- **Standard deviation** — average distance from mean; useful only when distribution is roughly symmetric.\n- **Percentiles** — describe shape without assuming one.\n\n## Why means mislead\n\nReporting "average revenue per customer" in a power-law business is nearly useless. P50, P90, P99 tell the real story. Same for response times, claim sizes, salary distributions.\n\n## Normal distribution\n\nCentral Limit Theorem: sample means tend to normal as n grows, regardless of underlying distribution. This is why averages of large samples are predictable even when individual values aren't. ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ.`,
    },
    {
      id: "l2",
      title: "Regression",
      summary: "Estimate how one variable changes with another, holding others constant.",
      body: `# Regression\n\n## Simple linear regression\n\n\`y = β₀ + β₁x + ε\`\n\nβ₁ is the expected change in y per one-unit change in x.\n\n## Multiple regression\n\n\`y = β₀ + β₁x₁ + β₂x₂ + ... + ε\`\n\nEach β is the effect *holding other variables constant*. This is regression's superpower — and where most misuse happens.\n\n## What to look at\n\n- **Coefficients** — direction and magnitude.\n- **Standard errors / p-values** — statistical significance, but not magnitude.\n- **R²** — variance explained. Beware: high R² ≠ correct model.\n- **Residual plots** — patterns indicate model misspecification.\n\n## Pitfalls\n\n- **Multicollinearity** — correlated predictors inflate standard errors.\n- **Omitted variable bias** — leaving out a confounder skews coefficients.\n- **Overfitting** — too many variables, model fits noise.\n- **Correlation ≠ causation** — always.`,
    },
    {
      id: "l3",
      title: "A/B testing and causal inference",
      summary: "Randomization is the gold standard. Without it, treat causal claims with suspicion.",
      body: `# Experiments\n\n## A/B testing\n\nRandomly assign units (users, sessions, stores) to control vs treatment. Because of randomization, differences in outcome (above noise) are causal.\n\n## Key choices\n\n- **Unit of randomization** — user, session, geo. Mismatch (e.g. randomizing sessions but measuring per-user) creates dependent samples.\n- **Sample size / power** — to detect a 2% lift on a 10% baseline at 80% power, you need ~30,000 per arm.\n- **Sequential testing** — peeking inflates false positives. Use proper stopping rules.\n- **Heterogeneous effects** — average treatment effects hide segment differences.\n\n## When you can't experiment\n\n*Quasi-experimental* methods: difference-in-differences, regression discontinuity, instrumental variables, synthetic control. Each has assumptions; none are as clean as RCTs.\n\n## Spotting bad analysis\n\nAsk: what's the counterfactual? What would have happened without the change? If the answer is "we just compared before vs after," it's correlation, not causation.`,
    },
  ],
  quiz: [
    { id: "q1", prompt: "For a heavily right-skewed revenue distribution, the best single measure of typical customer is:", choices: ["Mean", "Median", "Standard deviation", "Max"], answerIndex: 1, explanation: "Median is robust to skew." },
    { id: "q2", prompt: "In a multiple regression, the coefficient on x₁ is interpreted as:", choices: ["Total effect of x₁ on y", "Effect of x₁ on y holding others constant", "Correlation between x₁ and y", "Variance explained by x₁"], answerIndex: 1, explanation: "Partial effect, all else equal." },
    { id: "q3", prompt: "The main reason A/B tests support causal claims is:", choices: ["Large sample size", "Random assignment balances unobserved confounders", "Statistical significance", "Bayesian priors"], answerIndex: 1, explanation: "Randomization creates exchangeable groups." },
  ],
  assignment: {
    id: "a1",
    title: "Critique an analysis",
    prompt: "Find a public claim of the form 'X caused Y' (news article, company blog, study summary). Critique it: (1) What's the counterfactual? (2) What confounders could explain the result? (3) What experiment or quasi-experimental design would credibly answer the question? (4) Would the answer change a real decision?",
    rubric: "Clear counterfactual articulated (3 pts). At least two plausible confounders (2 pts). Credible study design proposed (3 pts). Decision relevance (2 pts).",
  },
};