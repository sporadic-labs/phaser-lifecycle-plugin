/// <reference types="Cypress" />

const testName = "sample-test";

context(`Run ${testName}`, () => {
  it("should run with no errors", () => {
    cy.runPhaserTest(`/end-to-end-tests/${testName}`);
  });
});
