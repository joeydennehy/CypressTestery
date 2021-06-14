Feature: Visit Grants Pages

  Scenario: Visit all grants pages

    Given I am logged in as an administrator
    When I visit Request Bucket
    Then the page should say Grant Requests
    Then I visit the grant page
    When I visit Catalog Bucket
    Then the page should say Grant Catalog Requests
    Then I visit the grant page
    When I visit Import Bucket
    Then the page should say Import Grants
    Then I visit the grant page
    When I visit Unfunded Bucket
    Then the page should say Unfunded Grants
    Then I visit the grant page
    When I visit New Bucket
    Then the page should say New Grants
    Then I visit the grant page
    When I visit Approval Bucket
    Then the page should say Approval Grants
    Then I visit the grant page
    When I visit Voucher Bucket
    Then the page should say Grants Payments
    Then I visit the grant page
    When I visit Paid Bucket
    Then the page should say Paid Grant Summary
    Then I visit the grant page
    When I visit Complete Bucket
    Then the page should say Complete Grant Summary
    Then I visit the grant page
    When I visit Add Tasks
    Then the page should say Create Task
    Then I visit the grant page
    When I visit Reports
    Then the page should say Reports
    Then I visit the grant page
    When I visit Filter Reports
    Then the page should say Grants
    Then I visit the grant page
    When I visit recurring
    Then the page should say open Recurring Grants
    Then I visit the grant page
    When I visit Create
    Then the page should say External Grant- Choose Grantee
    Then I visit the grant page
    When I visit Grant Cycles
    Then the page should say Grant Cycles
    Then I visit the grant page
    When I visit Request Notify
    Then the page should say Upload Grants
    Then I visit the grant page
    When I visit Create Spendable
    Then the page should say Create Spendable Grants
    Then I visit the grant page
    When I visit Jobs
    Then the url should end with jobs
    Then I visit the grant page
    When I visit Permission
    Then the page should say Manage Access