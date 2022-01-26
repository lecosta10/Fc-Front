/// <reference types="cypress"/>
import Cart from "../../support/pages/Site/Cart";
describe ('Carrinho', () =>{

    beforeEach(() => {
        cy.intercept('', (req) => {
          req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
        })
        cy.intercept('/api/').as('requests')
      })
    it ('Devo validar exibição dos valores (Valor do produto, frete, valor total e foma de pagamento)', ()=> {
        cy.visit('/produtos/28399ba0-4161-483d-95dc-b24a95edb1d0')
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