const homeUrl = "http://localhost:3000/";

describe("App", () => {
  describe("Topbar", () => {
    it("should have a link to About Me", () => {
      cy.visit(homeUrl);
      cy.get('a[href*="#about-me"]').click({ force: true });

      cy.url().should("include", "#about-me");
    });
    it("should have a link to Projects", () => {
      cy.visit(homeUrl);
      cy.get('a[href*="#projects"]').click({ force: true });

      cy.url().should("include", "#projects");
    });
    it("should have a link to Knowledges", () => {
      cy.visit(homeUrl);
      cy.get('a[href*="#knowledges"]').click({ force: true });

      cy.url().should("include", "#knowledges");
    });
    it("should have a link to comments", () => {
      cy.visit(homeUrl);
      cy.get('a[href*="#comments"]').click({ force: true });

      cy.url().should("include", "#comments");
    });
    it("should have a link to Contact Me", () => {
      cy.visit(homeUrl);
      cy.get('a[href*="#contact-me"]').click({ force: true });

      cy.url().should("include", "#contact-me");
    });
  });
  describe("Form", () => {
    it("Should be able to create a comment", () => {
      const name = "My name";
      const comment = "My comment";

      cy.intercept({ method: "POST", url: "/api/comments" }).as(
        "createCommentRequest"
      );
      cy.visit(homeUrl);
      cy.get("#comments").scrollIntoView();
      cy.wait(500);
      cy.get('input[name="name"]').type(name, { force: true });
      cy.get('textarea[name="comment"]').type(comment, { force: true });

      cy.get('button[type="submit"]').click({ force: true });

      cy.wait("@createCommentRequest")
        .its("request.body")
        .should("deep.equal", { name, comment });
    });

    it("Should be able to create a comment without name", () => {
      const name = "";
      const comment = "My comment";

      cy.intercept({ method: "POST", url: "/api/comments" }).as(
        "createCommentRequest"
      );
      cy.visit(homeUrl);
      cy.get("#comments").scrollIntoView();
      cy.wait(500);
      cy.get('textarea[name="comment"]').type(comment, { force: true });

      cy.get('button[type="submit"]').click({ force: true });

      cy.wait("@createCommentRequest")
        .its("request.body")
        .should("deep.equal", { name, comment });
    });
  });
});
