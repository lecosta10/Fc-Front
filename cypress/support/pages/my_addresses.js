/// <reference types="cypress"/>
class my_addresses {
    registered_addresses(){
        cy.visit('/enderecos')
        cy.contains('Endereços cadastrados').should('be.visible')
        cy.contains('PADRÃO').should('be.visible') 
    } 
    register(){
        cy.visit('/enderecos');
        cy.get('.makeStyles-ctaWrapper-17 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.contains('C6').should('be.visible');
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Casa');
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('My House');
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('99999999');
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo');
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Moema');
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Parque Alvorada');
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('Rua das flores');
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('Casa');
        cy.get(':nth-child(10) > .MuiInputBase-root > .MuiInputBase-input').type('Em frente ao mercado');
        cy.contains('Salvar').click(); //não está salvando
    }
    Required_fields(){
        cy.visit('/enderecos')
       // cy.wait(20000);
        cy.get('.makeStyles-ctaWrapper-17 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(20000);
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Casa')
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('My House')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('99999999')
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Moema')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Parque Alvorada')
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('Rua das flores')
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').type('123')
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('Casa')
        cy.get(':nth-child(10) > .MuiInputBase-root > .MuiInputBase-input').type('Em frente ao mercado')
        cy.contains('Voltar').click(); //botão voltar
    }
    edit_address(){
        cy.visit('/enderecos')
        cy.contains('Editar').click()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Ap')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('My Ap')
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('88888888')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('Rondonia')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Porto Velho')
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Nova colina')
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('Rua Isabel')
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').type('674')
        cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('Prédio')
        cy.contains('Salvar').click(); //não está salvando
    }
}
export default new my_addresses();