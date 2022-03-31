describe('Custom element', () => {
  before(() => cy.visit('/custom-element'))

  it('should properly Tab through focusable elements', () => {
    // TODO: revisit if Cypress supports native tabbing or if we choose to
    // include a dependency
    // see:
    // https://github.com/cypress-io/cypress/issues/299
    // https://github.com/dmtrKovalenko/cypress-real-events
    // https://github.com/Bkucera/cypress-plugin-tab
    cy.get('body').trigger('keydown', { keyCode: 9, which: 9 }) // no worky
    cy.get('[data-cy="button1"]', { includeShadowDom: true }).should(
      'have.focus'
    )

    cy.get('body').trigger('keydown', { keyCode: 9, which: 9 })
    cy.get('[data-cy="link1"]', { includeShadowDom: true }).should('have.focus')

    cy.get('body').trigger('keydown', { keyCode: 9, which: 9 })
    cy.get('[data-cy="button2"]', { includeShadowDom: true }).should(
      'have.focus'
    )

    cy.get('body').trigger('keydown', { keyCode: 9, which: 9 })
    cy.get('[data-cy="link2"]', { includeShadowDom: true }).should('have.focus')

    cy.get('body').trigger('keydown', { keyCode: 9, which: 9 })
    cy.get('[data-cy="button1"]', { includeShadowDom: true }).should(
      'have.focus'
    )

    // TODO also traverse backward to ensure last element gets selection
  })
})
