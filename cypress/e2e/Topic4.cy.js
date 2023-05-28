
//******************************   Uploading file using native method.                                */


describe('Topic04_Suite', () => {
  it('Topic04_TestCase', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

    //------ Browser Window level validation using Implicit assertion
    cy.title().should("contain","Upload")


    //------- Page Content Validation using Implicit assertion
    cy.contains("Sample File Upload Form")
    cy.get("input[name='upfile']").selectFile("cypress/fixtures/Amazondata.json")
    cy.contains("Press").click()
    cy.contains("You've uploaded a file")
    cy.contains('"titlekeyword":"Amazon"')
    

  })
})



