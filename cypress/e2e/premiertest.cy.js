describe("test technique", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("should compare screenshot of the entire page", () => {
    cy.compareSnapshot({
      name: "home-page-with-threshold",
      testThreshold: 0.2,
    });
  });
});
