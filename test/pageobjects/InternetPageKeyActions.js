
class keyActionsInternetPage {

   get clickOnKeyPresses(){
       return $('#content>ul>li:nth-child(31)>a');
   }

   get wtForHeaderText(){
       return $('h3');
   }

   get getInputTextBox(){
       return $('#target');
   }

   get labelTextFromText(){
       return $('#result');
   }

   enterKeyText(text){
       this.wtForHeaderText.waitForDisplayed();
       this.getInputTextBox.waitForDisplayed();
       this.getInputTextBox.setValue(text);
   }

   getTextFromValue(){
       return this.labelTextFromText.getText();
   }
}

module.exports = new keyActionsInternetPage();