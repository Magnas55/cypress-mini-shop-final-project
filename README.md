# Cypress Mini Shop - Final Cypress Project

This project was created to satisfy the final deliverable requirements for the modular Cypress testing assignment.

## Requirements covered

- Modular Cypress specs under `cypress/e2e/auth/` and `cypress/e2e/dashboard/`
- Reusable custom commands in `cypress/support/commands.js`
- Fixture-based test using `cypress/fixtures/user.json`
- Environment-variable test using `Cypress.env()`
- Authentication caching with `cy.session()`
- API stubbing/monitoring with `cy.intercept()`
- Documented flaky test plus stable retry-based fix
- Mochawesome JSON + HTML report configuration
- 150-250 word reflection in `REFLECTION.md`

## Project structure

```text
cypress-mini-shop-assignment/
├── app/
│   ├── index.html
│   ├── app.js
│   └── styles.css
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.fixture.cy.js
│   │   │   └── login.env.cy.js
│   │   └── dashboard/
│   │       ├── products.cy.js
│   │       ├── session.cy.js
│   │       ├── intercept.cy.js
│   │       └── flaky-fixed.cy.js
│   ├── fixtures/
│   │   ├── user.json
│   │   └── products.json
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js
│   └── reports/
│       └── README.md
├── cypress.config.js
├── package.json
├── REFLECTION.md
└── README.md
```

## Install

From the project folder:

```bash
npm install
```

## Run the entire suite and generate the HTML report

```bash
npm run test:report
```

After the run completes, open:

```text
cypress/reports/mochawesome-report.html
```

On macOS you can open it with:

```bash
open cypress/reports/mochawesome-report.html
```

## Run interactively

Start the local app in Terminal 1:

```bash
npm start
```

Then in Terminal 2:

```bash
npm run cy:open
```

## Parallel execution demonstration

Start the app first:

```bash
npm start
```

Then, from a second terminal:

```bash
npm run test:parallel
```

This runs the authentication and dashboard spec groups concurrently.

## Important note about the report

The final Mochawesome HTML report must represent your actual test execution. Run `npm run test:report` before submission. Do not submit an invented or placeholder report.
