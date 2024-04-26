import HomePage from "../pages/HomePage.js";
import FlightsPage from "../pages/FlightsPage.js";
import DetailsPage from "../pages/DetailsPage.js";

describe("Air Prishtina Flight Test Cases", () => {
  const homePage = new HomePage();
  const flightsPage = new FlightsPage();
  const detailsPage = new DetailsPage();
  const performRoundTripSearch = () => {
    homePage.visit()
      .roundTrip()
      .chooseLocations()
      .chooseDeparture()
      .chooseArrival()
      .plusAdult()
      .findFlights();
  };

    it("TC_03 - Find round trip flight tickets with certain criteria", () => {
        performRoundTripSearch();
        flightsPage.checkOutboundFlight()
        .checkReturnFlight();
    });

    it("TC_04 - Go to Flight Details Page", () => {
        performRoundTripSearch();
        flightsPage.checkOutboundFlight()
        .checkReturnFlight()
        .standartFlight()
        .continue()
        .continueWithoutRegister();
    });

    it("TC_05 - Go to Payment Page", () => {
        performRoundTripSearch();
        flightsPage.checkOutboundFlight()
        .checkReturnFlight()
        .standartFlight()
        .continue()
        .continueWithoutRegister();
        detailsPage.passengerOne()
        .passengerTwo()
        .customerInformation()
        .continue()
        .checkOptionsHeader()
        .continue()
        .checkPaymentPage();
    });
});