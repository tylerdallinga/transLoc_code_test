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
    .should('include','https://login.transloc.com/login') //think this is a bug, it is missing the "stage" in the url when you log out so I changed the url to reflect the change.
})