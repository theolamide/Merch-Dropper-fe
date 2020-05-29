///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {

 before(()=> {
    cy.visit('http://localhost:3000/null/checkout')
 })

        it('clicks the Pay button', () => {
           
            cy.get('.StripeCheckout').click()
        })
         
   
    })

   