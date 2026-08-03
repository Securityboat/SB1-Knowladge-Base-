# Payouts

### 1. Where you get paid

**Payouts** is your personal earnings dashboard. It aggregates compensation from **both** revenue streams:
- **Bug Bounty**: Bounty payouts per verified finding.
- **Pentest Engagements**: Fixed researcher payouts per completed engagement.

It tracks each payment from pending through approval and payment, and provides downloadable invoices.

### Navigation

Click **My Payouts** in the sidebar (or navigate via **Settings → Payouts**).

---

### 2. Earnings summary

![Payouts — Total Earned / Pending / Total Payouts summary tiles above a list of payout cards. (1 of 2)](../images/res_payouts_01.png)

![Payouts — Total Earned / Pending / Total Payouts summary tiles above a list of payout cards. (2 of 2)](../images/res_payouts_02.png)

Three metric tiles appear at the top:

| Tile | Calculation / Meaning |
|------|-----------------------|
| **Total Earned** | Sum of all payouts in Paid status (formatted in your currency e.g. INR / USD). |
| **Pending** | Sum of payouts in Pending, Pending Approval, Approved, or Processing state (excluding rejected payouts). |
| **Total Payouts** | Total count of recorded payout items. |

---

### 3. The payout list & status indicators

Each payout card displays:

| Element | Detail / Meaning |
|---------|------------------|
| **Source Badge** | **Bug Bounty** (orange badge; linked to finding title) or **Pentest** (blue badge; linked to engagement title). |
| **Title & Subtitle** | Finding title / finding ID or engagement project ID (`SB-PTEST-ACM-05`). |
| **Amount & Currency** | Formatted compensation value (e.g., `₹45,000` or `$1,500`). |
| **Status Badge** | `Waiting for approval` (Amber), `Approved — payment pending` (Cyan), or `Paid` (Mint green). |
| **Days Left & Eligible Date** | Countdown indicator (e.g. *"14 days left"*) and target date when the hold period expires. |
| **Invoice Download** | Clickable invoice button (e.g. `INV-2026-0042`) when generated. |

**Invoice Download Rules:**

| Source | Invoice Availability |
|--------|----------------------|
| **Pentest Engagements** | Available when status reaches **Paid** AND invoice number exists. |
| **Bug Bounty** | Available when status is **Approved or Paid** AND invoice number exists. |

---

### 4. The payout lifecycle

```
Finding verified / engagement complete  →  payout record created (Pending)
   →  Hold period countdown  →  Approved  →  Paid  →  Invoice downloadable
```

> **Unlocking Payouts:** Payments require complete **bank details** (securely encrypted) in **Settings → Account** and a completed **Identity Verification** check.


---

### Best practices

- **Complete Identity Verification early** — payouts cannot be released until your profile is verified.
- **Save invoices for tax records** — download PDF invoices directly from payout rows as soon as they become available.

---

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **"No payouts yet"** | No accepted bug bounty findings or completed pentest engagements recorded yet. |
| **Invoice link missing** | Payout is still pending approval or hold period has not completed (see invoice download rules above). |
| **Payment delay** | Verify bank details in Settings and check if your profile is in **Verified** status. |

---

← Previous: [Findings](07-findings.md) | Next: [Identity Verification →](10-verification.md)

