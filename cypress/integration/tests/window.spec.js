/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render app', () => {
    cy.get('[data-testid=init-instruction]').should(
      'have.text',
      'Edit src/App.tsx and save to reload.',
    )
  })
})