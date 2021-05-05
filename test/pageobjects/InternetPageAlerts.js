

class InternetPageAlerts{

   
    get clickOnJavaScriptAlerts(){
        return $('=JavaScript Alerts');
    }

    get clickOnAlertFromJS(){
        return $('//button[text()="Click for JS Alert"]');
    }

    get getSuccessText(){
        return $('#result');
    }

    get clickOnJSConfirm(){
        return $('//button[text()="Click for JS Confirm"]');
    }

    get clickOnJSPrompt(){
        return $('//button[text()="Click for JS Prompt"]');
    }

}

module.exports = new InternetPageAlerts();