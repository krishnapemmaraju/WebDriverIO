
class internetPageLogin {

    get internetPageLoginUsernameData(){
        return $('#username');
    }

    get internetPageLoginPasswordData(){
        return $('#password');
    }

    get internaetPageLoginButton(){
        return $('#login>button');
    }

    loginIntoInternetPage(username,password){
        this.internetPageLoginUsernameData.clearValue();
        this.internetPageLoginUsernameData.setValue(username);
        this.internetPageLoginPasswordData.clearValue();
        this.internetPageLoginPasswordData.setValue(password);
        this.internaetPageLoginButton.click();
    }

    get waitFortheSuccessMessage(){
         return $('h2');
    }

    get clickOnLogOut(){
        return $('a.button.secondary.radius');
    }
}

   module.exports = new internetPageLogin();