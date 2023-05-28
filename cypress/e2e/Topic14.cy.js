
/*
Viewport simulation i.e. responsiveness of webpage testing
i.e. checking the visibility / invisibility of elements based on browser width and height

*/
describe('Topic14_Suite', () => {
    it('Topic14_Testcase', () => {
      cy.clearAllCookies()
      cy.visit('https://www.bing.com')
      cy.get("#sb_form_q").type("cypress{downarrow}", { delay: 400 })
  
      cy.get("div>#sa_ul>li").should("have.length", 10).as("dynamiclist")
  
      //******** Reading all dynamic list items using each method */
      cy.get("@dynamiclist").each(($item, $index, $allItems) => {
        cy.log(($index + 1) + " = " + $item.text())
      })
  
      //******** Reading the top most or first element only */
      cy.get("@dynamiclist").first().then(item => {
        cy.log("First Item = " + item.text())
      })
  
      //******** Reading the last  element only */
      cy.get("@dynamiclist").last().then(item => {
        cy.log("Last Item = " + item.text())
      })
  
      //******** Reading 'i'th element only */
      cy.get("@dynamiclist").eq(4).then(item => {
        cy.log("5th Item = " + item.text())
      })
  
  
      //******** Reading 'i+1'th element inside them */
      cy.get("@dynamiclist").eq(4).then(item => {
        cy.wrap(item).next().then(nextItem => {
          cy.log("5th+1 Item = " + nextItem.text())
        })
      })
  
      //******** Reading 'i-1'th element inside them */
      cy.get("@dynamiclist").eq(4).then(item => {
        cy.wrap(item).prev().then(prevItem => {
          cy.log("5th-1 Item = " + prevItem.text())
        })
      })
  
  
      //******** Reading parent of ith element inside them */
      cy.get("@dynamiclist").eq(4).then(item => {
        cy.wrap(item).parent().then(parent => {
          cy.log("parent of 5th Item = " + parent.text())
        })
      })
  
      //****************** Reading the all LI items in the page using second get */    
      cy.get("div>#sa_ul").get("li").then(allItems => {
            cy.log("All Li Tags with get method = " + allItems.length)
      })
  
      //****************** Reading the all LI items within UL using find */    
      cy.get("div>#sa_ul").find("li").then(allItems => {
        cy.log("All Li Tags  with find method = " + allItems.length)
      })
  
     //****************** Reading the all LI items within UL using children */    
     cy.get("div>#sa_ul").children("li").then(allItems => {
      cy.log("All Li Tags with children method  = " + allItems.length)
    })
  
  
    })
  })
  