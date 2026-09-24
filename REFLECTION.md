# Project Reflection

I organized the Cypress project by separating authentication tests from dashboard and product tests. This structure keeps each spec focused on a single workflow and makes the suite easier to maintain as more coverage is added. I also created reusable custom commands for UI login, session-based login, and adding a product, which reduced duplicated setup code across the test files.

The suite uses a `user.json` fixture for one login test and `Cypress.env()` values for a separate login test so test data and configuration are not repeated throughout the specs. I used `cy.intercept()` to stub the product API and verify that the UI renders controlled fixture data. I also used `cy.session()` to cache the authenticated browser state so repeated tests do not have to perform the full login flow each time.

For the flaky-test example, the original approach depended on a fixed `cy.wait(200)`, even though the UI could update later. I kept that version skipped as documentation and replaced it with a retryable `.should()` assertion with a timeout. This makes the test wait for the real application condition instead of guessing a delay. Mochawesome reporting provides a readable HTML summary of passing, failing, pending, and timed test cases.
