/// <reference types="cypress"/>
class payment {
    View_payment(){
        cy.get('[data-cy=barTitle]').should('be.visible')
        cy.get('[data-cy=paymentMethodTitle]').should('be.visible')
        cy.get('[data-cy=paymentMethodCard]').should('be.visible')
        cy.get('[data-cy=c6CardOptionTitle]').should('be.visible')
        cy.get('[data-cy=c6CardRoot]').should('be.visible')
        cy.get('#card-installment-option').should('be.visible')
    }
    form_of_payment(){
        cy.get('#card-installment-option').click();
        cy.get('[data-cy=c6CardOptionPayment2]').click();
    }

}
    
export default new payment();



