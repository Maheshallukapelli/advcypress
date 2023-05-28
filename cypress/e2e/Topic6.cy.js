
//*****file download example using file download plugin */


//*************************************************************************************************

/*
    The following configuration is required to run the following testcase:
    1. install ==> npm install --save-dev cypress-downloadfile
                    npm install --save-dev @types/node
                  npm install --save-dev @cypress/xpath
                  
    2. Update the following file in tsconfig.json
        ==>     "types": ["cypress", "cypress-downloadfile","node", "@cypress/xpath"],
        
        
        
    3. Add the following line towards end of commands.ts
        ==> require('cypress-downloadfile/lib/downloadFileCommand')
            require('@cypress/xpath')
        
        
        
    4. Add the following code in cypress.config.ts & restart IDE

        import { defineConfig } from "cypress";
        import { downloadFile } from "cypress-downloadfile/lib/addPlugin";

        export default defineConfig({
          e2e: {
            setupNodeEvents(on, config) {
              // implement node event listeners here
              on('task', {downloadFile})
            },
          },
        });

    5.declare module 'cypress-downloadfile/lib/addPlugin'; add this line to Support-->index.d.ts


*/


describe('Topic06_Suite', () => {
  it('Topic06_TestCase', () => {
    cy.visit('https://chromedriver.storage.googleapis.com/index.html?path=111.0.5563.19/')

    //------ Browser Window level validation using Implicit assertion
    cy.title().should("contain",'')


    //------- Page Content Validation using Implicit assertion
    cy.contains("Index of /111.0.5563.19/")
    
    cy.xpath("/html/body/table/tbody/tr[7]/td[2]/a").then(linkobj=>{
      
      let baseurl="https://chromedriver.storage.googleapis.com"

      let fileurl=baseurl + linkobj.attr("href")

      cy.downloadFile(fileurl, "cypress/downloads", "file1.zip")
    


    })
   
    

  })
})



