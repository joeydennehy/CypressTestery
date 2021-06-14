import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given('I am logged in as an administrator', () => {
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
    cy.visit("/erp/grant")
})

When('I visit Request Bucket', () => {
    cy.get("a.bucket_link").contains("Request").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Grant Requests', () => {
    cy.get("li.currentbucket > a").should("contain", "Request");
    cy.get(".report_title_text").should("contain", "Grant Requests")
})

Then('I visit the grant page', () => {
    cy.visit("/erp/grant")
})

When('I visit Catalog Bucket', () => {
    cy.get("a.bucket_link").contains("Catalog").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Grant Catalog Requests', () => {
    cy.get("li.currentbucket > a").should("contain", "Catalog");
    cy.get(".report_title_text").should("contain", "Grant Catalog Requests")
})

When('I visit Import Bucket', () => {
    cy.get("a.bucket_link").contains("Import").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Import Grants', () => {
    cy.get("li.currentbucket > a").should("contain", "Import");
    cy.get(".report_title_text").should("contain", "Import Grants")
})

When('I visit Unfunded Bucket', () => {
    cy.get("a.bucket_link").contains("Unfunded").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Unfunded Grants', () => {
    cy.get("li.currentbucket > a").should("contain", "Unfunded");
    cy.get(".report_title_text").should("contain", "Unfunded Grants")
})

When('I visit New Bucket', () => {
    cy.get("a.bucket_link").contains("New").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say New Grants', () => {
    cy.get("li.currentbucket > a").should("contain", "New");
    cy.get(".report_title_text").should("contain", "New Grants")
})

When('I visit Approval Bucket', () => {
    cy.get("a.bucket_link").contains("Approval").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Approval Grants', () => {
    cy.get("li.currentbucket > a").should("contain", "Approval");
    cy.get(".report_title_text").should("contain", "Approval Grants")
})

When('I visit Voucher Bucket', () => {
    cy.get("a.bucket_link").contains("Voucher").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Grants Payments', () => {
    cy.get("li.currentbucket > a").should("contain", "Voucher");
    cy.get(".report_title_text").should("contain", "Grants Payments")
})

When('I visit Paid Bucket', () => {
    cy.get("a.bucket_link").contains("Paid").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Paid Grant Summary', () => {
    cy.get("li.currentbucket > a").should("contain", "Paid");
    cy.get("caption").should("contain", "Paid Grant Summary")
})

When('I visit Complete Bucket', () => {
    cy.get("a.bucket_link").contains("Complete").click();
    cy.url().should("contain", "/erp/grant/list");
})

Then('the page should say Complete Grant Summary', () => {
    cy.get("li.currentbucket > a").should("contain", "Complete");
    cy.get("caption").should("contain", "Complete Grant Summary")
})

When('I visit Add Tasks', () => {
    cy.get("a > span").contains("Add Task").click();
    cy.url().should("contain", "/erp/me/task/create");
})

Then('the page should say Create Task', () => {
    cy.get("caption").should("contain", "Create Task");
})

When('I visit Reports', () => {
    cy.get("a > span").contains("Reports").click();
    cy.url().should("contain", "/erp/report/grant");
})

Then('the page should say Reports', () => {
    cy.get("#objecttitle").should("contain", "Reports");
})

When('I visit Filter Reports', () => {
    cy.get("a > span").contains("Filter Reports").click();
    cy.url().should("contain", "/erp/grant/list/list");
})

Then('the page should say Grants', () => {
    cy.get("table > caption > div > .caption_text").should("contain", "Grants");
})

When('I visit recurring', () => {
    cy.get("a > span").contains("Recurring").click();
    cy.url().should("contain", "/erp/grant/list/recurring");
})

Then('the page should say open Recurring Grants', () => {
    cy.get("#report_editor > .report_title > .report_title_text").should("contain", "open Recurring Grants");

})

When('I visit Create', () => {
    cy.get("a > span").contains("Create").click();
    cy.url().should("contain", "/erp/grant/create");
})

Then('the page should say External Grant- Choose Grantee', () => {
    cy.get(".floatleft > table > caption").eq(0).should("contain", "External Grant - Choose Grantee")

})

When('I visit Grant Cycles', () => {
    cy.get("a > span").contains("Grant Cycles").click();
    cy.url().should("contain", "/erp/grant/list/cycle");
})

Then('the page should say Grant Cycles', () => {
    cy.get(".floatleft > table > caption").eq(0).should("contain", "Grant Cycles")

})

When('I visit Request Notify', () => {
    cy.get("a > span").contains("Import Grants").click();
    cy.url().should("contain", "/erp/grant/create/importdata");
})

Then('the page should say Upload Grants', () => {
    cy.get(".floatleft > table > caption").eq(0).should("contain", "Upload Grants")

})

When('I visit Create Spendable', () => {
    cy.get("a > span").contains("Create Spendable").click();
    cy.url().should("contain", "/erp/grant/create/spendable");
})

Then('the page should say Create Spendable Grants', () => {
    cy.get(".floatleft > table > caption").eq(0).should("contain", "Create Spendable Grants")

})

When('I visit Jobs', () => {
    cy.get("a > span").contains("Jobs").click();
})

Then('the url should end with jobs', () => {
    cy.url().should("contain", "/erp/grant/list/jobs");
})

When('I visit Permission', () => {
    cy.get("a > span").contains("Permission").click();
    cy.url().should("contain", "/erp/grant/permission");
})

Then('the page should say Manage Access', () => {
    cy.get(".floatleft > table > caption").eq(0).should("contain.text", "Manage Access")

})