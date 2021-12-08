/// <reference types="cypress"/>
import product_page from "../support/pages/product_page";
describe ('PDP', () =>{
    it ('Devo validar e visualizar dados da PDP', ()=> {
        cy.visit('/produtos/51063b8e-7db4-4032-b5a9-37c8bddfa1f0')
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