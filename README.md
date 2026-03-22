# Derrick Accountability Framework

**Live site:** https://newanforbi.github.io/derrick-accountability-framework/

A strategic legal and administrative accountability tracker for *Newanforbi v. Derrick et al.*, Case No. 2:26-cv-00004-DJC-JDP (E.D. California). Built as an interactive React web app and deployed via GitHub Pages.

---

## Overview

This tool documents and tracks six parallel accountability vectors against CDCR Parole Agent A. Derrick, Supervisor G. Noguchi, and other named parties. Each vector is independently actionable and strategically interconnected to maximize pressure and legal exposure.

### The SB 2 Problem

California Senate Bill 2 (the Kenneth Ross Jr. Act) grants POST authority to decertify peace officers for serious misconduct — but **explicitly excludes CDCR parole agents** under PC §830.5. This framework deploys six parallel vectors to achieve functional decertification through alternative mechanisms.

---

## Attack Vectors

| # | Vector | Status | Primary Mechanism |
|---|--------|--------|-------------------|
| 1 | Civil Litigation Escalation | ACTIVE | Federal §1983 + Bane/Ralph Acts — E.D. Cal. |
| 2 | Administrative Prosecution | PENDING | State Personnel Board RTFC (Gov. Code §19583.5) |
| 3 | State Criminal Referrals | PENDING | DA Public Integrity Unit — PC §§136.1, 118.1 |
| 4 | Federal Criminal Referrals | PENDING | FBI / DOJ Civil Rights — 18 U.S.C. §§241, 242, 1512 |
| 5 | Disarmament Strategy | STRATEGIC | CHRO → firearm surrender → field duty suspension |
| 6 | Systemic Oversight | SUPPLEMENTAL | State Auditor whistleblower + Civil Grand Jury |

---

## Features

- **Progress tracking** — per-action checkboxes with overall execution percentage
- **Priority levels** — CRITICAL / HIGH / MEDIUM with color-coded badges
- **Expandable detail** — each action item includes full legal citations and procedural steps
- **Interconnection map** — visualizes how vectors feed into and reinforce each other
- **Criminal exposure matrix** — penalty table with statutes, factual nexus, and maximum sentences
- **SB 2 analysis panel** — explains the POST decertification loophole and why this framework exists

---

## Tech Stack

- **React 18** — UI with hooks
- **Vite** — build tool and dev server
- **GitHub Actions** — automated CI/CD
- **GitHub Pages** — static hosting

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Runs `npm ci`
2. Builds with `vite build`
3. Deploys the `dist/` folder to GitHub Pages

To enable GitHub Pages in a fork: **Settings → Pages → Source → GitHub Actions**

---

## Case Reference

**Newanforbi v. Derrick et al.**
Case No. 2:26-cv-00004-DJC-JDP
United States District Court, Eastern District of California
*Pro Se — Brendan Ngehsi Newanforbi*
