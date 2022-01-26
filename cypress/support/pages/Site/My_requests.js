/// <reference types="cypress"/>
class My_requests {
    Orders_placed(){
        cy.visit('pedidos/')
        cy.contains('Meus pedidos').should('be.visible')  
        cy.contains('N').should('be.visible')
        cy.get('.makeStyles-root-2').should('be.visible')

    }
    order_details(){
        cy.visit('pedidos/')
        cy.get('[href="/pedidos/9"] > .makeStyles-card-17 > .makeStyles-header-4 > [data-cy=orderNumber]').click();
        cy.get('[data-cy=barTitle]').should('be.visible')
        cy.contains('Chegará em').should('be.visible')
        cy.contains('Vendido e entregue por').should('be.visible')
        cy.contains('Resumo do pedido').should('be.visible')
        cy.contains('Comprador').should('be.visible')
        cy.contains('Destinatário').should('be.visible')
        cy.contains('Forma de pagamento').should('be.visible')
        //cy.contains('Subtotal').should('be.visible')
        cy.contains('Frete').should('be.visible')
        cy.contains('Valor total').should('be.visible')
        //cy.contains('Quantidade:').should('be.visible')
        cy.get('.MuiTimeline-root').should('be.visible')
        cy.get('[data-cy=orderPaymentValue]').should('be.visible')
    } 
}
export default new My_requests();