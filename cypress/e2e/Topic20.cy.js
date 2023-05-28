
//******************************   Rest API Testing.                                */


describe('Topic20_Suite', () => {

  //************************** GET API *********************************************
  it('Topic20_TestCase-GET API', () => {

      cy.request('GET', 'https://reqres.in/api/users/2').then(response => {
          cy.log(response.body.data.id)
          expect(response.status).to.be.equal(200)
          expect(response.body.data.first_name).to.be.equal('Janet')

      })
  })
  //********************************************************************************


  //************************** POST API *********************************************
  it('Topic20_TestCase-POST_API_Method1', () => {
      let payloadData = '{"name": "Trainer","job": "leader"}'
      cy.request('POST', 'https://reqres.in/api/users', payloadData).then(response => {
          expect(response.status).to.be.equal(201)
          expect(response.body.name).not.exist
          expect(response.body.createdAt).contain('2023')

      })
  })

  it('Topic20_TestCase-POST_API_Method2', () => {

      let payloadData = '{"name": "Trainer","job": "leader"}'

      cy.request(
          {
              method: 'POST',
              url: 'https://reqres.in/api/users',
              body: payloadData,
              headers: { 'Content-Type': 'application/json' }
          }).then(response => {
              expect(response.status).to.be.equal(201)
              expect(response.body.name).equals('Trainer')
              expect(response.body.createdAt).contain('2023')
          })
  })
  //********************************************************************************


 //************************** PUT API *********************************************
  it('Topic20_TestCase-PUTAPI_Method1', () => {
      let payloadData = '{"name": "Trainer","job": "Manager"}'
      cy.request('PUT', 'https://reqres.in/api/users/2', payloadData).then(response => {

          expect(response.status).to.be.equal(200)
          expect(response.body.updatedAt).contain('2023')
          expect(response.body.name).not.exist

      })
  })

  it('Topic20_TestCase-PUT_API_Method2', () => {

      let payloadData = '{"name": "Trainer","job": "Manager"}'

      cy.request(
          {
              method: 'PUT',
              url: 'https://reqres.in/api/users/2',
              body: payloadData,
              headers: { 'Content-Type': 'application/json' }
          }).then(response => {
              expect(response.status).to.be.equal(200)
              expect(response.body.job).equals('Manager')
              expect(response.body.updatedAt).contain('2023')
          })
  })
  //********************************************************************************


  //************************** DELETE API *********************************************
  it('Topic20_TestCase-DELETE API', () => {

      cy.request('DELETE', 'https://reqres.in/api/users/2').then(response => {

          expect(response.status).to.be.equal(204)

      })
  })
  //********************************************************************************


  it('Topic20_TestCase-POST_API_UsingExternalPayloadDataFile', () => {

    cy.readFile("cypress/fixtures/payloaddata.json").then(data =>{

    cy.request(
        {
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: data,
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            expect(response.status).to.be.equal(201)
            expect(response.body.name).equals('Trainer')
            expect(response.body.createdAt).contain('2023')
        })
    })
})






})
