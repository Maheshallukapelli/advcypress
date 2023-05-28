
/* *****************************   
    Performamce Testing of Web Page @ client pc       
     
    Url:  https://mfrachet.github.io/cypress-audit/



    Configuration Steps:
    ---------------------------------------
    1. Install the following packages
            ==> npm install --save-dev @cypress-audit/lighthouse

    2. Add the following to cypress.config.js/ts

        const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

        setupNodeEvents(on, config) {
            on("before:browser:launch", (browser = {}, launchOptions) => {
                prepareAudit(launchOptions);
                });

            on("task", {
                lighthouse: lighthouse(),
            });
        },

    3. Add the following to support/command.js|ts
            ==>  import "@cypress-audit/lighthouse/commands";
           

*/



var tasktimeout

describe('Topic22_TestSuite', () => {

  beforeEach(() => {

    tasktimeout = Cypress.config("taskTimeout")
    cy.log("TaskTimeout Original - " + tasktimeout)

    Cypress.config("taskTimeout", 180000)
    cy.log("TaskTimeout Modified - " + Cypress.config("taskTimeout"))
  })

  afterEach(() => {
    Cypress.config("taskTimeout", tasktimeout)
    cy.log("TaskTimeout Resetted to Original - " + Cypress.config("taskTimeout"))
  })


  //expected metric values

  const thresholds = {
    performance: 50,
    accessibility: 80,
    'first-contentful-paint': 5000,
    'largest-contentful-paint': 10000,
    interactive: 6000,
    seo: 50,
    pwa: 0,
  };
  //we can change formfactor based on PT testing 

  const lighthouseConfig = {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
  };



it('BlazeDemo_ClientSide_UI_PerformanceTesting', () => {
  cy.visit('https://amazon.in')
 // Cypress.config()
  cy.lighthouse(thresholds, lighthouseConfig)
})

})





