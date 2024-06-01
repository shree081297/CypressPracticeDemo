
describe('My Second Test', () => {
    it('CSS Selector', () => {
        cy.visit("https://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type("Iphone 15 pro max")
        cy.get("[type='submit']").click()
        cy.xpath("//span[text()='iPhone 15 Pro Max. Titanium'][1]").click()
      })
})