Feature: Visit Accounting Pages

  Scenario: Visits all accounting pages

    Given I am logged in as an administrator
    When I visit Accounts
    Then the page title should say Accounts
    Then I visit the home page
    When I visit Accounts payable
    Then the page title should say Accounts Payable
    Then I visit the home page
    When I visit Accounts Receivable
    Then the page title should say Accounts Receivable
    Then I visit the home page
    When I visit Admin Fee
    Then the page title should say Admin Fee
    Then I visit the home page
    When I visit Bank Reconcile
    Then the page title should say Bank Reconcile
    Then I visit the home page
    When I visit Budget
    Then the page title should say Budget
    Then I visit the home page
    When I visit Checks
    Then The page title should say Checks
    Then I visit the home page
    When I visit Customers
    Then the page title should shay Customers
    Then I visit the home page
    When I visits Deposits
    Then the page title should say Deposits
    Then I visit the home page
    When I visit Distributions
    Then the page title should say Distributions
    Then I visit the home page
    When I visit Employees
    Then the page title should say Employees
    Then I visit the home page
    When I visit Funds
    Then the page title should say Funds
    Then I visit the home page
    When I visit the General Ledger
    Then the page title should say General Ledger
    Then I visit the home page
    When I visits Invoices
    Then the page title should say Invoice
    Then I visit the home page
    When I visit Payment Methods
    Then the page title should say Payment Methods
    Then I visit the home page
    When I visit Payment Processors
    Then the page title should say Payment Processors
    Then I visit the home page
    When I visit Payments
    Then the page title should say Payments
    Then I visit the home page
    When I visit Public Securities
    Then the page title should say Public Securities
    Then I visit the home page
    When I visit Revenue Share
    Then the page title should say Revenue Share
    Then I visit the home page
    When I visit Till
    Then the page title should say Till
    Then I visit the home page
    When I visit Vendors
    Then the page title should say Vendors
    Then I visit the home page
    When I visit Vouchers
    Then the page title should say Vouchers