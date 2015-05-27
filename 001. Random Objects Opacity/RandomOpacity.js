mySelection = app.activeDocument.selection;
myDoc = app.activeDocument;
if (mySelection instanceof Array)
{
	selOpacity = [0,10,20,30,40,50,60,70,80,90,100];
		
	if(selOpacity.length != 0)
		for (i=0; i<mySelection.length; i++)
		{
			if(mySelection[i].typename == "PathItem" || mySelection[i].typename == "CompoundPathItem")
			{
				selItem = mySelection[i];
				selItem.filled = true;

				swatchIndex = Math.round( Math.random() * (selOpacity.length - 1 ));
				
				if(selItem.typename == "PathItem")
					selItem.opacity = selOpacity[swatchIndex];
				else
					selItem.pathItems[0].opacity = selOpacity[swatchIndex];
				
			}
		}
}