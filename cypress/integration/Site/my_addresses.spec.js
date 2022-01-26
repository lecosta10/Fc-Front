/// <reference types="cypress"/>
import my_addresses from "../../support/pages/Site/my_addresses";

describe ('Menu | Meus Endereços', () =>{

   beforeEach(() => {
      cy.intercept('', (req) => {
        req.headers['customerid'] = '01FS50Q28HE54F1R4GX4AQ09GE'
      })
      cy.intercept('/api/').as('requests')
    })
    it('Validar endereços cadastrados', ()=> {
       my_addresses.registered_addresses();
    });
    it ('Validar cadastrar um novo endereço', ()=> {
        my_addresses.register();
     });
     it ('Validar mensagens de campo obrigatório', ()=> {
        my_addresses.Required_fields();
     });
     it ('Validar editar endereço', ()=> {
       my_addresses.edit_address();
     });
   
});