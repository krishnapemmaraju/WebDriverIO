describe("Interaction with Web Elements",function() {
    it("Enter Text in Search Field",function() { 
        browser.url('/');
        browser.maximizeWindow()
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac');
        browser.pause(5000);
        console.log("The URL is " + browser.getUrl());
    });

    it("Get Text from website",function() { 
        const getText = $('span.a-size-base.a-color-base');
        console.log(getText.getText());
    });

   it("Click on SignIn button" ,function() {
       let mouseOverOnAccnt = $('#nav-link-accountList');
       mouseOverOnAccnt.moveTo();
       let clickOnSignIn = $('#nav-flyout-ya-signin a span.nav-action-inner');
       clickOnSignIn.click();
      // const clickOnNav = $('span.nav-line-2.nav-long-width span.nav-icon.nav-arrow.null')
      // clickOnNav.click();   
   });

});