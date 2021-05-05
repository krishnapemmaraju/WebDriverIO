
class blazeMeterUsecases{

     get parentUsecaseUI(){
        return $('#main_b_footer_second_block ul');
     }

     get childUsercasesUI(){
         return this.parentUsecaseUI.$$('li');
     }

     get TextFromAlltheLi(){
         return this.childUsercasesUI.filter(element => {
             console.log(element.getText())
            });
     }

     get LinkHrefFromLi(){
         return $$('#main_b_footer_second_block>ul>li>a');
         
     }

     get HrefTextFromLi(){
        return this.LinkHrefFromLi.filter(element => {
            element.getAttribute("href");
           });
     }

     get clickOnMainHeaderLogo(){
         return $('#main-header>div>a');
     }

     

}
module.exports = new blazeMeterUsecases();