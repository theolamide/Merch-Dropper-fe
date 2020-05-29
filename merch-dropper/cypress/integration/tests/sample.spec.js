describe('My First Test', function () {
    it('Does not do much', function() {
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
        cy.contains('Get Start')
    })
})