describe("template spec", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });

  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Fakebook").should("be.visible");
  });
});
