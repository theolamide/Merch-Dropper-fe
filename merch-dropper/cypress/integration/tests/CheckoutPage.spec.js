///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {

    context('770p resolution', () => {
        beforeEach(()=> {
            cy.visit('http://localhost:3000/null/checkout')

             //run test in desktop size
             cy.viewport(770, 740)
    })

    it('checks components for visibilty BEFORE Pay button is clicked', () => {
        //add check if modal is visible
       //*** cypress shows all Modal classes to be undefined ***/
   //cy.get('.ModalContainer').should('not.be.visible')

   //Small screen components (.MobileWrapper)
   cy.get('.MobileWrapper').should('not.be.visible')
   cy.get('.CartAndHamWrapper').should('not.be.visible')
   cy.get('.Hamburger').should('not.be.visible')

   // Big screen components (.DesktopWrapper)
   cy.get('nav.ButtonWrapper').should('be.visible')
   cy.get('.DesktopWrapper').should('be.visible')
   cy.get('.BrandTitle').should('be.visible')
   cy.get('.BrandTitle').contains('Merch Dropper')
   cy.get('.BrandLogo').should('be.visible')
   cy.get('.links').should('be.visible')
   cy.get('.sc-AxjAm').should('not.be.visible')
  
 
 //cart Itemized invoice
   cy.get('.StripeCheckout').should('be.visible')
   cy.get('.checkout-page').should('be.visible')
   cy.get('.checkout-header').should('be.visible')
   cy.get('.total').should('be.visible')
   })

   it('clicks the Pay button', () => {
           
    cy.get('.StripeCheckout').click()

    //add check if modal is visible after click
     //*** cypress shows all Modal classes to be undefined  - test code needs fixed***/
     //cy.get('.ModalContainer').should('not.be.visible')
})

//get inputs and and give them aliases
//type into form
//assert clicking send button is successful


   
 })

  
     
 context('760p resolution', () => {
    beforeEach(() =>
    //test in mobile mode
    cy.viewport(767, 740)
    )
    it('checks components for visibilty BEFORE Pay button is clicked', () => {
        //MobileWrapper
        cy.get('.MobileWrapper').should('be.visible')
        cy.get('.CartAndHamWrapper').should('be.visible')
        cy.get('.BrandTitle').should('be.visible')
        cy.get('.BrandTitle').contains('Merch Dropper')
        cy.get('.BrandLogo').should('be.visible')
        cy.get('.Hamburger').should('be.visible')
        cy.get('.HamburgerLines').should('be.visible')
        cy.get('.sc-AxhUy').should('be.visible')
        

          // Big screen components (.DesktopWrapper)
          cy.get('nav.ButtonWrapper').should('not.be.visible')
          cy.get('.DesktopWrapper').should('not.be.visible')
        
        
    })

})
         


})//end describe CheckoutPage

   