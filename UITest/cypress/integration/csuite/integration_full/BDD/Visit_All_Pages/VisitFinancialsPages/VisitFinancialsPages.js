import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in as admin', () => {
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When('I visit {string}', (page) => {
    cy.visit("/erp/financial");
    cy.get("a").contains(page).click();
})

Then('the page should say {string}', (title) => {
    if(title == "Create Task") cy.get("caption").should("contain", title);
    else cy.get("#objecttitle").should("contain", title);
})

And('the URL should contain {string}', (url) => {
    cy.url().should("contain", url);
})