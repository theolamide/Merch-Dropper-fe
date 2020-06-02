//Tests ability of shipping form to take input and send button click with no errors
describe('Shipping Address page form', () => {
    beforeEach(() => {
        //run test in desktop size
			cy.viewport(770, 740);
    })

    it('visits the shipping form page', () => {
        cy.visit('https://merchdropper.store/null/shippingAddress')

        cy.get('.sc-oTbqq').contains('Please Enter Shipping Address')
    })

});