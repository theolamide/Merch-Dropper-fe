describe("Storefront elements", () => {
  //fullsize check
  it("tests to see if cart icon & logout button is visible", () => {
    cy.visit("/null");

    //is BrandTItle visible
    cy.get(".BrandTitle").contains("Merch Dropper");

    //check to see if Desktop menu container is visibl3
    cy.get(".DesktopWrapper").should("be.visible");

    //make sure mobile menu is not showing
    cy.get(".MobileWrapper").should("not.be.visible");

    //check if store name is visible
    cy.get("a.links").contains("null");

    //check if shopping cart icon is visible
    cy.get(".sc-AxhUy").should("be.visible");

    //is logout button showing
    cy.get("span.links").should("not.exist");
  });

  //check small screen functionality
  context("760p resolution", () => {
    beforeEach(() => {
      //set viewport size for these tests
      cy.viewport(767, 740);
    });

    it("tests to see if cart icon & logout button is visible on small screen size", () => {
      cy.visit("/null");

      //is BrandTItle visible
      cy.get(".BrandTitle").contains("Merch Dropper");

      //check to see if Desktop menu container is visible
      cy.get(".DesktopWrapper").should("not.be.visible");

      //make sure mobile menu is not showing
      cy.get(".MobileWrapper").should("be.visible");

      //check if store name is visible
      cy.get("a.links").contains("null");

      //check if shopping cart icon is visible
      cy.get(".sc-AxhUy").should("be.visible");

      //is logout button showing
      cy.get("span.links").should("not.exist");

      //is mobile dropdown menu showing
      cy.get(".HamburgerLines").should("be.visible");
    });
  });
}); //describe
