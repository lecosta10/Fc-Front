/// <reference types="cypress"/>
import my_addresses from "../support/pages/my_addresses";
describe ('Menu | Meus Endereços', () =>{
    it ('Validar endereços cadastrados', ()=> {
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