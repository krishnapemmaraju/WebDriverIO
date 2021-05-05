const { expect } = require("chai");
const internetPageLogin = require("../../pageobjects/internetPageLogin");

describe("Login Page Check" , function() {
  it("Login into the internet page" , function() {
    
     browser.url("https://the-internet.herokuapp.com/login");
     browser.maximizeWindow();
     internetPageLogin.loginIntoInternetPage('tomsmith',"SuperSecretPassword!");
     expect(internetPageLogin.waitFortheSuccessMessage.getText()).equals("Secure Area");
    });

    it("logout from the internetPage ", function(){

        internetPageLogin.clickOnLogOut.click();
        expect(internetPageLogin.waitFortheSuccessMessage.getText()).equals("Login Page");
    })

});