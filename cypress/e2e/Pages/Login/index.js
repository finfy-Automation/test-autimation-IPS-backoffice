class Login {
  accessPage(login) {
    cy.visit(login)
  }
  enterInputData(usernam, password) {
    cy.get('#username').type(usernam)
    cy.get('#password').type(password)
  }
  clickButton() {
    cy.contains('Login').click()
  }
  successfulLogin() {
    cy.contains('Allexis Figueiredo')
    cy.location('pathname', {timeout: 5000}).should('not.eq', 'login')
  }
  loginError() {
    cy.contains('Erro ao realizar o login!')
    cy.url().should('include', 'login')
  }
  inputError() {
    cy.contains('Email é obrigatório!')
    cy.contains('Senha é obrigatório!')
  }
  authenticateError() {
    cy.contains('ACESSO A CONTA')
    cy.location('pathname', {timeout: 5000}).should('include', 'login')
  }
}
export default new Login()
