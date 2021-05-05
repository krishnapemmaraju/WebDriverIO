
class scrollIntoView {

    get forgettenPasswordLink(){
        return $('=Forgot Password?');
    }

    moveToTheElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    get clickOnTheAgreementChkBox(){
        return $('div.checkbox>label>input');
    }

    get clickOnSubmitButton(){
        return $('div.myButton>#submitButton');
    }

    get isButtonEnabled(){
        return this.clickOnSubmitButton.isEnabled();
    }
 
     watForTheElementEnabled(){
       this.clickOnSubmitButton.waitForEnabled(3000);      
     }
}

module.exports = new scrollIntoView();