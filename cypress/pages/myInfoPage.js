class MyInfoPage {

    selectorsList = {
        FirstNameField: ".orangehrm-firstname",
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        LastNameField: ".orangehrm-lastname",
        genericField: ".oxd-input--active",
        DataCloseButton: ".--close",
        ButtonSaveField: ".oxd-button--secondary",
        GenericBox: ".oxd-select-text",
        GenderOption: ".oxd-radio-wrapper"

    }

    fillPersonalDetails(firstName, lastName) {       
        cy.get(this.selectorsList.FirstNameField).clear().type(firstName)
        cy.get(this.selectorsList.LastNameField).clear().type(lastName)
        

    }

    fillEmployeeDetails(employeeID, otherId, licenceNumber, licenceDate) {
        cy.get(this.selectorsList.genericField).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList.genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList.genericField).eq(5).clear().type(licenceNumber)
        cy.get(this.selectorsList.genericField).eq(6).clear().type(licenceDate)
        cy.get(this.selectorsList.DataCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList.ButtonSaveField).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-container')
    }

    fillStatus() {
         cy.get(this.selectorsList.genericField).eq(7).clear().type('2000-05-06')
         cy.get(this.selectorsList.DataCloseButton).click()
         cy.get(this.selectorsList.GenericBox).eq(0).click()
         cy.contains('Brazilian').click()
         cy.get(this.selectorsList.GenericBox).eq(1).click()
         cy.contains('Married').click()
         cy.get(this.selectorsList.GenderOption).eq(0).click()
   
    }
}

export default MyInfoPage