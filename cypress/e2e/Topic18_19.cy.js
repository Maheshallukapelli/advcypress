

/*
DB Testing:

For configuration refer: https://www.npmjs.com/package/cypress-multiple-db-sql-server

1. Install: npm install --save-dev cypress-multiple-db-sql-server
2. Add the follwing command to support/commands.ts
              import { sqlQueryCommand } from 'cypress-multiple-db-sql-server';
              
              sqlQueryCommand();
3. Add the follwing in cypress.config.ts

import { sqlQueryPlugin } from 'cypress-multiple-db-sql-server';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {...sqlQueryPlugin});
      return config;
    }
  }
});


4. Add the following db configuration in cypress.config.ts

// cypress.config.ts

export default defineConfig({
  ...
  env: {
      db: {
        authentication: {
          type: 'default',
          options: {
            userName: 'sa',
            password: 'sqladmin@123'
          }
        },
        server: '172.16.0.56',
        options: {
          database: '',
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
          trustServerCertificate: true,
          port: 1433, // Default Port
        }
      }
    }

    5. Restart TS server or visual code IDE

    6. In TestCase add:
    cy.sqlServerQuery('db_name', 'select * from tools').then(res => {})


*/

import { appendFile } from "fs"


//var company:string
describe('Topic18_19_TestSuite', () => {

    it('Topic18_19_TestCase_SelectStatement', () => {
      //@ts-ignore
      cy.sqlServerQuery('Testing', 'select * from Testing.dbo.tools').then(res => {
        cy.log(res)
        cy.writeFile("cypress/fixtures/records.txt",res,{ flag: 'a+' })
        cy.log("# of records = " + res.length)
        let columns
        for(let i=0; i<res.length; i++)
        {
          
          columns=res[i]
          cy.log(res[i])
          if(columns[1]=="RFT"){
           expect(columns[2]).to.be.equal("IBM Rational")
           //company=columns[2]
  
          }
        }
        
  
      })
      //cy.log(company)  //it doesn't display any data
    })
  
  })
  
  
  



