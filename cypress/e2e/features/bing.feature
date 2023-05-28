Feature: Bing Test Suite

search functionality of Bing Page

Background: setupblock

 Given User is on Bing home page

@sanity
 Scenario Outline: Search Validation

 When user types Search value as "Cypress"

And Clicks on Search Icon

Then Cypress-related searches will be displayed here.