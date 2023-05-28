
// ************ App Actions ********************* 
/*

   Configuration Steps:
   ---------------------------
   1. Create a folder by name "AppActionsApp"
   2. Download the following zip file and extract it to above folder
       ==> https://github.com/bahmutov/test-todomvc-using-app-actions/archive/refs/heads/master.zip
   3. Open the command prompt and navigate to extracted folder where package.json is existing
   4. Run ==> npm install
       ==> this will install all the required packages by this project
   5. To start react app on local host run ==> npm start
       ==> This will start the sample react app with url:   http://localhost:8888/#/
   6. Open the browser and navigate to this app url
   7. Open developer tools and click on console tab and run the following command:
         ==> window.app
         ==> This will show internal actions defined
*/

describe('Topic_10_11_TestSuite', function () {
  beforeEach(function () {
      cy.visit('http://localhost:8888')
  })

  xit('Using_normal_UI_InteractionLevel', () => {
      cy.get('input[class="new-todo"]').type("To do item-1{Enter}")
      cy.get('.todo-count').contains('1 item left')
      cy.get('input[class="new-todo"]').type("To do item-2{Enter}")
      cy.get('.todo-count').contains('2 items left')
      cy.get('input[class="new-todo"]').type("To do item-3{Enter}")
      cy.get('.todo-count').contains('3 items left')

      cy.get('.toggle')
          .should('have.length', 3)  // no. of checkboxes
          .each(($chkbox, $index, $allChkbox)=>{
              $chkbox.trigger('click')
          })
      cy.get('.todo-count').contains('0 items left')

      cy.get('.toggle')
          .should('have.length', 3)  // no. of checkboxes
          .each(($chkbox, $index, $allChkbox)=>{
              $chkbox.trigger('click')
          })
      cy.get('.todo-count').contains('3 items left')

      cy.get('.toggle')
      .should('have.length', 3)  // no. of checkboxes
      .each(($chkbox, $index, $allChkbox)=>{
          $chkbox.trigger('click')        // using JQuery HtmlElement trigger method as click method got depricated
      })
      cy.get('.todo-count').contains('0 items left')

      cy.get('.clear-completed').click()
      cy.get('.todo-count').should("not.exist")

  })

  it('Using_AppActions_NoUIInteraction',() => {
      cy.window().its('model').should('be.an','object').invoke('addTodo','To do item-1')
      cy.get('.todo-count').contains('1 item left')
      cy.window().its('model').should('be.an','object').invoke('addTodo','To do item-2')
      cy.get('.todo-count').contains('2 items left')
      cy.window().its('model').should('be.an','object').invoke('addTodo','To do item-3')
      cy.get('.todo-count').contains('3 items left')
      
      cy.window().its('model').invoke('toggleAll','checked')
      cy.get('.todo-count').contains('0 items left')

      cy.window().its('model').invoke('toggleAll','')     //  unchecking all (as per html, they were removing class value)
      cy.get('.todo-count').contains('3 items left')

      cy.window().its('model').invoke('toggleAll','checked')
      cy.get('.todo-count').contains('0 items left')

      cy.window().its('model').invoke('clearCompleted')
      cy.get('.todo-count').should("not.exist")
      })


})

