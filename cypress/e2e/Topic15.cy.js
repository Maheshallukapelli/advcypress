  
/* Intercepting HTTP request sent by Browser */

/*
     Using Intercept to read request and response of APIs
*/

// ---- to ignore type checking in typescrip
//@ts-nocheck
describe('Topic15_TestSuite', () => {
  it('Topic15_TestCase', () => {
      //cy.intercept("/af/feedback-link*").as("matchedAPI")
      cy.intercept("GET", "*showads*").as("matchedAPI_2")
      cy.intercept("POST", "*/events/com.amazon*").as("matchedAPI")
      cy.intercept("GET", "*prefix=Cypr*").as("SuggestionAPI")
      
      cy.visit('https://www.amazon.in/')

      cy.wait("@matchedAPI_2", { timeout: 10000 }).then(intercept => {
          //let statuscode
          // statuscode = intercept.response?.statusCode
          cy.log(intercept.response?.statusCode)
          expect(intercept.response?.statusCode).to.be.equal(200)
          cy.log(intercept.request.url)
          cy.log(intercept.response?.body)
          cy.log(intercept.state)
          cy.log(intercept.responseWaited)
          cy.log(intercept.routeId)
          cy.log(intercept.id)
      })

      cy.wait("@matchedAPI", { timeout: 10000 }).then(intercept => {
          cy.log(intercept.response?.statusCode)
          cy.log(intercept.request.url)
          cy.log(intercept.response?.body)
          cy.log(intercept.state)
          cy.log(intercept.responseWaited)
          cy.log(intercept.routeId)
          cy.log(intercept.id)
      })
      


      cy.wait(2000)


      cy.title().should("contain","Amazon")

      cy.get("#searchDropdownBox").select("Books",{force:true})
      cy.get("#twotabsearchtextbox").type("Cypress")

      cy.wait("@SuggestionAPI", { timeout: 10000 }).then(intercept => {
          cy.log(intercept.response?.statusCode)
          cy.log(intercept.request.url)
          cy.log(intercept.response?.body.prefix)
          cy.log(intercept.response?.body.suggestions[0].suggType)
          cy.log(intercept.response?.body.suggestions[0].value)
          cy.log(intercept.state)
          cy.log(intercept.responseWaited)
          cy.log(intercept.routeId)
          cy.log(intercept.id)
      })

      cy.get(".nav-search-submit.nav-sprite").click()



  })
})






