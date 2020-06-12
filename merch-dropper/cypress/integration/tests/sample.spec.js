describe('My First Test', function () {
    it('sanity check', function() {
        expect(true).to.equal(true)
    })
})

describe('Landing page', () => {
    
    it('contains a Dev Auth button', () => {  
        cy.visit('/') 
        cy.contains('Dev Auth')
    })
    it('contains a Prod Nav button', () => {
        cy.visit('/') 
        cy.contains('Prod Nav')
    })
    it('contains an FAQ', () => {
        cy.visit('/') 
        cy.contains('Frequently Asked Questions')
    })
})

describe('Dev Auth', () => {
    it('redirects to register page', () => {
        cy.visit('/')
        cy.contains('Dev Auth').click()
        cy.url()
            .should('include', '/develop')
        cy.contains('Toggle Login/Register').click()
        cy.get('input[name=email]').type("bah@gmail.com")
        cy.get('input[name=password]').type("datking9@")
        cy.get('button[type=submit]').click()
        cy.url()
            .should('include', '/dashboard')
    })
})