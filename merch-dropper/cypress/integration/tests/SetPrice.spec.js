context('Cypress Demo-SellerSetPrice', () => {
    it('set price scenario', () => {
cy.visit('/dashboard')
cy.get('.letsGo').click()
cy.get('#root > div > div.sc-fzolEj.jJAzoG > div.sc-fznWOq.cqDPIl > div.sc-fzoXWK.hnKkAN > a:nth-child(2) > img').click()
cy.get('#root > div > div.sc-fzolEj.jJAzoG > div.sc-fznWOq.cqDPIl > div.sc-fznMAR.gSVBBi > button').click()
cy.get('#root > div > div.sc-fzolEj.jJAzoG > div.sc-fznWOq.cqDPIl > div.sc-fznMAR.gSVBBi > a').click()
cy.get('#root > div > div.jss1 > div.jss7 > form > div.MuiFormControl-root.MuiTextField-root.jss2 > div > input').type('purple doggo shirt')
cy.get('#root > div > div.jss1 > div.jss7 > form > div.jss20 > div > div > input').type('10.00')
cy.get('#root > div > div.jss1 > div.jss7 > form > div.MuiFormControl-root.MuiTextField-root.jss9 > div > textarea').type('purple shirt with doggo on it')
cy.get('#root > div > div.jss1 > div.jss7 > form > button').click()
})
})