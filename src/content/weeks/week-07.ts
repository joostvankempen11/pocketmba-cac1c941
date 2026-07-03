import type { Week } from "../types";

export const week07: Week = {
  week: 7,
  title: "Operations & Supply Chain",
  tagline: "Process design, capacity, inventory, and quality — where strategy meets execution.",
  topics: ["Process flow", "Little's Law", "Inventory management", "Lean / Six Sigma"],
  lessons: [
    {
      id: "l1",
      title: "Process analysis",
      summary: "Every business is a process. Identify the bottleneck and the system's throughput is set.",
      body: `# Process analysis

A process is a sequence of steps that transforms inputs into outputs. Every business is one. Think of a bakery: it takes inputs (flour, labor, oven heat) and creates an output (bread). Operations management is the discipline of measuring, analyzing, and redesigning processes so they deliver the right quality at the right cost in the right time. For a manager, this matters because an unmanaged process naturally drifts toward chaos, high costs, and unhappy customers who have to wait too long for their "bread." When a manager ignores process analysis, they often end up "firefighting" symptoms (like long queues) rather than fixing the root cause (like a slow machine).

## Core metrics

- **Throughput** — units processed per unit time (orders per hour, patients per day). This is essentially the "productivity rate" of your system.
- **Cycle time** — time between successive completions. If a car comes off the assembly line every 2 minutes, the cycle time is 2 minutes. It is the rhythm or "heartbeat" of the operation.
- **Flow time (lead time)** — time a single unit spends in the system from entry to exit. Unlike cycle time, this measures the *entire* journey of one item. For example, if you order a pizza at 6:00 PM and it arrives at 6:30 PM, the flow time is 30 minutes. High flow times often indicate a bloated process with too much waiting.
- **Work-in-process (WIP) / inventory** — units inside the system at any moment. This includes raw materials on the shelf and things currently being worked on. In a service business like a bank, WIP is the number of open loan applications currently being processed.
- **Capacity** — the maximum sustainable throughput. This is your "speed limit" or the most work you could possibly do if everything went perfectly. It’s important to distinguish between theoretical capacity (what the machines could do) and effective capacity (what you can actually do given breaks, maintenance, and setup time).
- **Utilization** — actual throughput / capacity. This is a percentage (0% to 100%) showing how much of your available power you are actually using. While 100% sounds efficient, it often leads to total gridlock.

## Little's Law

The single most important equation in operations:

\`Inventory = Throughput × Flow time\`

*I = T × FT.* Holds for any stable process — manufacturing, services, software pipelines, hospital ERs. It is the golden rule of flow: if you want to reduce the time customers wait (FT) without changing how many you serve (T), you *must* find a way to reduce the number of people standing in line (I). This is counter-intuitive for many: often, the best way to speed up a process is simply to stop letting so much new work into the system at once.

Worked example: a coffee shop serves 50 customers/hour, and each customer spends 6 minutes in the store. Average inventory of customers = 50/hr × 0.1 hr = **5 customers** in the shop on average. If the queue is consistently longer, either throughput is lower than claimed or flow time is longer than claimed.

## The bottleneck

In any process with sequential steps of unequal capacity, the *slowest* step sets the throughput of the whole system. Imagine a funnel: no matter how wide the top is, the water only exits as fast as the narrow neck allows. Eli Goldratt's *Theory of Constraints* hammered this: improving a non-bottleneck step doesn't help. If the oven can only bake 10 pizzas an hour, hiring a faster dough-roller who can prep 50 pizzas an hour doesn't result in more sales—it just results in a pile of raw dough waiting for the oven. This pile of dough is "idle capital"—money you've spent that isn't yet making you profit.

The five-step TOC playbook:

1. **Identify** the constraint. Find the "narrow neck" where work piles up. Look for the biggest pile of unfinished work in the building.
2. **Exploit** it — squeeze every drop out (no idle time, perfect quality input). Ensure your bottleneck resource never takes a break at the same time as everyone else. A manager should ensure the most skilled worker is at the bottleneck, not at an easy task.
3. **Subordinate** everything else to the constraint. Stop the dough-roller from working too fast and creating waste. The rest of the team should move at the pace of the bottleneck, not their own maximum speed.
4. **Elevate** the constraint (add capacity). Buy a second oven. This usually costs money, which is why it's step four, not step one.
5. **Repeat** — once the old bottleneck is broken, a new one emerges. Perhaps now you can bake 20 pizzas, but you only have one delivery driver. The process of optimization is never finished.

## Utilization vs queue

Queueing theory shows wait time explodes nonlinearly as utilization approaches 100%. Run a process at 95% utilization and tiny variability produces huge queues. Think of a highway: at 70% capacity, traffic flows fine. At 99%, a single driver tapping their brakes causes a massive traffic jam. This is why hospitals with 95% bed utilization have ER waits measured in hours, and why software teams with everyone "fully booked" deliver less than teams that leave 20% slack. Operations design *for* slack at the bottleneck. If a manager ignores this and "maximizes" everyone to 100% capacity, the system essentially stops moving whenever a small mistake or delay occurs.

## Process design choices

- **Make-to-stock vs make-to-order** — finished-goods inventory vs lead time. Do you buy a dress off the rack (stock) or have one tailored (order)? Stocking goods provides instant gratification but risks unsold waste; ordering allows for customization but requires the customer to wait.
- **Push vs pull** — schedule by forecast (pushing products into the market based on a guess) or by downstream demand signal (pulling only when a customer buys). Toyota's kanban is the canonical pull system. A push system might result in a warehouse full of winter coats in July because a forecast was wrong.
- **Batch vs flow** — large batches (baking 100 cookies at once) amortize setup cost but create lumpy WIP; small batches (baking 5 at a time) smooth flow but require fast changeovers (cleaning the tray quickly). Changeover is the time spent switching from making one product to another; if this time is high, you are forced into large, inefficient batches.
- **Centralized vs distributed** — one big plant vs many small ones; cost-of-scale (big is cheaper per unit) vs cost-of-distance (small is closer to the customer) trade-off. For example, Amazon has a few massive regional hubs (centralized) but also thousands of local delivery vans (distributed) to balance shipping costs with speed.`,
      videos: [
        { title: "Little's Law \u2014 Operations Management", source: "YouTube \u2014 MIT OCW", url: "https://www.youtube.com/watch?v=NyKbVo0OkLA", fallbackSearchQuery: "Little's Law operations" },
        { title: "Theory of Constraints \u2014 Goldratt", source: "YouTube \u2014 Goldratt Institute", url: "https://www.youtube.com/watch?v=K3Lt2L2eVbI", fallbackSearchQuery: "theory of constraints Goldratt" },
        { title: "Business Process Analysis", source: "YouTube", videoId: "1E6II2U1shY", fallbackSearchQuery: "business process analysis explained" },
        { title: "Performance Management", source: "YouTube", videoId: "BXD8VaO-Dss", fallbackSearchQuery: "performance management operations" },
      ],
      readings: [
        { title: "The Power of Process", source: "Harvard Business Review", url: "https://hbr.org/2011/02/the-power-of-process" },
        { title: "Decoding the DNA of the Toyota Production System", source: "Harvard Business Review", url: "https://hbr.org/1999/09/decoding-the-dna-of-the-toyota-production-system" },
      ],
      exercise: { id: "ex1", scenario: "You run a boutique passport-processing office with three sequential steps: Document Review (capacity: 10/hr), Background Check (capacity: 5/hr), and Final Printing (capacity: 15/hr). Applications arrive at a steady rate of 8 per hour, but the office is currently facing a 2-week backlog of unprocessed applications.", task: "Identify the current throughput of the entire system and determine which specific step should receive a budget increase for additional staff to reduce the backlog most effectively." }
    },
    {
      id: "l2",
      title: "Inventory management",
      summary: "Inventory is frozen cash. EOQ and safety stock are the foundations of how much, when, and why.",
      body: `# Inventory management\\n\\nInventory is cash converted into stuff. Too little and you stock out and lose sales; too much and you tie up working capital, fill warehouses, and risk obsolescence. The discipline is balancing those costs. In simple terms, think of inventory like your home pantry: if you run out of milk, you can't make coffee (a stockout); if you buy ten gallons at once, half might spoil before you drink it, wasting your money (obsolescence).\\n\\n**Working capital** refers to the money a business has available for its day-to-day operations. When you have too much inventory, your cash is \\"trapped\\" on a shelf instead of being available to pay employees or invest in new equipment. **Obsolescence** happens when products become outdated or unsellable—think of a tech company holding thousands of old iPhone cases that no longer fit the new models.\\n\\n## Why hold inventory\\n\\n- **Cycle stock** — to bridge between orders. This is the basic amount you use up between one delivery and the next. Imagine a coffee shop that gets a milk delivery every Monday; the milk they use throughout the week is their cycle stock.\\n- **Safety stock** — buffer against demand and lead-time variability. This is your \\"emergency stash\\" in case a customer places a surprise bulk order or a delivery truck breaks down.\\n- **Pipeline (in-transit) stock** — material moving through the supply chain. This is inventory you have already paid for that is currently on a ship, plane, or truck.\\n- **Seasonal stock** — pre-built ahead of demand peaks. For example, a toy manufacturer building inventory in July for the December holiday rush.\\n- **Speculative stock** — held against expected price rises (common in commodities). A coffee roaster might buy extra beans today if they hear a frost in Brazil is likely to drive prices up next month.\\n\\nEach has different drivers and different remedies. Understanding these categories helps managers identify *why* their cash is tied up and whether that risk is necessary for operations. If a manager sees high pipeline stock, they might look for faster shipping; if they see high seasonal stock in the off-season, they might need to adjust production schedules.\\n\\n## Economic order quantity (EOQ)\\n\\nThe classic formula (Ford Whitman Harris, 1913) balances ordering cost against holding cost:\\n\\n\`EOQ = √(2 × D × S / H)\`\\n\\nwhere D = annual demand, S = cost per order (placement, setup, freight), H = holding cost per unit per year (capital, storage, shrinkage). \\n\\n**Holding cost (H)** is more than just rent for a warehouse; it includes the \\"opportunity cost\\" of the money tied up (interest you could have earned elsewhere) and \\"shrinkage\\" (theft, damage, or products becoming outdated). **Ordering cost (S)** is the administrative headache and shipping fees associated with every new shipment. Think of S as the flat delivery fee a restaurant charges you regardless of whether you order one pizza or ten; the more you order at once, the less you pay in delivery fees per pizza.\\n\\nWorked example: D = 10,000 units, S = $50, H = $4. EOQ = √(2 × 10,000 × 50 / 4) = √250,000 = **500 units per order.** That implies 20 orders per year and average inventory of 250 units.\\n\\nEOQ is robust — total cost is flat near the optimum, so being off by 30% barely matters. The real value is *direction*: when ordering costs fall (electronic procurement, automation), order more often in smaller batches. When holding costs rise (capital expensive, shelf life short), do the same. If a manager ignores this and keeps ordering huge batches while storage costs skyrocket, the company's profit margin will be eaten away by warehouse bills.\\n\\n## Safety stock\\n\\n\`Safety stock = z × σ_LT\`\\n\\nwhere z is the service-level multiplier (z ≈ 1.65 for 95%, 2.33 for 99%) and σ_LT is the standard deviation of demand over the lead time. In plain English, the higher the \\"z\\" you choose, the more certain you are that you won't run out of stock during a busy week. A **service level** is essentially your promise to the customer: a 95% service level means you expect to have the item in stock 95 out of 100 times they ask for it.\\n\\nThe punchline: 99% service requires roughly *3× the safety stock* of 90% service. The last percentage points of service are extraordinarily expensive. Stratify SKUs by criticality (ABC analysis) and apply different service levels accordingly. For example, a hospital should aim for a 99.9% service level on life-saving medicine, but a furniture store might be happy with 90% service on a specific style of side table. An **SKU (Stock Keeping Unit)** is just a unique identification code for a specific product—like a blue large t-shirt vs. a red medium t-shirt.\\n\\n## Bullwhip effect\\n\\nForrester (1958) and Lee, Padmanabhan, Whang (1997) documented that small demand fluctuations at the consumer end amplify dramatically as you move upstream — retailer to distributor to manufacturer to component supplier. Imagine a customer buys one extra gallon of milk at a grocery store. The store manager, fearing a trend, orders two extra cases. The distributor, seeing the larger order, calls the dairy and asks for four extra truckloads. By the time the signal reaches the farm, it looks like a massive shortage, even though demand only rose slightly. \\n\\nCauses: demand forecasting based on orders rather than POS (Point of Sale) data, batch ordering, price promotions, rationing games. **POS data** is the actual transaction information from the cash register. Solutions: share point-of-sale data with suppliers (VMI — vendor-managed inventory), reduce lot sizes, smooth pricing. When managers don't talk to each other across the supply chain, the Bullwhip effect leads to massive waste and empty shelves.\\n\\n## Just-in-time and its limits\\n\\nJIT minimizes inventory by tight coupling with suppliers and frequent small deliveries. This philosophy, pioneered by Toyota, aims to have parts arrive exactly when they are needed for production, rather than sitting in a warehouse. Hugely improved **capital efficiency**—which is how well a company turns its investments into profit—for decades — until COVID-19 and the chip shortage reminded everyone that lean supply chains are *fragile* supply chains. If a single supplier skips a delivery, the whole factory stops. The post-2020 shift to \\"just-in-case\\" buffers is a recalibration, not a rejection. It is moving from extreme efficiency to a balance of efficiency and resilience.`,
      videos: [
        { title: "Inventory Management \u2014 EOQ", source: "YouTube \u2014 Operations Management 101", url: "https://www.youtube.com/watch?v=KMqlqVnYukM", fallbackSearchQuery: "EOQ inventory management" },
        { title: "The Bullwhip Effect", source: "YouTube \u2014 MIT Sloan", url: "https://www.youtube.com/watch?v=AjUdZcRBhgw", fallbackSearchQuery: "bullwhip effect supply chain" },
        { title: "Inventory Management EOQ", source: "YouTube", videoId: "0NOER-Lle-0", fallbackSearchQuery: "EOQ economic order quantity" },
        { title: "The Bullwhip Effect", source: "YouTube", videoId: "sZnxWVKhObo", fallbackSearchQuery: "bullwhip effect supply chain explained" },
      ],
      readings: [
        { title: "The Bullwhip Effect in Supply Chains", source: "Harvard Business Review", url: "https://hbr.org/1997/04/the-bullwhip-effect-in-supply-chains" },
        { title: "From Superstorms to Factory Fires: Managing Disruptions", source: "Harvard Business Review", url: "https://hbr.org/2014/01/from-superstorms-to-factory-fires-managing-unpredictable-supply-chain-disruptions" },
      ],
      exercise: { id: "ex1", scenario: "You manage a luxury watch boutique where each watch costs $5,000 to hold in stock annually due to high insurance and security costs. However, your ordering costs are low because you use an automated digital procurement system. Recently, interest rates have risen, further increasing your holding costs (capital expense).", task: "Explain whether you should increase or decrease your order frequency and batch size based on the EOQ logic, and identify which specific type of stock (e.g., Cycle, Safety, or Speculative) you would prioritize reducing first to protect your cash flow." }
    },
    {
      id: "l3",
      title: "Lean and quality",
      summary: "Toyota's manufacturing philosophy turned operations into a competitive weapon — and reshaped every industry it touched.",
      body: `# Lean and quality

Lean grew out of the Toyota Production System (TPS), developed at Toyota by Taiichi Ohno and Eiji Toyoda between the 1950s and 1980s, and codified for Western audiences by Womack, Jones, and Roos in *The Machine That Changed the World* (1990).

## The two pillars of TPS

1. **Just-in-time** — produce what the next step needs, when it needs it, in the quantity it needs. Pull, not push. In a 'push' system, you make stuff based on a guess and shove it into a warehouse, hoping someone buys it. In a 'pull' system, imagine a sandwich shop that only starts slicing the meat once you place your order; there is no pile of pre-made sandwiches going soggy.
2. **Jidoka (autonomation)** — build quality in at the source. Any worker (and any machine) can stop the line on detecting a defect, surfacing problems instantly rather than burying them in WIP. WIP stands for 'Work in Progress'—the half-finished items sitting on the factory floor. If a manager ignores a small error early on, it gets 'buried' under more parts, making it much more expensive and difficult to fix later.

Underneath both: *eliminate waste (muda)*. The seven (now eight) wastes:

- Overproduction (Making more than the customer ordered.)
- Waiting (Workers standing idle because a machine is broken or a part hasn't arrived.)
- Transportation (Moving items from one warehouse to another unnecessarily.)
- Over-processing (Doing more work than the customer cares about, like high-polishing a part that will be hidden inside a machine.)
- Inventory (Excess raw materials or finished goods sitting around, tying up cash.)
- Motion (Unnecessary physical movement by workers, like walking across the room to find a stapler.)
- Defects (Products that have to be thrown away or repaired.)
- Underutilized talent (added later) (Ignoring the creative ideas of the people actually doing the work.)

## The Toyota cultural piece

Western adopters often copy the tools (kanban cards, andon cords, 5S workplace organization) without the culture — *kaizen* (continuous improvement by everyone, every day), *genchi genbutsu* (go to the source — managers walk the floor), respect for people, long-term thinking. The tools without the culture rarely deliver. Think of this like buying expensive gym shoes but never actually exercising; the 'tools' (shoes) only work if you have the 'culture' (the discipline to run).

## Six Sigma

Developed at Motorola in the 1980s and made famous by Jack Welch at GE. Where lean focuses on speed and waste, **Six Sigma focuses on variation**. Variation is the enemy of quality. If a coffee shop usually serves your latte in 2 minutes, but sometimes it takes 15 minutes, that 'variation' ruins your morning. Aim: process defects below 3.4 per million opportunities. Uses the DMAIC cycle:

1. **Define** — the problem and customer requirement.
2. **Measure** — current performance.
3. **Analyze** — root causes (Pareto, fishbone, regression). A 'fishbone' diagram is just a way to map out all the possible reasons something went wrong—like equipment, people, or materials—to see how they connect.
4. **Improve** — pilot a change.
5. **Control** — institutionalize the gain (SPC charts, standard work). This ensures that once you fix a problem, the team doesn't accidentally slide back into their old, messy habits.

Many large firms run *Lean Six Sigma* — combining waste reduction with variation reduction.

## Statistical process control (SPC)

Walter Shewhart's contribution. Plot output measurements over time with control limits at ±3 standard deviations from the mean. Common-cause variation (random noise within limits) is left alone; special-cause variation (a point outside limits, a run on one side of the mean) is investigated. The crucial distinction: do not "react" to common-cause variation — chasing noise makes processes worse. Imagine a driver over-steering back and forth to stay perfectly centered in a lane; that constant 'reacting' to tiny wobbles actually makes the car more likely to crash. Managers who constantly tweak a process based on daily minor ups and downs are 'chasing noise.'

## Quality is free

Philip Crosby's title and central claim: the cost of *preventing* defects is far less than the cost of *finding and fixing* them after the fact (rework, scrap, warranty, lost customers, brand damage). For most manufacturing operations the **cost of poor quality** runs 15-25% of revenue. Think of it like a leaky roof: spending $500 to fix a shingle now (prevention) is much cheaper than spending $20,000 to replace the entire floor once it rots (failure).

## Applicability beyond manufacturing

The biggest lean transformations of the past 25 years have been in services — hospitals (Virginia Mason), software (DevOps, Kanban for engineering), startups (Eric Ries's *The Lean Startup* applies the build-measure-learn loop to product-market fit). The underlying ideas — pull, small batches, surface problems immediately, continuous improvement — generalize. In a hospital, for example, 'lean' might mean keeping all the supplies for a specific surgery in one kit so the surgeon doesn't have to 'wait' (waste) for a nurse to find a missing tool in a different room.`,
      videos: [
        { title: "Lean Manufacturing \u2014 Toyota Production System", source: "YouTube \u2014 Toyota", url: "https://www.youtube.com/watch?v=v8KrL4uy4Mo", fallbackSearchQuery: "Toyota Production System" },
        { title: "Six Sigma DMAIC Explained", source: "YouTube \u2014 GoLeanSixSigma", url: "https://www.youtube.com/watch?v=FRJzdUscqsw", fallbackSearchQuery: "Six Sigma DMAIC" },
        { title: "Lean Manufacturing \u2014 Toyota Production System", source: "YouTube", videoId: "F5vtCRFRAK0", fallbackSearchQuery: "lean manufacturing Toyota" },
        { title: "Six Sigma DMAIC", source: "YouTube", videoId: "s2HCrhNVfak", fallbackSearchQuery: "Six Sigma DMAIC methodology" },
        { title: "Total Quality Management", source: "YouTube", videoId: "OSz7MvkPhFI", startSeconds: 54, fallbackSearchQuery: "total quality management explained" },
      ],
      readings: [
        { title: "Decoding the DNA of the Toyota Production System", source: "Harvard Business Review", url: "https://hbr.org/1999/09/decoding-the-dna-of-the-toyota-production-system" },
        { title: "The Contradictions That Drive Toyota's Success", source: "Harvard Business Review", url: "https://hbr.org/2008/06/the-contradictions-that-drive-toyotas-success" },
      ],
      exercise: { id: "ex1", scenario: "You manage a busy regional claim-processing center for an insurance company. Currently, employees process claims in huge batches of 500 at a time, but it takes 10 days for a customer to get an answer, and 15% of the claims are sent back because of simple data-entry errors found at the very end of the process.", task: "Identify two specific 'wastes' (muda) in this scenario and propose one change based on the 'Jidoka' (autonomation) principle to reduce the error rate." }
    },
  ],
  quiz: [
    { id: "q1", prompt: "If a process has throughput of 50/hr and flow time of 2 hours, average inventory is:", choices: ["25", "50", "100", "200"], answerIndex: 2, explanation: "Little's Law: I = T × FT = 50 × 2 = 100." },
    { id: "q2", prompt: "The bottleneck in a serial process is:", choices: ["The step with the longest processing time / lowest capacity", "The step with the most workers", "The first step", "Any step with a queue"], answerIndex: 0, explanation: "Bottleneck sets the maximum system throughput." },
    { id: "q3", prompt: "Adding capacity to a non-bottleneck resource generally:", choices: ["Increases throughput", "Has no effect on throughput", "Reduces throughput", "Reduces cost only"], answerIndex: 1, explanation: "System throughput is limited by the bottleneck." },
    { id: "q4", prompt: "To reduce flow time without changing throughput, a manager can:", choices: ["Add more work in process", "Reduce inventory / batch sizes in queue", "Raise prices", "Reduce demand"], answerIndex: 1, explanation: "By Little's Law, less WIP at constant throughput means less flow time." },
    { id: "q5", prompt: "Which KPI is most sensitive to bottleneck utilization?", choices: ["Marketing spend", "Throughput", "Employee tenure", "Days sales outstanding"], answerIndex: 1, explanation: "Bottleneck utilization directly caps throughput." },
    { id: "q6", prompt: "Annual demand 10,000; order cost $50; holding cost $4/unit/year. EOQ:", choices: ["250", "500", "1,000", "2,000"], answerIndex: 1, explanation: "sqrt(2×10000×50/4) = sqrt(250000) = 500." },
    { id: "q7", prompt: "Safety stock is primarily held to protect against:", choices: ["Order-cost variability", "Demand and lead-time variability", "Interest-rate changes", "Regulatory change"], answerIndex: 1, explanation: "Uncertainty in demand or supply timing requires a buffer." },
    { id: "q8", prompt: "The bullwhip effect refers to:", choices: ["Marketing amplification", "Amplifying demand variability moving upstream in the supply chain", "Sudden demand crashes", "Retail markdowns"], answerIndex: 1, explanation: "Each tier over-reacts to downstream changes, amplifying volatility." },
    { id: "q9", prompt: "Which is a common cause of the bullwhip effect?", choices: ["Sharing point-of-sale data across the chain", "Order batching, price promotions, and rationing games", "Continuous replenishment", "Consumer-level randomness alone"], answerIndex: 1, explanation: "Structural behaviors upstream create most of the amplification." },
    { id: "q10", prompt: "A firm switches from monthly to weekly orders. Expected effect on inventory holding vs. ordering cost:", choices: ["Holding rises, ordering falls", "Holding falls, ordering rises", "Both fall", "Both rise"], answerIndex: 1, explanation: "Smaller, more frequent orders reduce average inventory but increase ordering activity." },
    { id: "q11", prompt: "In the Theory of Constraints, improving a non-bottleneck step:", choices: ["Increases throughput proportionally", "Has no effect on throughput", "Decreases throughput", "Always reduces cost"], answerIndex: 1, explanation: "System throughput is set by the bottleneck." },
    { id: "q12", prompt: "Toyota's 'jidoka' principle refers to:", choices: ["Just-in-time delivery", "Automation with a human touch — stopping the line when a defect is detected", "Batch scheduling", "Outsourcing"], answerIndex: 1, explanation: "Jidoka empowers workers and machines to halt production on quality issues." },
    { id: "q13", prompt: "Six Sigma's DMAIC stands for:", choices: ["Design, Measure, Analyze, Improve, Certify", "Define, Measure, Analyze, Improve, Control", "Diagnose, Manage, Adjust, Implement, Communicate", "Develop, Model, Assess, Iterate, Confirm"], answerIndex: 1, explanation: "The improvement loop of Six Sigma projects." },
    { id: "q14", prompt: "A pull system (kanban) reduces:", choices: ["Customer demand", "Overproduction and WIP", "Employee headcount", "Quality"], answerIndex: 1, explanation: "Producing only what downstream signals need shrinks inventory and hidden waste." },
    { id: "q15", prompt: "Total Quality Management centers on:", choices: ["Inspection at the end", "Prevention, customer focus, and continuous improvement by everyone", "Cutting quality staff", "Outsourcing all QA"], answerIndex: 1, explanation: "TQM builds quality into every step rather than inspecting it in." },
  ],
  assignment: {
    id: "a1",
    title: "Process redesign",
    prompt: "Map a real process you've experienced (a coffee order, an ER visit, a software deploy, an expense report). Identify the bottleneck, estimate throughput and flow time, and propose two specific redesigns. For each, predict the effect on throughput, flow time, and total cost.",
    rubric: "Accurate process map (3 pts). Bottleneck correctly identified (2 pts). Two concrete redesigns (3 pts). Quantitative impact estimate (2 pts).",
  },
};