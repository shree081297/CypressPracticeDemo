describe('My First Test', () => {
    it('Verifying title-Positive Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
    })
    it('Verifying title-Negative Test',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","Srikanth")
    })
   
  })