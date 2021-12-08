/// <reference types="cypress"/>
import Cart from "../support/pages/Cart";
describe ('Carrinho', () =>{
    it ('Devo validar exibição dos valores (Valor do produto, frete, valor total e foma de pagamento)', ()=> {
        cy.visit('/produtos/51063b8e-7db4-4032-b5a9-37c8bddfa1f0')
        cy.get('[data-cy=ppFabAction]').click()
        Cart.Values();
    });
    it ('Devo fazer o calculo de frete)', ()=> {
        Cart.freight();
    });
    it ('Devo fazer os asserts da pagina do carrinho)', ()=> {
        Cart.asserts();
    });
    it ('Devo adicionar mais uma unidade do produto no carrinho)', ()=> {
        cy.get('[data-cy=incrementProductAmount]').click();
    });
    it ('Devo tirar uma unidade do produto no carrinho)', ()=> {
        cy.get('[data-cy=decrementProductAmount]').click();
    });
    it ('Devo adicionar outro produto no carrinho)', ()=> {
       Cart.add_product();
    });
    it ('Devo remover um produto)', ()=> {
        Cart.remove();
     });
     it ('Validar página de carrinho vazio))', ()=> {
        cy.get('[data-cy=emptyCartTitle]').should('be.visible')
     });
     it ('Validar botão para Buscar outros produtos))', ()=> {
        cy.get('[data-cy=emptyCartButton]').click();
        cy.url().should('eq', 'http://localhost:81/')
    });
});