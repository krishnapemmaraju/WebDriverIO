const { assert } = require("chai");
const keyPressActionPage = require("../../pageobjects/InternetPageKeyActions");

describe("Key Press Action Test" , function() {

    it( "validate the key press Action ", function(){
       browser.url("https://the-internet.herokuapp.com/");
       browser.maximizeWindow();
       keyPressActionPage.clickOnKeyPresses.click();
       keyPressActionPage.enterKeyText("TAB");
       const keyAction = keyPressActionPage.getTextFromValue();
       console.log(keyAction);
       expect(keyPressActionPage.getTextFromValue()).to.include('TAB');
    });

});