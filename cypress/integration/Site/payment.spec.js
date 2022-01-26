/// <reference types="cypress"/>

import payment from "../../support/pages/Site/payment";



describe ('Pagamento e Finalização de pedido', () =>{

   beforeEach(() => {
      cy.intercept('', (req) => {
        req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
      })
      cy.intercept('/api/').as('requests')
    })
    it ('Devo fazer todo o fluxo de compra até chegar na tela de pagamento', ()=> {
        cy.visit('/produtos/e021895a-9f37-4be1-b5ef-41045e689722');
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
        cy.contains('Comprador').should('be.visible')
        cy.contains('Destinatário').should('be.visible')
        cy.contains('Dados da compra').should('be.visible')
        cy.contains('Vendido por').should('be.visible')
        cy.contains('Forma de pagamento').should('be.visible')
        cy.contains('R$').should('be.visible')
     });
     it ('Devo visualizar os botões ver meu pedido e ir para meus pedidos', ()=> {
        cy.get('[data-cy=openOrder]').should('be.visible')
        cy.get('[data-cy=openAllOrders]').should('be.visible')
     });
}); 
