
describe('alert',()=>{
    it.skip('simple alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
           expect(t).to.contains("I am a JS Alert");
       })
        cy.get("#result").should('have.text',"You successfully clicked an alert")

})
it.skip('conformationalert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("I am a JS Confirm");
    })
    cy.on('window:confirm',()=>false);
    cy.get("#result").should('have.text','You clicked: Ok')
})
it.only('conformation alert by cancel',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm',(t)=>{
        except(t).to.contains("I am a JS Confirm");
    })
    cy.get("#result").should('have.text',"You clicked: Cancel")
})
it.only('prompt alert',()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window(),then((win) =>{
        cy.stub(win,'prompt').return('Shree');
    })
    cy.get("button[onclick='jsPrompt()']").click()
    cy.get("#result").should('have.text',"You entered: shree")

})
})