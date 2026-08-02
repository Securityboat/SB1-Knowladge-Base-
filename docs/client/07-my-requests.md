## My Requests

### 1. Why this page exists

When you submit a pentest request, it becomes an engagement in the **Requested**
state, and SecurityBoat then works it through several **internal** states
(Scoping, Team formed, Scheduled) before it goes **Live**. Those internal states
are deliberately hidden from the main **Engagements** list (they'd be noise, and
they contain tester/scheduling details that aren't yours to see).

**My Requests** closes that visibility gap. It's a client-friendly tracker that
shows every request you've submitted and a **simplified status** across the whole
lifecycle — from submission through go-live and completion — without exposing the
internal machinery.

> In short: **Engagements** = the full workspace for live/delivered tests;
> **My Requests** = the status board for everything you've asked for, especially
> before it goes live.

### 2. Who can use it

| Action | Client Admin | Client TPM | Client Viewer |
|--------|:---:|:---:|:---:|
| View my org's requests | ✅ | ✅ | ✅ (read-only) |
| Submit a new request | ✅ | ✅ | ❌ |

### Navigation

Navigate to **Pentest Engagements → My requests** via the main sidebar.

---

### 3. Reading the page

![My requests — a card per submitted request, each with a coloured status badge, project ID, title, asset, and preferred dates.](../images/client_my_requests.png)

Each request is a card with:

- A **status badge** (see the table below) and the **Project ID** (e.g.
  `SB-PTEST-…`).
- The request **title** and the **asset** under test.
- Three dates: **Submitted**, **Preferred start**, **Preferred end**.
- An **Open engagement** button — appears once the request is far enough along
  (typically Live or later) that the full engagement workspace is available to you.

**The status values and what they mean:**

| Status | Colour | Meaning | What to do |
|--------|--------|---------|------------|
| **Submitted** | Neutral | Received; Tri-Netra will review shortly. | Wait for the review (usually ~1 business day). |
| **Approved — preparing** | Amber | Approved; scope and testers are being arranged. | Expect a scoping call; it'll go Live soon. |
| **Live** | Green | Testing is in progress. | Click **Open engagement** to see findings, chat, and reports. |
| **Completed** | Grey | Engagement is closed. | Findings and reports remain available on the engagement. |
| **Closed** | Red | Closed before testing began. | Contact your account team for next steps. |

Each card also carries a one-line description explaining the current status in
plain language.

---

### 4. Submitting a new request

Click **New request** (top-right) to open the request form. This is the same form
described in the Engagements guide — see [§5 Requesting a pentest](06-engagements.md#5-requesting-a-pentest-client-admin-client-tpm)
for the field-by-field breakdown (asset, engagement type, title, description,
preferred dates) and the review → scoping → approval → delivery flow.

---

### Best practices

- **Check here first** when you're wondering "what's happening with the test I
  asked for?" — it's faster than hunting the Engagements list.
- **One request per test window.** Don't resubmit if a request is already
  Submitted; use the engagement Chat once it's Live to add context.
- If a request sits in **Submitted** longer than expected, reach out to your CSM.

### Troubleshooting

| Symptom | Cause / Fix |
|---------|-------------|
| **"No requests yet"** | You haven't submitted any, or they were created directly by Tri-Netra staff (those appear under Engagements once Live). |
| **No Open engagement button** | The request hasn't reached a client-openable state yet (still preparing). It appears at Live. |
| **No New request button** | You're **Client Viewer** (read-only). |

---

← Previous: [Engagements](06-engagements.md) | Next: [Compliance Reports →](08-compliance-reports.md)
