import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";


Given('I am logged in as an administrator', () => {
  cy.csuite_login(Cypress.env('CS_USER'), Cypress.env('CS_PASSWORD'));
})

When('I visit Add Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Add Task").click();
})

Then('the page should say Create Task', () => {
  cy.url().should("contain", "/erp/me/task/create");
  cy.get("caption").should("contain", "Create Task");
})

When('I visit Current Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Current Tasks").click();
})

Then('the page should say Tasks', () => {
  cy.url().should("match", new RegExp("(/erp/me/task)$"));
  cy.get("caption").should("contain", "Tasks");
})

When('I visit All My Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("All My Tasks").click();
})

Then('the page should show all Tasks', () => {
  cy.url().should("match", new RegExp("(/erp/me/task/all)$"));
  cy.get("caption").should("contain", "Tasks");
})

When('I visit Assigned Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Assigned Tasks").click();

})

Then('the page should say Assigned Tasks', () => {
  cy.url().should("match", new RegExp("(/erp/me/task/assigned)$"));
  cy.get("caption").should("contain", "Assigned Tasks");
})

When('I visit Completed Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Completed Tasks").click();
})

Then('the page should say Completed Tasks', () => {
  cy.url().should("match", new RegExp("(/erp/me/task/completed)$"));
  cy.get("caption").should("contain", "Completed Tasks");
})

When('I visit Shared Tasks', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Shared Tasks").click();
})

Then('the page should say Tasks Shared', () => {
  cy.url().should("match", new RegExp("(/erp/me/task/shared)$"));
  cy.get("caption").should("contain", "Tasks Shared");
})

When('I visit Home', () => {
  cy.visit("/erp/me/task");
  cy.get("a").contains("Home").click();
})

Then('the page should say Your Information', () => {
  cy.url().should("match", new RegExp("(/erp/me/list)$"));
  cy.get("caption").should("contain", "Your Information");
})
