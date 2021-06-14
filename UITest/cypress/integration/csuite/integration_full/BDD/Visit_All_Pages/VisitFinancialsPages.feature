Feature: VisitDonorPages
    Scenario: I can visit the financials pages
        Given I am logged in as admin
        When I visit "Add Task"
        Then the page should say "Create Task"
        And the URL should contain "/erp/me/task/create"
        When I visit "Balance Sheet"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Income Statement"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Cash Flow"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Cash Balance"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Audit Report"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Fund Balance"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Trial Balance"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list/trialbalance"
        When I visit "Detail Trial"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list/detailtrial"
        When I visit "Under Water"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Func Expense"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list"
        When I visit "Investment"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/list/invest"
        When I visit "Permission"
        Then the page should say "Financials"
        And the URL should contain "/erp/financial/permission"