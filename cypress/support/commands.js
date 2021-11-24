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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

beforeEach(() => {
    cy.intercept('', (req) => {
      req.headers['customerid'] = '01FHZVJK47HZWZ0P46FQ4Q1D21'
    })
    cy.intercept('/api/').as('requests')

    //Comando para deixar em tamanho Mobile
      cy.viewport(375, 667) 
      cy.viewport('iphone-x') 
    

  })