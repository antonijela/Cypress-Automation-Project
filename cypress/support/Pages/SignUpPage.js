class SignupPage{

    //ELEMENTS
    getGenderCheckbox(){
        return cy.get('#id_gender2')
    }
    getNameField(){
        return cy.get('#name')
    }
    getEmailField(){
        return cy.get('#email')
    }
    getPasswordField(){
        return cy.get('#password')
    }
    getDayDropdown(){
        return cy.get('#days')
    }
    getMonthDropdown(){
        return cy.get('#months')
    }
    getYearDropdown(){
        return cy.get('#years')
    }
    getNewsletterCheckbox(){
        return cy.get('#newsletter')
    }
    getOffersCheckbox(){
        return cy.get('#newsletter')
    }
    getFirstNameField(){
        return cy.get('#first_name')
    }
    getLastNameField(){
        return cy.get('#last_name')
    }
    getCompanyField(){
        return cy.get('#company')
    }
    getAddress1Field(){
        return cy.get('#address1')
    }
    getAddress2Field(){
        return cy.get('#address2')
    }
    getCountryDropdown(){
        return cy.get('#country')
    }
    getStateField(){
        return cy.get('#state')
    }
    getCityField(){
        return cy.get('#city')
    }
    getZipCodeField(){
        return cy.get('#zipcode')
    }
    getMobileNumberField(){
        return cy.get('#mobile_number')
    }
    getCreateAccountButton(){
        return cy.get('[data-qa="create-account"]')
    }
    getNotification(){
        return cy.get('[data-qa="account-created"] b')
    }

}

export default SignupPage