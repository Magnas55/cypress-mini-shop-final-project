describe('Product API behavior with cy.intercept()', () => {
  beforeEach(() => {
    cy.loginWithSession(Cypress.env('testEmail'), Cypress.env('testPassword'))
  })

  it('stubs the product request and validates the UI', () => {
    cy.fixture('products').then((products) => {
      cy.intercept('GET', '**/api/products', {
        statusCode: 200,
        delay: 150,
        body: products
      }).as('getProducts')

      cy.visit('/')
      cy.wait('@getProducts')
        .its('response.statusCode')
        .should('eq', 200)

      cy.get('[data-cy="product-card"]').should('have.length', products.length)
      cy.contains('[data-cy="product-card"]', 'Fixture Backpack').should('be.visible')
      cy.contains('[data-cy="product-card"]', '$29.99').should('be.visible')
    })
  })
})
