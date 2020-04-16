describe("Test GUEST login", function() {
    beforeEach(function() {
        cy.visit("http://localhost:3000")
    })
    it("Add text to inputs and submit form", function() {
        cy.get('#email')
            .type('guest@example.com')
            .should('have.value', 'guest@example.com')
        cy.get('#password')
            .type('guest')
            .should('have.value', 'guest')

        cy.get('#login').click()
    })
    
})