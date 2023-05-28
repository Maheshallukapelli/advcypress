import { Given,When,Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"
import { delay } from "bluebird"

// Cucumber Hooks Before and After.

Before(()=>{

cy.log("Before Hook....")

})

After(()=>{

 cy.log("After Hook....")

})

Given("User is on Bing home page",()=>{

 cy.visit("https://www.bing.com/")

 cy.wait(2000)

})

When("user types Search value as {string}",(cypress)=>{

 cy.get("#sb_form_q").type("cypress",{delay:900})

 cy.wait(2000)

})

When("Clicks on Search Icon", ()=>{

  cy.get("#search_icon > svg").click()
  cy.wait(2000)
    })

Then("Cypress-related searches will be displayed here.",()=>{
   
 })
