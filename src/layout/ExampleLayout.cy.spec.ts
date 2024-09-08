import ExampleLayout from './ExampleLayout.vue';

describe('Example Layout', () => {
  beforeEach(() => {
    cy.mount(ExampleLayout);
  });

  it('should have two menu', () => {
    cy.contains('Home');
    cy.contains('Another Page');
  });
});
