/// <reference types="cypress"/>

import Home from "../support/pages/Home";
describe ('Home C6', () =>{
    it ('Deve exibir todas as funcionalidades da Home', ()=> {
        cy.visit('/')
        //cy.wait(20000);
        Home.View_home();
        Home.carousel();
    });
}); 
