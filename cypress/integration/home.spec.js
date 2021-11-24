/// <reference types="cypress"/>

import Home from "../support/pages/Home";

beforeEach(() => {
    cy.visit('/');
    cy.wait(20000);
})
describe ('Home C6', () =>{
    it ('Deve exibir todas as funcionalidades da Home', ()=> {
        Home.View_home();
        Home.carousel();
    });
}); 
