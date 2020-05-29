///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {

 beforeEach(()=> {
    cy.visit('http://localhost:3000/null/checkout')
 })

 //add check if modal is visible

        it('clicks the Pay button', () => {
           
            cy.get('.StripeCheckout').click()

            //add check if modal is visible after click
        })

        //get inputs and and give them aliases
        //type into form
        //assert clicking send but is successful
       
         
   
    })

   