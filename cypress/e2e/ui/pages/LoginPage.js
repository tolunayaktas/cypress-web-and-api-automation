class LoginPage{


    visit(){
        cy.visit('https://www.airprishtina.com/en/login/');
        return this;
    }

    fillUsername(value){
        cy.get('#txt_LoginLoginPage').type(value)
        return this;
    }

    fillPassword(value){
        cy.get('#txt_PasswordLoginPage').type(value)
        return this;
    }

    login(){
        cy.get('#btn_LoginLoginPage').click()
        return this;
    }

    checkIncorrectMessage(){
        cy.get('.form > :nth-child(1) > .col-xs-12 > .global-message').should('be.visible')
        return this;
    }

    checkEmptyPasswordMessage(){
        cy.get('.form > :nth-child(3) > .col-xs-12 > .validated-control-wrapper > .message').should('be.visible')
        return this;
    }
}

export default LoginPage;