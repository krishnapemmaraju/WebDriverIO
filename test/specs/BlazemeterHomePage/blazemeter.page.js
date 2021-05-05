const blazemeter = require("../../../test/pageobjects/blazemeter")
const blazemeterUsercases = require("../../pageobjects/blazemeterUsercases");

describe("Checking on $$ function" , function(){

   it("get text of Li elements" , function() {
       browser.url("https://www.blazemeter.com/");
       browser.maximizeWindow();
       browser.pause(5000);
       console.log(blazemeter.getTextFromChildElements);

   });

   it("Get the elements from usecase" , function() {
         console.log(blazemeterUsercases.TextFromAlltheLi);

   });

   it("Get the elements from A link in LI" , function() {
       var textFromATag = blazemeterUsercases.LinkHrefFromLi;
       console.log(textFromATag.length);
       for ( var i=0;i<textFromATag.length;i++){
        var ele = textFromATag[i];
        if(! ele.isDisplayedInViewport()){
        ele.scrollIntoView(textFromATag[i]); }
       textFromATag[i].click();
       browser.pause(2000);
      blazemeterUsercases.clickOnMainHeaderLogo.click();
      browser.pause(5000);}
});


});