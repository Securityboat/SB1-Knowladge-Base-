# AI Red Teaming (Client View)

**AI Red Teaming** strengthens AI safety, security, and trust before you ship. It subjects your LLM-powered applications to adversarial testing — prompt injection, jailbreaks, cross-tenant data isolation, and more — aligned to industry frameworks including OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, and the EU AI Act.

---

## What Gets Tested

| Attack Vector | Description |
|---|---|
| Prompt Injection | Can the model be manipulated into ignoring system instructions? |
| Jailbreak Attempts | Can guardrails be bypassed through creative prompting? |
| Cross-Tenant Isolation | Does one organisation's data leak into another's responses? |
| Data Exfiltration | Can the model be tricked into revealing training data or internal prompts? |
| Tool/Plugin Abuse | Can connected tools (APIs, databases) be accessed in unintended ways? |
| Multi-Turn Manipulation | Can an attacker steer the model across multiple conversation turns? |

---

## Engagements

Each engagement is a structured adversarial assessment of a specific AI system:

| Field | Description |
|---|---|
| Engagement Name | Project identifier |
| Status | Scheduled, In Progress, Completed, Delivered |
| LLM Endpoint | The AI API under test (e.g., Azure OpenAI GPT-4o, Anthropic Claude) |
| RAG Pipeline | Retrieval-Augmented Generation configuration (vector store, knowledge base) |
| Agent Workflow | Tool-calling agents and their capabilities under audit |
| Lead | SecurityBoat researcher leading the engagement |
| Dates | Start and end dates |
| Findings | Count of confirmed vulnerabilities by severity |

---

## Framework Coverage

Each engagement is measured against regulatory and industry frameworks:

| Framework | What It Covers |
|---|---|
| OWASP LLM Top 10 | Prompt injection, insecure output, training data poisoning, model DoS, supply chain, sensitive data disclosure, insecure plugin design, excessive agency, overreliance, model theft |
| MITRE ATLAS | Reconnaissance, resource development, initial access, ML model access, execution, persistence, defence evasion, discovery, collection, exfiltration, impact |
| NIST AI RMF | Govern, map, measure, manage — AI risk management lifecycle |
| EU AI Act | High-risk system classification and compliance alignment |

Coverage percentages show how thoroughly each framework was addressed during the engagement.

---

## What You Receive

After each engagement completes, you receive:

- A detailed findings report with severity ratings
- Reproduction steps and evidence for each confirmed vulnerability
- Framework coverage report showing which controls were tested
- Remediation guidance specific to your AI architecture
- A regression test plan for future updates

---

## Engagement Lifecycle

1. **Scoping** — define the AI system, its boundaries, and risk tolerance
2. **Testing** — adversarial sessions run against the target
3. **Validation** — all findings go through human review and sign-off
4. **Delivery** — report delivered with prioritised remediation steps
5. **Regression** — periodic retesting ensures fixes hold and new features don't introduce new risk
