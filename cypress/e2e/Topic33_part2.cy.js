
/*
    To enable both junit & mochawesome reports:

    https://www.npmjs.com/package/cypress-multi-reporters

    Configuration Steps:
    -------------------------------------------
    1. Install ==>  npm install cypress-multi-reporters --save-dev

    2. Add the following to cypress.config.js|ts

            const { defineConfig } = require('cypress');

            module.exports = defineConfig({
            reporterEnabled: "mochawesome, mocha-junit-reporter",

              mochawesomeReporterOptions: {
                    charts: true,
                    reportPageTitle: 'custom-title',
                    embeddedScreenshots: true,
                    inlineAssets: true,
                    saveAllAttempts: false,
                },

                mochaJunitReporterReporterOptions: {
                    mochafile: 'cypress/reports/junitreport-[hash].xml',
                    toConsole: true
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


