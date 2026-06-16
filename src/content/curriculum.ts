import type { CapstoneSection, Week } from "./types";
import { week01 } from "./weeks/week-01";
import { week02 } from "./weeks/week-02";
import { week03 } from "./weeks/week-03";
import { week04 } from "./weeks/week-04";
import { week05 } from "./weeks/week-05";
import { week06 } from "./weeks/week-06";
import { week07 } from "./weeks/week-07";
import { week08 } from "./weeks/week-08";
import { week09 } from "./weeks/week-09";
import { week10 } from "./weeks/week-10";
import { week11 } from "./weeks/week-11";
import { week12 } from "./weeks/week-12";

export const weeks: Week[] = [
  week01, week02, week03, week04, week05, week06,
  week07, week08, week09, week10, week11, week12,
];

export function getWeek(n: number): Week | undefined {
  return weeks.find((w) => w.week === n);
}

export const capstoneSections: CapstoneSection[] = [
  {
    id: "s1",
    title: "1. Industry & competitive analysis",
    prompt: "Apply Porter's Five Forces to your chosen industry. Score each force, give specific evidence, identify the binding constraint on profitability, and describe your company's competitive position and moat (or path to one).",
    rubric: "Specific evidence per force; coherent attractiveness verdict; clear position and moat thesis; 600–1000 words.",
  },
  {
    id: "s2",
    title: "2. Customer & marketing strategy",
    prompt: "Define your target segment(s), positioning statement, and value proposition. Detail decisions for each of the 4 Ps. Estimate CLV with assumptions, and state your target CAC and LTV:CAC.",
    rubric: "Sharp positioning; coherent 4Ps; defensible CLV with numbers; segment specificity; 600–1000 words.",
  },
  {
    id: "s3",
    title: "3. Operating model",
    prompt: "Describe how the business delivers value: core process, capacity constraints, supplier relationships, team structure, and culture priorities. Identify the bottleneck for scaling.",
    rubric: "Concrete process; identified bottleneck; sensible org design; tie-back to strategy; 600–1000 words.",
  },
  {
    id: "s4",
    title: "4. Financial plan",
    prompt: "Provide 3-year projections (revenue, gross margin, opex, EBIT, FCF), stating key assumptions. Compute NPV of the plan at a stated discount rate. State funding need and capital structure.",
    rubric: "Internally consistent numbers; clear assumptions; NPV math; defensible funding ask; 600–1000 words.",
  },
  {
    id: "s5",
    title: "5. Execution roadmap & risks",
    prompt: "Sequence the first 12 months into milestones. Identify the top 3 risks (with probability/impact), the leading indicators you'll monitor, and the experiments you'll run early. End with a one-paragraph elevator pitch.",
    rubric: "Realistic sequencing; honest risk analysis; specific experiments; crisp pitch; 600–1000 words.",
  },
];