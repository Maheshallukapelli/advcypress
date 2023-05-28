// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*
Viewport simulation i.e. responsiveness of webpage testing
i.e. checking the visibility / invisibility of elements based on browser width and height

*/
  
  
  
  
  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  
  
  require('cypress-downloadfile/lib/downloadFileCommand')
            require('@cypress/xpath')
  

            
Cypress.Commands.add('swipeLeft', () => {
    cy.get('.swiper-slide-active')
      .trigger('mousedown', {position: "right"})
      .trigger('mousemove', {clientX: 100, clientY: 275})
      .trigger('mouseup', {force: true})
  })
  
  import { sqlQueryCommand } from 'cypress-multiple-db-sql-server';
              
  sqlQueryCommand();
  import "@cypress-audit/lighthouse/commands";