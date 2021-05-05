const homePage = require("../../../pages/HomePage")

describe("Home Page Validations" , function() {

  it("Validate the Home Page Headers" , function() {

      browser.url("https://www.freshworks.com/");
      let getHeaderText = homePage.getHeaderInfo.getText();
      console.log(getHeaderText);

  });

  it("Validate the Home Page Sub Headers" , function() {
    let getSubHeaderText = homePage.getsubHeaderInfo.getText();
    console.log(getSubHeaderText);

   });
});