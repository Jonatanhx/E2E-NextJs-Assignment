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
