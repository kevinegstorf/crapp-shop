describe("Crapp Shop HomePage", () => {
  it("Visits the HomePage", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "HomePage");
    cy.get(".header").should("contain", "Header");
  });
});
