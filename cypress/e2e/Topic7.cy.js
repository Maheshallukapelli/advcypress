
/* Switching to Frames */

describe('Topic07_Suite', () => {
  it('Topic07_TestCase', () => {
    cy.visit('https://jqueryui.com/spinner/')
    cy.title().should('contain',"Spinner")
    cy.contains("Draggable")


    cy.get("iframe.demo-frame").its("0.contentDocument.body").then(childPage=>{
      cy.wrap(childPage).find(".ui-spinner-up").click()
      cy.wrap(childPage).find("input#spinner").then(txtSpinner =>{
          expect(txtSpinner.attr("aria-valuenow")).to.be.equal("1")
      })
    })

  })
})


