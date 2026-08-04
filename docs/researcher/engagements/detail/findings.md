# Findings

The **Findings** tab displays all security issues identified during the engagement. It is the primary workspace for managing finding reports and submitting new findings.

---

## Findings List

The page lists the findings submitted for this engagement:
*   **Finding ID**: Reference ID (e.g., `PT-ACME-01`).
*   **Title**: Vulnerability summary.
*   **Severity**: Triaged CVSS v4.0 rating.
*   **State**: Current state in the remediation flow (Draft, New, Verified, resolved, duplicate, etc.).
*   **Target Asset**: The specific target asset where the bug was found.

Clicking any row opens the finding details page. Here, you can review client comments, view TPM feedback, or edit unsubmitted drafts.

---

## Submitting a Finding

During the **Live** phase, click the **Submit finding** button on the top right of the Findings tab. Complete the form across the following sections:

### 1. Title & Classification
*   **Title**: Write a descriptive title (e.g., *"SQL Injection in Search API"*).
*   **Asset**: Select the target asset from the dropdown list of linked in-scope assets.
*   **VRT Category**: Search the Bugcrowd taxonomy database. Selecting the category pre-fills the standard **CWE** ID.
*   **CVE / MITRE ATT&CK**: Add standard identifiers if applicable.

### 2. Severity & CVSS v4.0 Calculator
Compute the CVSS v4.0 score by filling out the 11 metrics. The platform will automatically calculate the score (0.0 to 10.0) and lock the corresponding severity level.

### 3. Writeup (Markdown)
*   **Background**: General context on the vulnerability class.
*   **Description**: Technical details of the vulnerability.
*   **Steps to Reproduce**: Detailed, numbered instructions to trigger the vulnerability.
*   **Impact**: Business and technical risk.
*   **Remediation**: Patches or configuration fixes.
*   **Attachments**: Drag and drop screenshots or video files to illustrate the proof-of-concept.

### 4. CIA Impact & OWASP Risk Rating
*   **CIA Impact**: Set Confidentiality, Integrity, and Availability impact to None, Low, or High.
*   **OWASP Risk Rating**: Set Likelihood (0-9) and Impact (0-9) to populate the executive report heat matrix.

### 5. Technical Details & Endpoints
*   **HTTP Method**: GET, POST, PUT, DELETE, etc.
*   **Endpoint Path / Affected Parameter**: Specific target variables.
*   **Raw HTTP Request & Response**: Paste the raw HTTP requests and responses to speed up verification.

Click **Save as Draft** or **Submit Finding**.

---

## Retesting & Verification

Once the client remediates a vulnerability, they will transition the state to **Ready for Retest**.
*   **Retest Assignment**: The TPM or Lead Researcher will assign the retest to a team member.
*   **Performing the Retest**: Re-run the reproduction steps using the original PoC.
*   **Documenting the Result**: Add a comment detailing the retest outcome and transition the status to **Resolved** (if fixed) or back to **Fix in Progress** (if still vulnerable).

---

← Previous: [Coverage](coverage.md) | Next: [Analytics →](analytics.md)
