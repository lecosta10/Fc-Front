/// <reference types="cypress"/>

import home_admin from "../../support/pages/admin/home_admin";

describe ('Login | Home Admin', () =>{
    it ('Devo fazer login e visualizar todas as funcionalidades da Home', ()=> {
        cy.visit('http://localhost:88/')
        //cy.wait(20000);
        home_admin.login();
        home_admin.View_home();
    });
}); 
