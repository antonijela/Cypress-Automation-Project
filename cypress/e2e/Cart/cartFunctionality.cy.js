import CartPage from "../../support/Pages/CartPage"
const cartPage = new CartPage()
import ProductsPage from "../../support/Pages/ProductsPage"
const productsPage = new ProductsPage()
import LoginPage from "../../support/Pages/LoginPage"
const loginPage = new LoginPage()


beforeEach(function(){
    cy.visit('/products')
    cy.fixture('loginData').then((data) => {
        this.validCredentials = data.validLoginData
    })
})

describe('Adding and removing products from cart', ()=>{
    it('should add product to cart by clicking the add to cart button on the product card', ()=>{
        productsPage.getAddToCartButton().eq(0).click()
        productsPage.getNotificationAdded().should('be.visible')
        productsPage.getViewCart().click()
        cartPage.getCartInfo().should('be.visible')
        cartPage.getEmptyCartInfo().should('not.be.visible')
    })
    
    it('should add multiple products to cart by clicking the add to cart button on the product card', ()=>{
        for(let i = 0; i < 7; i++){
            if(i % 2 == 0){
                productsPage.getAddToCartButton().eq(i).click();
                productsPage.getNotificationAdded().should('be.visible')
                productsPage.getContinueShoppingButton().click()
            }
        }
        cartPage.getViewCart().click()
        cartPage.getCartInfo().should('be.visible')
        cartPage.getEmptyCartInfo().should('not.be.visible')
    })
    
    it('should add product to cart by clicking the add to cart button on the product info page', ()=>{
        productsPage.getViewProductButton().eq(0).click()
        productsPage.getAddToCartButtonProductInfoPage().click()
        productsPage.getNotificationAdded().should('be.visible')
        productsPage.getViewCart().click()
        cartPage.getCartInfo().should('be.visible')
        cartPage.getEmptyCartInfo().should('not.be.visible')
    })
    
    it('should remove product from cart', ()=> {
        productsPage.getAddToCartButton().eq(0).click()
        productsPage.getNotificationAdded().should('be.visible')
        productsPage.getViewCart().click()
    
        cartPage.getCartInfo().should('be.visible')
        cartPage.getCartProductName().should('exist')
    
        cartPage.getRemoveFromCartButton().click()
        cartPage.getCartProductName().should('not.exist')
        cartPage.getCartEmptyNotification().should('be.visible').and('have.text', 'Cart is empty! Click here to buy products.')
    })
    
    it('should remove multiple products from cart', ()=> {
        for(let i = 0; i < 7; i++){
            if(i % 2 == 0){
                productsPage.getAddToCartButton().eq(i).click();
                productsPage.getNotificationAdded().should('be.visible')
                productsPage.getContinueShoppingButton().click()
            }
        }
        cartPage.getViewCart().click()
        cartPage.getCartProductName().should('have.length', 4)
    
        cartPage.getRemoveFromCartButton().then((removeButton)=>{
            for(let i = 0; i < removeButton.length; i++){
                cy.wrap(removeButton[i]).click()
            }
        })
        cartPage.getCartProductName().should('not.exist')
        cartPage.getCartEmptyNotification().should('be.visible').and('have.text', 'Cart is empty! Click here to buy products.');
    })
})
describe('Checkout process', function(){
    it('should complete checkout process successfully', function(){
        cy.visit('/login')
        const {email, password} = this.validCredentials
        loginPage.login(email, password)
        cy.visit('/products')
        productsPage.getAddToCartButton().eq(0).click()
        productsPage.getNotificationAdded().should('be.visible')
        productsPage.getViewCart().click()
        cartPage.getCheckoutButton().click()
        cy.url().should('eq', 'https://automationexercise.com/checkout')
        cartPage.getAddressDetailsSection().should('be.visible')
        cartPage.getReviewOrderDetailsSection().should('be.visible')
        cartPage.getCommentField().should('be.visible')
        cartPage.getPlaceOrderButton().click()
        cy.url().should('eq', 'https://automationexercise.com/payment')
        cartPage.getNameOnCardField().type('Ana')
        cartPage.getCardNumberField().type('123456789101')
        cartPage.getCVCField().type('311')
        cartPage.getExpirationMonthField().type('07')
        cartPage.getExpirationYearField().type('2028')
        cartPage.getPayAndConfirmOrderButton().click()
        cy.url().should('include', 'payment_done')
        cartPage.getOrderPlacedNotification().should('have.text', 'Order Placed!')
    })
})
