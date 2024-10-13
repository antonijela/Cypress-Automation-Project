import LoginPage from "../../support/Pages/LoginPage"
const loginPage = new LoginPage()
import SignUpPage from "../../support/Pages/SignUpPage"
const signUpPage = new SignUpPage()

beforeEach(function(){
    cy.visit('login')
    loginPage.getSignUpForm().should('be.visible')
    loginPage.getSignUpTitle().should('have.text', 'New User Signup!')
    cy.fixture('invalidSignUpData').then((data)=>{
        this.invalidCredentials = data.invalidCredentials
        this.emptyFieldsData = data.emptyFieldsData
    })
})

describe.skip('Sign up functionality with valid credentials', ()=>{
    it('should sign up successfully with valid credentials', ()=>{
        //In order for this test case to work, you need to first delete the account -> login with ana.qa.tester@outlook.com (password: 1234567), then delete account
        //Login/SignUp Page
        loginPage.signUp('Ana', 'ana.qa.tester@outlook.com')
        //SignUp Page Next Steps
        cy.url().should('eq', 'https://automationexercise.com/signup')
        signUpPage.getGenderCheckbox().check().should('be.checked')
        signUpPage.getNameField().should('have.value', 'Ana')
        signUpPage.getEmailField().should('have.value', 'ana.qa.tester@outlook.com')
        signUpPage.getPasswordField().clear().type('1234567')
        signUpPage.getDayDropdown().select('4')
        signUpPage.getMonthDropdown().select('June')
        signUpPage.getYearDropdown().select('1995')
        signUpPage.getNewsletterCheckbox().check().should('be.checked')
        signUpPage.getOffersCheckbox().check().should('be.checked')
        signUpPage.getFirstNameField().type('Ana')
        signUpPage.getLastNameField().clear().type('Gasic')
        signUpPage.getCompanyField().clear().type('Company name')
        signUpPage.getAddress1Field().clear().type('Adresa 1')
        signUpPage.getAddress2Field().clear().type('Adresa 2')
        signUpPage.getCountryDropdown().select('United States')
        signUpPage.getStateField().clear().type('California')
        signUpPage.getCityField().clear().type('Los Angeles')
        signUpPage.getZipCodeField().clear().type('90001')
        signUpPage.getMobileNumberField().type('123456789')
        signUpPage.getCreateAccountButton().click()
        signUpPage.getNotification().should('have.text', 'Account Created!')
        cy.url().should('eq', 'https://automationexercise.com/account_created')
    })
    it('should sign up successfully with only required valid credentials', ()=>{
        //Login/SignUp Page
        loginPage.signUp('Ana', 'ana.qa.tester@outlook.com')
        
        //SignUp Page Next Steps
        cy.url().should('eq', 'https://automationexercise.com/signup')
        cy.get('#name').should('have.value', 'Ana')
        cy.get('#email').should('have.value', 'ana.qa.tester@outlook.com')
        cy.get('#password').clear().type('1234567')
        cy.get('#first_name').clear().type('Ana')
        cy.get('#last_name').clear().type('Gasic')
        cy.get('#address1').clear().type('Adresa 1')
        cy.get('#country').select('United States')
        cy.get('#state').clear().type('California')
        cy.get('#city').clear().type('Los Angeles')
        cy.get('#zipcode').clear().type('90001')
        cy.get('#mobile_number').type('123456789')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"] b').should('have.text', 'Account Created!')
        cy.url().should('eq', 'https://automationexercise.com/account_created')
    })
})

describe('Sign up functionality with invalid credentials', function(){
    it('should not sign up with invalid credentials', function(){
        this.invalidCredentials.forEach(({name, email})=>{
            loginPage.signUp(name, email)
            loginPage.getSignUpButton().should('be.visible')
        })
    })

    
    it('should not sign up with invalid email format', ()=>{
        loginPage.getSignUpNameField().clear().type('Ana')
        loginPage.getSignUpEmailField().clear().type('something@fkjh')
        // App allows sign-up with an invalid email format, so this test uses regex to check. A failure here indicates a bug.
       loginPage.getSignUpEmailField().invoke('val').then((email) => {
            expect(email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
        })
        loginPage.getSignUpButton().click()
        loginPage.getSignUpButton().should('be.visible')
    })

    it('should not sign up with empty fields', function(){
        this.emptyFieldsData.forEach(({name, email})=>{
            loginPage.signUpWithEmptyFields(name, email)
            loginPage.getSignUpButton().should('be.visible')
        })
    })

    it('should show notification for existing email', ()=>{
        loginPage.signUp('Ana', 'ana.qa.tester@outlook.com')
        cy.contains('Email Address already exist!').should('be.visible')
        loginPage.getSignUpButton().should('be.visible')
    })

})
