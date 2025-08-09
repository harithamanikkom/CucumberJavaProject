Feature: Test Login Functionality

  Scenario Outline: check login is sucessfull with valid credentials
    Given browser is open
    And user is on login page
    When user enters <username> and <password>
    And user clicks on login button
    Then user is navigated to home page

    Examples: 
      | username | password |
      | Admin    | admin123 |
      | asdd|ppp|
