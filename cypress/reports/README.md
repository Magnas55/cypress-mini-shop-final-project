# Mochawesome Reports

This directory is intentionally included in the project.

Run:

```bash
npm run test:report
```

The run creates raw Mochawesome JSON files in `cypress/reports/json/`, merges them into `cypress/reports/mochawesome.json`, and generates:

```text
cypress/reports/mochawesome-report.html
```

The HTML file should be generated from the student's actual Cypress run before final submission.
