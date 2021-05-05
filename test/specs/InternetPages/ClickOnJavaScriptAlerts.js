const { Assertion, assert } = require("chai");
const javaScriptAlerts = require("../../pageobjects/InternetPageAlerts");

describe('Scenario for Java Script alerts ', function(){

    it('Click on JS Alert' , function(){ 
       browser.url("https://the-internet.herokuapp.com/");
       browser.maximizeWindow();
       browser.pause(3000);
       javaScriptAlerts.clickOnJavaScriptAlerts.click();
       javaScriptAlerts.clickOnAlertFromJS.click();
       browser.acceptAlert();
       let getSuccessMessage = javaScriptAlerts.getSuccessText.getText();
       console.log(getSuccessMessage);
       assert.equal('You successfully clicked an alert',getSuccessMessage);
    });

    it('dismiss alert' , function(){
        javaScriptAlerts.clickOnAlertFromJS.click();
        browser.dismissAlert();
    });

    it('click on JS Confirm' , function(){
        javaScriptAlerts.clickOnJSConfirm.click();
        browser.acceptAlert();
        let getSuccessConfirmMsg = javaScriptAlerts.getSuccessText.getText();
        assert.equal('You clicked: Ok',getSuccessConfirmMsg);
    });

    it('click on JS Prompt', function(){
      javaScriptAlerts.clickOnJSPrompt.click();
      browser.sendAlertText('Krishna');
      browser.acceptAlert();
      let getPromptText = javaScriptAlerts.getSuccessText.getText();
      assert.equal('You entered: Krishna',getPromptText);
    });
});