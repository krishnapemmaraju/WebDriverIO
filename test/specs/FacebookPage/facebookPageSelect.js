const selectValue = require("../../pageobjects/facebookPage");

describe("Validate the Select By Value option" , function() {

    it( "Select value for the facebook sign up page ", function() {
         browser.url("https://www.facebook.com/");
         browser.deleteCookies()
         browser.maximizeWindow();
        // browser.pause(4000);
         selectValue.acceptAllcookies.click();
         selectValue.clickOnCreateAccount.click();      
         selectValue.selectDOBForUser("1","4","2000");
    });

    it("Get all the values from a select dropdown" , function(){
         let months = selectValue.allValuesForMonths;
         console.log("The Total months is " + months.length);
         months.forEach(function(element){
           console.log(element.getText()); 
         });
    });
});