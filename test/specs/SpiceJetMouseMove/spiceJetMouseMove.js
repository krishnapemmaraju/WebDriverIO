const spiceJetMouseMove = require("../../pageobjects/SpiceJetFromMouseMove");

describe("Test for Mouse Move Actions", function() {

   it( "mouse move actions on Spice jet sign up pages", function(){
    
       browser.url("https://www.spicejet.com/");
       browser.maximizeWindow();
       spiceJetMouseMove.moveToElement(spiceJetMouseMove.spiceJectLoginSingUp);
       spiceJetMouseMove.moveToElement(spiceJetMouseMove.spiceJetSpiceClubMemLogin)
       browser.pause(3000);
       spiceJetMouseMove.clickOnElement(spiceJetMouseMove.spiceJetSpiceClubMemLoigins);
   });


});