const { cyan } = require("color-name")
const data = require('../support/test_data')

describe('OnDemand app tests', function () {
    beforeEach(() => {
        cy.visit('https://login.stage.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin')
    })
    after(() => {
    })

    it('Should log me in and out', function(){
       cy.login(data.users.Username.test1, data.users.password.test1)
       cy.logout()
    })
})