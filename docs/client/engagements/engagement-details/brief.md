## Brief

The Brief tab is the default landing view when you open an engagement. It gives you a complete snapshot of scope, schedule, and team in a single scroll — no clicking through other tabs required.

![Brief tab — two-column layout with engagement details, rules of engagement, schedule, testing team, and state history.](../../../images/client_engagement_brief.png)

---

### 1. Layout

The Brief tab uses a two-column layout:

| Column | Content |
|--------|---------|
| **Left (main)** | Overview card, Description, Rules of engagement (In-scope / Out-of-scope) |
| **Right (sidebar)** | Schedule card, Testing team card, State history timeline |

---

### 2. Overview card (left column)

The top section shows four metric chips summarizing the engagement's configuration:

| Chip | Possible values | What it tells you |
|------|----------------|-------------------|
| **Engagement types** | Web Application, API/Web Services, Mobile, Network Infrastructure, Cloud, Hardware, IoT, Other | What kind of system is being tested. An engagement can have multiple types. |
| **Testing approach** | Black box, Grey box, White box | How much knowledge the testers have about the system internals. |
| **Environment** | Production, Staging, QA, Development | Where the testing is being conducted. |
| **Source-code access** | Granted, Not granted | Whether the testing team has access to the application source code. |

Below the chips is the **Description** you provided when submitting the request. If it shows "No description added," this means the request was submitted with minimal context — not necessarily a problem, but richer descriptions reduce back-and-forth during scoping.

---

### 3. Rules of engagement card (left column)

Defines what the testing team is authorized to test:

- **In-scope** — systems, URLs, IP ranges, and paths the testers can probe. If this shows "No in-scope added," the scope is still being finalized by the SecurityBoat team.
- **Out-of-scope** — explicitly excluded targets (e.g., third-party integrations, production data endpoints). Review this to confirm it matches your expectations.

> **If scope looks wrong:** use the engagement **Chat** to flag it to your TPM before testing begins. Changes after Live testing has started may require a scope amendment.

---

### 4. Schedule card (right column)

Shows the engagement timeline at a glance:

| Field | Description |
|-------|-------------|
| **Window progress** | A percentage bar indicating how far through the scheduled testing window you currently are. |
| **Scheduled start / end** | The planned testing window dates. |
| **Actual start / end** | When testing actually began and ended. Shows "—" if testing hasn't started yet. |
| **Testing effort (hrs)** | Budgeted testing hours for this engagement. |

---

### 5. Testing team card (right column)

A compact roster of who's working your engagement:

- **Lead Researcher count** + list (name, email)
- **Researcher count** + list

The TPM (your primary contact) is not always listed here — you'll find them on the [Team](team.md) tab and in engagement communications.

---

### 6. State history card (right column)

A vertical timeline of every state transition the engagement has gone through. Each entry shows when the engagement moved from one state to the next. For new engagements that haven't transitioned yet, this shows "No transitions yet."

The full lifecycle stepper (visible in the page header) shows all 12 possible states: Requested → Draft → Scoping → Open to assign → Team formed → Scheduled → Live → Report drafting → Report review → Delivered → Remediation → Closed.

---

### Best practices

- **Start here every time** — the Brief tab answers "what are we testing, who's doing it, and where are we in the timeline" in one view.
- **Check rules of engagement early** — if scope is incorrect, flag it in Chat before the engagement goes Live.
- **Watch the window progress bar** — if you're past 80% and haven't seen findings yet, check with your TPM.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **Description says "No description added"** | The request was submitted with minimal context. You can provide additional details via Chat. |
| **In-scope / Out-of-scope is empty** | Scope hasn't been finalized yet. This is normal during Draft and early preparation stages. |
| **State history is empty** | The engagement hasn't transitioned states yet — normal for newly created engagements. |
| **Schedule shows "—" for actual dates** | Testing hasn't started yet. Actual start/end populate once testing begins. |

---

← Previous: [Engagement Detail](engagement-detail.md) | Next: [Assets →](assets.md)
