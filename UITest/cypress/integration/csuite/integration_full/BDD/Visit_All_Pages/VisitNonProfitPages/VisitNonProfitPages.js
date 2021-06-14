import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given('I am logged in as an administrator', () => {
    cy.intercept('GET', 'erp/home/list').as('home');
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
    cy.wait("@home")
})

When('I visit 990 Report', () => {
    cy.get("a").contains("990 Report").click();
    cy.url().should("contain", "/erp/n90");
})

Then('the page should say 990 Report', () => {
    cy.get("#objecttitle").should("contain", "990 Report");
})

Then('I visit the home page', () => {
    cy.visit("/erp")
})

When('I visit Affiliate Supporting Orgs', () => {
    cy.get("a").contains("Affiliate/Supporting Orgs").click();
    cy.url().should("contain", "/erp/sorg");
})

Then('the page should say Affiliate Supporting Orgs', () => {
    cy.get("#objecttitle").should("contain", "Affiliate/Supporting Orgs");
})

When('I visit Campaigns', () => {
    cy.get("a").contains("Campaigns").click();
    cy.url().should("contain", "/erp/event");
})

Then('the page should say Campaign', () => {
    cy.get("#objecttitle").should("contain", "Campaigns");
})

When('I visit Donations', () => {
    cy.get("a").contains("Donations").click();
    cy.url().should("contain", "/erp/donation");
})

Then('the page should say Donations', () => {
    cy.get("#objecttitle").should("contain", "Donations");
})

When('I visit Donors', () => {
    cy.get("a").contains("Donors").click();
    cy.url().should("contain", "/erp/doner");
})

Then('the page should say Donors', () => {
    cy.get("#objecttitle").should("contain", "Donors");
})

When('I visit Fund Advisors', () => {
    cy.get("a").contains("Fund Advisors").click();
    cy.url().should("contain", "/erp/owner");
})

Then('the page should say Fund Advisors', () => {
    cy.get("#objecttitle").should("contain", "Fund Advisors");
})

When('I visit Grantees', () => {
    cy.get("a").contains("Grantees").click();
    cy.url().should("contain", "/erp/grantee");
})

Then('the page should say Grantees', () => {
    cy.get("#objecttitle").should("contain", "Grantees");
})

When('I visit Grants', () => {
    cy.get("a").contains("Grants").click();
    cy.url().should("contain", "/erp/grant");
})

Then('the page should say Grants', () => {
    cy.get("#objecttitle").should("contain", "Grants");
})

When('I visit Grant Types', () => {
    cy.get("a").contains("Grant Types").click();
    cy.url().should("contain", "/erp/grant_type");
})

Then('the page should say Grant Types', () => {
    cy.get("#objecttitle").should("contain", "Grant Types");
})

When('I visit Nonprofit', () => {
    cy.get("a").contains("Nonprofit").click();
    cy.url().should("contain", "/erp/nonprofit");
})

Then('the page should say Nonprofit', () => {
    cy.get("#objecttitle").should("contain", "Nonprofit");
})

When('I visit Opportunities', () => {
    cy.get("a").contains("Opportunities").click();
    cy.url().should("contain", "/erp/opportunity");
})

Then('the page should say Opportunities', () => {
    cy.get("#objecttitle").should("contain", "Opportunities");
})

When('I visit Pledges', () => {
    cy.get("a").contains("Pledges").click();
    cy.url().should("contain", "/erp/pledge");
})

Then('the page should say Pledges', () => {
    cy.get("#objecttitle").should("contain", "Pledges");
})

When('I visit Scholarships', () => {
    cy.get("a").contains("Scholarships").click();
    cy.url().should("contain", "/erp/scholarship");
})

Then('the page should say Scholarships', () => {
    cy.get("#objecttitle").should("contain", "Scholarships");
})

When('I visit Service Areas', () => {
    cy.get("a").contains("Service Areas").click();
    cy.url().should("contain", "/erp/service_area");
})

Then('the page should say Service Areas', () => {
    cy.get("#objecttitle").should("contain", "Service Areas");
})

When('I visit Steward', () => {
    cy.get("a").contains("Steward").click();
    cy.url().should("contain", "/erp/steward");
})

Then('the page should say Steward', () => {
    cy.get("#objecttitle").should("contain", "Steward");
})

When('I visit Students', () => {
    cy.get("a").contains("Students").click();
    cy.url().should("contain", "/erp/student");
})

Then('the page should say Students', () => {
    cy.get("#objecttitle").should("contain", "Students");
})

When('I visit Tributes', () => {
    cy.get("a").contains("Tributes").click();
    cy.url().should("contain", "/erp/memorial");
})

Then('the page should say Tributes', () => {
    cy.get("#objecttitle").should("contain", "Tributes");
})