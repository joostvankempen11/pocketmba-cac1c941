# Architecture rules
- Allocate new-member trial access in the database signup trigger; retain legacy subscription statuses so existing accounts keep their entitlements.
- Carry checkout intent as a validated plan on public auth/checkout URLs, with expiring browser storage for confirmation across tabs; never accept arbitrary return URLs.
- Run automatic checkout only on the checkout page after session hydration; skip existing paid and legacy beta members to prevent duplicate subscriptions.
- Use the shared Button control for updated authentication and billing actions so interaction states stay consistent.