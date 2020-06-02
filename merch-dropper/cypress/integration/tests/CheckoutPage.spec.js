///Tests if the checkout pay button is clickable
describe('Checkout Page', () => {
	context('770p resolution', () => {
		beforeEach(() => {
			cy.visit('http://localhost:3000/null/checkout');

			//run test in desktop size
			cy.viewport(770, 740);
		});

		it('checks components for visibilty BEFORE Pay button is clicked', () => {
			//add check if modal is visible
			//*** cypress shows all Modal classes to be undefined ***/
			cy.get('.ModalContainer').should('not.exist');

			//Small screen components (.MobileWrapper)
			//cy.get('.MobileWrapper').should('not.be.visible');
			cy.get('[data-cy=mobileWrapper]')//this is best practices
			cy.get('.CartAndHamWrapper').should('not.be.visible');
			cy.get('.Hamburger').should('not.be.visible');
			cy.get('button.sc-AxirZ').should('not.be.visible');

			// Big screen components (.DesktopWrapper)
			cy.get('nav.ButtonWrapper').should('be.visible');
			cy.get('.DesktopWrapper').should('be.visible');
			cy.get('.BrandTitle').should('be.visible');
			cy.get('.BrandTitle').contains('Merch Dropper');
			cy.get('.BrandLogo').should('be.visible');
			cy.get('.links').should('be.visible');
			cy.get('.sc-AxjAm').should('not.be.visible');

			//cart Itemized invoice
			cy.get('.StripeCheckout').should('be.visible');
			cy.get('.checkout-page').should('be.visible');
			cy.get('.checkout-header').should('be.visible');
			cy.get('.total').should('be.visible');
		});
	}); //end 770p resolution

	context('760p resolution', () => {
		beforeEach(() =>
			//test in mobile mode
			cy.viewport(767, 740)
		);
		it('checks components for visibilty BEFORE Pay button is clicked', () => {
			//MobileWrapper
			cy.get('.MobileWrapper').should('be.visible');
			cy.get('.CartAndHamWrapper').should('be.visible');
			cy.get('.BrandTitle').should('be.visible');
			cy.get('.BrandTitle').contains('Merch Dropper');
			cy.get('.BrandLogo').should('be.visible');
			//cart icon
			cy.get('.sc-AxhUy').should('be.visible');

			//mobile menu
			cy.get('.Hamburger').should('be.visible');
			cy.get('.HamburgerLines').should('be.visible');
			//mobile links
			cy.get('sc-AxAm').should('not.be.visible');

			// Big screen components (.DesktopWrapper)
			cy.get('nav.ButtonWrapper').should('not.be.visible');
			cy.get('.DesktopWrapper').should('not.be.visible');
		});

		//test mobile menu
		it('clicks the hamburger menu', () => {
			cy.get('button.Hamburger').click();

			//mobile menu drop-down
			cy.get('button.sc-AxirZ').should('be.visible');
			cy.get('button.sc-AxirZ').contains('X');

			cy.get('div.sc-AxiKw').should('have.length', 3);
			cy.get('div.sc-AxiKw').should('be.visible');

			//close the menu drawer
			cy.get('button.sc-AxirZ').click();
			cy.get('button.sc-AxirZ').should('not.exist');
		});
	}); //end 760p resolution
}); //end describe CheckoutPage

describe('it clicks the Pay button', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/null/checkout');
	});

	it('clicks the Pay button', () => {
		//check if .StripeCheckout is clickable
		cy.contains('Pay Now').click()
		//*** cypress shows all Modal classes to be undefined  - test code needs fixed***/
		// Stripe form that is in the Modal is a third party element in an iframe. https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
	});
});
