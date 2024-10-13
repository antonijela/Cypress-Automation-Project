import Homepage from "../../support/Pages/Homepage"
const homepage = new Homepage()

beforeEach(()=>{
    cy.visit('')
})

describe('Homepage', ()=>{
    it('should navigate to homepage successfully', ()=>{
        cy.url().should('eq', 'https://automationexercise.com/')
        homepage.getPageTitle().should('be.visible').and('contain.text', 'AutomationExercise')
        cy.title().should('eq', 'Automation Exercise')
    })

    it('should show the main navigation menu', ()=>{
        homepage.getNavigation().should('be.visible')
    })

    it('should redirect to homepage when logo is clicked', ()=>{
        homepage.getContacUsOption().click()
        homepage.getLogo().click()
        cy.url().should('eq', 'https://automationexercise.com/')
    
    })

    it('should verify that the carousel is visible on the homepage', ()=> {
        homepage.getCarousel().should('be.visible')
    })
    
    it('should show feature items on homepage', ()=> {
        homepage.getFeatureItemsSection().should('be.visible')
    })
    

    it('should subscribe to newsletter', ()=>{
        homepage.getSubscribeEmailField().clear().type('ana.qa.tester@outlook.com')
        homepage.getSubscribeButton().click()
        homepage.getSubrscibeSuccessAlert().should('be.visible').and('have.text', 'You have been successfully subscribed!')
    })
})

describe('Navigaton bar', ()=>{
    it('should redirect to the Products page', () => {
        homepage.getProductsOption().click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.get('.title.text-center').should('contain', 'Products')
    })

    it('should redirect to the Cart page', () => {
        homepage.getCartOption().click()
        cy.url().should('eq', 'https://automationexercise.com/view_cart')
        cy.get('.breadcrumb > .active').should('contain', 'Shopping Cart')
    })

    it('should redirect to the Signup/Login page', () => {
        homepage.getSignUpLoginOption().click()
        cy.url().should('eq', 'https://automationexercise.com/login')
        cy.get('.login-form').should('be.visible').and('contain', 'Login to your account')

    })

    it('should redirect to the Test Cases page', () => {
        homepage.getTestCasesOption().click()
        cy.url().should('eq', 'https://automationexercise.com/test_cases')
        cy.get('.title.text-center').should('contain', 'Test')
        
    })

    it('should redirect to the API Testing page', () => {
        homepage.getApiTestingOption().click()
        cy.url().should('eq', 'https://automationexercise.com/api_list')
        cy.get('h5').should('contain', 'API')
        
    })

    it('should redirect to the Contact Us page', () => {
        homepage.getContacUsOption().click()
        cy.url().should('eq', 'https://automationexercise.com/contact_us')
        cy.get('.title').first().should('contain', 'Contact')
    })
})