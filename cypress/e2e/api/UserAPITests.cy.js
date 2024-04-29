import Helper from "./utils/NameGenerator";
import data from "./utils/UserData.json"

describe("Petstore API TESTING", function () {

    const helper = new Helper
    var usernameUpdate = helper.randomUserName();

    it("POST /v2/user (User Create)", function () {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            json: data.user1
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it("PUT /v2/user/{username} (User Update)", function () {
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/' + data.user1.username,
            body: data.user1
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it("GET /v2/user/{userName} (User Get)", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/' + data.user1.username).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it("GET /v2/user/login} User Login", function () {
        const userInfo = {
            "username": usernameUpdate,
            "password": "Tolunay123%"
        }
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/login',
            query: userInfo
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it("DELETE /v2/user/ (User Delete)", function () {
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/' + data.user1.username,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it("GET /v2/user/{userName} (Get User Negative)", function () {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/' + data.user1.username,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404) || expect(response.body.type).to.eq("error")
        })
    });

    it("GET /v2/user/logout (User Logout)", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then((response) => {
            expect(response.status).to.eq(200)
        })
    });
});