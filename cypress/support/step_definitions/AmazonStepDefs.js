
import { Given,When,Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"


Before(()=>{
    cy.log("Before Hook....")
})

After(()=>{
    cy.log("After Hook....")
})

Given("User is on Amazon home page",()=>{
    cy.visit("https://amazon.in")
})

When("User selects category as {string}",(category)=>{
    cy.get("#searchDropdownBox").select(category,{force:true})
})

When("user types product as {string}",(product)=>{
    cy.get("#twotabsearchtextbox").type(product)
})

When("click on search button",()=>{
    cy.get("#nav-search-submit-button").click({force:true})
    cy.wait(2000)
})

Then("Title should contain {string}",(keyword)=>{
    cy.title().should("contain",keyword)
})

Then("Search result should be displayed",()=>{
    cy.get("#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col-18-of-24.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span:nth-child(1)").then(resultobj=>{

        let count=resultobj.text()
        cy.log("Search Count =" +count)
        })
})




