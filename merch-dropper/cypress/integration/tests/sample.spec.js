describe('My First Test', function () {
    it('sanity check', function() {
        expect(true).to.equal(true)
    })
})

describe('https://merchdropper.store/', () => {
    
    it('contains a Sign in button', () => {  
        cy.visit('https://merchdropper.store/') 
        cy.contains('Sign in')
    })
    it('contains a Get Started button', () => {
        cy.visit('https://merchdropper.store/') 
        cy.contains('Get Started')
    })
    it('contains a Learn more button', () => {
        cy.visit('https://merchdropper.store/') 
        cy.contains('Learn More')
    })
})

describe('sign in button', () => {
    it('redirects to auth0 url', () => {
        cy.visit('https://merchdropper.store/')
        cy.contains('Sign in').click()
        cy.url()
            .should('include', '/login')
    })
})