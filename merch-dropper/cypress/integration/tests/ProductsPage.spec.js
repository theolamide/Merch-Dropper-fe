///** Tests with guest user not signed in ***/
describe('Product page', () => {
	context('770p resolution', () => {
		beforeEach(() => {
			//run test in desktop size
			cy.viewport(770, 740);
		});

		it('visits the product page', () => {
			cy.visit('localhost:3000/products');

			//test desktop size
			cy.viewport(770, 740);

			cy.get('.MobileWrapper').should('not.be.visible');
			cy.get('.DesktopWrapper').should('be.visible');
			cy.get('.Hamburger').should('not.be.visible');
			cy.get('.HamburgerLines').should('not.be.visible');
			//cart icon
			cy.get('.sc-AxhUy').should('not.be.visible');

			cy.get('.BrandTitle').contains('Merch Dropper');
		});
	});

	context('760p resolution', () => {
		beforeEach(() =>
			//test in mobile mode
			cy.viewport(767, 740)
		);
		it('visits the product page', () => {
			cy.visit('localhost:3000/products');

			cy.get('.MobileWrapper').should('be.visible');
			cy.get('.DesktopWrapper').should('not.be.visible');
			cy.get('.Hamburger').should('be.visible');
			cy.get('.HamburgerLines').should('be.visible');
			//cart icon
			cy.get('.sc-AxhUy').should('be.visible');

			cy.get('.BrandTitle').contains('Merch Dropper');
		});
	});
});
