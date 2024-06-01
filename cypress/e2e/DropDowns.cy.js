describe('Dropdowns',()=>{
    it.skip('Selecting the dropdown',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("#testingDropdown").select("Manual Testing").should('have.value',"Manual")

    })
    it.skip('without selecting the dropdown',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("India").type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text',"India")
    })
    it.skip('Autosuggestion dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("[name='search']").type('Mancherial')
        cy.get(".suggestion-text").contains("Mancherial").click()
    })
    it('Dynamic Dropdowns',()=>{
        cy.visit("https://www.google.com/")
        cy.get("[aria-controls='Alh6id']").type("Mancherial")
        cy.wait(3000)
      //  cy.get("[class='wM6W7d']").should('have.lenght',13)

        cy.get("[class='wM6W7d']").each(($el, index, $list)=>{
            if($el.text()=="mancherial pincode"){
                cy.wrap($el).click()
            }
        })
        cy.get("[class='gLFyf']").should("have.value","mancherial pincode")
})


})   