class DragAndDrop {

   get clickOnDroppable(){
       return $('=Droppable');
   }

   get getSourceElement(){
       return $('div.ui-widget-content.ui-draggable.ui-draggable-handle');
   }

   get getTargetLocator(){
       return $('div.ui-widget-header.ui-droppable');
   }

   get getTextFromAfterDropping(){
       return $('div.ui-widget-header.ui-droppable>p');
   }   

}

module.exports = new DragAndDrop();