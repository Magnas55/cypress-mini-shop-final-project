describe('Product workflow with reusable custom commands', () => {
  beforeEach(() => {
    cy.login(Cypress.env('testEmail'), Cypress.env('testPassword'))
  })

  it('adds a product to the cart using cy.addProduct()', () => {
    cy.addProduct('Starter Backpack')
    cy.get('[data-cy="cart-items"]').should('contain', 'Starter Backpack')
  })
})
