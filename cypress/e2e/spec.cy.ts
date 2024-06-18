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
    cy.loginAsJonatan();
    cy.logout();
  });
});

describe("Fill out the form and create a post", () => {
  it("Fills out the form to create a post and verifies that the post is rendered and that the form is emptied for the next post", () => {
    cy.loginAsJonatan();
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
    cy.loginAsJonatan();

    cy.get('[data-cy="submit-button"]').click();
    cy.get("p").contains("Title is required").should("exist");
    cy.get("p").contains("Invalid URL for image").should("exist");
    cy.get("p").contains("Text is required").should("exist");
  });
});

describe("Profile page should only render posts of the logged in user and delete should delete correct post", () => {
  it("Creates a post on 2 different accounts and verifies that only one shows up on the correct account", () => {
    cy.loginAsJonatan();
    cy.get('[data-cy="title"]').type("My first post");
    cy.get('[data-cy="image"]').type(
      "https://helios-i.mashable.com/imagery/articles/01RhPcOiy9rYKba0BstQt3m/images-1.fill.size_2000x2000.v1611692400.jpg"
    );
    cy.get('[data-cy="content"]').type("Hello world!");
    cy.get('[data-cy="submit-button"]').click();

    cy.logout();
    cy.loginAsTest();
    cy.get('[data-cy="title"]').type("My second post");
    cy.get('[data-cy="image"]').type(
      "https://helios-i.mashable.com/imagery/articles/01RhPcOiy9rYKba0BstQt3m/images-1.fill.size_2000x2000.v1611692400.jpg"
    );
    cy.get('[data-cy="content"]').type("Hello world again!");
    cy.get('[data-cy="submit-button"]').click();

    cy.get('[data-cy="profile-link"]').click();
    cy.get('[data-cy="post"]').should("have.length", 1);
  });
  it("Creates another post and deletes the first one to verify that correct post is removed", () => {
    cy.visit("/");
    cy.get('[data-cy="title"]').type("My third post");
    cy.get('[data-cy="image"]').type(
      "https://helios-i.mashable.com/imagery/articles/01RhPcOiy9rYKba0BstQt3m/images-1.fill.size_2000x2000.v1611692400.jpg"
    );
    cy.get('[data-cy="content"]').type("Hello world again!");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="profile-link"]').click();

    cy.get("My third post").get('[data-cy="delete-post-button"]').click();
  });
});
