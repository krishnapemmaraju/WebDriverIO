//const { default: $ } = require("webdriverio/build/commands/browser/$");

class HomePage {

   get getHeaderInfo() { return $('div.col-md-7>h1')}
   get getsubHeaderInfo() {return $("//div[@class='nav-logo-wrapper']//a//img[@alt='Freshworks']")}
}

module.exports = new HomePage();