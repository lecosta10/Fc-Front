/// <reference types="cypress"/>
class Cart{
    Values(){
        cy.contains('Por:').should('be.visible')
        cy.contains('R$').should('be.visible')
        cy.get('[data-cy=cartTotal]').should('be.visible')
        cy.get('[data-cy=cartSubtotalInstallment]').should('be.visible')
    }
    freight(){
        //cy.get('.MuiInputBase-input').type('07073187')
        cy.get('[data-cy=freightValue]').should('be.visible')
    }
    asserts(){
        cy.contains('Vendido por').should('be.visible')
        cy.get('img').should('be.visible')
        cy.get('[data-cy=productName]').should('be.visible')
        cy.get('[data-cy=productValue]').should('be.visible')
        cy.get('[data-cy=productAmount]').should('be.visible')
        cy.get('[data-cy=freightExpectation]').should('be.visible')
        cy.get('[data-cy=freightValue]').should('be.visible')
        cy.get('[data-cy=cartSubtotal]').should('be.visible')
        cy.get('[data-cy=cartTotal]').should('be.visible')
        cy.get('[data-cy=barTitle]').should('be.visible')
    }
    add_product(){
        cy.visit('/produtos/e021895a-9f37-4be1-b5ef-41045e689722')
        cy.get('[data-cy=ppFabAction]').click();
    }
    remove(){
        cy.get('[data-cy=removeProduct]').click();
    }
}
export default new Cart();