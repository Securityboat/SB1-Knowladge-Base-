# Continuous Testing

**Continuous Testing** delivers pentest-grade signal at the speed of development. AI exploit agents actively attempt to exploit findings inside your own environment, scoped to new code as it ships — only confirmed, proven-exploitable vulnerabilities ever reach your team.

---

## How It Works

1. **Scan** — every commit and PR is scanned by SAST, DAST, and SCA tools
2. **Prioritise** — raw scanner output is triaged against your actual code logic and data flow to kill noise
3. **Exploit** — AI agents attempt real exploitation against surviving findings in your environment
4. **Deliver** — only exploit-confirmed findings reach your team, with full evidence and reproduction steps

---

## Key Metrics

| Metric | Description |
|---|---|
| Confirmed Findings | Exploit-proven vulnerabilities surfaced to your team |
| Commits Scanned (7d) | Number of code changes analysed in the past week |
| Exploit Attempts Logged | Every exploitation technique tried — including failed attempts |
| Zero-Noise Rate | Percentage of scanner output filtered out before human review |

---

## Confirmed vs. Theoretical

The pipeline filters aggressively:

| Stage | Count (example) | Description |
|---|---|---|
| Raw scanner indicators | 1,240 | SAST · DAST · SCA output across the week's commits |
| Contextually prioritised | 86 | Reachable at runtime and tied to changed code paths |
| Exploit-confirmed | 9 | Proven exploitable — live attack + PoC evidence captured |

---

## Exploit Attempt Log

Every technique an agent tried against your environment is logged — including the ones that failed. Each entry shows:

| Column | Description |
|---|---|
| Timestamp | When the attempt was made |
| Target Endpoint | The API or service under test |
| Agent | Which exploit agent ran the attempt |
| Technique | The specific attack technique used |
| Result | CONFIRMED (exploitable) or FAILED (blocked/not exploitable) |

This log gives you full transparency into what was tested and what held up.

---

## Unified Findings

The **Unified Findings Source Breakdown** shows confirmed findings across every SecurityBoat product — Continuous Testing, Bug Bounty, and PTaaS — in one view, so you can see where vulnerabilities are being discovered across your programme.
