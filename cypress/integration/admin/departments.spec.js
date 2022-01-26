/// <reference types="cypress"/>
import campaigns from "../../support/pages/admin/campaigns";
import departments from "../../support/pages/admin/departments";
import home_admin from "../../support/pages/admin/home_admin";
describe ('Departamentos', () =>{
    it ('Devo validar a tela de Departamentos', ()=> {
        cy.visit('http://localhost:88')
        home_admin.login();
        departments.View_department();
    });
    it ('Devo editar um departamento', ()=> {
       departments.Edit();
    });
      
}); 
