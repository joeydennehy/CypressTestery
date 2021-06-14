import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given('I am logged in as an administrator', () => {
    cy.intercept('GET', 'erp/home/list').as('loadHome');
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
    cy.wait("@loadHome")
})

When('I visit Accounts', () => {
    cy.get("a").contains("Accounts").click();
    cy.url().should("contain", "/erp/account");
})

Then('the page title should say Accounts', () => {
    cy.get("#objecttitle").should("contain", "Accounts");
})

Then('I visit the home page',()=>{
    cy.visit('/erp');
})

When('I visit Accounts payable', () => {
    cy.get("a").contains("Accounts Payable").click();
    cy.url().should("contain", "/erp/ap");
})

Then('the page title should say Accounts Payable', () => {
    cy.get("#objecttitle").should("contain", "Accounts Payable");
})

When('I visit Accounts Receivable', () => {
    cy.get("a").contains("Accounts Receivable").click();
    cy.url().should("contain", "/erp/ar");
})

Then('the page title should say Accounts Receivable', () => {
    cy.get("#objecttitle").should("contain", "Accounts Receivable");
})

When('I visit Admin Fee', () => {
    cy.get("a").contains("Admin Fee").click();
    cy.url().should("contain", "/erp/adminfee");
})

Then('the page title should say Admin Fee', () => {
    cy.get("#objecttitle").should("contain", "Admin Fee");
})

When('I visit Bank Reconcile', () => {
    cy.get("a").contains("Bank Reconcile").click();
    cy.url().should("contain", "/erp/bank_rec");
})

Then('the page title should say Bank Reconcile', () => {
    cy.get("#objecttitle").should("contain", "Bank Reconcile");
})

When('I visit Budget', () => {
    cy.get("a").contains("Budget").click();
    cy.url().should("contain", "/erp/budget");
})

Then('the page title should say Budget', () => {
    cy.get("#objecttitle").should("contain", "Budget");
})

When('I visit Checks', () => {
    cy.get("a").contains("Checks").click();
    cy.url().should("contain", "/erp/check");
})

Then('The page title should say Checks', () => {
    cy.get("#objecttitle").should("contain", "Checks");
})

When('I visit Customers', () => {
    cy.get("a").contains("Customers").click();
    cy.url().should("contain", "/erp/customer");
})

Then('the page title should shay Customers', () => {
    cy.get("#objecttitle").should("contain", "Customers");
})

When('I visits Deposits', () => {
    cy.get("a").contains("Deposits").click();
    cy.url().should("contain", "/erp/deposit");
})

Then('the page title should say Deposits', () => {
    cy.get("#objecttitle").should("contain", "Deposits");
})

When('I visit Distributions', () => {
    cy.get("a").contains("Distributions").click();
    cy.url().should("contain", "/erp/distribution");
})

Then('the page title should say Distributions', () => {
    cy.get("#objecttitle").should("contain", "Distributions");
})

When('I visit Employees', () => {
    cy.get("a").contains("Employees").click();
    cy.url().should("contain", "/erp/vendoremp");
})

Then('the page title should say Employees', () => {
    cy.get("#objecttitle").should("contain", "Employees");
})

When('I visit Funds', () => {
    cy.get("a").contains("Funds").click();
    cy.url().should("contain", "/erp/funit");
})

Then('the page title should say Funds', () => {
    cy.get("#objecttitle").should("contain", "Funds");
})

When('I visit the General Ledger', () => {
    cy.get("a").contains("General Ledger").click();
    cy.url().should("contain", "/erp/gl");
})

Then('the page title should say General Ledger', () => {
    cy.get("#objecttitle").should("contain", "General Ledger");
})

When('I visits Invoices', () => {
    cy.get("a").contains("Invoice").click();
    cy.url().should("contain", "/erp/invoice");
})

Then('the page title should say Invoice', () => {
    cy.get("#objecttitle").should("contain", "Invoice");
})

When('I visit Payment Methods', () => {
    cy.get("a").contains("Payment Methods").click();
    cy.url().should("contain", "/erp/payment_method");
})

Then('the page title should say Payment Methods', () => {
    cy.get("#objecttitle").should("contain", "Payment Methods");
})

When('I visit Payment Processors', () => {
    cy.get("a").contains("Payment Processors").click();
    cy.url().should("contain", "/erp/payment_processor");
})

Then('the page title should say Payment Processors', () => {
    cy.get("#objecttitle").should("contain", "Payment Processors");
})

When('I visit Payments', () => {
    cy.get("a").contains("Payments").click();
    cy.url().should("contain", "/erp/customer_payment");
})

Then('the page title should say Payments', () => {
    cy.get("#objecttitle").should("contain", "Payments");
})

When('I visit Public Securities', () => {
    cy.get("a").contains("Public Securities").click();
    cy.url().should("contain", "/erp/public_security");
})

Then('the page title should say Public Securities', () => {
    cy.get("#objecttitle").should("contain", "Public Securities");
})

When('I visit Revenue Share', () => {
    cy.get("a").contains("Revenue Share").click();
    cy.url().should("contain", "/erp/profitshare");
})

Then('the page title should say Revenue Share', () => {
    cy.get("#objecttitle").should("contain", "Revenue Share");
})

When('I visit Till', () => {
    cy.get("a").contains("Till").click();
    cy.url().should("contain", "/erp/till");
})

Then('the page title should say Till', () => {
    cy.get("#objecttitle").should("contain", "Till");
})

When('I visit Vendors', () => {
    cy.get("a").contains("Vendors").click();
    cy.url().should("contain", "/erp/vendor");
})

Then('the page title should say Vendors', () => {
    cy.get("#objecttitle").should("contain", "Vendors");
})

When('I visit Vouchers', () => {
    cy.get("a").contains("Vouchers").click();
    cy.url().should("contain", "/erp/voucher");
})

Then('the page title should say Vouchers', () => {
    cy.get("#objecttitle").should("contain", "Vouchers");
})