## Create Engagement

From **Pentest Engagements** (or **My Requests**) click **New engagement** to open the pentest request form. This is available to **Client Admin** and **Client TPM** roles.

![Request a pentest — asset, engagement type, title, description, and preferred dates, with a "what happens next" panel.](../../images/client_request_form_01.png)

![Request a pentest — form continued with preferred dates and the "what happens next" sidebar.](../../images/client_request_form_02.png)

---

### 1. The request form — field by field

| Field | Type | Required | What to provide |
|-------|------|:---:|-----------------|
| **Asset** | Dropdown | ✅ | The system to be tested. Only assets registered under your organization appear here. If it's missing, add it under **Assets** first. |
| **Engagement type** | Dropdown | ✅ (defaults to Web Application) | The kind of test — Web Application, API/Web Services, Mobile, Network Infrastructure, Cloud, Hardware, IoT, and more. Pick the one that best matches the asset. |
| **Title** | Text | ✅ | 3–255 characters. A recognisable label, e.g. "Q3 2026 production pentest" or "Payments API — annual review". |
| **Description** | Rich text | — | Business context, special handling notes, test accounts, or anything the testing team should know up front. The richer this is, the less back-and-forth during scoping. |
| **Preferred start** | Date | — | The earliest date you'd like testing to begin. Approximate is fine — SecurityBoat confirms the real schedule with you during the scoping call. |
| **Preferred end** | Date | — | Your ideal window close. Helps SecurityBoat plan resourcing around your timeline. |

---

### 2. What happens after you submit

The **"What happens next"** panel alongside the form summarizes the four-step flow:

1. **Review** — SecurityBoat reviews scope and feasibility, typically within 1 business day.
2. **Scoping call** — a short call to confirm scope, environment, access, and dates.
3. **Approval** — an approved request becomes a **Draft** engagement you can track end to end. If the request is rejected, it comes back with a clear reason so you can adjust and resubmit.
4. **Delivery** — Live testing → findings stream in → report drafted → reviewed → final report delivered.

Once you click **Submit request**, you're redirected into the new engagement's detail page. The state shows **Requested** until SecurityBoat reviews it.

> **Track pre-Live requests:** use the [My Requests](../07-my-requests.md) page for a simplified status view of anything that hasn't gone Live yet — no need to keep checking the full Engagements list.

---

### 3. After approval — refining scope in Draft

Once your request is approved and moves to **Draft**, you (Client Admin / Client TPM) can still add or clarify scoping details before the SecurityBoat team moves it into active preparation. Use the engagement **Chat** to communicate any additions — environment credentials, VPN access, preferred testing hours, etc.

---

### Best practices

- **Give rich context in the Description** — the more the testing team knows up front, the less back-and-forth during the scoping call.
- **Make sure the asset scope is current** before submitting. If URLs, IP ranges, or app versions have changed, update the asset first under **Assets**.
- **Set realistic preferred dates** — SecurityBoat will work with you to confirm the final schedule, but reasonable lead time (5+ business days) helps with team availability.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **Asset dropdown is empty** | Your organization hasn't registered the asset yet. Go to **Assets → New asset** to add it first. |
| **No "New engagement" button** | You're a **Client Viewer** (read-only). Ask a Client Admin or Client TPM to submit on your behalf. |
| **Request was rejected** | Read the rejection reason provided. Adjust scope or details and submit a new request. |

---

← Previous: [Overview](overview.md) | Next: [Engagement Detail →](engagement-details/engagement-detail.md)
