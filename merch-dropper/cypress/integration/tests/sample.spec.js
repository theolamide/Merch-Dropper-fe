describe('My First Test', function () {
    it('Does not do much', function() {
        expect(true).to.equal(true)
    })
})

describe('https://merchdropper.store/', () => {
    it('contains a sign in button', () => {
        cy.visit('https://merchdropper.store/')
        cy.contains('Sign in')
    })
})