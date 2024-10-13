import CartPage from "../../support/Pages/CartPage"
const cartPage = new CartPage()
import ProductsPage from "../../support/Pages/ProductsPage"
const productsPage = new ProductsPage()

beforeEach(function(){
    cy.visit('/products')
})

it('should display the "All Products" section', ()=> {
    productsPage.getAllPRoductsSection().should('be.visible')
})

it('should display at least one product', ()=> {
    productsPage.getAllProductsList().should('have.length.greaterThan', 0)
})


it('should display all products', ()=>{
    productsPage.getAllProductsList().should('have.length', 34)
})

it('should display all product details, name, price, image', ()=>{
        productsPage.getProductsName().should('be.visible')
        productsPage.getProductsPrice().should('be.visible')
        productsPage.getProductsImage().should('be.visible')
})

it('should navigate to the correct product detail page when clicking on a product', ()=> {
    productsPage.getProductsName().each((name, index) => {
        if (index >= 10) {
            return false
        }
        cy.wrap(name).then((name) => {
            const productName = name.text()
            productsPage.getViewProductButton().eq(index).click()
            cy.url().should('include', '/product_details/')
            productsPage.getProductInfoName().should('have.text', productName)
            cy.go('back')
            productsPage.getProductsName().should('be.visible')
        })
    })
})

it('should return relevant products based on search input', ()=>{
    const searchWords = 'summer white top'
    productsPage.getSearchField().clear().type(searchWords)
    productsPage.getSearchIcon().click()

    cy.url().should('include', 'search')
    productsPage.getSearchedItemName().then((name) => {
        const productName = name.text().toLowerCase()
        expect(productName).to.equal(searchWords.toLowerCase())
    })
})

it('should not display any products for invalid search input', ()=>{
    const searchWords = 'sdxfcgv'
    productsPage.getSearchField().clear().type(searchWords)
    productsPage.getSearchIcon().click()

    productsPage.getSearchedItemName().should('not.exist')
})

it('should display products by category', ()=>{
    productsPage.getWomanCategory().click()
    productsPage.getDressCategory().click()
    cy.url().should('include', 'category_products')
    productsPage.getSearchedItemName().should('exist').and('contain', 'Dress')
})

it('should display different products for category switch', ()=> {
    productsPage.getWomanCategory().click()
    productsPage.getDressCategory().click()
    cy.url().should('include', 'category_products')
    productsPage.getSearchedItemName().should('exist').and('contain', 'Dress')

    productsPage.getMenCategory().click()
    productsPage.getTShirtsCategory().click()
    cy.url().should('include', 'category_products')
    productsPage.getSearchedItemName().should('exist').and('contain', 'T-Shirt')
    productsPage.getSearchedItemName().should('not.contain', 'Dress')
})

it('should add product to cart by add to cart button', ()=>{
    productsPage.getAddToCartButton().eq(0).click()
    productsPage.getNotificationAdded().should('be.visible')
    productsPage.getViewCart().click()
    cartPage.getCartInfo().should('be.visible')
    cartPage.getEmptyCartInfo().should('not.be.visible')
})







