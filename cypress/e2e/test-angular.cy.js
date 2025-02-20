describe('Mon premier test Angular', () => {
    it('Vérifie que l\'application Angular s\'affiche', () => {
      cy.visit('http://localhost:4200');
      //cy.contains('Welcome');
       cy.get('h1').contains('Hello, test-angular-cypress-jenkins')
    });
  });
  