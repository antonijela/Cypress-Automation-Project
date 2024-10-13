class LoginPage{

    //ELEMENTS
    //LOGIN FORM
    getLoginForm(){
        return cy.get('.login-form')
    }
    getLoginTitle(){
        return cy.get('.login-form h2')
    }
    getEmailLoginField(){
        return cy.get('[data-qa="login-email"]')
    }
    getPasswordLoginField(){
        return cy.get('[data-qa="login-password"]')
    }
    getLoginButton(){
        return cy.get('[data-qa="login-button"]')
    }
    getLogoutOption(){
        return cy.get('[href="/logout"]')
    }
    //SIGNUP FORM
    getSignUpForm(){
        return cy.get('.signup-form')
    }
    getSignUpTitle(){
        return cy.get('.signup-form h2')
    }
    getSignUpNameField(){
        return cy.get('[data-qa="signup-name')
    }
    getSignUpEmailField(){
        return cy.get('[data-qa="signup-email"]')
    }
    getSignUpButton(){
        return cy.get('[data-qa="signup-button"]')
    }
    getDeleteButton(){
        return cy.get('[href="/delete_account"]')
    }
    getAccountDeletedNotification(){
        return cy.get('[data-qa="account-deleted"]')
    }

    //METHODS
    login(email, password) {
        this.getEmailLoginField().clear().type(email)
        this.getPasswordLoginField().clear().type(password)
        this.getLoginButton().click();
    }

    signUp(name, email) {
        this.getSignUpNameField().clear().type(name)
        this.getSignUpEmailField().clear().type(email)
        this.getSignUpButton().click()
    }

    signUpWithEmptyFields(name, email) {
        if (name) {
            cy.get('[data-qa="signup-name"]').clear().type(name)
        } else {
            cy.get('[data-qa="signup-name"]').clear()
        }
    
        if (email) {
            cy.get('[data-qa="signup-email"]').clear().type(email)
        } else {
            cy.get('[data-qa="signup-email"]').clear()
        }
    
        cy.get('[data-qa="signup-button"]').click()

        if (!name) {
            cy.get('[data-qa="signup-name"]').invoke('prop', 'validationMessage').should('eq', 'Please fill out this field.')
        }
    
        if (!email) {
            cy.get('[data-qa="signup-email"]').invoke('prop', 'validationMessage').should('eq', 'Please fill out this field.')
        }
    
        cy.get('[data-qa="signup-button"]').should('be.visible')
    }
    loginWithEmptyFields(email, password){
        if (email) {
            cy.get('[data-qa="login-email"]').clear().type(email)
        } else {
            cy.get('[data-qa="login-email"]').clear()
        }
        if (password) {
            cy.get('[data-qa="login-password"]').clear().type(password)
        } else {
            cy.get('[data-qa="login-password"]').clear()
        }
        cy.get('[data-qa="login-button"]').click()
        if(!email){
            cy.get('[data-qa="login-email"]').invoke('prop', 'validationMessage').should('eq', 'Please fill out this field.')
        }
        if(!password){
            cy.get('[data-qa="login-password"]').invoke('prop', 'validationMessage').should('eq', 'Please fill out this field.')
        }
        cy.get('[data-qa="login-button"]').should('be.visible')
    }
    //

}
export default LoginPage