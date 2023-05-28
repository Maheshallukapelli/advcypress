/*
Viewport simulation i.e. responsiveness of webpage testing
i.e. checking the visibility / invisibility of elements based on browser width and height

*/

describe('Topic01_Suite',() => {
    it('Topic01_Testcase',() =>{
        
        cy.visit('https://www.icicibank.com')
        cy.get("#new-header > div > div:nth-child(1) > div > div > nav.left-side-menu.menu-level-1-child > ul").should("be.visible")
        cy.wait(3000)
       // cy.viewport(500,800)
       cy.viewport("iphone-x")
       
        cy.wait(3000)
        cy.get("#new-header > div > div:nth-child(1) > div > div > nav.left-side-menu.menu-level-1-child > ul").should("not.be.visible")
        cy.wait(3000)
        cy.viewport(1000,660)
        cy.wait(3000)
        cy.get("#new-header > div > div:nth-child(1) > div > div > nav.left-side-menu.menu-level-1-child > ul").should("be.visible")
  
    })
  })
  