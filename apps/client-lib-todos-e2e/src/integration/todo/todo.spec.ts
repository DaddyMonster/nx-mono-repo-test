describe('client-lib-todos: ClientLibTodos component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=clientlibtodos--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to client-lib-todos!');
    });
});
