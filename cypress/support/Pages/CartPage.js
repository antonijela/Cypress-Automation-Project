class CartPage{
    getViewCart(){
        return cy.get('[href="/view_cart"] .fa-shopping-cart')
    }
    getCartInfo(){
        return cy.get('#cart_info .quantity')
    }
    getEmptyCartInfo(){
        return cy.get('#empty_cart')
    }
    getCartProductName(){
        return cy.get('.cart_description h4')
    }
    getRemoveFromCartButton(){
        return cy.get('.cart_quantity_delete')
    }
    getCartEmptyNotification(){
        return cy.get('#empty_cart p')
    }
    getCheckoutButton(){
        return cy.get('.check_out')
    }
    getLoginOption(){
        return cy.get('.modal-body [href="/login"]')
    }
    getAddressDetailsSection(){
        return cy.contains('.step-one h2', 'Address Details')
    }
    getReviewOrderDetailsSection(){
        return cy.contains('.step-one h2', 'Review Your Order')
    }
    getCommentField(){
        return cy.get('[name="message"]')
    }
    getPlaceOrderButton(){
        return cy.get('[href="/payment"]')
    }
    getNameOnCardField(){
        return cy.get('[data-qa="name-on-card"]')
    }
    getCardNumberField(){
        return cy.get('[data-qa="card-number"]')
    }
    getCVCField(){
        return cy.get('[data-qa="cvc"]')
    }
    getExpirationMonthField(){
        return cy.get('[data-qa="expiry-month"]')
    }
    getExpirationYearField(){
        return cy.get('[data-qa="expiry-year"]')
    }
    getPayAndConfirmOrderButton(){
        return cy.get('[data-qa="pay-button"]')
    }
    getOrderPlacedNotification(){
        return cy.get('[data-qa="order-placed"]')
    }
}
export default CartPage