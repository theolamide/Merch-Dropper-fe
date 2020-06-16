describe('Settings Component (Development)', () => {
    context('770p resolution', () => {
		beforeEach(() => {
			//run test in desktop size
			cy.viewport(1024, 768);
        });
    });
    it('reroutes to landing page with no auth token', () => {
      cy.visit("http://localhost:3000/dashboard")
      //add element checks here for landing page
      cy.get('[data-testid="title"]').should('exist')
    })
    it('renders connect to stripe cta for users not connected', () => {
        cy.visit("http://localhost:3000")
        cy.get('[data-testid="dev-auth"]').click()
        cy.get('.dev-email').type('thorodinson@avengers.com')
        cy.get('.dev-password').type('pointbreak')
        cy.get('.dev-register').click()
        cy.get('.sc-pZBmh.bEkKGq').click()
        cy.contains('Skip for now').click()
        cy.contains('Connect to Stripe')
    })
    it('renders create store cta for users who have not yet', () => {
        cy.visit("http://localhost:3000")
        cy.get('.links.login').click()
        cy.get('.dev-email').type('tonystark@avengers.com')
        cy.get('.dev-password').type('iamironman')
        cy.get('.dev-register').click()
        cy.get('.sc-pZBmh.bEkKGq').click()
        cy.contains('Skip for now').click()
        cy.get('.store-cta').contains('Create Store')
    })
    it('renders storefront status and information for completed store', () =>{
        cy.visit("http://localhost:3000/")
        cy.get('.links.login').click()
        cy.get('.dev-email').type('brucebanner@avengers.com')
        cy.get('.dev-password').type('strongestavenger')
        cy.get('.dev-register').click()
        cy.get('.dev-stripe').click()
        cy.get('#outlined-basic').type('Hulk Smash')
        cy.get('.create-store').click()
        cy.expect('.stripeaccount').to.be.a('string')
        cy.expect('.storename').to.be.a('string')

        
    })
    it('connect stripe cta routes to stripe setup', () => {
        cy.visit("http://localhost:3000")
        cy.get('.links.login').click()
        cy.get('.dev-email').type('steverodgers@avengers.com')
        cy.get('.dev-password').type('americasass')
        cy.get('.dev-register').click()
        cy.get('.sc-pZBmh.bEkKGq').click()
        cy.contains('Skip for now').click()
        cy.contains('Connect to Stripe').click()
        cy.get('.dev-stripe').click();
        cy.expect('.stripeaccount').to.be.a('string')
        
    })
    it('create store cta routes to create store', () => {
        cy.visit("http://localhost:3000")
        cy.get('.links.login').click()
        cy.get('.dev-email').type('tchalla@avengers.com')
        cy.get('.dev-password').type('wakandaforever')
        cy.get('.dev-register').click()
        cy.get('.sc-pZBmh.bEkKGq').click()
        cy.contains('Skip for now').click()
        cy.contains('Create Store').click()
        cy.get('#outlined-basic').type('PantherPlace')
        cy.get('.create-store').click();
        cy.expect('.stripeaccount').to.be.a('string')
    })
  })