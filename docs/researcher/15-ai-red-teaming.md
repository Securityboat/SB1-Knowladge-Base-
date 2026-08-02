# AI Red Teaming (Researcher View)

The **AI Red Teaming** module lets you assess the safety, security, and trustworthiness of AI/LLM-powered applications before they ship to production.

---

## Dashboard Overview

| Metric | Description |
|---|---|
| Findings | Total findings surfaced, broken down by severity (Critical, High, Medium, Low) |
| Multi-turn Sessions Run | Number of adversarial conversation sessions executed |
| Cross-Tenant Checks | Pass/Fail ratio for isolation and data-leakage tests |

---

## Testing Coverage

AI Red Teaming tests cover multiple adversarial dimensions:

- **Prompt Injection** — can the model be manipulated into ignoring system instructions?
- **Jailbreak Attempts** — can guardrails be bypassed through creative prompting?
- **Cross-Tenant Isolation** — does one organisation's data leak into another's responses?
- **Data Exfiltration** — can the model be tricked into revealing training data or internal prompts?
- **Tool/Plugin Abuse** — can connected tools (APIs, databases) be accessed in unintended ways?

Testing is aligned to industry frameworks including:

| Framework | Coverage Area |
|---|---|
| OWASP LLM Top 10 | Prompt injection, insecure output, training data poisoning, model DoS, supply chain, sensitive data disclosure, insecure plugin design, excessive agency, overreliance, model theft |
| MITRE ATLAS | Reconnaissance, resource development, initial access, ML model access, execution, persistence, defence evasion, discovery, collection, exfiltration, impact |
| NIST AI RMF | Govern, map, measure, manage — AI risk management lifecycle |
| EU AI Act | High-risk system classification and compliance alignment |

---

## Engagements

Each engagement represents a structured adversarial assessment of a specific AI system:

| Field | Description |
|---|---|
| Engagement Name | Project identifier (e.g., "AECM Assist — Pre-Launch Red Team") |
| Status | Scoping, In Progress, Completed, Delivered |
| Target Endpoint | LLM API endpoint under test |
| Model | The specific model being assessed (e.g., GPT-4o, Claude, Gemini) |
| Findings | Count of confirmed vulnerabilities by severity |

---

## Researcher Workflow

1. **Review the engagement brief** — understand the AI system being tested and its risk boundaries
2. **Execute test cases** — run multi-turn adversarial sessions against the target
3. **Document findings** — each finding must include the adversarial prompt, model response, and why it constitutes a vulnerability
4. **Submit for review** — findings go through the standard TPM validation and client sign-off pipeline

---

## Cross-Tenant Isolation Testing

This is a critical test category for multi-tenant AI applications. The platform verifies that:

- User A's conversation context is never leaked into User B's responses
- Model fine-tuning or RAG data from one tenant cannot be accessed by another
- Session tokens and authentication boundaries are enforced at the LLM gateway level
