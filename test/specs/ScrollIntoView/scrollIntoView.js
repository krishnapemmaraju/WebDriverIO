const ScrollIntoView = require("../../pageobjects/crmpropage");

describe("Validating Scroll Into View Page" , function() {

    it("scroll to the Element and click" , function() {
             browser.url("https://classic.crmpro.com/index.html");
             browser.maximizeWindow();
             console.log("Is displayed in Viewport : " , ScrollIntoView.forgettenPasswordLink.isDisplayedInViewport());
             ScrollIntoView.forgettenPasswordLink.scrollIntoView();
             console.log("Is displayed in Viewport : " , ScrollIntoView.forgettenPasswordLink.isDisplayedInViewport());
             ScrollIntoView.forgettenPasswordLink.click();

    });

    it("scroll to the Element , move to and then Click" , function(){
        ScrollIntoView.forgettenPasswordLink.scrollIntoView();
        ScrollIntoView.moveToTheElement(ScrollIntoView.forgettenPasswordLink);
        ScrollIntoView.forgettenPasswordLink.click();
    });
});