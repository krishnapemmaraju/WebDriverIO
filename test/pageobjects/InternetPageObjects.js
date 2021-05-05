
class InternetPages{

    getCheckBoxesLink(index){
        return $(`ul>li:nth-child(${index})>a`);
    }

    clickOnCheckboxLink(index){
        this.getCheckBoxesLink(index).waitForDisplayed();
        return this.getCheckBoxesLink(index).click();
    }

    get HeaderInfoAfterClick(){
        return $('h3');
    }

    getCheckBoxWithIndex(index){
        return $(`#checkboxes>input:nth-child(${index})`)
    }

    clickOnCheckBoxOptionWithIndex(index){
        this.getCheckBoxWithIndex(index).waitForDisplayed();
        return this.getCheckBoxWithIndex(index).click();
    }
}

module.exports = new InternetPages();