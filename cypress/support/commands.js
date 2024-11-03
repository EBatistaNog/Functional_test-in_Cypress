
Cypress.Commands.add('login', () => {
  
    cy.origin('https://testqa.com', () => {
        cy.get('#signInName').type("qaAuto");
        cy.get('#password').type('test@1234');
        cy.get('#continue').click();
    });

});





