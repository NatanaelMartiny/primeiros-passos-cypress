class LoginPage {


    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentionAlert: "[role='alert']"
        }

        return selectors
    }
//função abaixo para visitar o site
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentionAlert)
    }
}

export default LoginPage