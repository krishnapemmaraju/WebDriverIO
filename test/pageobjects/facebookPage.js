
class faceBookPage{

    get clickOnCreateAccount(){
        return $('=Create New Account');
    }

    get waitForSignUpPage(){
        return $('div.mbs._52lq.fsl.fwb.fcb');
    }

    get selectDateForDOB(){
        return $('#day');
    }

    get selectMonForDOB(){
        return $('#month');
    }

    get selectYearForDOB(){
        return $('#year');
    }

    get acceptAllcookies(){
        return $('//button[text()="Accept All"]');
    }

    get allValuesForMonths(){
        return $$('#month option');
    }

    selectDOBForUser(day,month,year){
       this.waitForSignUpPage.waitForDisplayed(); 
       this.selectDateForDOB.selectByAttribute('value',day);
       this.selectMonForDOB.selectByAttribute('value',month);
       this.selectYearForDOB.selectByAttribute('value',year);
    }
}

module.exports = new faceBookPage();