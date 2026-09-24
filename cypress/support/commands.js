Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.get('[data-cy="email"]').clear().type(email)
  cy.get('[data-cy="password"]').clear().type(password, { log: false })
  cy.get('[data-cy="login-button"]').click()
  cy.get('[data-cy="dashboard"]', { timeout: 5000 }).should('be.visible')
})

Cypress.Commands.add('loginWithSession', (email, password) => {
  cy.session(
    ['mini-shop-user', email],
    () => {
      cy.visit('/')
      cy.get('[data-cy="email"]').clear().type(email)
      cy.get('[data-cy="password"]').clear().type(password, { log: false })
      cy.get('[data-cy="login-button"]').click()
      cy.get('[data-cy="dashboard"]').should('be.visible')
      cy.window().its('localStorage.authenticated').should('eq', 'true')
    },
    {
      validate() {
        cy.window().then((win) => {
          expect(win.localStorage.getItem('authenticated')).to.eq('true')
        })
      },
      cacheAcrossSpecs: true
    }
  )
})

Cypress.Commands.add('addProduct', (productName) => {
  cy.contains('[data-cy="product-card"]', productName)
    .find('[data-cy="add-product"]')
    .click()

  cy.get('[data-cy="cart-count"]').should('contain', '1')
})
