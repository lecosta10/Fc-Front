/// <reference types="cypress"/>
class campaigns {

     View_campaigns(){
        cy.get('.MuiSvgIcon-root').click();
        cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click();
     }
     standard_campaign(){
        cy.get('[data-testid=MuiDataTableBodyCell-3-48] > :nth-child(2) > div > .MuiButtonBase-root > .MuiButton-label').click();
        cy.contains('A campanha padrão foi definida com sucesso').should('be.visible'); 
        cy.wait(5000);
        cy.get('[data-testid=pagination-rows]').click()
        cy.get('[data-value="100"]').click();
        cy.get('[data-testid=MuiDataTableBodyCell-3-98] > :nth-child(2) > div > .MuiButtonBase-root > .MuiButton-label').click();
        cy.contains('A campanha padrão foi definida com sucesso').should('be.visible');
     }
     List_by_Page(){
        cy.get('[data-testid=pagination-rows]').click()
        cy.get('[data-value="100"]').click();
        cy.get('[data-testid=pagination-rows]').click()
        cy.get('[data-value="20"]').click();
        cy.get('[data-testid=pagination-rows]').click()
        cy.get('[data-value="50"]').click();
     }
     
 }
 export default new campaigns();
 


