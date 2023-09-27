describe("template spec", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("www.webspital.sk");
  });

  it("Banner ma dva buttony", () => {
    cy.get(".wp-container-4 div").should("have.length", 2);
  });

  // after(() => {
  //   cy.task("sendMail", "This will be output to email address").then((result) =>
  //     console.log(result)
  //   );
  // });
});
