// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) =>{
    cy.get('#username')
    .type(username)
    .should('have.value',username)
    .wait(2000)

    cy.get('#password')
    .type(password)
    .should('have.value',password)

    cy.get('body > div.container > div.row.justify-content-center > div > div > form > div:nth-child(6) > div > div > input')
    .click()
    .wait(5000)

    cy.get('.Header_logo_S0SNC')
    .should('be.visible')
})

Cypress.Commands.add('logout',() =>{
    cy.get('#app > div > div > div.MuiPaper-root.Header_root_2K4n2.MuiPaper-elevation1.MuiPaper-rounded > div.Header_row_2sHNP > div.Header_userInfoContainer_1Myq6 > div > a:nth-child(2)')
    .should('be.visible')
    .should('have.attr', 'href').and('include', 'logout')
     .then((href) => {
       cy.visit(href)
     })

    cy.url()
    .should('include','https://login.transloc.com/login')
    
    cy.visit('https://login.stage.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin') //had to add this step do to a bug found in the href of the the log out link that points to prod instead of stage 
})


Cypress.Commands.add('newRideAccount', (service, first, last, phone, riders, wheelchair, note, pickup, dropoff,) =>{
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div.PageLayout_content_31BMm > button')
    .click()
    .wait(1000)

    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(2) > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR')
    .click()
    .type(service)
    .type('{enter}')

    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(4) > div:nth-child(1) > div > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR').type(first)
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(4) > div:nth-child(2) > div > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR').type(last)
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(5) > div:nth-child(1) > div > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR').type(phone)
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(5) > div:nth-child(2) > div > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR').type(riders).type('{enter}')
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(6) > div.FormField_children_1SmtD.RideEditor_childClass_3O1oR > span').trigger(wheelchair)
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div:nth-child(7) > div > div > textarea:nth-child(1)').type(note)
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div.RideEditor_addresses_1ZmgC > div.RideEditor_pickup_1EMGG > div > input').type(pickup).should('have.value', pickup)
    cy.get('#react-autowhatever-1').click()
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div.RideEditor_addresses_1ZmgC > div.RideEditor_dropoff_1zXP5 > div > input').type(dropoff).should('have.value', dropoff)
    .wait(1500)
    cy.get('.RideEditor_suggestionsContainer_3oLKT').eq(1).click() // sleecting the first dropdown item on dropoffs dropdown

    cy.get('#app > div > div > div.Content_root_2fPyW > div > div > div > div > div.RideEditor_editorColumn_yVp2e > div.RideEditor_actions_1XHiA > button > span.MuiButton-label')
    .click()
    .wait(5000)

    cy.get('button').eq(1) //click the return to rides button
    .click()

    cy.get('.Header_logo_S0SNC')
    .should('be.visible')
})

Cypress.Commands.add('searchRide', (searchData, firstName, lastName, pickup) =>{
    cy.get('#app > div > div > div.Content_root_2fPyW > div > div.PageLayout_content_31BMm > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input')
    .type(searchData)

    cy.get('div [data-id=ride-name]').eq(1)
    .should('have.text', firstName + " " + lastName)
    
    cy.get('div [data-id=ride-pickup-address]').eq(1)
    .should('have.text', pickup)
})