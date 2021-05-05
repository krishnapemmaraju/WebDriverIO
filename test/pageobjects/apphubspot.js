

class HubspotData {

    get appHubSpotLoginUsername(){
        return $('#username');
    }

    get appHubSpotLoginPassword(){
        return $('#password');
    }

    get appHubSpotLoginBtn(){
        return $('#loginBtn');
    }

    loginIntoHubSpot(username,password){
       this.appHubSpotLoginUsername.waitForDisplayed();
       this.appHubSpotLoginUsername.clear();
       this.appHubSpotLoginUsername.setValue(username);
       this.appHubSpotLoginPassword.waitForDisplayed();
       this.appHubSpotLoginPassword.clear();
       this.appHubSpotLoginPassword.setValue(password);
       this.appHubSpotLoginBtn.waitForEnabled(2000);
       this.appHubSpotLoginBtn.click();
    }

    get contactsListPage(){
        return $('==Contacts');
    }

    get navSecondaryContactDetailsPage(){
       return $(`(//div[@class='secondary-nav expansion']//a[@id='nav-secondary-contacts'])[1]`);
    }

    clickOnContactsDetails(element){
        this.contactsListPage.waitForDisplayed();
        this.contactsListPage.click();
        element.waitForDisplayed();
        element.moveTo();
        element.click();
    }

}

module.exports = new HubspotData();