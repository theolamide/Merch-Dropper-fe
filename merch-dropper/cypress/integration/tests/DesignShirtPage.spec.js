describe('Checks /designshirt page for proper elements and icons for loggedin user',() => {
    it('tests to see if proper elements and icons are on the page, and functioning properly', () => {
        cy.visit('https://merchdropper.store/designshirt')
        //check slider
        cy.get('input[type=range]').should('be.visible')
        //.as('range')
        //.invoke('val', 6)
         //.trigger('change')
        //************NOTE ****************/
        //elements need data tags assigned to them before input slider can be properly tested. As is, trigger() fails because it is trying to check two inputs of the same type

          //is BrandTItle visible
          cy.get('.BrandTitle').contains('Merch Dropper')

          cy.get('.ButtonWrapper').should('be.visible')

          //check to see if Desktop menu container is visibl3
          cy.get('.DesktopWrapper').should('be.visible')

           //make sure mobile menu is not showing
          cy.get('.MobileWrapper').should('not.be.visible')

         //check if shopping cart icon is visible
          cy.get('.sc-AxhUy').should('not.be.visible')

          //product image
          cy.get('.sc-fzqNqU.kikdAh').should('be.visible')

          //design image container
          cy.get('.sc-fzpmMD.enYpte')
            .should('exist')
            .and('be.visible')

          //check color pallette
          cy.get('.sc-fznxKY.kfRyXm')
            .should('exist')
            .and('be.visible')
       
    })
})