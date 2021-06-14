import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given ("I am logged in as an administrator", () => {
	cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When ("I visit Financial", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Financials')").click();
})

Then ("the page says Financials", () => {
	cy.url().should('include', '/financial')
    cy.get('#objecttitle').contains('Financials', { matchCase: false }).should('exist');
})

When ("I visit Groups", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Groups')").click();
})

Then ("the page says Groups", () => {
	cy.url().should('include', '/group')
    cy.get('#objecttitle').contains('Groups', { matchCase: false }).should('exist');
})

When ("I visit Logs", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Logs')").click();
})

Then ("the page says Logs", () => {
	cy.url().should('include', '/log')
    cy.get('#objecttitle').contains('Logs', { matchCase: false }).should('exist');
})

When ("I visit Notes", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Notes')").click();
})

Then ("the page says Notes", () => {
	cy.url().should('include', '/note')
    cy.get('#objecttitle').contains('Notes', { matchCase: false }).should('exist');
})

When ("I visit Profiles", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Profiles')").click();
})

Then ("the page says Profiles", () => {
	cy.url().should('include', '/profile')
    cy.get('#objecttitle').contains('Profiles', { matchCase: false }).should('exist');
})

When ("I visit Reports", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Reports')").click();
})

Then ("the page says Reports", () => {
	cy.url().should('include', '/report')
    cy.get('#objecttitle').contains('Reports', { matchCase: false }).should('exist');
})

When ("I visit System Data", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('System Data')").click();
})

Then ("the page says System Data", () => {
	cy.url().should('include', '/systemdata')
    cy.get('#objecttitle').contains('System Data', { matchCase: false }).should('exist');
})

When ("I visit Users", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Users')").click();
})

Then ("the page says Users", () => {
	cy.url().should('include', '/employee')
    cy.get('#objecttitle').contains('Users', { matchCase: false }).should('exist');
})

When ("I visit Migration", () => {
	cy.visit('/erp/home/list');
    cy.get("#body_cell > div > div").find("a:contains('Migration')").click();
})

Then ("the page says Migration", () => {
	cy.url().should('include', '/migration')
    cy.get('#objecttitle').contains('Migration', { matchCase: false }).should('exist');
})