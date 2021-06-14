import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in as admin', () => {
    cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When('I visit {string}', (page) => {
    if(page == "Donors"){
        cy.visit('/erp/home/list')
        cy.get('#menu_top').find("a:contains('" + page + "')").click();
    }   
    else{
        cy.visit('/erp/doner');
        cy.get("#actionleft > ul > li").find("a:contains('" + page + "')").click();
    }
})

Then('the page should say {string}', (title) => {
    cy.get('#objecttitle').contains(title, { matchCase: false }).should('exist');
})

And('the URL should contain {string}', (url) => {
    cy.url().should('include', url);
})