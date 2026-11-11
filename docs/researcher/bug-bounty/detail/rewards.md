# Rewards

The **Rewards** tab defines the incentive structure of the program. Depending on whether the program is a Bug Bounty or a VDP, rewards may consist of monetary payouts, reputation points, or recognition swag.

---

![Rewards Tab](../../../images/res_bb_detail_rewards.png)

## Monetary Payout Grid (Bug Bounty)

For paid Bug Bounty programs, rewards are structured into a tier-based grid matching the severity classification of findings. Severity is determined using the **CVSS v4.0** score calculated during submission:

| Severity Level | CVSS v4.0 Range | Standard Reward Range (Example) |
| :--- | :--- | :--- |
| **P1 — Critical** | 9.0 – 10.0 | \$1,500 – \$3,000+ |
| **P2 — High** | 7.0 – 8.9 | \$800 – \$1,499 |
| **P3 — Medium** | 4.0 – 6.9 | \$300 – \$799 |
| **P4 — Low** | 0.1 – 3.9 | \$100 – \$299 |
| **P5 — Informational** | 0.0 | Swag / Points Only |

!!! tip
    The amounts above are only an example. Each program's reward amounts (a single amount or a range per severity) are set by SecurityBoat for that program. Always refer to the live grid on the Rewards tab.

---

## Vulnerability Disclosure Program (VDP) Recognition

VDPs do not offer cash payouts. Instead, they reward valid contributions through:

*   **Swag**: T-shirts, stickers, or branded merchandise shipped to your verified address.
*   **Hall of Fame**: Public listing on the program overview page, displaying top-performing researchers.
*   **Certificates**: A formal certificate of appreciation detailing your contribution.

---

## Reputation Points System

Accepted findings award **Reputation Points** based on severity: P1 Critical earns the most and P5 Informational the least. The points per severity are set platform-wide by SecurityBoat and are the same on every program; the program's **Rewards** tab shows the current values. Reputation points decide your ranking on the program **Leaderboard**.

```mermaid
flowchart LR
    F[Accepted finding] --> S{Severity}
    S --> P1[P1 Critical: most points]
    S --> P3[P2–P4: fewer points]
    S --> P5[P5 Informational: fewest points]
```

---

← Previous: [Scope](scope.md) | Next: [Findings →](findings.md)
