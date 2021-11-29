/// <reference types="cypress"/>
class My_requests {
    Orders_placed(){
        cy.visit('pedidos/')
        cy.wait(10000);
        cy.contains('Pedidos').should('be.visible')  
    }
    order_details(){
        cy.visit('/pedidos/67')
        cy.wait(10000);
        cy.contains('Detalhes do Pedido').should('be.visible')
        cy.get(':nth-child(11) > .MuiButton-label').should('be.visible')
        cy.get(':nth-child(10) > .MuiButton-label').should('be.visible')
        cy.contains('Resumo do pedido').should('be.visible')
        cy.contains('Comprador').should('be.visible')
        cy.contains('Destinatário').should('be.visible')
        cy.contains('Forma de Pagamento').should('be.visible')
        cy.contains('Vendido e entregue por').should('be.visible')
        cy.contains('Subtotal').should('be.visible')
        cy.contains('Frete').should('be.visible')
        cy.contains('Total').should('be.visible')
        cy.contains('Quantidade:').should('be.visible')
    } 
}
export default new My_requests();