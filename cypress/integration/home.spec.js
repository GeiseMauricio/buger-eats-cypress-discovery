
describe('home page', ()=>{
    it('app deve estar online', ()=>{
        
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja parceiro entregador pela buger')
    })
})