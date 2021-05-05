const { assert } = require("chai");
const wtForExists = require("../../pageobjects/InternetPageWaitForExists");

describe("Wait for the Page Exists Page ", function() {

    it("wait for the element Exists" , function() {

        browser.url("https://the-internet.herokuapp.com/");
        browser.maximizeWindow();
        wtForExists.clickOnAddRemoveElements.click();
        wtForExists.clickOnAddElement.waitForDisplayed();
        wtForExists.clickOnAddElement.click();
        wtForExists.waitForTheButtonElement.waitForExist(3000);
        assert.equal(true,wtForExists.waitForTheButtonElement.isExisting());
        wtForExists.waitForTheButtonElement.click();
        assert.equal(false,wtForExists.waitForTheButtonElement.isExisting());
    });
});