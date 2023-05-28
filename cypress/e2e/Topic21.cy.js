
/* *****************************   
Rerunning testcase n number of times in addition to first execution if it fails                             
*/
 

describe('Topic21_Suite', () => {
    let i = 0
    //Following testcase will run 1 + 5 times if 1st run fails
    // 1-Default Run
    // 2-Additional runs 5 times if testcase fails 
    it('Topic21-GET API',{retries:5} , () => {
        i = i + 1
        cy.request('GET','https://reqres.in/api/users/2').then(response=>{
            cy.log(response.body.data.id)
            expect(response.status).to.be.equal(196 + i)
            expect(response.body.data.first_name).to.be.equal('Janet')

        })
    })



    it('Topic21-Delete API', () => {
      
        cy.request('DELETE','https://reqres.in/api/users/2').then(response=>{
            
            expect(response.status).to.be.equal(204)
            
        })
    })
  })
  
  