/// <reference types="cypress"/>
class my_addresses {
    registered_addresses(){
        cy.visit('/enderecos')
        cy.contains('Meus Endereços').should('be.visible')
        cy.contains('PADRÃO').should('be.visible') 
    } 
    register(){
        cy.visit('/enderecos');
        cy.get('[data-cy=addressAddButton] > .MuiButton-label').should('contain.text', 'Adicionar novo endereço').click();
        cy.get('[data-cy=addressFormNickname]').type('Casa');
        cy.get('[data-cy=addressFormRecipient]').type('My House');
        cy.get('[data-cy=addressFormPostalCode]').type('99999999');
        cy.get('[data-cy=addressFormState]').type('São Paulo');
        cy.get('[data-cy=addressFormCity]').type('Moema');
        cy.get('[data-cy=addressFormNeighborhood]').type('Parque Alvorada');
        cy.get('[data-cy=addressFormStreet]').type('Rua das flores');
        cy.get('[data-cy=addressFormNumber]').type('123');
        cy.get('.MuiBox-root-145 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Casa');
        cy.get('.MuiBox-root-147 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Em frente ao mercado');
        cy.get('[data-cy=addressFormSave]').click(); 
    }
    Required_fields(){
        cy.visit('/enderecos')
        cy.get('[data-cy=addressAddButton] > .MuiButton-label').should('contain.text', 'Adicionar novo endereço').click();
        cy.get('[data-cy=addressFormNickname]').type('Casa')
        cy.get('[data-cy=addressFormNickname]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormRecipient]').type('My House')
        cy.get('[data-cy=addressFormRecipient]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormPostalCode]').type('99999999')
        cy.get('[data-cy=addressFormPostalCode]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormState]').type('São Paulo')
        cy.get('[data-cy=addressFormState]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormCity]').type('Moema')
        cy.get('[data-cy=addressFormCity]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormNeighborhood]').type('Parque Alvorada')
        cy.get('[data-cy=addressFormNeighborhood]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormStreet]').type('Rua das flores')
        cy.get('[data-cy=addressFormStreet]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
        cy.get('[data-cy=addressFormNumber]').type('123')
        cy.get('[data-cy=addressFormNumber]').clear()
        cy.contains('Este campo é obrigatório').should('be.visible')
    }
    edit_address(){
        cy.visit('/enderecos')
        cy.contains('Alterar').click()
        cy.get('[data-cy=addressFormNickname]').clear()
        cy.get('[data-cy=addressFormNickname]').type('Ap')
        cy.get('[data-cy=addressFormRecipient]').clear()
        cy.get('[data-cy=addressFormRecipient]').type('My Ap')
        cy.get('[data-cy=addressFormPostalCode]').clear()
        cy.get('[data-cy=addressFormPostalCode]').type('88888888')
        cy.get('[data-cy=addressFormState]').clear()
        cy.get('[data-cy=addressFormState]').type('Rondonia')
        cy.get('[data-cy=addressFormCity]').clear()
        cy.get('[data-cy=addressFormCity]').type('Porto Velho')
        cy.get('[data-cy=addressFormNeighborhood]').clear()
        cy.get('[data-cy=addressFormNeighborhood]').type('Nova colina')
        cy.get('[data-cy=addressFormStreet]').clear()
        cy.get('[data-cy=addressFormStreet]').type('Rua Isabel')
        cy.get('[data-cy=addressFormNumber]').clear()
        cy.get('[data-cy=addressFormNumber]').type('674')
        cy.get('.MuiBox-root-145 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('.MuiBox-root-145 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Prédio')
        cy.get('.MuiBox-root-147 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('É aqui')
        cy.get('[data-cy=addressFormSave]').click(); 
    }
}
export default new my_addresses();