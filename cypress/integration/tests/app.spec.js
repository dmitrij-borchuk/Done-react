/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render todo list', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [
        { title: 'ToDo 1', done: false, objectId: 'id1' },
        { title: 'ToDo 2', done: true, objectId: 'id2' },
      ],
    })
    cy.getById('list-item').its('length').should('eq', 2)
  })

  it('should render crossed item', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [{ title: 'ToDo 1', done: true, objectId: 'id1' }],
    })
    cy.getById('list-item').first().should('have.class', 'line-through')
  })
})
