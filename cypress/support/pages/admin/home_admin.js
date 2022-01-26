/// <reference types="cypress"/>
class home_admin {

    login(){
         cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('admin')
         cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('123456')
         cy.get('.MuiButton-label').click();
     }
     View_home(){
        cy.contains('Seja bem vindo ao admin Via Store!').should('be.visible')
        cy.get('.MuiSvgIcon-root').should('be.visible')
        cy.contains('Admin').should('be.visible')
     }
     
 }
 export default new home_admin();
 


