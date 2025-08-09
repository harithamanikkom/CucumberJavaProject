Feature: feature to test google search functionality

  Scenario: validate Google search is working
  
    Given browser is open
    And user is on Google search page
    When user enters a text in search box
    And user hits enter
    Then user is navigated to search results