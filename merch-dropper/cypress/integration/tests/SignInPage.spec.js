context("Checks sign in sighup page for correct elements", () => {
  it("visits the page", () => {
    cy.visit(
      "https://merch-dropper.auth0.com/login?state=g6Fo2SBoLUw5TVBMZXpZejRzV0hkNVVyZWZyYjEwRkNZTWJXZ6N0aWTZIGdTV0tiVWF6eWJJYnRhRmlPeEVhZFJIOUItWExVMWp2o2NpZNkgUGIzQ3A1cHRZZ2htTlZEanVzalBtc0hQUmtKcTZSQVA&client=Pb3Cp5ptYghmNVDjusjPmsHPRkJq6RAP&protocol=oauth2&redirect_uri=https%3A%2F%2Fmerchdropper.store%2Fredirect&audience=https%3A%2F%2Fmerchdropper-production.herokuapp.com%2F&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=NERSa2lyMjlrUVBsZUo3NjgzZDFoYTd2SUtJVmVlYW9ubnBRQlhieDhnRA%3D%3D&code_challenge=KcT1Ml8YZE6zf6F9ttcGxHWGiJLot0J1EWl2OmOn6jQ&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuNy4wIn0%3D"
    );

    //is BrandTItle visible
    cy.get(".BrandTitle").should("not.exist");

    //check to see if Desktop menu container is visible
    cy.get(".DesktopWrapper").should("not.exist");

    //make sure mobile menu is not showing
    cy.get(".MobileWrapper").should("not.exist");

    //check if store name is visible
    cy.get("a.links").should("not.exist");

    //check if shopping cart icon is visible
    cy.get(".sc-AxhUy").should("not.exist");

    //is logout button showing
    cy.get("span.links").should("not.exist");

    //is mobile dropdown menu showing
    cy.get(".HamburgerLines").should("not.exist");

    cy.get(".heading").contains("Merch made easy");

    /////////////FORM ////////////////////

    cy.get(".form-area").should("exist");

    cy.get(".form-header").contains("Sign Up");

    cy.get(".progressbar").should("exist");

    cy.get(".input-container").should("exist");

    cy.get("#email").should("exist");

    cy.get("#password").should("exist");

    cy.get("#btn-signup").contains("Create Account");

    cy.get(".redirect-desc").contains("Already registered?");

    cy.get("#toggleLogin").contains("Sign In");

    cy.get("#signup-facebook").contains("Sign-Up with Facebook");

    cy.get("#signup-google").contains("Sign-Up with Google");

    cy.get(".terms-container").contains("By signing up");

    ////////////////////////////////////
  });
});
