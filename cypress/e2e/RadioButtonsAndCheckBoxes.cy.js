
describe('Radio and Check Boxes',() =>{
    it('Radio Buttons',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        cy.get("#male").should('be.visible')//verifying 
        cy.get("#female").should('be.visible')

        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
//checkboxes
        cy.get("input[type='checkbox']").should('be.visible')
       // cy.get(".Automation").check().should('be.checked')//selecting single check box
       //cy.get("input[type='checkbox']").check().should('be.checked')
       cy.get("input[type='checkbox']").last().check().should('be.checked')
       cy.get("input[type='checkbox']").first().uncheck().should('not.be.checked')
    })

})