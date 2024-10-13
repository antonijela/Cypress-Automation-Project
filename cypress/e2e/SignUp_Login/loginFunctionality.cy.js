import LoginPage from "../../support/Pages/LoginPage"
const loginPage = new LoginPage()

//if account is not yet created use "validLoginData" from "loginData.json" file to sign up or simply use sign up automated test
beforeEach(function(){
    cy.visit('/login')
    loginPage.getLoginForm().should('be.visible')
    loginPage.getLoginTitle().should('have.text', 'Login to your account')
    cy.fixture('loginData').then((data) => {
        this.validCredentials = data.validLoginData
        this.invalidCredentials = data.invalidLoginData
        this.emptyFieldsData = data.emptyFieldsData
    })
})

describe('Login Functionality with Valid Credentials', function(){
    const userName = 'Ana';
    it('should login with valid credentials', function(){
        const {email, password} = this.validCredentials
        loginPage.login(email, password)
        cy.url().should('eq', 'https://automationexercise.com/')
        loginPage.getLogoutOption().should('be.visible')
        cy.contains(`Logged in as ${userName}`).should('be.visible')
    })

    it('should log out successfully', function(){
        const {email, password} = this.validCredentials
        loginPage.login(email, password)
        cy.url().should('eq', 'https://automationexercise.com/')
        loginPage.getLogoutOption().should('be.visible')
        cy.contains(`Logged in as ${userName}`).should('be.visible')
        loginPage.getLogoutOption().click()
        cy.url().should('eq', 'https://automationexercise.com/login')
        loginPage.getLoginForm().should('be.visible')
    })
})

describe('Login Functionality with Invalid Credentials', function(){
    it('should not login with invalid credentials', function() {
        this.invalidCredentials.forEach(({ email, password }) => {
            loginPage.login(email, password)
            cy.contains('Your email or password is incorrect!').should('be.visible')
        })
    })

    it('should not login with empty fields', function(){
        this.emptyFieldsData.forEach(({email, password})=>{
            loginPage.loginWithEmptyFields(email, password)
        })
    }) 
})
describe.skip('Account removal', function(){
    it('should successfully delete an account', function(){
        const {email, password} = this.validCredentials
        loginPage.login(email, password)
        cy.url().should('eq', 'https://automationexercise.com/')
        loginPage.getLogoutOption().should('be.visible')
        loginPage.getDeleteButton().click()
        loginPage.getAccountDeletedNotification().should('have.text', 'Account Deleted!')
    })
})