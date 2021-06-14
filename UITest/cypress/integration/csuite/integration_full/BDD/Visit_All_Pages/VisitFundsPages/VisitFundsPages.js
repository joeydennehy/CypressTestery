import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in as admin', () => {
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When('I visit {string}', (page) => {
    cy.visit("/erp/funit");

    cy.get("a").contains(page).click();
})

Then('the page should say {string}', (title) => {
    var inTitle = ["Reports", "Transfer Money"];

    if(inTitle.includes(title)) cy.get("#objecttitle").should("contain", title);
    else if(title == "Balance Swap"){
        cy.intercept("GET", "/erp/funit/**").as("display");

        cy.url().should("contain", "/erp/funit/swap");
        cy.wait("@display");
        cy.get("caption").should("contain", "Cash Balancing Fund");
    }
    else cy.get("caption").should("contain", title);
})

And('the URL should contain {string}', (url) => {
    cy.url().should("contain", url);
})