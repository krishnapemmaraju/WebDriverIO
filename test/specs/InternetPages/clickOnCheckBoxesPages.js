const { expect } = require("chai");
const internetPages = require("../../pageobjects/InternetPageObjects");

describe("Checking for checkboxes click", function(){

  it("Launch the Internet Hero Home Page" , function() {
    browser.url("https://the-internet.herokuapp.com");  
  //  expect(browser.getUrl()).to.include("-internet.herokuapp");
    expect(browser.getUrl()).to.include(`${browser.options.baseUrl}`);
    browser.maximizeWindow();
    browser.pause(5000);  

 });
  
 it("Click on the checkboxes link", function() {
    internetPages.clickOnCheckboxLink(6);
    browser.pause(3000);
    expect(internetPages.HeaderInfoAfterClick.getText()).equals('Checkboxes');
 });

 it("click on the checkbox" , function() {
   internetPages.clickOnCheckBoxOptionWithIndex(1);
   expect(internetPages.getCheckBoxWithIndex(1).isSelected()).equals(true);
   browser.pause(3000);
 });

});

