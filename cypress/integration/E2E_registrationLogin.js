// KNEX
// const KNEX_DB = require('../../backend/data/dbConfig.js')

// - ARRANGE - //
describe('Test User Registration & Login', function() {
    // - ACT - // 
    // beforeEach(function() {
    //     // Truncate Users Table
    //     cy.task('query', {
    //         sql: `TRUNCATE TABLE users RESTART IDENTITY CASCADE`
    //     })
    // })

    it('Add test to registration form and submits', function() {
        // Go To Registration Page
        cy.visit("http://localhost:3000").get(':nth-child(1) > .MuiButton-label').click()
        
        // Email
        cy.get('#email').type('Cypress_registrationTest@example.com')
            
        // Username
        cy.get('#username').type('Cypress_registrationTest')

        // Password
        cy.get('#password').type('Cypress_registrationTest')

        // Submit
        cy.get('.MuiButton-contained > .MuiButton-label').click()
    })

    afterEach(function() {
        // Delete Created User
        cy.task('query', {
            sql: `
                DELETE FROM users

                WHERE email = 'Cypress_registrationTest@example.com'
            `
        })

        // Reset Auto Increment
        // cy.task('query', {
        //     sql: `
        //         SELECT MAX is from users

        //         ALTER TABLE `table` AUTO_INCREMENT = number;
        //     `
        // })
    })

})