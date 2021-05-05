
class waitForExists {

    get clickOnAddRemoveElements(){
        return $('div#content>ul>li:nth-child(2)>a');
    }

    get clickOnAddElement(){
        return $('div.example>button');
    }

    get waitForTheButtonElement(){
        return $('div#elements>button.added-manually');
    }
}

module.exports = new waitForExists();