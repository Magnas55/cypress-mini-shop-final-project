describe('Flaky test scenario and stable fix', () => {
  beforeEach(() => {
    cy.loginWithSession(Cypress.env('testEmail'), Cypress.env('testPassword'))
    cy.visit('/')
  })

  // This intentionally demonstrates the original flaky approach.
  // It is skipped so the final submission remains green.
  it.skip('FLAKY EXAMPLE: relies on an arbitrary fixed wait', () => {
    cy.get('[data-cy="load-status"]').click()
    cy.wait(200)
    cy.get('[data-cy="async-status"]').should('contain', 'Inventory ready')
  })

  it('FIXED: waits for the UI condition with Cypress automatic retries', () => {
    cy.get('[data-cy="load-status"]').click()

    cy.get('[data-cy="async-status"]', { timeout: 4000 })
      .should('be.visible')
      .and('contain', 'Inventory ready')
  })
})
