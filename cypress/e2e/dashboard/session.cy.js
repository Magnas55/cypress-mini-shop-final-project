describe('Cached authentication with cy.session()', () => {
  beforeEach(() => {
    cy.loginWithSession(Cypress.env('testEmail'), Cypress.env('testPassword'))
    cy.visit('/')
  })

  it('restores the authenticated dashboard state', () => {
    cy.get('[data-cy="dashboard"]').should('be.visible')
    cy.get('[data-cy="welcome-message"]').should('contain', Cypress.env('testEmail'))
  })

  it('reuses the same cached login for another test', () => {
    cy.get('[data-cy="product-list"]').should('be.visible')
    cy.get('[data-cy="product-card"]').should('have.length.at.least', 2)
  })
})
