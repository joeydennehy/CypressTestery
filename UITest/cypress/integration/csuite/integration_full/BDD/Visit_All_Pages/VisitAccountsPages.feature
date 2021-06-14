Feature: Visit Accounts Pages

  Scenario: Visit all account pages

    Given I am logged in as an administrator
    Then I visit the home page
    When I visits Accounts
    Then the page should say Accounts
    Then I visit the home page
    When I visit Add task
    Then the page should say Create Task
    Then I visit the home page
    When I visit List all Accounts page
    Then the page should say List all Accounts
    Then I visit the home page
    When I visit Transfer Money
    Then the page should say Transfer Money Between Accounts
    Then I visit the home page
    When I visit Trial balance
    Then the page should say Set Balance Sheet Date
    Then I visit the home page
    When I visit Create account
    Then the page should say Create Account
    Then I visit the home page
    When I visit Defaults
    Then the page should say System Default Accounts
    Then I visit the home page
    When I visit Edit types
    Then the page should say Edit Account Types
    Then I visit the home page
    When I visit Balance Swap
    Then the page should say Cash Balancing Fund Assets
    Then I visit the home page
    When I visit Statement Accounts
    Then the page should say Statement Accounts
    Then I visit the home page
    When I visit Financial Views
    Then the page should say Financial Views
    Then I visit the home page
    When I visit Investment Strategies
    Then the page should say Investment Strategies
    Then I visit the home page
    When I visit Functional Expenses
    Then the page should say Functional Expenses
    Then I visit the home page
    When I visit Permissions
    Then the page should say Manage Access