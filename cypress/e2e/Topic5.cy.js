
//******************************   downloading file using direct click method                                */


describe('Topic05_Suite', () => {
  it('Topic05_TestCase', () => {
    cy.visit('https://chromedriver.storage.googleapis.com/index.html?path=111.0.5563.19/')

    //---- This url page doesn't have title defined within html source. Hence, expecting ''
    cy.title().should("contain",'')


    //------- Page Content Validation using Implicit assertion
    cy.contains("Index of /111.0.5563.19/")
    
    cy.contains("chromedriver_win32.zip").click()

    cy.wait(5000)
   
    

  })
})




