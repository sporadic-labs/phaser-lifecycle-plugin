/// <reference types="Cypress" />

const testName = "methods-matching-events";

context(`Run ${testName}`, () => {
  it("should run with no errors", () => {
    cy.runPhaserTest(`/end-to-end-tests/${testName}`);
  });
});
