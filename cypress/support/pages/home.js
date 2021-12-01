/// <reference types="cypress"/>
class home {

    View_home(){
        //Menu
        cy.get('.MuiIconButton-edgeStart > .MuiIconButton-label > .MuiSvgIcon-root').should('be.visible')
        //busca
        cy.get(':nth-child(4) > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.get('.MuiInputBase-root').should('be.visible')
        cy.get(':nth-child(4) > .MuiIconButton-label > .MuiSvgIcon-root').click()
        //carrinho
        cy.get('#cart-button > .MuiIconButton-label > .MuiSvgIcon-root').should('be.visible')
    }
    carousel(){
        cy.contains('Destaques').should('be.visible')
       // cy.contains('Departamentos').should('be.visible')
        cy.contains('Marcas').should('be.visible')
        cy.contains('Ofertas').should('be.visible')
        cy.contains('Novidades').should('be.visible')
        cy.contains('Histórico').should('be.visible')
    }
}
export default new home();