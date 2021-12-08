/// <reference types="cypress"/>
import My_requests from "../support/pages/My_requests";
describe ('Menu/Meus pedidos', () =>{
    it ('Validar exibição dos pedidos realizados', ()=> {
       My_requests.Orders_placed();
    });
    it ('Validar detalhes do pedido', ()=> { 
        My_requests.order_details();
    });
});