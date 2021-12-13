/// <reference types="cypress"/>
class checkout {
    validate_screen(){
        cy.get('[data-cy=barTitle]').should('be.visible')
        cy.get('[data-cy=currentAddress] > :nth-child(2)').should('be.visible');
        cy.get('[data-cy=changeAddressButton] > .MuiButton-label').should('be.visible')
        cy.get('.makeStyles-freightValue-105').should('be.visible')
        cy.get('.makeStyles-root-108').should('be.visible')
        cy.contains('Vendido e entregue por').should('be.visible')
    }
    change_address(){
        cy.get('[data-cy=changeAddressButton] > .MuiButton-label').click();
        cy.contains('Selecione o endereço de entrega').should('be.visible')
        cy.get('[data-cy=addressSelectCard-911243]').click()
        cy.get('[data-cy=confirmAddressChange] > .MuiButton-label').click();
    }
    new_address(){
        cy.get('[data-cy=changeAddressButton] > .MuiButton-label').click();
        cy.get('[data-cy=addAddressButton] > .MuiButton-label').click()
        cy.get('[data-cy=addressFormNickname]').type('Casa');
        cy.get('[data-cy=addressFormRecipient]').type('Casa nova');
        cy.get('[data-cy=addressFormPostalCode]').type('33333333');
        cy.get('[data-cy=addressFormState]').type('Rio');
        cy.get('[data-cy=addressFormCity]').type('Paraty');
        cy.get('[data-cy=addressFormNeighborhood]').type('Bairro paraty');
        cy.get('[data-cy=addressFormStreet]').type('Rua');
        cy.get('[data-cy=addressFormNumber]').type('879');
        cy.get('[data-cy=addressFormSave]').click(); 
        cy.get('.MuiSvgIcon-root').click();
    }

   
    
}
export default new checkout();