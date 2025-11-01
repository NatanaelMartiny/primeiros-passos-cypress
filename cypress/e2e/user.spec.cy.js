import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    FirstNameField: ".orangehrm-firstname",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    LastNameField: ".orangehrm-lastname",
    genericField: ".oxd-input--active",
    DataCloseButton: ".--close",
    ButtonSaveField: ".oxd-button--secondary",
    GenericBox: ".oxd-select-text",
    GenderOption: ".oxd-radio-wrapper"

     

  }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

   cy.get(selectorsList.myInfoButton).click() 
   cy.get(selectorsList.FirstNameField).clear().type('FirstNameTest')
   cy.get(selectorsList.LastNameField).clear().type('LastNameTest')
   cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
   cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
   cy.get(selectorsList.genericField).eq(5).clear().type('LicenceNumber')
   cy.get(selectorsList.genericField).eq(6).clear().type('2025-24-10')
   cy.get(selectorsList.DataCloseButton).click()
   cy.get(selectorsList.genericField).eq(7).clear().type('2000-05-06')
   cy.get(selectorsList.DataCloseButton).click()
   cy.get(selectorsList.GenericBox).eq(0).click()
   cy.contains('Brazilian').click()
   cy.get(selectorsList.GenericBox).eq(1).click()
   cy.contains('Married').click()
   cy.get(selectorsList.GenderOption).eq(0).click()
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