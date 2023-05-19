
/// <reference types="cypress" />

describe('RFs', () => {

  it('Realizar Login', () => {

    // cy.get - Busca de elemento
    // .type  - Insere um texto

    //cy.visit('https://plataforma.xglobal.com.br/login')

    cy.get('#username').type('robo.rf')

    cy.get('#password').type('@Xglobal23')

    cy.get('.MuiButtonBase-root').click()

    //cy.get('href="/cadastros"]').click()
  })

  it('Realizar Cadastro do RF', () => {

    

  })

})
