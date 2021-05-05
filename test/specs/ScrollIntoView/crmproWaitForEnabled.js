const { assert } = require("chai");
const waitForEnabled = require("../../pageobjects/crmpropage");

describe("Test for Wait For Enabled task" , function(){
     it("wait for enabled" , function(){
           browser.url("https://classic.crmpro.com/register/");
           browser.maximizeWindow();
           waitForEnabled.clickOnTheAgreementChkBox.click();
           waitForEnabled.watForTheElementEnabled();
           let enabled = waitForEnabled.isButtonEnabled;
           assert.equal(true,enabled);
     });
});