const appHubSpot = require("../../pageobjects/apphubspot");

describe("Validating WaitForExists for appHubSpot", function() {

    it("validating waitForExists", function(){
          
        browser.url("https://app.hubspot.com/login");
        browser.maximizeWindow();
        browser.pause(120000);
        appHubSpot.loginIntoHubSpot("pemmarajukrishna16@gmail.com","Hubspot16$");
        appHubSpot.clickOnContactsDetails(appHubSpot.navSecondaryContactDetailsPage);
          
    });

});