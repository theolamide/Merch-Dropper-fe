//Tests ability of shipping form to take input and send button click with no errors
describe('Shipping Address page form', () => {

    it('tests the shipping address form', () => {
        cy.visit('/null/shippingAddress')
  
        cy.get('.sc-oTbqq').contains('Please Enter Shipping Address')
            .should('be.visible')

        //check if inputs will take text    
        cy.get('input[name="name"]').type('Ralph Buick')
        cy.get('input[name="address1"]').type('44 Porcelain Bus Hwy')
        cy.get('input[name="city"]').type('Hurl')
        cy.get('input[name="state"]').type('NV')
        cy.get('input[name="zip"]').type('89001')

       //check submit button works
       cy.get('button').contains('Submit').click()
       cy.url().should('include', '/checkout')
      

    })

});