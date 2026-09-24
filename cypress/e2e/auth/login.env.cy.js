describe('Authentication - environment variables', () => {
  it('logs in using Cypress.env() values', () => {
    const email = Cypress.env('testEmail')
    const password = Cypress.env('testPassword')

    expect(email, 'testEmail env variable').to.be.a('string').and.not.be.empty
    expect(password, 'testPassword env variable').to.be.a('string').and.not.be.empty

    cy.login(email, password)
    cy.get('[data-cy="welcome-message"]').should('contain', email)
  })
})
