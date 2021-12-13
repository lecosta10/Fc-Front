/// <reference types="cypress"/>

import checkout from "../support/pages/checkout";

describe ('Checkout', () =>{
    it ('Devo fazer todo o fluxo de compra até chegar no checkout', ()=> {
        cy.visit('/produtos/97157135-70b2-4c43-a52e-e7632a18fb99');
        cy.get('[data-cy=ppFabAction]').click();
        cy.get('[data-cy=cartSubmitButton]').click();
    });
    it ('Devo validar a tela de checkout', ()=> {
       checkout.validate_screen();
    });
    it ('Devo Validar alterar o endereço', ()=> {
        checkout.change_address();
    });
    it ('Devo Validar adicionar um novo endereço', ()=> {
        checkout.new_address();
     });
    it ('Devo Validar botão cancelar', ()=> {
        cy.get('[data-cy=changeAddressButton] > .MuiButton-label').click();
        cy.get('[data-cy=cancelAddressChange] > .MuiButton-label').click();
     });
     it ('Validar botão Finalizar compra', ()=> {
        cy.contains('Continuar para pagamento').click();
     });
}); 
