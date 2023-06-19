describe('shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('learn-nx-header').should('exist');
  });
});
