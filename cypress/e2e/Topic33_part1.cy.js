
/*
    Mochawesome Reporter:

    https://www.npmjs.com/package/cypress-mochawesome-reporter

    Configuration Steps:
    -------------------------------------------
    1. Install ==>  npm i --save-dev cypress-mochawesome-reporter
                    

    2. Add the following to cypress.config.js|ts

            const { defineConfig } = require('cypress');

            module.exports = defineConfig({
            reporter: 'cypress-mochawesome-reporter',
              reporterOptions: {
                    charts: true,
                    reportPageTitle: 'custom-title',
                    embeddedScreenshots: true,
                    inlineAssets: true,
                    saveAllAttempts: false,
                },

            e2e: {
                setupNodeEvents(on, config) {
                require('cypress-mochawesome-reporter/plugin')(on);
                },
            },
            });

    3. Add the following to cypress/support/e2e.js|ts
            import 'cypress-mochawesome-reporter/register';

    4. Run from CLI any spec file to generate html reports.
            Output folder ==> cypress/reports

            

*/


