
class Blazemeter {
    
   get getParentTag() { return $('ul.list-nav-links'); }

   get childElements(){
       const text = this.getParentTag
       return  text.$$('li');
   }

   get getTextFromChildElements(){
       return this.childElements.filter( element => {
              console.log(element.getText())
            });
   }

}

module.exports = new Blazemeter();