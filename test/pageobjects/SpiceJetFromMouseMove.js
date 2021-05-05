
class SpiceJetMouseMove {

    get spiceJectLoginSingUp(){
        return $('#ctl00_HyperLinkLogin');
    }
     
    get spiceJetSpiceClubMemLogin(){
        return $('=SpiceClub Members');
    }

    get spiceJetSpiceClubMemLoigins(){
        return $('=Member Login');
    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    clickOnElement(){
        this.spiceJetSpiceClubMemLoigins.waitForDisplayed();
        this.spiceJetSpiceClubMemLoigins.click();
    }

}

module.exports = new SpiceJetMouseMove();