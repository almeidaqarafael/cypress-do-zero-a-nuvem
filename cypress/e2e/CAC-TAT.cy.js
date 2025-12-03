/// <reference types="cypress" />

import { fakerPT_BR as faker } from '@faker-js/faker';

beforeEach('', () => {
  cy.visit('src/index.html')
});


describe('Central de Atendimento ao Cliente TAT', () => {

    const usuarioRandomico = {
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        email: faker.internet.email(),
        texto: faker.lorem.paragraph()
    }

  it('verifica o título da aplicação', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  });

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.clock()

    cy.EnviaFormularioComSucesso(usuarioRandomico)

    cy.get('.success').should('be.visible')
    cy.tick(3000);
    cy.get('.success').should('not.be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.clock();

    cy.get('#firstName').type(usuarioRandomico.nome)
    cy.get('#lastName').type(usuarioRandomico.sobrenome)
    cy.get('input[type="email"]').type(usuarioRandomico.email)
    cy.get('button[type="submit"]').click()

    cy.get('.error')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')

    cy.tick(3000)

    cy.get('.error').should('not.be.visible')
  });

  it('verifica validação do campo de telefone', () => {
    cy.get('#phone')
      .type('uiauahuiahua')
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')

  });

  it('verifica o campo de telefone obrigatório', () => {

    cy.clock();

    cy.get('#firstName').type(usuarioRandomico.nome)
    cy.get('#lastName').type(usuarioRandomico.sobrenome)
    cy.get('input[type="email"]').type(usuarioRandomico.email)
    cy.get('#open-text-area').type(usuarioRandomico.texto, { delay: 0 })
    cy.get('#phone-checkbox').check()

    cy.get('button[type="submit"]').click()

    cy.get('.phone-label-span')
      .should('be.visible')
      .and('contain', '(obrigatório)')
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type(usuarioRandomico.nome)
      .should('have.value', usuarioRandomico.nome)
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type(usuarioRandomico.sobrenome)
      .should('have.value', usuarioRandomico.sobrenome)
      .clear()
      .should('have.value', '')

    cy.get('input[type="email"]')
      .type(usuarioRandomico.email)
      .should('have.value', usuarioRandomico.email)
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')

  });

})
