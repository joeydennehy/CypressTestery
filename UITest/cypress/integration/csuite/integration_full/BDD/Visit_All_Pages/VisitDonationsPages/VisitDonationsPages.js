import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given ("I am logged in as an administrator", () => {
	cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When ("I visit donations", () => {
	cy.wait(2000);
	cy.get('a:contains(Donations)').eq(0).click();
})

Then ("the page should say donation", () => {
	cy.url().should('include', '/donation');
    cy.get('#objecttitle').contains('Donations', { matchCase: false }).should('exist');
})

When ("I visit Add task", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Add Task')").click();
})

Then ("the page should say Me", () => {
	cy.url().should('include', '/me/task/create?task_o=donation');
    cy.get('#objecttitle').contains('Me', { matchCase: false }).should('exist');
})

When ("I visit Reports", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find('a').contains(new RegExp('^Reports$')).click();
})

Then ("the page should say Reports", () => {
	cy.url().should('include', '/report/donation');
    cy.get('#objecttitle').contains('Reports', { matchCase: false }).should('exist');
})

When ("I visit Filter reports", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Filter Reports')").click();
})

When ("I visit Recurring", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Recurring')").click();
})

When ("I visit Create", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Create')").click();
})

Then ("the page should say Donations", () => {
    cy.get('#objecttitle').contains('Donations', { matchCase: false }).should('exist');
})

When ("I visit Show Till", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Show Till')").click();
})

Then ("the page should say Till", () => {
	cy.url().should('include', '/till/list');
    cy.get('#objecttitle').contains('Till', { matchCase: false }).should('exist'); 
})

When ("I visit Tax Receipts", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Tax Receipts')").click();
})

When ("I visit Donation Types", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Donation Types')").click();
})

When ("I Visit List Imports", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('List Imports')").click();
})

When ("I visit Import Donations", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Import Donations')").click();
})

When ("I visit Export Donations", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find('a').contains('Export Donations').parent().should('have.attr', 'href', '/erp/donation/create/exportdata');
})

When ("I visit Permission", () => {
	cy.visit('/erp/donation');
    cy.get("#actionleft > ul > li").find("a:contains('Permission')").click();
})