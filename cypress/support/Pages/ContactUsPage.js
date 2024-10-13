class ContactUsPage{
    getContactUsForm(){
        return cy.get('#contact-us-form')
    }
    getNameField(){
        return cy.get('[data-qa="name"]')
    }
    getEmailField(){
        return cy.get('[data-qa="email"]')
    }
    getSubjectField(){
        return cy.get('[data-qa="subject"]')
    }
    getMessageField(){
        return cy.get('[data-qa="message"]')
    }
    getSubmitButton(){
        return cy.get('[data-qa="submit-button"]')
    }
    getSuccessNotification(){
        return cy.get('.alert-success').eq(0)
    }

    //METHODS
    contactUsForm(name, email, subject, message){
        this.getNameField().clear().type(name)
        this.getEmailField().clear().type(email)
        this.getSubjectField().clear().type(subject)
        this.getMessageField().clear().type(message)
        this.getSubmitButton().click()
    }

    contactUsFormEmptyFields(){
        this.getNameField().clear()
        this.getEmailField().clear()
        this.getSubjectField().clear()
        this.getMessageField().clear()
        this.getSubmitButton().click()
    }

}
export default ContactUsPage