class Homepage {

    getPageTitle(){
        return cy.get('h1')
    }
    getNavigation(){
        return cy.get('.navbar-nav')
    }
    getLogo(){
        return cy.get('.logo.pull-left')
    }
    getCarousel(){
        return cy.get('#slider-carousel .carousel-inner')
    }
    getFeatureItemsSection(){
        return cy.get('.features_items')
    }
    getSubscribeEmailField(){
        return cy.get('#susbscribe_email')
    }
    getSubscribeButton(){
        return cy.get('#subscribe')
    }
    getSubrscibeSuccessAlert(){
        return cy.get('.alert-success.alert')
    }
    getProductsOption(){
        return cy.get('[href="/products"]')
    }
    getCartOption(){
        return cy.get('[href="/view_cart"] .fa-shopping-cart')
    }
    getSignUpLoginOption(){
        return cy.get('[href="/login"]')
    }
    getTestCasesOption(){
        return cy.get('[href="/test_cases"] .fa-list')
    }
    getApiTestingOption(){
        return cy.get('[href="/api_list"] .fa-list')
    }
    getContacUsOption(){
        return cy.get('[href="/contact_us"]')
    }
}
export default Homepage