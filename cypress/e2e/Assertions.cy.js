describe('assertions',()=>{
    it('implicit assersion',()=>{
      /*  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrm')
        cy.url().should('contains','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('eq','orangehrmlive.com')*/

      /*  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include','orangehrm')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','orangehrm')*/
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrm')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('not.contains','Orange')

        cy.title().should('eq','OrangeHRM')
        .and('contain','Orange')
        .and('include','HRM')

       // cy.get('.orangehrm-login-branding > img').should('be.visible')
        //.and('exist')


       // cy.xpath("//a").should('have.lenght','13')

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should('have.value',"Admin")

        cy.get("input[name='password']").type("admin123")
        cy.get("input[name='password']").should('have.value','admin123')

    })

    it('Explicit assersion',()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       cy.get("[name='username']").type("Admin")
       cy.get("[name='password']").type("admin123")
       cy.get("[type='submit']").click()

       let expName="Vishv user";
       cy.get(".oxd-userdropdown-tab").then((x)=>{
         let actName=x.text()
        // expect(actName).to.equal(expName)
        assert.equal(actName, expName)
       })
      

    })
})