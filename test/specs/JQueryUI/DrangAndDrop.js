const { expect } = require("chai");
const draganddrop = require("../../pageobjects/DrandAndDropEle");

describe("Validating drag and drop functionality" , function(){

     it("drag and drop an element to target box" , function(){
          browser.url("https://jqueryui.com/");
          browser.maximizeWindow();
          draganddrop.clickOnDroppable.click();
          browser.switchToFrame(0);
        //  browser.switchToFrame($("//iframe[@class='demo-frame']"));
          draganddrop.getSourceElement.dragAndDrop(draganddrop.getTargetLocator);
          expect(draganddrop.getTextFromAfterDropping.getText()).to.include('Dropped!');
     });

});