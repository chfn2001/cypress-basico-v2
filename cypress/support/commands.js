Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Carlos')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('carlos.ferreira@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
