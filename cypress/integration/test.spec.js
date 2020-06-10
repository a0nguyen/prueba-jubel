describe("when I open the page", () => {
  it("should display a loader, then the card", () => {
    cy.visit("/");
    cy.get('[datacy=spinner]').should('be.visible')
    cy.wait(4000)
    cy.get('[datacy=bank]').should('have.length', 4)
  });
})