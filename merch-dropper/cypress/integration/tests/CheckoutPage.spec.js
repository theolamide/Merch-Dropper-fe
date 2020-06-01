///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {

 beforeEach(()=> {
    cy.visit('http://localhost:3000/null/checkout')

    //add check if modal is visible
    //*** cypress shows all Modal classes to be undefined ***/
    cy.get('.ModalContainer').should('not.be.visible')

    cy.get('.StripeCheckout').should('be.visible')
    cy.get('.checkout-header').should('be.visible')
    cy.get('.total').should('be.visible')
 })

 
        

        it('clicks the Pay button', () => {
           
            cy.get('.StripeCheckout').click()

            //add check if modal is visible after click
             //*** cypress shows all Modal classes to be undefined  - test code needs fixed***/
             cy.get('.ModalContainer').should('not.be.visible')
        })

        //get inputs and and give them aliases
        //type into form
        //assert clicking send button is successful
       
         
   
    })

   