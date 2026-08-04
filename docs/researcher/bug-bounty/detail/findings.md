# Findings

The **Findings** tab contains your history of submissions to this program. It is also where you launch the **Submit Finding** drawer to report new vulnerabilities.

---

## Your Submissions Tracker

The findings table displays a list of your submissions:
*   **Finding ID**: Unique identifier (e.g., `BBP-ACM-02`).
*   **Title**: Summary of the vulnerability.
*   **Severity**: The calculated severity rating (Critical, High, Medium, Low, Informational).
*   **State**: The current lifecycle status (Draft, New, Verified, Resolved, Duplicate, Discarded).
*   **Submitted**: The timestamp of submission.

Click on any finding in the list to open its detail page and review the submission writeup, view triager comments, or update draft fields.

---

## How to Submit a Finding

To report a vulnerability, click the **Submit finding** button on the top right of the Findings tab. A drawer will open, prompting you to complete the structured finding form across seven sections:

### 1. Title & Classification
*   **Title**: Enter a concise summary of the bug (e.g., *Reflected Cross-Site Scripting on Search Page*).
*   **Asset Type**: Select the target type (Web Application, API, Mobile, Cloud, Network, etc.).
*   **Vulnerability Type (OWASP)**: Select the relevant OWASP category.
*   **VRT Category**: Search and select the Bugcrowd Vulnerability Rating Taxonomy category. Selecting a VRT category automatically sets the appropriate standard **CWE** ID.
*   **CWE / CVE**: Optional standard identifiers.
*   **Environment Details**: Specify the testing OS, browser, or environment context.

### 2. Severity & CVSS v4.0 Calculator
The platform uses the CVSS v4.0 standard to determine finding severity. You must select the metrics for all 11 fields:
*   **Base Metrics**: Attack Vector (AV), Attack Complexity (AC), Attack Requirements (AT), Privileges Required (PR), User Interaction (UI).
*   **System Impact**: Vulnerability Confidentiality (VC), Vulnerability Integrity (VI), Vulnerability Availability (VA).
*   **Subsequent System Impact**: Subsequent Confidentiality (SC), Subsequent Integrity (SI), Subsequent Availability (SA).

The severity level (Critical, High, Medium, Low, Informational) is automatically derived from the calculated score and locked.

### 3. Writeup (Markdown Editor)
*   **Background**: Contextual explanation of the vulnerability class.
*   **Description**: Detailed explanation of the flaw in the target.
*   **Steps to Reproduce**: Numbered, step-by-step reproduction instructions.
*   **Impact**: Clear business risk framed for the client.
*   **Remediation**: Recommended patching guidance.
*   **Attachments**: Drag and drop images, videos, or PoC files directly into the editor.

### 4. CIA Triad Impact
Define the impact (**None**, **Low**, **High**) and write a brief description for:
*   **Confidentiality**
*   **Integrity**
*   **Availability**

### 5. OWASP Risk Rating
*   **Likelihood (0-9)** and **Impact (0-9)**: Enter values to position this finding on the executive report's Risk Heat Matrix.

### 6. References
*   Include one or more reference URLs (e.g., official advisories, OWASP cheatsheet links).

### 7. Endpoint Details
Required for Web, API, and Mobile assets:
*   **HTTP Method**: GET, POST, PUT, DELETE, etc.
*   **Endpoint URL / Path**: The exact path containing the vulnerability.
*   **Affected Parameter**: The vulnerable query or post parameter.
*   **Raw Request / Response**: Paste the HTTP request and response logs to allow triagers to verify your PoC immediately.

Click **Save as Draft** to refine the report later, or **Submit Finding** to send it directly to the SecurityBoat TPM team for triage.

---

← Previous: [Rewards](rewards.md) | Next: [Payouts →](payouts.md)
