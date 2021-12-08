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
        cy.visit('/produtos/97157135-70b2-4c43-a52e-e7632a18fb99')
        cy.get('[data-cy=ppFabAction]').click();
    }
    remove(){
        cy.get('[data-cy=removeProduct]').click();
    }
}
export default new Cart();