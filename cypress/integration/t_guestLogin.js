// - ARRANGE - //
describe("Test GUEST login", function() {
    // - ACT - //
    beforeEach(function() {
        cy.visit("http://localhost:3000")
    })
    it("Add text to inputs and submit form", function() {
        // Enter Email
        cy.get('#email')
            .type('guest@example.com')
            .should('have.value', 'guest@example.com')          // - ASSERT - //
        // Enter Password
        cy.get('#password')
            .type('guest')
            .should('have.value', 'guest')                      // - ASSERT - //

        // Click Submit
        cy.get('#login').click()
    })
    
})