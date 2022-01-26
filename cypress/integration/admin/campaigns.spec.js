/// <reference types="cypress"/>
import campaigns from "../../support/pages/admin/campaigns";
import home_admin from "../../support/pages/admin/home_admin";
describe ('Campanha padrão', () =>{
    it ('Devo validar a tela de Campanha', ()=> {
        cy.visit('http://localhost:88/')
        home_admin.login();
        campaigns.View_campaigns();
        cy.visit('http://localhost:88/campanhas')
    });
    it ('Devo setar uma campanha como padrão', ()=> {
     campaigns.standard_campaign();
    });
    it ('Devo validar listar por página', ()=> {
        campaigns.List_by_Page();
       })
    it ('Filtrar por nome', ()=> {
        cy.get('[data-testid=Filtrar-iconButton] > .MuiIconButton-label > .MuiSvgIcon-root').click();
        cy.get('[data-testid=filtertextfield-name] > .MuiInputBase-root > .MuiInputBase-input').type('TESTES INTEGRAÇÃO C6 BANK')
        cy.get('.MuiButton-contained > .MuiButton-label').click();
        cy.get('.MUIDataTableFilterList-root-61 > .MuiChip-root').should('be.visible')
    })
    it ('Filtrar por data', ()=> {
        cy.get('[data-testid=Filtrar-iconButton] > .MuiIconButton-label > .MuiSvgIcon-root').click();
        cy.get('#mui-component-select-isDefault').click();
        cy.get('[data-value="Padrão"]').click();
        cy.get('.MuiButton-contained > .MuiButton-label').click();
        cy.get(':nth-child(1) > .MuiChip-root > .MuiChip-label').should('be.visible')
        
        
    })
       
      
}); 
