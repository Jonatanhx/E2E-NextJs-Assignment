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
  it("Fills out the form to create a post and verifies that the post is rendered and that the form is emptied for the next post", () => {
    cy.login();
    cy.get('[data-cy="title"]').type("My first post");
    cy.get('[data-cy="image"]').type(
      "https://helios-i.mashable.com/imagery/articles/01RhPcOiy9rYKba0BstQt3m/images-1.fill.size_2000x2000.v1611692400.jpg"
    );
    cy.get('[data-cy="content"]').type("Hello world!");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="post"]').should("have.length", 2);

    cy.get('[data-cy="title"]').should("be.empty");
    cy.get('[data-cy="image"]').should("be.empty");
    cy.get('[data-cy="content"]').should("be.empty");
  });
});

describe("Fill out a form with invalid input, check for error correctly", () => {
  it("Fills out the form with incorrect values and makes sure the errors are handled", () => {
    cy.login();
    cy.get('[data-cy="title"]').type("1");
    cy.get('[data-cy="submit-button"]').click();
  });
});

/* describe("Profile page should only render  ");
 */
