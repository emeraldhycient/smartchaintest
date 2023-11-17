describe('Fetching Post', () => {
    it('it should fetch all post', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/post/1')

        cy.get('p').contains('sunt aut facere')
    })
})