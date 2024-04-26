import LoginPage from "../pages/LoginPage.js";

describe("Air Prishtina Login Test Cases", () => {
  const loginPage = new LoginPage();

    it("TC_01 - Login with Incorrect Credentials", () => {
        loginPage.visit()
        .fillUsername("Tolunay")
        .fillPassword("Parola")
        .login()
        .checkIncorrectMessage();
    });

    it("TC_02 - Login with Empty Password", () => {
      loginPage.visit()
      .fillUsername("Tolunay")
      .login()
      .checkEmptyPasswordMessage();
  });
});