describe("Initial test", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });

  it("Passes the setup", () => {
    cy.visit("/");
    cy.get("h1").contains("Fakebook").should("be.visible");
  });
});

describe("Log in with Github Authentication", () => {
  it("Clicks log in button and fills out the login form credentials", () => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get("button").contains("Log in").should("be.visible").click();
    cy.wait(5000);
    cy.get("button").click();
    cy.get("#login_field").type("shadeae@hotmail.com");
    cy.get("#password").type("cypresstestaccount123");
    cy.get('input[name="commit"][value="Sign in"]').click();
    cy.wait(5000);

    cy.get('button[name="authorize"][value="1"]').should("be.visible").click();
  });
});

describe("Log out", () => {
  it("Clicks log out button and then logs back in", () => {
    cy.visit("/");
  });
});
