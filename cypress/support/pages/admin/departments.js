/// <reference types="cypress"/>
class departments {

    View_department(){
        cy.get('.MuiSvgIcon-root').click(); //menu
        cy.contains('Departamentos').click();   
        cy.visit('http://localhost:88/departamentos')
        cy.get('[data-cy=headerTitle]').should('be.visible')
    }
    Edit(){
        cy.get('[data-testid=MuiDataTableBodyCell-3-0] > :nth-child(2) > .MuiButtonGroup-root-1007 > [data-cy=editGroup] > .MuiButton-label-976').click();
        cy.get('.PrivateSwitchBase-input-1037').click();
        cy.contains('Layout do departamento editado com sucesso').should('be.visible')
        //cy.contains('Voltar').click();
    }
}
export default new departments();



