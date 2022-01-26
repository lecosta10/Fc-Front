/// <reference types="cypress"/>
import My_requests from "../../support/pages/Site/My_requests";
describe ('Menu/Meus pedidos', () =>{

    beforeEach(() => {
        cy.intercept('', (req) => {
          req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
        })
        cy.intercept('/api/').as('requests')
      })
    it ('Validar exibição dos pedidos realizados', ()=> {
       My_requests.Orders_placed();
    });
    it ('Validar detalhes do pedido', ()=> { 
        My_requests.order_details();
    });
});