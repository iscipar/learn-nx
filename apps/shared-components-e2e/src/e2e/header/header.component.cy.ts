describe('shared-components', () => {
  it('should not be signed', () => {
    cy.visit('/iframe.html?id=headercomponent--not-signed')
    cy.get('#home-button').should('not.exist');
    cy.get('#login-button').should('exist');
    cy.get('#logout-button').should('not.exist');
  });
  it('should be signed', () => {
    cy.visit('/iframe.html?id=headercomponent--signed')
    cy.get('#home-button').should('exist');
    cy.get('#login-button').should('not.exist');
    cy.get('#logout-button').should('exist');
  });
});
