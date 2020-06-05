//check page for correct elements and icons
describe('Landing Page has correct elements and icons showing', () => {

    //large screen size
    it('tests to see if correct elements are on page, and funcitioning',() => {
        cy.visit('/')

        //is jumbotron visible
        cy.get('.jumbotron').should('be.visible')

         //is BrandTItle visible
         cy.get('.BrandTitle').contains('Merch Dropper')

         //check to see if Desktop menu container is visibl3
         cy.get('.DesktopWrapper').should('be.visible')
  
          //make sure mobile menu is not showing
          cy.get('.MobileWrapper').should('not.be.visible')

          //check if shopping cart icon is visible
        cy.get('.sc-AxhUy').should('not.be.visible')

         //is logout button showing
         cy.get('span.links').contains('Sign in')

         //is get started button visible
         cy.get('.cta').contains('Get Started')

         //jumbotron buttons
         cy.get('.letsGo').contains("Let's Go!").should('be.visible')


         cy.get('.learnMore').contains('Learn More').should('be.visible')


            context('760p resolution', () => {
                beforeEach(() => {
                     //set viewport size for these tests
                    cy.viewport(767,740)

                    
                it('tests to see if correct elements are on small screen, and funcitioning', () => {

                    cy.visit('/')

                    //is BrandTItle visible
                    cy.get('.BrandTitle').contains('Merch Dropper')
                })
                })


            })//context
    })
})