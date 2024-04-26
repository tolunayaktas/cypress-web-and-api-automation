class DetailsPage{

    passengerOne(){
        cy.get(':nth-child(4) > .col-sm-10 > .title > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').click()
        cy.wait(1000);
        cy.get(':nth-child(4) > .col-sm-10 > .title > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').type('{downarrow}{downarrow}{enter}')
        cy.get('#txt_PassengerFirstname0').type("Tolunay")
        cy.get('#txt_PassengerLastname0').type("Aktas")
        return this;
    }

    passengerTwo(){
        cy.get(':nth-child(5) > .col-sm-10 > .title > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').click()
        cy.wait(1000);
        cy.get(':nth-child(5) > .col-sm-10 > .title > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').type('{downarrow}{downarrow}{downarrow}{enter}')
        cy.get('#txt_PassengerFirstname1').type("Jane")
        cy.get('#txt_PassengerLastname1').type("Doe")
        return this;
    }

    customerInformation(){
        cy.get('.customer > .col-sm-10 > .title > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').click()
        cy.wait(500);
        cy.get('#bs-select-7-0').click()
        cy.get('#txt_CustomerFirstname').type("Tugay")
        cy.get('#txt_CustomerLastname').type("Aktas")
        cy.get('#txt_CustomerCompany').type("TNB")
        cy.get('#txt_CustomerAddress').type("Istanbul")
        cy.get('#txt_CustomerZIP').type("34000")
        cy.get('#txt_CustomerCity').type("Istanbul")
        cy.get('.col-sm-10 > :nth-child(7) > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').click()
        cy.wait(500);
        cy.get('#bs-select-8-228').click()
        cy.get('#txt_CustomerMobile').type("+905551230000")
        cy.get('#txt_CustomerEmail').type("tolunayaktas@email.com")
        cy.get('.language > .col-xs-12 > .validated-control-wrapper > .control > .dropdown > .btn').click()
        cy.wait(500);
        cy.get('#bs-select-9-1')
        return this;
    }

    continue(){
        cy.get('#btn_Continue').click()
        return this;
    }

    checkOptionsHeader(){
        cy.get('#booking-step-title').should('be.visible')
        return this;
    }

    continueToPayment(){
        cy.wait(500);
        cy.scrollTo('bottom')
        cy.get('#btn_Continue').click()
        return this;
    }

    checkPaymentPage(){
        cy.get('#booking-step-title').should('be.visible')
        return this;
    }
}
    
export default DetailsPage;