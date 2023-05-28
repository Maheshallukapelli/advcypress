
# Amazon search functionality feature file

Feature: Amazon Test Suite
    This feature file will validate title of home page and search functionality

    Background: setupblock
        Given User is on Amazon home page


    @sanity
    Scenario: Title Validation
        It will validate the title of home page

        Then Title should contain "Amazon"


    @smoke
    Scenario: Search Validation
        It will validate the search functionality

        When User selects category as "Books"
        And user types product as "cypress"
        And click on search button
        Then Search result should be displayed


    @ddt
    Scenario Outline: Search ddt Validation
        It will validate the search functionality for each set of values defined in examples block

        When User selects category as "<category>"
        And user types product as "<product>"
        And click on search button
        Then Search result should be displayed

        Examples:
            | category    | product    |
            | Software    | Windows 11 |
            | Watches     | Titan      |
            | Electronics | Mobiles    |
