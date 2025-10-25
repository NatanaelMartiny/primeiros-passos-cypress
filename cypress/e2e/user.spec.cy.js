import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentionAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    FirstNameField: ".orangehrm-firstname",
    LastNameField: ".orangehrm-lastname",
    genericField: ".oxd-input--active",
    DataField: "[placeholder='yyyy-dd-mm']",
    DataCloseButton: ".--close",
    ButtonSaveField: ".oxd-button--secondary"

  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.LastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('LicenceNumber')
    cy.get(selectorsList.genericField).eq(6).clear().type('2000-05-06')
    cy.get(selectorsList.DataCloseButton).click()
    cy.get(selectorsList.ButtonSaveField).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentionAlert)
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('[placeholder="Username"]').type('admin1234')
    cy.get('.oxd-button--secondary').click()
    
    
  })
})