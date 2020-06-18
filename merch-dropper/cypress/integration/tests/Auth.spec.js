
context('Cypress Demo-login', () => {
    it('login scenario', () => {
cy.visit('https://merch-dropper.auth0.com/login?state=g6Fo2SBoLUw5TVBMZXpZejRzV0hkNVVyZWZyYjEwRkNZTWJXZ6N0aWTZIGdTV0tiVWF6eWJJYnRhRmlPeEVhZFJIOUItWExVMWp2o2NpZNkgUGIzQ3A1cHRZZ2htTlZEanVzalBtc0hQUmtKcTZSQVA&client=Pb3Cp5ptYghmNVDjusjPmsHPRkJq6RAP&protocol=oauth2&redirect_uri=https%3A%2F%2Fmerchdropper.store%2Fredirect&audience=https%3A%2F%2Fmerchdropper-production.herokuapp.com%2F&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=NERSa2lyMjlrUVBsZUo3NjgzZDFoYTd2SUtJVmVlYW9ubnBRQlhieDhnRA%3D%3D&code_challenge=KcT1Ml8YZE6zf6F9ttcGxHWGiJLot0J1EWl2OmOn6jQ&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuNy4wIn0%3D')
 cy.get('#email').type('testmail@nomail.com')
 cy.get('#password').type('Password1')
// cy.get()
cy.get('#btn-login').click()
    })
})
// page doesn't load after test runs but posts 200