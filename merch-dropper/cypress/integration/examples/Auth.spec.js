context('Cypress Demo-login', () => {
    it('login scenario', () =>{
    cy.visit('https://merdropper.store/')
    cy.get('.links:first-child').click()
    })
})