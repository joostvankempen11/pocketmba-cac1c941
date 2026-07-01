import type { Week } from "../types";

export const week09: Week = {
  week: 9,
  title: "Leadership",
  tagline: "Leadership is influence in service of a goal. The mechanics are learnable.",
  topics: ["Leadership models", "Situational leadership", "Decision-making", "Feedback", "Difficult conversations"],
  lessons: [
    {
      id: "l1",
      title: "What leadership actually is",
      summary: "Strip away the mystique: leadership is creating direction, alignment, and commitment so people produce outcomes they couldn't produce alone.",
      body: `# Leadership

A century of research and a thousand bestsellers haven't produced consensus on what leadership *is* — partly because the word covers several different things.

## Three useful distinctions

**Leadership vs management** (Kotter, 1990): Management is about coping with complexity — planning, budgeting, organizing, controlling. Leadership is about coping with change — setting direction, aligning people, motivating. Both are necessary; most senior roles require both.

**Leadership vs authority**: Authority is conferred by position. Leadership is conferred by followers. A CEO with no leadership has authority but no followership; a junior employee with leadership has followership but no authority. The intersection of both is most effective; one without the other is brittle.

**Personal leadership vs leading others vs leading leaders vs leading organizations**: The competencies change as you rise. Becoming great at one doesn't guarantee greatness at the next.

## A working definition

Center for Creative Leadership: leadership is the production of **direction, alignment, and commitment** — *direction* on what we're trying to achieve, *alignment* on how we'll achieve it together, *commitment* to shared success. Anyone who produces these is leading, regardless of title.

## The trait era — and why it failed

Decades of research tried to find personality traits that predict leadership: extraversion, conscientiousness, intelligence, dominance. Some weak correlations, none decisive. The conclusion: there is no leadership *type*; introverts and extraverts, charismatic and quiet, technical and political people have all led brilliantly. The common factor is what they *do*, not what they are.

## Behavioral models

Ohio State and Michigan studies in the 1950s identified two independent dimensions:
- **Task orientation / initiating structure** — clarifying roles, setting goals, planning
- **Relationship orientation / consideration** — supporting people, building trust, listening

Effective leaders are usually high on both, though situations vary in which matters more.

## Contingency theory

Fred Fiedler argued there is no one best style — the right style depends on the situation. Tasks well-defined and relationships strong? Task-focused leadership works. Tasks ambiguous and relationships weak? Relationship-focused leadership works better.

This led to Hersey and Blanchard's **situational leadership** (Lesson 2) and a generation of "it depends" frameworks.

## Transformational vs transactional

- **Transactional leaders** trade clarity and rewards for performance. Useful in stable contexts.
- **Transformational leaders** elevate followers' aspirations, articulate compelling visions, and produce change beyond the immediate transaction. Useful in turnaround, crisis, growth.

Most successful leaders flex between modes; pure transformational without transactional discipline produces inspiring chaos.

## Servant leadership

Greenleaf's framing: the leader is *first* a servant of the people and mission. The leader's job is to remove obstacles, develop people, and serve outcomes. Counterintuitive in command-and-control cultures, increasingly the dominant model in technology and creative fields where talent has options.

## The honest summary

The research converges on a small set of behaviors that reliably predict leadership effectiveness:
- Set clear, ambitious direction
- Build relationships of trust
- Tell the truth, even when it's hard
- Develop the people around you
- Make timely decisions, including unpopular ones
- Own outcomes; share credit
- Adapt style to context and individual

None of these are mysterious. All can be learned. The hardest part is doing them consistently under stress.`,
      videos: [
        { title: "Simon Sinek \u2014 How Great Leaders Inspire Action (TED)", source: "YouTube", videoId: "qp0HIF3SfI4", fallbackSearchQuery: "what is leadership explained" },
        { title: "Simon Sinek \u2014 Why Good Leaders Make You Feel Safe (TED)", source: "YouTube \u2014 TED", url: "https://www.youtube.com/watch?v=lmyZMtPVodo", fallbackSearchQuery: "Simon Sinek leaders feel safe" },
        { title: "John Kotter \u2014 The Difference Between Leadership and Management", source: "YouTube \u2014 Kotter Inc.", url: "https://www.youtube.com/watch?v=2sjQ1zxd6IY", fallbackSearchQuery: "Kotter leadership vs management" },
        { title: "John Kotter \u2014 The Difference Between Leadership and Management", source: "YouTube", videoId: "Dz8AiOQEQmk", fallbackSearchQuery: "Kotter leadership management difference" },
      ],
      readings: [
        { title: "What Leaders Really Do", source: "Harvard Business Review (Kotter)", url: "https://hbr.org/2001/12/what-leaders-really-do" },
        { title: "Level 5 Leadership: The Triumph of Humility and Fierce Resolve", source: "Harvard Business Review (Collins)", url: "https://hbr.org/2001/01/level-5-leadership-the-triumph-of-humility-and-fierce-resolve" },
      ],
    },
    {
      id: "l2",
      title: "Situational leadership and developing people",
      summary: "Different people and situations call for different leadership behaviors. Mature leaders flex.",
      body: `# Situational leadership

Hersey and Blanchard's model maps leadership style to the *developmental level* of the person being led on a specific task. Four levels:

- **D1: Enthusiastic Beginner** — low competence, high commitment. New to the task; eager but unskilled.
- **D2: Disillusioned Learner** — some competence, low commitment. Discovered it's harder than they thought.
- **D3: Capable but Cautious** — high competence, variable commitment. Can do it, but lacks confidence or motivation.
- **D4: Self-Reliant Achiever** — high competence, high commitment.

Each calls for a different style:

- **D1 → S1: Directing** — high direction, low support. Tell them exactly what to do, monitor closely.
- **D2 → S2: Coaching** — high direction, high support. Continue directing but also explain, listen, encourage.
- **D3 → S3: Supporting** — low direction, high support. Listen, encourage, share decision-making.
- **D4 → S4: Delegating** — low direction, low support. Hand over responsibility; check in periodically.

## Common mistakes

- **Over-delegation to beginners** — "I trust you to figure it out" sounds empowering but feels abandoning. They fail and learn distrust.
- **Over-direction of veterans** — micromanaging a D4 destroys motivation and signals you don't trust them.
- **Failing to *develop* people** — leaving everyone at D1 because they're easier to direct. Sustainable leadership requires bringing people up the ladder.

The skill: diagnose developmental level *per task*, not per person. The same engineer might be D4 on backend architecture and D1 on stakeholder management.

## Developing people

The 70-20-10 rule (Center for Creative Leadership): development comes ~70% from challenging assignments, ~20% from coaching and relationships, ~10% from formal training. The implication: the most powerful tool for developing people is the *work you give them*.

A practical pattern for leaders:
1. **Stretch assignments** — give the person work just beyond what they've done before
2. **Coaching at the edge** — be available when they hit the limit of their experience
3. **Course-correction in private** — feedback in real time, not at year-end review
4. **Public recognition of growth** — visible progress reinforces the developmental contract

## Coaching vs mentoring vs sponsoring

These are often confused; they are not the same.

- **Coaching** — helping the person think through their own problems, usually short-term and task-focused
- **Mentoring** — sharing experience and perspective, usually longer-term and career-focused
- **Sponsoring** — using your power and reputation to open doors (recommendations, stretch assignments, visibility to senior leaders)

Sponsorship is what disproportionately accelerates careers, and it's what historically under-represented groups often lack. Senior leaders should consciously sponsor — not just mentor — high-potential people.

## Building leadership pipeline

Companies that produce many leaders (GE in its prime, IBM, Procter & Gamble, McKinsey) share patterns: deliberate rotation through different challenges, explicit succession planning at multiple levels, executive education paired with stretch roles, and assessment systems that focus on potential as well as performance.

The "growth at all costs" startup pattern — promote anyone you can't lose, fire anyone who can't keep up — produces volatile leadership and high turnover. The pattern that scales: hire deliberately for trajectory, develop systematically, and have the courage to make leadership changes when the role outgrows the person.`,
      videos: [
        { title: "Situational Leadership Explained \u2014 Ken Blanchard", source: "YouTube \u2014 The Ken Blanchard Companies", url: "https://www.youtube.com/watch?v=9Q4Z32iCC0o", fallbackSearchQuery: "Ken Blanchard situational leadership" },
        { title: "The 70-20-10 Model for Development", source: "YouTube \u2014 Center for Creative Leadership", url: "https://www.youtube.com/watch?v=YJ-MVCJxBN8", fallbackSearchQuery: "70-20-10 model development" },
        { title: "Situational Leadership", source: "YouTube", videoId: "bAuwgjmF5xc", fallbackSearchQuery: "situational leadership styles" },
        { title: "The 70-20-10 Model for Development", source: "YouTube", videoId: "lV4wq9LUAJs", fallbackSearchQuery: "70-20-10 model leadership development" },
      ],
      readings: [
        { title: "Why You Should Have (at Least) Two Careers", source: "Harvard Business Review", url: "https://hbr.org/2017/04/why-you-should-have-at-least-two-careers" },
        { title: "Are You a Mentor or a Sponsor?", source: "Harvard Business Review", url: "https://hbr.org/2010/10/the-real-benefit-of-finding-a-sponsor" },
      ],
    },
    {
      id: "l3",
      title: "Decision-making under uncertainty",
      summary: "Most business decisions are made with incomplete information. Decision quality and outcome quality are not the same.",
      body: `# Decision-making

Most decisions in business are made under uncertainty — incomplete information, ambiguous trade-offs, time pressure. Leaders who consistently make good decisions don't have crystal balls; they have *process*.

## Decision quality vs outcome quality

Annie Duke's central insight (former poker pro turned decision scientist): outcomes are influenced by both decision quality *and* luck. A good decision can produce a bad outcome (you bet correctly and still lost the coin flip); a bad decision can produce a good outcome (you got lucky). Judging decisions by outcomes alone — "resulting" — destroys the ability to learn.

Evaluate decisions on:
- Were the right factors considered?
- Was uncertainty acknowledged?
- Was the process appropriate to the stakes and reversibility?
- Was the decision communicated and committed to?

## Reversible vs irreversible

Bezos's "two-way door" framework: most decisions are reversible (try it, undo if wrong) and should be made fast at lower levels. A few are irreversible (acquisitions, leadership hires, public commitments) and deserve slow, careful deliberation by senior leaders.

The pathology in most organizations: treating *every* decision like an irreversible one. The cost is slowness and lost learning. Treating an irreversible decision like a reversible one is also bad — but rarer.

## Cognitive biases

Decades of behavioral research (Kahneman, Tversky, Thaler) cataloged predictable cognitive biases that distort judgment:

- **Anchoring** — first numbers dominate subsequent estimates
- **Availability** — recent or vivid examples are overweighted
- **Confirmation bias** — seeking information that confirms prior beliefs
- **Overconfidence** — narrow confidence intervals, especially among experts
- **Sunk-cost fallacy** — escalating commitment to losing investments
- **Loss aversion** — losses feel ~2x as bad as equivalent gains feel good
- **Hindsight bias** — feeling that past outcomes were "obvious" in retrospect
- **Survivorship bias** — drawing lessons only from visible survivors (not the failed companies who tried the same thing)

Knowing the biases doesn't eliminate them — but it lets you build process safeguards: pre-mortems, base rates, devil's advocates, structured analysis.

## Base rates

The single most powerful debiasing tool: before forecasting an *inside* view ("how is *our* project doing"), check the *outside* view ("how do projects like this typically go?"). Kahneman calls this *reference class forecasting*. Most projects take ~2x as long and cost ~50% more than the inside-view estimate; for tech megaprojects it's much worse. Honest base-rate forecasting routinely changes decisions.

## Decision frameworks for leaders

- **OODA loop** (Observe, Orient, Decide, Act) — fast-cycle decision-making under fire
- **RAPID** (Recommend, Agree, Perform, Input, Decide) — clarifies decision rights for complex cross-functional calls
- **DACI / RACI** — similar role-clarification frameworks
- **Disagree and commit** — Amazon's mechanism for moving forward despite unresolved dissent
- **Type 1 vs Type 2 decisions** — separate irreversible from reversible (Bezos)

## Pre-mortems

Gary Klein's tool: before making a decision, imagine it has failed catastrophically in 18 months. Ask "what happened?" Each participant writes their own answer, then shares. The exercise breaks groupthink and surfaces concerns people wouldn't otherwise raise. Five minutes of pre-mortem prevents weeks of post-mortem.

## Living with bad outcomes

Even excellent decision processes produce bad outcomes some of the time. Mature leaders separate process from outcome, own results without abandoning process, learn from what they could have known and accept what they couldn't, and resist the seduction of fast pattern-matching from a single salient failure.`,
      videos: [
        { title: "Annie Duke \u2014 Thinking in Bets", source: "YouTube \u2014 Google Talks", url: "https://www.youtube.com/watch?v=Lk3iEHM4i7s", fallbackSearchQuery: "Annie Duke thinking in bets" },
        { title: "Daniel Kahneman \u2014 Thinking, Fast and Slow", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=CjVQJdIrDJ0", fallbackSearchQuery: "Kahneman thinking fast slow" },
        { title: "Thinking in Bets", source: "YouTube", videoId: "uYNsSeYjkp4", fallbackSearchQuery: "Annie Duke thinking in bets" },
      ],
      readings: [
        { title: "Before You Make That Big Decision...", source: "Harvard Business Review (Kahneman et al.)", url: "https://hbr.org/2011/06/the-big-idea-before-you-make-that-big-decision" },
        { title: "Performing a Project Premortem", source: "Harvard Business Review", url: "https://hbr.org/2007/09/performing-a-project-premortem" },
      ],
    },
    {
      id: "l4",
      title: "Feedback and difficult conversations",
      summary: "The single highest-leverage leadership skill — and the one most leaders avoid until it's too late.",
      body: `# Feedback and difficult conversations

A reliable pattern in struggling teams: the manager has 5 things they wish someone had said to a team member 6 months ago, but said nothing. By the time it surfaces, it's a firing conversation. Most "people problems" are actually delayed-feedback problems.

## Why feedback is avoided

- It feels uncomfortable.
- People worry it will damage the relationship.
- They lack a model for how to do it well.
- They tell themselves "it'll resolve itself" (it almost never does).
- They confuse *being nice* (avoiding short-term discomfort) with *being kind* (acting in the person's long-term interest).

Kim Scott's *Radical Candor* maps this onto a 2x2: **Care personally** (vertical axis) × **Challenge directly** (horizontal axis). The four quadrants:

- High care, high challenge: **Radical Candor** — the goal
- High care, low challenge: **Ruinous Empathy** — being "nice" at the cost of the person's growth
- Low care, high challenge: **Obnoxious Aggression** — brutal feedback without the relationship
- Low care, low challenge: **Manipulative Insincerity** — passive-aggressive, political

Most well-intentioned managers fail in *ruinous empathy*. The fix is not to become harsh; it's to challenge more directly *while* caring.

## Useful structures for feedback

**SBI model** (Situation, Behavior, Impact):
1. **Situation** — when and where it happened
2. **Behavior** — specific observable behavior (not interpretation)
3. **Impact** — the effect on you, the team, the work

Example: "In Monday's meeting (S), when you interrupted Maria three times before she finished her point (B), I saw her shut down for the rest of the discussion and we lost her perspective on the migration plan (I)."

The key discipline: *describe behavior, not interpret motive*. "You interrupted three times" is a fact. "You don't respect women's contributions" is an interpretation that triggers defensiveness even when it's accurate.

## Frequency over intensity

Year-end reviews are a terrible feedback mechanism — too late, too vague, too high-stakes. The pattern that works: short, specific, frequent feedback close to the event, in both positive and corrective directions. Make feedback so routine that it's not an *event*.

**Positive feedback** is even more under-used than corrective. Praise should also be specific (SBI), public when appropriate, and authentic.

## The hard conversation playbook

For genuinely difficult conversations (performance, conduct, layoffs, firing), the *Crucial Conversations* / Stone-Patton-Heen template:

1. **Start with safety**. Make the relationship and intent explicit: "I care about you and your success here. I have something hard to share so we can fix it together."
2. **State observable facts** (not stories about motives).
3. **Share impact and your interpretation as your interpretation**, not as fact: "What I'm worried about is X. I might be missing something."
4. **Ask for their view** and *actually listen*.
5. **Together, get to a specific next step** with a follow-up date.

Avoid:
- Compliment sandwiches (the bad news gets eaten; the praise feels false)
- Vague generalities ("more strategic", "more proactive")
- Letting the conversation drift into other unrelated grievances
- Apologizing for giving feedback (it signals it's wrong to do so)

## When the conversation is about firing

Even the hardest conversation has a humane shape: be direct (don't make the person guess), be brief (this isn't a debate), explain the decision honestly, treat the person with dignity, and ensure the exit is generous in time, severance, and reference where possible. How you handle exits is watched by everyone who stays; it shapes the culture more than any values statement.

## On receiving feedback

The complement is being *coachable*: thanking people for feedback even when it's wrong, sitting with discomfort before responding, separating the message from the messenger, and acting visibly on the parts that land. Senior leaders who can't take feedback poison their teams' truth-telling. Those who can multiply it.`,
      videos: [
        { title: "Feedback & difficult conversations (search)", source: "YouTube search", url: "https://www.youtube.com/results?search_query=how+to+give+feedback+difficult+conversations+explained", fallbackSearchQuery: "how to give feedback difficult conversations explained" },
        { title: "Kim Scott \u2014 Radical Candor (Google Talks)", source: "YouTube \u2014 Talks at Google", url: "https://www.youtube.com/watch?v=MYRfTwOG8a4", fallbackSearchQuery: "Kim Scott Radical Candor" },
        { title: "Patrick Lencioni on Crucial Conversations", source: "YouTube \u2014 VitalSmarts", url: "https://www.youtube.com/watch?v=22KkRPLm5dQ", fallbackSearchQuery: "Lencioni crucial conversations" },
      ],
      readings: [
        { title: "The Feedback Fallacy", source: "Harvard Business Review", url: "https://hbr.org/2019/03/the-feedback-fallacy" },
        { title: "Find Your Feedback Style", source: "Harvard Business Review", url: "https://hbr.org/2014/05/how-to-give-feedback-that-helps-people-grow" },
      ],
    },
  ],
  quiz: [
    { id: "q1", prompt: "Kotter's distinction is that management copes with complexity while leadership copes with:", choices: ["Headcount", "Change", "Compliance", "Quarterly earnings"], answerIndex: 1, explanation: "Management is about planning, organizing, and controlling; leadership is about setting direction and motivating change." },
    { id: "q2", prompt: "A common failure of newly promoted managers is:", choices: ["Delegating too much", "Continuing to do individual-contributor work rather than leading others", "Setting too high a vision", "Over-communicating"], answerIndex: 1, explanation: "The transition requires letting go of hands-on execution." },
    { id: "q3", prompt: "Which is primarily a leadership (not management) activity?", choices: ["Approving expense reports", "Setting direction and aligning people to a shared vision", "Running the weekly staff meeting", "Filing HR paperwork"], answerIndex: 1, explanation: "Direction-setting and alignment are core leadership tasks." },
    { id: "q4", prompt: "Servant leadership emphasizes:", choices: ["The leader is the smartest person", "The leader's job is to remove obstacles and develop others so the team can succeed", "Command and control", "Charisma above all"], answerIndex: 1, explanation: "Greenleaf's model inverts the pyramid toward enabling others." },
    { id: "q5", prompt: "A CEO who consistently makes reversible (two-way door) decisions slowly is:", choices: ["Prudent", "Under-utilizing organizational speed; those decisions should be pushed down and made quickly", "Following best practice", "Reducing risk"], answerIndex: 1, explanation: "Bezos's insight: only irreversible decisions justify slow deliberation." },
    { id: "q6", prompt: "In situational leadership, a D1 (enthusiastic beginner) is best matched with:", choices: ["Delegating", "Supporting", "Coaching", "Directing"], answerIndex: 3, explanation: "Beginners need high direction; supportive but light-touch styles fail them." },
    { id: "q7", prompt: "A high-competence, low-commitment employee (D3) benefits most from:", choices: ["Directing", "Coaching", "Supporting", "Delegating"], answerIndex: 2, explanation: "Supporting builds confidence for someone who can do the work but hesitates." },
    { id: "q8", prompt: "The 70-20-10 model suggests development comes mainly from:", choices: ["Formal training", "On-the-job experience, with additional learning from others and courses", "Certifications alone", "Reading books"], answerIndex: 1, explanation: "Stretch assignments drive the majority of adult skill growth." },
    { id: "q9", prompt: "A manager who uses the same leadership style with every direct report is likely:", choices: ["Efficient", "Under-developing some people and micromanaging others", "Fair", "Following best practice"], answerIndex: 1, explanation: "Different development levels require different mixes of direction and support." },
    { id: "q10", prompt: "Feedback that develops people best is:", choices: ["Annual and general", "Specific, timely, and behaviorally focused", "Anonymous 360s only", "Kept until performance review"], answerIndex: 1, explanation: "Frequent, specific behavioral feedback drives learning." },
    { id: "q11", prompt: "Annie Duke's 'resulting' refers to:", choices: ["Reporting outcomes accurately", "Judging decisions only by their outcomes, ignoring luck and process", "Setting goals by result", "Backward-looking analytics"], answerIndex: 1, explanation: "Resulting confuses outcome quality with decision quality and destroys learning." },
    { id: "q12", prompt: "A decision made with only a 30% success probability that ends up succeeding was:", choices: ["A great decision", "Not necessarily a great decision — outcome ≠ decision quality", "Definitely bad", "Impossible to evaluate"], answerIndex: 1, explanation: "Under uncertainty, evaluate the process and information, not just the result." },
    { id: "q13", prompt: "A pre-mortem asks the team to:", choices: ["Celebrate wins in advance", "Imagine the project has failed and describe why, before starting", "Skip planning", "Only assess after the launch"], answerIndex: 1, explanation: "Prospective hindsight surfaces risks people wouldn't otherwise voice." },
    { id: "q14", prompt: "A manager repeatedly overweights recent vivid failures. This is closest to:", choices: ["Anchoring", "Availability bias", "Sunk-cost fallacy", "Base-rate neglect"], answerIndex: 1, explanation: "Availability makes recent/memorable events feel more likely than they are." },
    { id: "q15", prompt: "For an irreversible, high-consequence decision under uncertainty, best practice is to:", choices: ["Decide quickly to move on", "Slow down, consider multiple options, and stress-test with dissenting views", "Delegate downward", "Let the loudest voice decide"], answerIndex: 1, explanation: "One-way-door decisions deserve deliberate process." },
    { id: "q16", prompt: "Kim Scott's Radical Candor combines:", choices: ["Care personally and challenge directly", "Politeness and ambition", "Speed and quality", "Process and intuition"], answerIndex: 0, explanation: "Caring without challenging is ruinous empathy; challenging without caring is obnoxious aggression." },
    { id: "q17", prompt: "Which is closest to 'ruinous empathy' in Radical Candor?", choices: ["Direct critical feedback", "Withholding hard feedback to avoid discomfort", "Public shaming", "Rigid rules"], answerIndex: 1, explanation: "Kindness that withholds truth hurts people's growth." },
    { id: "q18", prompt: "The Situation–Behavior–Impact (SBI) model gives feedback in the form:", choices: ["Judgment of the person", "Situation, specific observed behavior, and its impact", "Compliment sandwich", "Anonymous survey"], answerIndex: 1, explanation: "SBI keeps feedback behavioral and non-personal." },
    { id: "q19", prompt: "A difficult conversation is most likely to go well when the manager:", choices: ["Ambushes the employee", "Prepares, opens with the intent, listens actively, and separates observation from interpretation", "Uses only email", "Involves HR from the start"], answerIndex: 1, explanation: "Structure and listening reduce defensiveness." },
    { id: "q20", prompt: "A team that avoids conflict entirely is likely to:", choices: ["Deliver higher-quality decisions", "Produce worse decisions because dissent isn't surfaced", "Become highly innovative", "Have very high trust"], answerIndex: 1, explanation: "Productive conflict is a feature of high-performing teams (Lencioni)." },
  ],
  assignment: {
    id: "a1",
    title: "Leadership self-assessment and development plan",
    prompt: "Write 400-700 words: (1) Reflect honestly on your current leadership behaviors using the situational leadership and Radical Candor frameworks. Where do you over-direct? Where do you under-challenge? Use specific examples. (2) Identify two leadership behaviors you want to develop in the next 6 months and why. (3) Design specific practices to develop them (stretch assignments, feedback loops, coaching, deliberate experiments). (4) Define how you will measure progress.",
    rubric: "Honest self-assessment with specific examples (3 pts). Well-chosen development priorities (2 pts). Concrete practice design (3 pts). Measurable progress indicators (2 pts).",
  },
};
