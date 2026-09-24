describe('Authentication - fixture data', () => {
  it('logs in using data loaded from a fixture', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password)
      cy.get('[data-cy="welcome-message"]')
        .should('contain', 'Welcome')
        .and('contain', user.email)
    })
  })
})
