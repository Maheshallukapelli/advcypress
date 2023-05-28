
/* Data driven testing

This test case required fixtures/amazondata.csv with sample categeory and sample keyword for searching*/

import AmazonHomePage from "../fixtures/pomfiles/AmazonHomepage"
import AmazonResultPage from "../fixtures/pomfiles/AmazonResultpage"


describe('Topic17_Suite', () => {
  it('Topic17_TestCase', () => {
    cy.visit('https://www.amazon.in')
    cy.title().should('contain',"Amazon")
    cy.contains("Amazon miniTV")

    let homepage = new AmazonHomePage()
    let resultpage = new AmazonResultPage()

    cy.readFile('cypress/fixtures/Amazondata.csv').then(data=>{
      let dataRows = data.split('\n')
      let category,product
      dataRows.forEach((row) =>{
          category = row.split(',')[0].trim()
          product = row.split(',')[1].trim()

          homepage.getCategoryListBox().select(category, {force:true})
          homepage.getSearchEditBox().type(product)
          homepage.getSearchButton().click({force:true})

          resultpage.logSearchCount()
          cy.go('back')
      })
    })


    

  })
})




