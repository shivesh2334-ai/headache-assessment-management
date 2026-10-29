# Headache Assessment & Management

Static adult clinician reference and assessment tool. No build, API key, account, external database or patient-data upload is required.

## Features

- Red-flag screening before provisional primary headache assessment.
- 20 curated topics covering migraine, tension-type headache, TACs, other primary syndromes, medication overuse and urgent secondary presentations.
- Separate headache types, treatment and knowledge base views.
- Search across symptoms, diagnosis, drugs, precautions and synonyms; category filters and empty-result guidance.
- Acute and preventive treatment summaries with linked sources and review date.
- Keyboard-accessible controls and responsive layout.

## Run and deploy

Open `index.html` locally (keep both JS files beside it), or serve this directory with a static web server. In Vercel select framework **Other**, no build command, and serve the repository root. This repository update does not itself connect the existing manually deployed Vercel project to GitHub.

## Files

- `index.html`: assessment and application structure.
- `knowledge-base.js`: editable clinical topic records and source metadata.
- `library.js`: navigation, client-side search, filtering and rendering.

To add a topic, use a unique `id` and the same fields as existing records; include source keys, precautions and searchable terms. Clinical review is required before publishing changes.

## Evidence and limits

Reviewed 29 October 2026. Original summaries informed by user-supplied Harrison's Chapter 430 excerpts (pp. 3357–3369), ICHD-3, NICE CG150 and the AHS 2024 CGRP prevention position statement. Source links are visible in the application. The uploaded textbook scans are not redistributed. Content is curated and does not update automatically.

This is decision support, not a validated diagnostic system or prescribing engine. Full diagnostic criteria, examination, local labels and individual contraindications still apply. Adult use only. Red flags suppress automated primary-headache drug advice. Drug examples are not complete prescriptions; pregnancy, renal/hepatic impairment and interactions require individual review.

## Assessment corrections in this update

Chronic migraine requires a sustained pattern and migraine-day count rather than total headache days alone. Medication-overuse assessment includes duration. Red-flag work-up wording is more cautious; automatic steroid, IV caffeine, CSF drainage and detox regimens were removed or revised. Atogepant is correctly identified as preventive-only. Numeric inputs are validated and New patient clears the assessment.
