describe('Fetching Posts', () => {
    it('it should fetch all post', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "post" and click it
        cy.get('a[href*="post"]').click()

        // The new url should include "/post"
        cy.url().should('include', '/post')

        // // The new page should contain an h1 with "About page"
        // cy.get('h1').contains('About Page')
    })
})