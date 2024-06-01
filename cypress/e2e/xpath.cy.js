describe('My Third Test', () => {
    it('xpath', () => {
        cy.visit("https://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type("nothing phone 2a")
        cy.get("#nav-search-submit-button").click()
       cy.get("//span[text()='27,675']").should("eq","27,675")
      })
})