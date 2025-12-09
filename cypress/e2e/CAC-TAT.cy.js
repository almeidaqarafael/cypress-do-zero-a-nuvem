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

  it('seleciona um produto (youtube) por seu texto', () => {
    cy.get('#product').select('YouTube')
      .should('have.value', 'youtube')
  });

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('mentoria')
      .should('have.value', 'mentoria')
  });

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1)
      .should('have.value', 'blog')
  });

  it('marca o tipo de atendimento "Feedback', () => {
    cy.get('input[type="radio"][value="feedback"]').check('feedback')
      .should('be.checked', 'feedback')
  });

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(tipoDeAtendimento => {
        cy.wrap(tipoDeAtendimento).check()
          .should('be.checked')
      })
  });

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]').check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#phone-checkbox').check()
      .should('be.checked')
    cy.EnviaFormularioComSucesso(usuarioRandomico)

    cy.get('.phone-label-span')
      .should('be.visible')
      .and('contain', '(obrigatório)')

  });

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('doc')
    cy.get('#file-upload')
      .selectFile('@doc')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target' ,'_blank')
  });

  it('testa a página da política de privacidade de forma independente', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target', '_blank')
      .click()

    cy.get('#title')
      .should('be.visible')
      .and('have.text', 'CAC TAT - Política de Privacidade')
  });

})
