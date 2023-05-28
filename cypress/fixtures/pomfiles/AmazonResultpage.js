

class AmazonResultPage {
    
    logSearchCount(){
        cy.get("#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span:nth-child(1)").then(count=>{
            let txt = count.text()
            cy.log("Search Count = " + txt)
          })
    }
    }

export default AmazonResultPage
    
    
    