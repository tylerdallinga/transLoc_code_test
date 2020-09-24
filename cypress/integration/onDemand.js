const { cyan } = require("color-name")
const data = require('../support/test_data')

describe('OnDemand app tests', function () {
    beforeEach(() => {
        cy.visit('https://login.stage.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin')
    })
    afterEach(() => {
        cy.logout()
    })
    
//1. As a user, I should be able to sign in to my account and also be able to logout

    it('Should log me in and out and back in again', function(){
       cy.login(data.users.Username.test1, data.users.password.test1) //login with email
       cy.logout()
       cy.login(data.users.Username.test1, data.users.password.test1)//login with username
    })

//2. As a user, I should be able to sign in and create a new ride

    it('should be able to create a new ride', function(){
        cy.login(data.users.Username.test1, data.users.password.test1)
        cy.newRideAccount(data.riders.service.rider1, data.riders.first.rider1, data.riders.last.rider1, data.riders.phone.rider1, data.riders.riders.rider1, data.riders.wheelchair.no, data.riders.note.rider1, data.riders.pickup.rider1, data.riders.dropoff.rider1)
    })

//3. As a user, I should be able to search for a specific ride and view the details page of that ride.

    it('should be able to search for rides, and go to the details page', function(){
        cy.login(data.users.Username.test1, data.users.password.test1)
        cy.searchRide(data.riders.searchData.data1, data.riders.first.rider1, data.riders.last.rider1, data.riders.pickup.rider1)

        cy.get('[data-id="ride-details-button"]').eq(1)
        .click()
        .wait(5000)

        
    cy.get('button').eq(1) //click the return to rides button
    .should('be.visible')
    .click()
    })

//4. As a user, I should be able to navigate threw all the "single rides" options.



//5. As a user, I should be able to filter rides by date, and service.

})