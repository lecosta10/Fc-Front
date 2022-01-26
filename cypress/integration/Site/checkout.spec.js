/// <reference types="cypress"/>

import checkout from "../../support/pages/Site/checkout";

describe ('Checkout', () =>{

    beforeEach(() => {
        cy.intercept('', (req) => {
          req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
        })
        cy.intercept('/api/').as('requests')
      })
    it ('Devo fazer todo o fluxo de compra até chegar no checkout', ()=> {
        cy.visit('/produtos/e021895a-9f37-4be1-b5ef-41045e689722');
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
