import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given('I am logged in as an administrator', () => {
    cy.intercept('GET', 'erp/home/list').as('home');
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
    cy.wait('@home');
})

Then('I visit the home page', () => {
    cy.visit("/erp")
})

When('I visits Accounts', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("#objecttitle").should("contain", "Accounts");
})

Then('the page should say Accounts', () => {
    cy.url().should("contain", "/erp/account");
})

When('I visit Add task', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Add Task").click();
    cy.get(".floatleft > table > caption").should("contain", "Create Task");
})

Then('the page should say Create Task', () => {
    cy.url().should("contain", "/erp/me/task/create");
})

When('I visit List all Accounts page', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("List All").click();
    cy.get(".floatleft > table > caption").should("contain", "Accounts");
})

Then('the page should say List all Accounts', () => {
    cy.url().should("contain", "/erp/account/list");
})

When('I visit Transfer Money', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Transfer Money").click();
    cy.get(".floatleft > table > caption").should("contain", "Transfer Money Between Accounts");
})

Then('the page should say Transfer Money Between Accounts', () => {
    cy.url().should("contain", "/erp/account/transfer/quick");
})

When('I visit Trial balance', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Trial Balance").click();
    cy.get(".floatleft > table > caption").should("contain", "Set Balance Sheet Date");
})

Then('the page should say Set Balance Sheet Date', () => {
    cy.url().should("contain", "/erp/financial/list/trialbalance");
})

When('I visit Create account', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Create").click();
    cy.get(".floatleft > table > caption").should("contain", "Create Account");
})

Then('the page should say Create Account', () => {
    cy.url().should("contain", "/erp/account/create");
})

When('I visit Defaults', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Defaults").click();
    cy.get(".floatleft > table > caption").should("contain", "System Default Accounts");
})

Then('the page should say System Default Accounts', () => {
    cy.url().should("contain", "/erp/account/defaults");
})

When('I visit Edit types', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Edit Types").click();
    cy.get(".floatleft > table > caption").should("contain", "Edit Account Types");
})

Then('the page should say Edit Account Types', () => {
    cy.url().should("contain", "/erp/account/edit/accounttype");
})

When('I visit Balance Swap', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Balance Swap").click();
    cy.get(".floatleft > table > caption").should("contain", "Cash Balancing Fund Assets");
})

Then('the page should say Cash Balancing Fund Assets', () => {
    cy.url().should("contain", "/erp/funit/display");
})

When('I visit Statement Accounts', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Statement Accounts").click();
    cy.get(".floatleft > table > caption").should("contain", "Statement Accounts");
})

Then('the page should say Statement Accounts', () => {
    cy.url().should("contain", "/erp/account/list/saccount");
})

When('I visit Financial Views', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Financial Views").click();
    cy.get(".floatleft > table > caption").should("contain", "Financial Views");
})

Then('the page should say Financial Views', () => {
    cy.url().should("contain", "/erp/account/list/fview");
})

When('I visit Investment Strategies', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Investment Strategies").click();
    cy.get(".floatleft > table > caption").should("contain", "Investment Strategies");
})

Then('the page should say Investment Strategies', () => {
    cy.url().should("contain", "/erp/account/list/invest");
})

When('I visit Functional Expenses', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Functional Expenses").click();
    cy.get(".floatleft > table > caption").should("contain", "Functional Expenses");
})

Then('the page should say Functional Expenses', () => {
    cy.url().should("contain", "/erp/account/list/fexp");
})

When('I visit Permissions', () => {
    cy.get("#menu_actions > a").contains("Accounts").click();
    cy.get("a.action").contains("Permission").click();
    cy.get(".floatleft > table > caption").eq(0).should("contain.text", "Manage Access");
})

Then('the page should say Manage Access', () => {
    cy.url().should("contain", "/erp/account/permission");
})