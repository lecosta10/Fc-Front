/// <reference types="cypress"/>
import product_page from "../../support/pages/Site/product";
describe ('PDP', () =>{

   beforeEach(() => {
      cy.intercept('', (req) => {
        req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
      })
      cy.intercept('/api/').as('requests')
    })
    it ('Devo validar e visualizar dados da PDP', ()=> {
        cy.visit('/produtos/28399ba0-4161-483d-95dc-b24a95edb1d0')
        product_page.View_productpage();
    });
    it ('Devo visualizar o detalhe do produto', ()=> {
        product_page.product_detail();
     });
    it ('Devo visualizar as caracteristicas do produto', ()=> {
       product_page.characteristics();
    });
    it('Devo validar o tipo de frete e calculo de frete', ()=> {
        product_page.freight();
     });
     it('Devo clicar no botão "Comprar"', ()=> {
        product_page.purchase();
     });
});