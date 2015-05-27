mySelection = app.activeDocument.selection;
myDoc = app.activeDocument;
if (mySelection instanceof Array)
{
	for (i=0; i<mySelection.length; i++) {
		selItem = mySelection[i];
		if (selItem.filled === true) {
			if(mySelection[i].typename == "PathItem" || mySelection[i].typename == "CompoundPathItem"){			
				selItem = mySelection[i];
				var color = selItem.fillColor;
				
				if(selItem.typename == "PathItem"){
					selItem.stroked = true;				
					selItem.strokeColor = selItem.fillColor;
					selItem.strokeWidth = 2;		
				}				
				else {
					selItem.pathItems[0].stroked = true;
					
					selItem.pathItems[0].strokeColor = selItem.fillColor;
					selItem.pathItems[0].strokeWidth = 2;
				}
			}
		}	
	}	
}