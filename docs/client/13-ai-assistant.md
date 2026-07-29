## 13. AI Assistant

### 13.0 What it is

The **AI Assistant** is a data-aware chat built into the platform. Unlike a
general chatbot, it can "see" the SecurityBoat data **you are allowed to see** and
answer questions grounded in it — your findings, engagements, assets, ASM posture,
and the page you're currently on.

Two important properties:

- **Permission-scoped.** The assistant only reasons over data your role and org
  can access. It cannot reveal another tenant's data, and it respects the same
  visibility rules as the rest of the platform (e.g. it won't surface a finding
  that isn't yet verified for you).
- **Page-aware.** Many screens report their headline metrics to the assistant, so
  you can ask "what does this number mean?" on the page you're viewing and get a
  grounded answer.

### 13.1 Availability

Available to all client roles (Client Admin, Client TPM, Client Viewer).

### Navigation

Click **AI Assistant** in the main sidebar menu.

---

### 13.2 Using it

![AI Assistant — a chat interface with a message box and conversation history.](../images/client_ai_chat.png)

- **Ask in plain language.** Type a question and send. Examples:
  - "How many critical findings are still open?"
  - "Summarise the findings from my last engagement."
  - "What is Coverage SLA on my attack-surface dashboard?"
  - "Which of my assets have the most findings?"
- **Conversation history** is kept in the panel so you can follow up ("and of
  those, which are web apps?").
- **Grounded answers.** Responses are based on your live, permission-scoped data —
  not guesses.

### Best practices

- **Be specific** — name the engagement, asset, or severity you care about.
- **Use it as a starting point**, then click through to the underlying module
  (Findings, ASM, Engagements) to act on what it surfaces.
- **Don't paste secrets** into the chat — treat it like any shared work tool.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **"I can't find that data"** | The item may be outside your permission scope (e.g. an unverified finding), or doesn't exist for your org. |
| **Answer seems out of date** | Ask it to re-check, or open the module directly — the module list is always the live source of truth. |

---

← Previous: [Bug Bounty](12-bug-bounty.md) | Next: [Settings →](14-settings.md)
