///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {

 
        it('visits the checkout page', () => {
            cy.visit('http://localhost:3000/null/checkout')
    
            cy.get('.StripeCheckout').click()
        })
         
   
    })

   