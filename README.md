# 🧪 Cypress do Zero à Nuvem

Este repositório contém o projeto de automação de testes End-to-End (E2E) desenvolvido durante o curso **[Testes automatizados com Cypress - Básico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?couponCode=CM251217G1)**, ministrado pelo professor **[Walmyr Filho](https://github.com/wlsf82)** na Udemy.

O objetivo principal é demonstrar a aplicação de conceitos fundamentais de testes automatizados utilizando o framework Cypress em uma aplicação web realista.

## 💻 Sobre a Aplicação (CAC TAT)

A aplicação alvo dos testes é a **Central de Atendimento ao Cliente TAT (CAC TAT)**. Ela simula um formulário de contato para suporte, desenvolvida com HTML, CSS e JavaScript.

### Funcionalidades e Cenários de Teste

Os testes cobrem as seguintes regras de negócio e interações:

* **Preenchimento de Formulário:** Validação de envio com sucesso preenchendo os campos obrigatórios:
    * Nome e Sobrenome.
    * E-mail (com validação de formato).
    * Área de texto ("Como podemos te ajudar?").
* **Campos Extras:** Interação com campos de Telefone, Dropdown de produtos (Blog, Cursos, etc.), Radio buttons (Tipo de atendimento) e Checkbox (Meio de contato).
* **Upload de Arquivos:** Testes de anexo de arquivos no formulário.
* **Regras de Negócio Condicionais:**
    * O campo **Telefone** torna-se obrigatório automaticamente se o checkbox "Telefone" for marcado como meio de contato preferencial.
    * Se desmarcado, a obrigatoriedade é removida.
* **Feedback Visual:**
    * ✅ **Sucesso:** Exibição de mensagem com fundo cinza por 3 segundos.
    * ⚠️ **Erro:** Exibição de mensagem com fundo roxo por 3 segundos caso campos obrigatórios não sejam preenchidos.
* **Links Externos:** Verificação da abertura da **Política de Privacidade** em uma nova aba.

## 🛠️ Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)**: Framework de testes automatizados.
* **Node.js**: Ambiente de execução JavaScript.
* **NPM**: Gerenciador de pacotes.
* **VS Code**: Editor de código fonte.

## 📋 Pré-requisitos

Para rodar este projeto localmente, certifique-se de ter as seguintes ferramentas instaladas (versões utilizadas no desenvolvimento):

* **Git**: `2.42.1`
* **Node.js**: `v20.13.1`
* **npm**: `10.8.1`

## 🚀 Instalação e Execução

Siga os passos abaixo para configurar o ambiente de testes em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/almeidaqarafael/cypress-do-zero-a-nuvem.git](https://github.com/almeidaqarafael/cypress-do-zero-a-nuvem)
   ---

## 🌟 Mostre seu apoio

Se este projeto foi útil para você ou se você gostou da estrutura dos testes, por favor, deixe uma **estrela** ⭐️ no repositório!

Isso ajuda a aumentar a visibilidade do projeto e sinaliza para recrutadores que o conteúdo é relevante.

---

_Feito com dedicação por Rafa Almeida._