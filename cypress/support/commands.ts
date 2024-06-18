/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    loginAsJonatan(): Chainable<void>;
    logout(): Chainable<void>;
    loginAsTest(): Chainable<void>;
  }
}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("loginAsJonatan", () => {
  cy.visit("/");
  cy.get("button").contains("Log in").should("be.visible").click();
  cy.get('input[id="input-email-for-credentials-provider"]').type(
    "jonatanhelander@hotmail.com"
  );
  cy.get("button").click();
});

Cypress.Commands.add("loginAsTest", () => {
  cy.visit("/");
  cy.get("button").contains("Log in").should("be.visible").click();
  cy.get('input[id="input-email-for-credentials-provider"]').type(
    "testtestsson@hotmail.com"
  );
  cy.get("button").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("button").contains("Log out").should("be.visible").click();
});
