describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/deployFrontTodo')
  })
})

//test addtodo

describe('template spec', () => {
  it('Has a todo', () => {
    cy.visit('http://localhost:3001/deployFrontTodo')
    cy.get('input[name="addtodo"]')
    .type('Jane');
    cy.get('button[name="button"]').click()
    cy.get('li').should('contain', 'Jane')
  });
});