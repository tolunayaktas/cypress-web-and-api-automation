class FlightsPage{

    checkOutboundFlight(){
        cy.get('#flight1 > .connection > .col-xs-12 > .caption').should('be.visible')
        cy.get('#flight1 > .connection > .col-xs-12 > .destinations > .from-destination').should('be.visible')
        cy.get('#flight1 > .connection > .col-xs-12 > .destinations > .to-destination').should('be.visible')
        cy.get('#flight1 > .available-flights-wrapper > .available-flights > .available-flight > .col-sm-12 > .price > .value').should('be.visible')
        return this;
    }

    checkReturnFlight(){
        cy.get('#flight2 > .connection > .col-xs-12 > .caption').should('be.visible')
        cy.get('#flight2 > .connection > .col-xs-12 > .destinations > .from-destination').should('be.visible')
        cy.get('#flight2 > .connection > .col-xs-12 > .destinations > .to-destination').should('be.visible')
        cy.get('#flight2 > .available-flights-wrapper > .available-flights > .available-flight > .col-sm-12 > .price > .value').should('be.visible')
        return this;
    }

    standartFlight(){
        cy.get(':nth-child(2) > .content > .text-content > .sub-caption > .checkbox').click()
        return this;
    }

    continue(){
        cy.get('.continue > .btn').click()
        return this;
    }

    continueWithoutRegister(){
        cy.get('#btn_ContinueWithoutRegisterInBody').click()
        return this;
    }

}

export default FlightsPage;