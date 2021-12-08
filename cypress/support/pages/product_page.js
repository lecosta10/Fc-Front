/// <reference types="cypress"/>
class product_page {
    View_productpage(){
      cy.contains('Vendido e entregue por').should('be.visible')
      cy.get('.swiper-pagination-bullet-active').should('be.visible')
      cy.get('[data-cy=ppProductPicture0]').should('be.visible')
      cy.contains('Por: R$').should('be.visible')
      cy.get('[data-cy=ppProductPrice] > .MuiTypography-body1').should('be.visible')
      cy.get('[data-cy=ppFreightTitle]').should('be.visible')
      cy.get(':nth-child(1) > [data-cy=ppCharacteristicsSubtitle]').should('be.visible')
    }
    product_detail(){
        cy.contains('Detalhes do produto').should('be.visible')
        cy.get('[data-cy=ppDetailsContent]').should('be.visible')
    }
    characteristics(){
        cy.get(':nth-child(1) > [data-cy=ppCharacteristicsSubtitle]').should('be.visible')
        cy.contains('Altura').should('be.visible')
        cy.contains('Largura').should('be.visible')
        cy.contains('Comprimento').should('be.visible')
        cy.contains('Peso').should('be.visible')
    }
    freight(){
        cy.get('[data-cy=ppFreightMode]').should('be.visible')
        cy.get('[data-cy=ppFreightRoot]').should('be.visible')
        cy.get('[data-cy=ppFreightInput] > .MuiInputBase-root > .MuiInputBase-input').should('be.visible')
    }
    purchase(){
        cy.get('[data-cy=ppFabAction]').click()
    }
}
export default new product_page();