class ProductsPage{
    getAllPRoductsSection(){
        return cy.contains('.text-center', 'All Products')
    }
    getAllProductsList(){
        return cy.get('.col-sm-9.padding-right .col-sm-4')
    }
    getProductsName(){
        return cy.get('.col-sm-9.padding-right .col-sm-4 .productinfo p')
    }
    getProductsPrice(){
        return cy.get('.col-sm-9.padding-right .col-sm-4 .productinfo h2')
    }
    getProductsImage(){
        return cy.get('.col-sm-9.padding-right .col-sm-4 .productinfo img')
    }
    getViewProductButton(){
        return cy.get('a[href^="/product_details/"]')
    }
    getProductInfoName(){
        return cy.get('.product-information h2')
    }
    getSearchField(){
        return cy.get('#search_product')
    }
    getSearchIcon(){
        return cy.get('#submit_search')
    }
    getSearchedItemName(){
        return cy.get('.productinfo p')
    }

    getWomanCategory(){
        return cy.get('[href="#Women"] .pull-right')
    }
    getDressCategory(){
        return cy.get('[href="/category_products/1"]')
    }
    getMenCategory(){
        return cy.get('[href="#Men"] .pull-right')
    }
    getTShirtsCategory(){
        return cy.get('[href="/category_products/3"]')
    }
    getAddToCartButton(){
        return cy.get('.add-to-cart')
    }
    getNotificationAdded(){
        return cy.contains('.text-center', 'Your product has been added to cart.')
    }
    getViewCart(){
        return cy.get('.modal-body [href="/view_cart"]')
    }
    getAddToCartButtonProductInfoPage(){
        return cy.get('.btn-default.cart')
    }
    getContinueShoppingButton(){
        return cy.get('.btn-success')
    }
}
export default ProductsPage