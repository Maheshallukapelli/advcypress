
class AmazonHomePage {
    getCategoryListBox(){
        return cy.get("#searchDropdownBox")
    }

    getSearchEditBox(){
        return cy.get("#twotabsearchtextbox")
    }

    getSearchButton(){
        return cy.get("#nav-search-submit-button")
    }
}
//make this class outside callable
export default AmazonHomePage

