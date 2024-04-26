class HomePage{

    constructor() {
        this.departureDate = "2024-05-06";
        this.returnDate = "2024-05-12";
    }

    visit(){
        cy.visit('https://www.airprishtina.com/en');
        cy.url().should('eq', 'https://www.airprishtina.com/en'); // URL'nin doğru olduğunu kontrol et
        cy.get('body').should('not.be.empty'); // Sayfanın boş olmadığını kontrol et
        return this;
    }

    roundTrip(){
        cy.get('.return > .btn').click();
        return this;
    }

    chooseLocations(){
        cy.wait(500);
        cy.get('#txt_Flight1From').click()
        cy.wait(500);
        cy.get('#txt_Flight1From').clear()
        cy.wait(500);
        cy.get('#txt_Flight1To').click()
        cy.wait(500);
        cy.get('#txt_Flight1To').clear()
        cy.wait(500);
        cy.get('#txt_Flight1From').click()
        cy.wait(500);
        cy.get('#txt_Flight1From').type("Stuttgart")
        cy.wait(500);
        cy.get('#txt_Flight1To').click()
        cy.get('.return > .btn').click()
        cy.wait(500);
        cy.get('.return > .btn').click()
        return this;
    }

    chooseDeparture(){
        cy.wait(500);
        cy.get('#txt_FromDateText').click();
        cy.wait(500);
        cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c0"]').click()
        return this;
    }

    chooseArrival(){
        cy.wait(1000);
        cy.get('.opensleft > .left > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c6"]').click()
        return this;
    }

    plusAdult(){
        cy.get('#btn_AdultPlus > .enabled').click()
        return this;
    }

    findFlights(){
        cy.get('.find-flights > .col-xs-12 > .btn > span').click()
        return this;
    }



}

export default HomePage;