describe('Product page', () => {

    it('visits the product page', () => {
        cy.visit('localhost:3000/products')

       cy.get('.MobileWrapper').should('not.be.visible')
       //cy.get('.MobileWrapper').should('be.visible')
       cy.get('.BrandTitle').contains('Merch Dropper')
    })
   
})