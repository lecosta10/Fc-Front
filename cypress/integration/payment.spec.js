/// <reference types="cypress"/>

import payment from "../support/pages/payment";

describe ('Pagamento e Finalização de pedido', () =>{
    it ('Devo fazer todo o fluxo de compra até chegar na tela de pagamento', ()=> {
        cy.visit('/produtos/97157135-70b2-4c43-a52e-e7632a18fb99');
        cy.get('[data-cy=ppFabAction]').click();
        cy.get('[data-cy=cartSubmitButton]').click();
        cy.contains('Continuar para pagamento').click();
    });
    it ('Devo validar a tela de pagamento', ()=> {
       payment.View_payment();
    });
    it ('Devo escolher a forma de pagamento', ()=> {
        payment.form_of_payment();
     });
     it ('Devo clicar em finalizar compra', ()=> {
        cy.contains('FINALIZAR COMPRA').click();
     });
     it ('Devo validar o detalhe da finalização de pedido', ()=> {
      cy.get('[data-cy=barTitle]').should('be.visible')
        cy.get('[data-cy=orderStatus]').should('be.visible')
        cy.get('[data-cy=orderResume]').should('be.visible')
        cy.get('.makeStyles-root-138 > .MuiTypography-body1').should('be.visible')
        cy.get(':nth-child(7) > .makeStyles-orderResume-145').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(15)').should('be.visible')
        cy.get(':nth-child(16) > .makeStyles-orderResume-145').should('be.visible')
     });
     it ('Devo visualizar os botões ver meu pedido e ir para meus pedidos', ()=> {
        cy.get('[data-cy=openOrder]').should('be.visible')
        cy.get('[data-cy=openAllOrders]').should('be.visible')
     });
}); 
