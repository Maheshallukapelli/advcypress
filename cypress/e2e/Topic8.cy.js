

 /*
 Mobile page testing in desktop browser by passing agent header in visit method
  */

 describe('Topic08-Suite', () => 
{
  it('Topic08-TestCase_Method1', () => {
    cy.viewport("iphone-x")
    cy.visit('https://www.bing.com',{
      headers:{ 'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'}
  	})
    cy.viewport("iphone-x")
    cy.wait(5000)
    cy.visit('https://www.bing.com')  // Desktop page
    cy.wait(5000)
  })


// //----- Sometimes following method won't work
// it('Topic08-TestCase_Method2', () => {
//   cy.visit('https://www.youtube.com', {
//     onBeforeLoad: (win) => {
//       Object.defineProperty(win.navigator, 'userAgent', {
//         value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
//       });    
//      }
//    })
//  })

})

