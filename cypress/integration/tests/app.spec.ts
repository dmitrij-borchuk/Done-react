/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [{ title: 'ToDo 1', done: true, objectId: 'id1' }],
    })
    cy.visit('http://localhost:3000/')
  })

  it('should render todo list', () => {
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
    cy.route({
      method: 'GET',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [{ title: 'ToDo 1', done: true, objectId: 'id1' }],
    })
    cy.getById('list-item').first().should('have.class', 'line-through')
  })

  it('should have add button', () => {
    cy.getById('add-btn').should('exist')
  })
})

context('Add item screen', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [{ title: 'ToDo 1', done: true, objectId: 'id1' }],
    })
    cy.route({
      method: 'POST',
      url: `${Cypress.env('serverUrl')}/data/items`,
      response: [{ title: 'ToDo 2', done: true, objectId: 'id2' }],
    }).as('postItem')
    cy.visit('http://localhost:3000/')
    cy.getById('add-btn').click()
  })

  it('should navigate to list when back btn is clicked', () => {
    cy.getById('back-btn').click()
    cy.getById('list').should('exist')
  })

  it('should be able to add item', () => {
    cy.getById('edit-dialog-title-field').type('task 1')
    cy.getById('edit-dialog-add-btn').click()
    cy.wait('@postItem')
      .its('requestBody')
      .should('include', { title: 'task 1' })
  })
})
