import type { Week } from "../types";

export const week08: Week = {
  week: 8,
  title: "Organizational Behavior",
  tagline: "Organizations are systems of humans — they obey behavioral laws, not org charts.",
  topics: ["Motivation", "Teams", "Culture", "Power and influence", "Decision biases"],
  lessons: [
    {
      id: "l1",
      title: "Motivation and what actually drives performance",
      summary: "Pay matters, but autonomy, mastery, and purpose drive sustained effort more than incentives.",
      body: `# Motivation

Why do people work hard? The honest answer is layered, and the textbooks have evolved over a century. Understanding motivation is the difference between a high-performing team and a group of people just "checking boxes" until 5:00 PM.

## The classical view — Taylor and the carrot

Frederick Taylor's *Principles of Scientific Management* (1911) treated workers as inputs to be optimized. Standardize the task, measure output, pay per piece. It worked spectacularly for repetitive manual work in the early factories, and traces of it still live in modern call-center metrics and Amazon warehouse productivity systems. Think of this as the "human as a machine" approach: if you want a machine to run faster, you add more fuel (or in this case, a bigger paycheck). While efficient for moving bricks, it fails to capture the complexity of modern office or creative work.

## The behavioral revolution — Maslow, Herzberg, McGregor

Maslow's hierarchy (physiological → safety → belonging → esteem → self-actualization) suggested that once basic needs are met, higher-order needs drive behavior. In business terms, a worker who can't pay rent (physiological) won't care about a "mission statement" (self-actualization).

Herzberg distinguished **hygiene factors** (pay, conditions — must be adequate or people are dissatisfied, but more doesn't motivate) from **motivators** (achievement, recognition, growth, responsibility — these actually drive engagement). Think of hygiene factors like a clean bathroom in a restaurant: you won't necessarily tell your friends how great the food is just because the bathroom was clean, but if it was dirty, you’ll never come back. 

McGregor contrasted **Theory X** (workers must be controlled; managers assume people are naturally lazy) with **Theory Y** (workers seek meaningful work and self-direct; managers assume people want to do a good job).

The empirical record validates the broad shape: above a "decency threshold" income, more money does not meaningfully change work engagement. What does: interesting work, autonomy, growth, and the feeling that the work matters.

## The modern synthesis — Self-Determination Theory

Deci and Ryan's research over five decades identifies three core psychological needs. These are the "nutrients" required for mental health and peak performance:
- **Autonomy** — agency over how the work gets done. It is the opposite of micromanagement.
- **Competence** — feeling effective and growing. It is the satisfaction of getting better at a craft.
- **Relatedness** — meaningful connection to others. It is the feeling that you belong to a team that has your back.

Work that satisfies all three produces sustained intrinsic motivation (motivation that comes from within, like a hobby you love). Work that satisfies none requires constant external incentives (extrinsic motivation, like a threat or a bonus) and produces compliance at best.

Daniel Pink's *Drive* popularized this as **autonomy, mastery, purpose** — a useful shorthand for managers. For example, a software developer might stay late not for a bonus, but because they have the freedom to solve a tough bug (autonomy), they are learning a new language (mastery), and they know this software helps doctors save lives (purpose).

## The dark side of incentives

Three robust findings managers ignore at their peril:

1. **Crowding out** — explicit financial incentives often *reduce* intrinsic motivation by reframing the task as transactional. A famous Israeli daycare study found that fining parents for late pickup *increased* lateness — parents now saw it as a paid service. The guilt (a social motivator) was replaced by a fee (a market motivator).

2. **Gaming and goal displacement** — measurable goals get hit, often at the cost of unmeasurable but important things. Wells Fargo's cross-selling targets produced 3.5M fake accounts. Sears auto centers' commission structure produced massive over-billing. *What gets measured gets manipulated* (a corollary of "what gets measured gets done"). If you reward a cobra hunter for every dead snake they bring in, they might start breeding cobras to make more money.

3. **Reduced creative performance** — for tasks requiring insight, large incentives narrow attention and degrade performance (Glucksberg's candle problem; Ariely's MIT/India experiments). Incentives work well for clearly defined, mechanical tasks; they backfire for cognitive, creative, judgment-heavy work. When the brain is too focused on the "prize," it loses the ability to think broadly and solve complex problems.

## Practical implications

- Get base compensation to a fair, competitive level — then stop counting on more money to drive engagement. If an employee feels underpaid, they will be distracted by the unfairness. Once they feel treated fairly, money drops off their list of daily concerns.
- Invest in autonomy (small, empowered teams), mastery (training, growth paths), and purpose (clear mission, customer connection).
- Be cautious with narrow incentives on cognitive work. Use *teams* and *outcomes* rather than individual KPIs (Key Performance Indicators) where possible.
- Recognize publicly and specifically. Recognition is one of the most under-used and highest-ROI (Return on Investment) levers in management. A sincere "Thank you for staying late to help the marketing team meet their deadline" is often more powerful than a $50 gift card handed out without comment.`,
      videos: [
        { title: "Dan Pink \u2014 The Puzzle of Motivation (TED)", source: "YouTube", videoId: "rrkrvAUbU9Y", fallbackSearchQuery: "what motivates people at work explained" },
        { title: "RSA Animate \u2014 Drive: The Surprising Truth About What Motivates Us", source: "YouTube \u2014 RSA", url: "https://www.youtube.com/watch?v=u6XAPnuFjJc", fallbackSearchQuery: "RSA Animate Drive Dan Pink" },
      ],
      exercise: { id: "ex1", scenario: "You manage a team of graphic designers who have recently become disengaged and are producing uninspired work. To fix this, your CEO suggests a new policy: a $200 cash bonus for every design project completed ahead of the deadline. While this might speed up the work, you worry it might harm the creative quality or team morale based on the principle of 'crowding out.'", task: "Draft a one-paragraph counter-proposal to the CEO that replaces the cash-per-deadline bonus with a plan centered on Autonomy, Mastery, or Purpose, explaining how your alternative will drive quality rather than just speed." }
    },
    {
      id: "l2",
      title: "Teams and group performance",
      summary: "Teams outperform individuals on complex tasks — but only when designed and managed well.",
      body: `# Teams

Most modern knowledge work is done in teams. The research on what makes teams effective is unusually clear. While we often think individual talent wins the day, the reality of the modern workplace is that the "connective tissue" between people—how they communicate and handle friction—determined ultimate success.

## Tuckman's stages

A team typically progresses through:
- **Forming** — polite, tentative, dependent on leader. This is the "first date" phase where everyone is on their best behavior, but little real work is getting done because roles aren't defined.
- **Storming** — conflict surfaces around roles, goals, methods. Think of this as the "argument over the chores." It feels uncomfortable and like a sign of failure, but it is actually a necessary step to resolve power struggles.
- **Norming** — group develops working agreements and trust. The team finally agrees on the "rules of the road," such as how they will handle deadlines or settle disagreements.
- **Performing** — high productivity, mutual accountability. This is the "flow state" where the team operates like a well-oiled machine without needing constant supervision.
- **Adjourning** — disbanding

The model is a generalization, but the central insight — that teams must work through conflict to perform — is robust. Teams that suppress storming never reach performing. If a manager "shuts down" arguments prematurely to keep the peace, the underlying tensions remain, usually leading to passive-aggressive behavior or hidden inefficiencies later on.

## Psychological safety

Amy Edmondson's research (at HBS) found that the highest-performing teams in hospitals reported *more* errors, not fewer — because they felt safe to surface mistakes for the team to learn from. **Psychological safety** is the shared belief that the team is safe for interpersonal risk-taking: asking questions, admitting mistakes, challenging ideas without fear.

Think of a kitchen at a busy restaurant. In a low-safety environment, a chef who drops a steak might hide it or serve it anyway to avoid being yelled at. In a high-safety environment, they immediately call it out, and the team adjusts. The former leads to a bad customer experience; the latter leads to a fix.

Google's Project Aristotle, studying its own teams, replicated this: psychological safety was the single biggest predictor of team effectiveness, more than IQ, experience, or composition. Once teams felt safe, dependability, structure, meaning, and impact mattered. Without safety, none of the other factors mattered.

This is operational, not motivational — leaders create psychological safety by:
- Modeling fallibility (admitting their own mistakes)
- Treating questions and dissent as learning, not insubordination
- Separating idea critique from person critique
- Making it concrete: "I'm going to disagree with you — and I need you to tell me when I'm wrong"

## Coordination costs

Brooks's Law (from *The Mythical Man-Month*): adding people to a late software project makes it later. Coordination cost grows roughly quadratically with team size, because the number of communication paths is n(n-1)/2.

In plain terms, every new person you add requires everyone else to spend time updating them, emailing them, and checking for errors. If you have 4 people, there are 6 connections to manage; if you double that to 8 people, there are 28 connections. The overhead of talking about the work eventually outweighs the work itself.

Practical implication: small teams (Amazon's "two pizza team", typically 5-8 people) outperform large ones on complex coordination-heavy tasks. When work needs more people, break it into modular sub-teams with crisp interfaces. 

## Cognitive diversity

Diverse teams (in background, expertise, way of thinking) produce *more variance* in outcomes — they're better when conditions support productive disagreement, and worse when they don't. Heterogeneous teams require strong psychological safety and structured decision processes to outperform; homogeneous teams reach consensus easily but miss blind spots.

The strongest predictor of decision quality is *cognitive* diversity (different ways of thinking), not just demographic diversity — though they often correlate. For example, a marketing team launch will be more robust if it includes a data scientist (analytical), a creative writer (intuitive), and a customer support lead (empathetic), rather than five people who all went to the same business school.

## Decision-making in groups

Two pathologies to manage:
- **Groupthink** (Janis) — pressure for consensus suppresses dissent; the group converges on a flawed plan everyone secretly doubts. Bay of Pigs is the canonical case.
- **Information cascades** — early speakers anchor the discussion; later speakers conform even if they had different information. If the CEO speaks first and says, "I love the blue logo," most juniors will find reasons to love it too, even if they have data showing the red logo sells better.

Counter-measures: explicit dissent (red team, devil's advocate), private prediction before discussion (the *Delphi* technique), "pre-mortems" ("Imagine this project failed in 18 months. Why?"), surfacing the minority view before the majority position is stated.

## A team isn't a group of stars

Hackman's research on teams: the strongest predictor of team performance is not the talent of individual members but the team's *design* — clear and challenging goals, the right people, enabling structure, supportive context, expert coaching. Top performers in poorly designed teams underperform mediocre performers in well-designed teams. 

A manager’s job isn’t just to hire "the best" but to build the "best system." If you put an All-Star point guard in a system where nobody knows the plays, they will still lose to a disciplined high school team.`,
      videos: [
        { title: "Amy Edmondson \u2014 Building a Psychologically Safe Workplace (TEDx)", source: "YouTube \u2014 TEDx", url: "https://www.youtube.com/watch?v=LhoLuui9gX8", fallbackSearchQuery: "Amy Edmondson psychological safety" },
        { title: "Cognitive Diversity", source: "YouTube", videoId: "E5UHfcwal0M", fallbackSearchQuery: "cognitive diversity teams performance" },
      ],
      readings: [
        { title: "What Google Learned From Its Quest to Build the Perfect Team", source: "NYT Magazine — summarizing Project Aristotle", url: "https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html" },
      ],
      exercise: { id: "ex1", scenario: "You are leading a 12-person regional sales team that has grown stagnant. During your weekly meetings, you notice that whenever you suggest a new strategy, everyone nods in agreement immediately, yet the strategy consistently fails in the field because of localized issues the team members already knew about but didn't mention.", task: "Identify which specific group pathology is occurring here (Groupthink or Information Cascades) and propose three distinct structural changes you will implement in the next meeting to ensure these localized issues are surfaced before a decision is made." }
    },
    {
      id: "l3",
      title: "Organizational culture",
      summary: "Culture is the operating system of the firm — the unwritten rules that shape decisions when no one is watching.",
      body: `# Culture

Peter Drucker's much-cited line: "Culture eats strategy for breakfast." Even when overstated, the point is real — a brilliant strategy executed by a dysfunctional culture loses to a mediocre strategy executed by a strong one. 

Think of culture as the "invisible operating system" of a company. While strategy is the plan (what we will do), culture is the reality (how we actually behave). If your plan says "innovate," but your culture punishes failure, no one will ever innovate. The plan is eaten by the reality.

## What culture is

Edgar Schein's definition: a pattern of shared basic assumptions a group learned as it solved its problems, that has worked well enough to be taught to new members as the correct way to perceive, think, and feel about those problems. 

Essentially, culture is the set of shortcut rules employees use to know how to act when a manager isn't watching. It’s what everyone just "knows" is the right way to behave based on what has worked in the past. To put it simply, if Strategy is the map, Culture is the terrain employees actually walk every day.

Schein's three levels:
1. **Artifacts** — visible structures, processes, behaviors (open offices, all-hands meetings, dress code). These are the easiest things to see, like the uniforms in a restaurant or the ping-pong tables in a tech startup. These are the physical clues of how a place works.
2. **Espoused values** — what the company says it stands for (mission statements, values posters). These are the public-facing goals usually found on a website or in a handbook. This is the company's "official" brand image.
3. **Underlying assumptions** — what the company *actually* believes, often unstated, that drive behavior under pressure. This is the deepest level. For example, a company might say they value "balance" (Level 2), but if everyone knows that the only way to get a promotion is to answer emails at 2:00 AM, the underlying assumption is that "work comes before everything else."

The gap between layer 2 and layer 3 is where most cultural failures live. Companies with "respect" on the wall and bullying in the boardroom; companies with "innovation" in the brochure and risk-aversion in promotion decisions. When employees see a gap between what is said and what is done, they stop trusting management and follow the unstated rules instead. This gap matters because it creates a "double standard"—if management breaks the official rules, employees feel they have permission to do so too, leading to a breakdown in discipline and morale.

## Where culture comes from

Three sources, in order of impact:
- **Founders and early leaders** — what they paid attention to, rewarded, and punished sets the template for decades. Amazon's customer obsession traces to Bezos; Apple's design discipline to Jobs. The first 10 employees usually define the tone for the next 10,000. 
- **Critical incidents** — how the firm responded in moments of crisis (a scandal, a near-bankruptcy, an acquisition) becomes legend and shapes behavior. If a company fires its top salesperson for an ethical violation, it sends a loud message that ethics matter more than revenue. If they keep the salesperson, it sends the opposite message. These are "teaching moments" that the whole company remembers forever.
- **Selection and promotion patterns** — who gets in and who gets ahead is the strongest signal of what's actually valued. If the "jerk who hits their numbers" gets promoted over the "collaborator who hits their numbers," everyone learns that being a jerk is acceptable as long as you make money. 

The visible artifacts of culture (perks, posters, rituals) are downstream of these — copying Google's bean bags doesn't make a company Google. Culture isn't something you buy; it's something you build through consistent behavior.

## High-performance cultures

Companies whose cultures are reliably associated with sustained performance share patterns:
- **Customer obsession** — primary lens for decisions. Instead of asking "Does this make us money?", the first question is "Does this help the customer?"
- **Owner mindset** — employees treat company resources like their own. This means being frugal with budget and feeling personally responsible for the company's success or failure. Think of how you treat your own car versus a rental car; a high-performance culture makes everyone feel like they own the car.
- **High standards** — explicit, taught, and enforced. Mediocrity is not accepted as "good enough."
- **Truth-seeking** — disagreement encouraged, decisions data-informed. This is the opposite of a "yes-man" culture; it matters more to get it right than to be right. In these cultures, a junior intern is expected to speak up if they see a senior VP making a factual error.
- **Accountability** — outcomes owned, not blamed away. This means no finger-pointing when a project fails.
- **Long-term orientation** — sacrificing short-term metrics (like this month's sales target) for durable advantage (like building a brand customers trust for twenty years). This helps avoid the "quarterly earnings trap" where managers make bad long-term decisions just to look good this month.

Netflix's "no rules" culture, Amazon's leadership principles, Apple's design discipline, and Toyota's continuous improvement are different expressions of related ideas.

## Changing culture

The most depressing finding in the literature: culture change is hard, slow, and most large-scale efforts fail. Why?

- Culture is enacted in thousands of small decisions, not in announcements. A CEO cannot just send an email saying "we are now faster."
- Leadership behavior matters far more than communication. If the CEO says "speed" but rewards comprehensive plans, people read the action, not the words. Employees are excellent at spotting hypocrisy.
- The strongest cultural carriers are middle managers; if they don't change, neither does the organization. If a frontline worker’s direct boss doesn’t embrace the new culture, the worker never will. Middle managers act as the "filter" for the rest of the company.
- Crises and new leaders are the windows where change is possible; routine times calcify whatever culture exists.

The most reliable lever is **selection and consequences**. Hire people who match the culture you want; let go (kindly) those who don't, especially in leadership. Promote based on what you say you value, including the *how* not just the *what*. The reverse — declaring values while promoting people who violate them — is the fastest way to teach the organization what really matters.

## Subcultures

Large organizations don't have a single culture — they have many, often in tension. Engineering vs sales, finance vs marketing, HQ vs field, legacy business unit vs new division. 

For example, the Sales team might have a high-energy, competitive culture focused on new revenue, while the Engineering team has a quiet, meticulous culture focused on stability. Imagine a local coffee shop where the baristas are all about community and art, but the back-office bookkeeper is all about strict budgets and efficiency. Strong overall cultures don't eliminate subcultures; they ensure subcultures share enough core assumptions to operate as a system. If these subcultures fight rather than collaborate, the organization grinds to a halt.`,
      videos: [
        { title: "Building the Netflix Culture", source: "YouTube", videoId: "IrGkeGExJfw", fallbackSearchQuery: "Netflix culture Reed Hastings" },
        { title: "Simon Sinek \u2014 The Infinite Game", source: "YouTube", videoId: "5BrpWXC5ua8", fallbackSearchQuery: "Simon Sinek infinite game leadership" },
      ],
      exercise: { id: "ex1", scenario: "You are the newly appointed VP of Operations for a national retail chain that publicly prides itself on 'Integrity' and 'Customer First.' However, you discover that the regional managers are secretly pressuring store staff to hide damaged inventory from quality audits to protect their quarterly bonuses. Employees are frustrated, and customer complaints about faulty products are rising, yet your top-performing regional manager—who produces the most revenue—is the one most guilty of this behavior.", task: "Identify the conflict between the 'espoused values' and 'underlying assumptions' in this scenario, then propose one specific change to the company's 'selection and consequences' (hiring, promotion, or termination) that would reconcile this gap." }
    },
    {
      id: "l4",
      title: "Power, politics, and influence",
      summary: "Organizations are political. Pretending they're not is the surest way to lose.",
      body: `# Power and influence

Every organization is a political system — coalitions, agendas, scarce resources, contested decisions. Naivete about this is professionally fatal. So is cynicism. The mature view: organizational politics are *neutral mechanics*, and the question is whether you use them in service of good ends or selfish ones.

Think of politics not as "backstabbing," but as the invisible plumbing of an office. Just as a house needs pipes to move water, an organization needs political channels to move ideas and resources. If a manager ignores this, their great ideas will never get funded, and their team will miss out on well-deserved promotions because no one is "politicking" for them at the top. When we talk about "coalitions" here, we mean informal groups of people who join forces to achieve a common goal, even if they work in different departments.

## French and Raven's sources of power

1. **Legitimate** — formal authority by role (e.g., "I am the VP, so you must follow this directive.")
2. **Reward** — ability to give bonuses, promotions, recognition
3. **Coercive** — ability to punish (fire, demote, withhold)
4. **Expert** — recognized competence in a domain
5. **Referent** — personal charisma, others want to be liked by you
6. **Informational** (added later) — control of information others need

Senior leaders rely heavily on legitimate, reward, and coercive power. The most *durable* influencers — including many middle managers who punch above their weight — derive theirs from expert, referent, and informational sources. These don't disappear when you lose the title. If you rely only on coercive power—forcing people to do things through fear—you'll find that employees do the bare minimum to avoid trouble rather than bringing their best ideas to the table.

For example, consider the "Office Guru"—someone who isn't a manager but has been at the company for 10 years and knows where all the old files are hidden (Informational Power) and exactly how the legacy software works (Expert Power). Because everyone respects them and wants to stay on their good side (Referent Power), they often have more influence over a project's success than the actual project manager.

## Cialdini's principles of influence

Robert Cialdini's research-based principles of persuasion:
1. **Reciprocity** — people return favors. This is the "I'll scratch your back if you scratch mine" instinct.
2. **Commitment and consistency** — people honor public commitments. Once we take a stand or make a promise out loud, we feel a psychological pressure to follow through so we don't look unreliable.
3. **Social proof** — people look to similar others for cues. If everyone else is doing it, we assume it's the right thing to do.
4. **Authority** — people defer to expertise and legitimacy.
5. **Liking** — people say yes to those they like. This is why building genuine rapport and finding common ground is a business skill, not just a social one.
6. **Scarcity** — opportunities are more valued when scarce.
7. **Unity** (added later) — shared identity is powerful.

These work because they're cognitive shortcuts humans evolved to use. Humans are flooded with thousands of decisions daily; these shortcuts allow our brains to process choices faster. Knowing them helps you both deploy them ethically and resist them when used against you.

In a business context, if you want your team to adopt a new software, don't just send a memo. Show them that the most respected team in the company is already using it (Social Proof) and ask employees to sign a public "pledge" to try it for one week (Commitment/Consistency). These small nudges are more effective than raw commands.

## Stakeholder analysis

A practical tool for any meaningful organizational change. For each stakeholder (any person or group affected by your project):
- **Power** — how much can they help or block?
- **Interest** — how much do they care?
- **Stance** — supportive, neutral, opposed?

Map them on a 2x2 (power × interest). Invest heavily in high-power/high-interest stakeholders. Keep high-power/low-interest informed. Engage low-power/high-interest to build the coalition. Monitor everyone else.

Why does this matter? Imagine you're upgrading the company's coffee machines. The CEO has high power but low interest; just send them a quick FYI. The office manager has high power and high interest; if you don't consult them, they might block the installation. Ignoring the office manager is a classic rookie mistake that leads to "political" friction.

## Building coalitions

No important change happens with one person's authority alone. The pattern that works:
1. Find the early supporters — people who share the analysis, even if they don't have power
2. Convert key skeptics one-on-one — what's their concern? Address it. This is often called "socializing" an idea—talking to people individually before the big meeting so there are no nasty surprises.
3. Co-design with the people who'll execute — adoption follows ownership. If people help build the plan, they won't try to sabotage it later.
4. Sequence the wins — visible small wins build momentum for larger asks
5. Make it safe for late adopters to join

## Tactics — and the line

Influence tactics range across a spectrum:
- **Rational persuasion** — data, analysis, logical argument (highest ethical, slowest)
- **Consultation** — involving others in the decision (builds ownership)
- **Inspirational appeals** — values, vision, identity
- **Coalition building** — assembling support
- **Personal appeals** — calling on relationship
- **Exchange** — explicit reciprocity ("If you help me with this report, I'll cover your weekend shift.")
- **Pressure** — sanctions and threats (effective short-term, expensive long-term)

The first three are durable and ethical and should dominate. The next three are situational and should be used with care. Pressure is sometimes necessary (a safety violation, an ethical lapse) but should be rare. Using "Exchange" or "Personal appeals" too often can make you seem transactional, as if you are only nice when you want something.

## The ethical line

The test: would you be comfortable if your tactics were public? If your boss, your team, and the person on the receiving end all saw exactly what you did and why? If yes, you're using politics legitimately. If no, you're doing something else.

Long careers in functional cultures are built on durable trust. Short careers in dysfunctional ones can be built on manipulation. Choose the long career.`,
      videos: [
        { title: "Robert Cialdini \u2014 Science of Persuasion", source: "YouTube \u2014 Influence at Work", url: "https://www.youtube.com/watch?v=cFdCzN7RYbw", fallbackSearchQuery: "Cialdini science of persuasion" },
        { title: "Jeffrey Pfeffer \u2014 Power", source: "YouTube", videoId: "j-FOpdvuxFU", fallbackSearchQuery: "Jeffrey Pfeffer power organizations" },
        { title: "Simon Sinek \u2014 Influence Without Authority", source: "YouTube", videoId: "pkclW79ZoZU", fallbackSearchQuery: "influence without authority Simon Sinek" },
      ],
      exercise: { id: "ex1", scenario: "You are a mid-level manager trying to implement a new four-day workweek pilot in your department. The CEO (High Power/Low Interest) is skeptical but open if it doesn't hurt profits; the Finance Director (High Power/High Interest) hates the idea due to payroll complexity; and your 10-person team (Low Power/High Interest) is extremely enthusiastic.", task: "Create a brief stakeholder engagement plan that identifies which source of power you will use with each of these three stakeholders and which specific Cialdini principle you will apply to move the Finance Director from 'opposed' to 'neutral'." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "Self-determination theory's three needs are:", choices: ["Pay, status, growth", "Autonomy, competence, relatedness", "Power, achievement, affiliation", "Safety, esteem, self-actualization"], answerIndex: 1, explanation: "Deci and Ryan identified autonomy, competence, and relatedness as universal psychological needs underlying intrinsic motivation." },
    { id: "q2", prompt: "Dan Pink argues that traditional 'if–then' rewards work well for:", choices: ["Creative, heuristic tasks", "Routine, rules-based tasks with a clear algorithm", "Long-term innovation", "All tasks equally"], answerIndex: 1, explanation: "Contingent rewards help simple mechanical work but can crowd out intrinsic motivation for creative tasks." },
    { id: "q3", prompt: "Herzberg's hygiene factors (e.g., pay, working conditions) primarily:", choices: ["Motivate strongly when present", "Create dissatisfaction when absent but don't produce motivation on their own", "Are irrelevant", "Substitute for intrinsic drivers"], answerIndex: 1, explanation: "Hygiene sets a floor; motivators (achievement, growth, recognition) drive engagement." },
    { id: "q4", prompt: "A manager gives an intrinsically motivated engineer a small cash bonus for each bug fixed. The most likely medium-term effect is:", choices: ["Sustained higher productivity", "Crowding out of intrinsic motivation and gaming the metric", "No effect", "Reduced turnover"], answerIndex: 1, explanation: "Extrinsic rewards can undermine intrinsic drive and warp behavior toward the metric." },
    { id: "q5", prompt: "Which of these is closest to an 'autonomy' lever for a knowledge worker?", choices: ["Micromanaging tasks", "Letting them choose how to solve the problem", "Setting rigid hours", "Denying training budget"], answerIndex: 1, explanation: "Autonomy is about control over how, when, and with whom work is done." },
    { id: "q6", prompt: "Google's Project Aristotle found that the strongest predictor of team effectiveness was:", choices: ["Average IQ", "Tenure", "Psychological safety", "Diversity"], answerIndex: 2, explanation: "Psychological safety enabled the other factors (structure, meaning, impact, dependability) to matter." },
    { id: "q7", prompt: "Psychological safety is best defined as:", choices: ["Everyone agrees", "Being safe to take interpersonal risks — asking questions, admitting mistakes, offering ideas", "Job security", "Physical safety"], answerIndex: 1, explanation: "Edmondson: safety without lowering the performance bar." },
    { id: "q8", prompt: "Tuckman's stages of team development in order are:", choices: ["Forming, storming, norming, performing", "Storming, forming, norming, adjourning", "Norming, storming, forming, performing", "Forming, performing, storming, norming"], answerIndex: 0, explanation: "The classic sequence with 'adjourning' added later." },
    { id: "q9", prompt: "Cognitive diversity contributes to team performance most when:", choices: ["Everyone thinks alike", "Different perspectives are surfaced and integrated on complex, novel problems", "Speed is the only criterion", "Tasks are highly routine"], answerIndex: 1, explanation: "Diversity helps with complexity; simple tasks benefit less from divergent views." },
    { id: "q10", prompt: "A team consistently produces work that meets its stated goals but members privately disagree. The likely failure mode is:", choices: ["Groupthink and low psychological safety", "Excessive conflict", "Too much innovation", "Over-communication"], answerIndex: 0, explanation: "Fear of dissent produces surface agreement and worse decisions." },
    { id: "q11", prompt: "Schein's three levels of culture are:", choices: ["Mission, vision, values", "Artifacts, espoused values, underlying assumptions", "People, process, technology", "Strategy, structure, systems"], answerIndex: 1, explanation: "The deepest layer (assumptions) drives behavior; the surface artifacts often lie about what the culture really is." },
    { id: "q12", prompt: "The most reliable signal of a company's actual culture is:", choices: ["Its mission statement", "What behaviors get rewarded, tolerated, and punished", "The office decor", "Its careers page"], answerIndex: 1, explanation: "Behavior — especially who gets promoted or fired — reveals real assumptions." },
    { id: "q13", prompt: "Netflix's culture memo argues that:", choices: ["Process should scale with people", "Freedom and responsibility with high talent density outperforms process-heavy cultures", "Rules prevent errors", "Consensus is essential"], answerIndex: 1, explanation: "Hastings prioritizes talent density and few rules over bureaucratic control." },
    { id: "q14", prompt: "Simon Sinek's 'infinite game' claim is that:", choices: ["Business is finite and score-based", "Winning requires playing for the long term with a just cause, not quarter-to-quarter", "Culture doesn't matter", "Purpose is optional"], answerIndex: 1, explanation: "Infinite-mindset leaders keep the game going rather than 'winning' short-term." },
    { id: "q15", prompt: "A merger between two firms with very different cultures often fails because:", choices: ["Financial models were wrong", "Underlying assumptions clash and behaviors don't converge, destroying value", "Regulators intervene", "Products overlap"], answerIndex: 1, explanation: "Cultural integration is the top under-priced risk in M&A." },
    { id: "q16", prompt: "French and Raven's most *durable* sources of power tend to be:", choices: ["Legitimate and coercive", "Expert and referent", "Reward and coercive", "Informational and legitimate"], answerIndex: 1, explanation: "Expert and referent power outlast titles; they're rooted in competence and relationships." },
    { id: "q17", prompt: "A junior manager needs cross-functional support without formal authority. The best approach is:", choices: ["Escalate every disagreement", "Build relationships, understand others' goals, and trade value", "Send more emails", "Demand compliance"], answerIndex: 1, explanation: "Influence without authority relies on reciprocity and mutual interest." },
    { id: "q18", prompt: "Cialdini's principle of 'reciprocity' predicts that:", choices: ["People forget favors", "Small unsolicited favors materially increase future compliance", "People only respond to money", "Reciprocity is illegal"], answerIndex: 1, explanation: "Reciprocation is one of the most robust social influence effects." },
    { id: "q19", prompt: "A leader who exclusively relies on positional (legitimate) power is likely to see:", choices: ["Rapid engagement", "Compliance without commitment; ideas and effort go elsewhere", "Innovation flourish", "Low turnover"], answerIndex: 1, explanation: "Rank-only leadership yields malicious compliance and disengagement." },
    { id: "q20", prompt: "Pfeffer's view of organizational politics is that:", choices: ["It should always be avoided", "It is inherent in organizations; effective leaders learn to navigate it ethically to get things done", "It reflects bad leadership only", "It disappears in flat structures"], answerIndex: 1, explanation: "Power dynamics are structural; ignoring them is a career-limiting choice." },
  ],
  assignment: {
    id: "a1",
    title: "Culture diagnosis and change plan",
    prompt: "Pick an organization you've worked in (or know well). Write 400-700 words covering: (1) Describe its culture at Schein's three levels — what are the visible artifacts, espoused values, and (your read of) underlying assumptions? (2) Where do the layers diverge? Give a specific example. (3) Identify one cultural change you would prioritize if you were the CEO. (4) Outline the specific levers (selection, promotion, public examples, structural changes) you would use, with a realistic 12-month sequence.",
    rubric: "Specific artifacts and values evidence (2 pts). Honest diagnosis of layer gap with example (3 pts). Well-chosen change target (2 pts). Realistic, sequenced change plan with multiple levers (3 pts).",
  },
};
