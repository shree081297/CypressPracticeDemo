
describe('example',()=>{
    it('example',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include','orangehrm')
        .and('contain','orange')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('include','OrangeHRM')
        .and('contain','Orange')
        .and('eq',"OrangeHRM")

       cy.get('.orangehrm-login-branding > img').should('be.visible')

       cy.get("[name='username']").type("Admin")
       cy.get("[name='username']").should('have.value','Admin')
    })

})