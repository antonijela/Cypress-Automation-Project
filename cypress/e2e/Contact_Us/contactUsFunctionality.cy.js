import ContactUsPage from "../../support/Pages/ContactUsPage"
const contactUsPage = new ContactUsPage()

beforeEach(function(){
    cy.visit('/contact_us')
    cy.fixture('contactFormData').then((data)=>{
        this.validCredentials = data.validData[0]
        this.invalidCredentials = data.invalidData
    })
})

it('should submit contact form with valid data', function(){
    contactUsPage.getContactUsForm().should('be.visible')
    const{name, email, subject, message} = this.validCredentials
    contactUsPage.contactUsForm(name, email, subject, message)
    contactUsPage.getSuccessNotification().should('be.visible').and('have.text', 'Success! Your details have been submitted successfully.')
})

it('should not submit contact form with invalid data', function(){
    contactUsPage.getContactUsForm().should('be.visible')
    this.invalidCredentials.forEach((invalidSet)=>{
        const{name, email, subject, message} = invalidSet
        contactUsPage.contactUsForm(name, email, subject, message)
        contactUsPage.getSubmitButton().should('be.visible')
    })
})

it('should not submit contact form with empty fields', function(){
    contactUsPage.contactUsFormEmptyFields()
    contactUsPage.getSubmitButton().should('be.visible')
})