describe('Settings Component (Development)', () => {
    it('reroutes to landing page with no auth token', () => {
      cy.visit("http://localhost:3000/dashboard")
      //add element checks here for landing page
      cy.get('.BrandTitle').contains('Merch Dropper')
    })
  })