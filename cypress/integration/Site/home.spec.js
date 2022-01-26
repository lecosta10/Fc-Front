/// <reference types="cypress"/>

import Home from "../../support/pages/Site/home";
describe ('Home C6', () =>{

    beforeEach(() => {
        cy.intercept('', (req) => {
          req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
        })
        cy.intercept('/api/').as('requests')
      })
    it ('Deve exibir todas as funcionalidades da Home', ()=> {
        cy.visit('/')
        //cy.wait(20000);
        Home.View_home();
        Home.carousel();
    });
}); 
