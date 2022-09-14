import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  xit('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome todos');
  });

  it('should display todos', () => {
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });

  it('should add todos', () => {
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
