describe("Initial test", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });

  it("Passes the setup", () => {
    cy.visit("/");
    cy.get("h1").contains("Fakebook").should("be.visible");
  });
});

describe("Log in with credentials and log out", () => {
  it("Clicks log in button and fills out the login form credentials then logs out", () => {
    cy.login();
    cy.get("button").contains("Log out").should("be.visible").click();
  });
});

describe("Fill out the form and create a post", () => {
  it("Fills out the form to create a post and verifies that a post is rendered", () => {
    cy.login();
    cy.get('[data-cy="title"]').type("My first post");
    cy.get('[data-cy="image"]').selectFile("./public/Screenshot_1.png");
    cy.get('[data-cy="content"]').type("Hello world!");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="post"]').should("have.length", 2);
  });
});
