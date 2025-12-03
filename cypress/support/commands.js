
Cypress.Commands.add('EnviaFormularioComSucesso', (user) => {

    const dados = user

    cy.get('#firstName').type(dados.nome)
    cy.get('#lastName').type(dados.sobrenome)
    cy.get('input[type="email"]').type(dados.email)

    cy.get('#open-text-area').type(dados.texto, { delay: 0 })

    cy.get('button[type="submit"]').click()
});