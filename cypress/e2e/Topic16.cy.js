

/*
  Using localStorage to store data

*/

describe('Topic16_TestSuite', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/storage')
  })

  //************************************************************************************************* */
  it('Topic16_TestCase', () => {

    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).to.eq('red')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // clearLocalStorage() yields the localStorage object
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.be.null
      expect(ls.getItem('prop3')).to.be.null
    })

    cy.get('.ls-btn').click().should(() => {

      expect(localStorage.getItem('prop1')).to.eq('red')
      localStorage.setItem('prop1', 'pink')
      expect(localStorage.getItem('prop1')).to.eq('pink')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')

      //----------- Creating new property from Cypress & storing the value
      localStorage.setItem('prop44_local', 'Yellow')
      expect(localStorage.getItem('prop44_local')).to.eq('Yellow')

      sessionStorage.setItem('prop44_session', 'RGB')
      expect(sessionStorage.getItem('prop44_session')).to.eq('RGB')
    })

    // Clear key matching string in Local Storage
    cy.clearLocalStorage('prop1').should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.eq('blue')
      expect(ls.getItem('prop3')).to.eq('magenta')
    })

    cy.get('.ls-btn').click().should(() => {
      expect(localStorage.getItem('prop1')).to.eq('red')
      expect(localStorage.getItem('prop2')).to.eq('blue')
      expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // Clear keys matching regex in Local Storage                                 
    cy.clearLocalStorage(/prop1|2/).should((ls) => {
      expect(ls.getItem('prop1')).to.be.null
      expect(ls.getItem('prop2')).to.be.null
      expect(ls.getItem('prop3')).to.eq('magenta')
    })
  })
})



//********************************** */


it('Topic16_TestCase_2', () => {
  expect(localStorage.getItem('prop44_local')).to.null
  expect(localStorage.getItem('prop2_local')).to.null
})


