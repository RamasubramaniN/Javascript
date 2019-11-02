function demo()
{
	selectorExample();
	//Better to include javascript reference file at the end(not in head tag) .
	findExample();//returns all descendants
	childrenExample();//returns only direct children
	eventHandlers();
	
}

function selectorExample()
{
	//Id based selector - This is the fastest selector because it uses browser's native method 'getElementById'
	//Id should be unique. If two or more elements have same ids(by mistake), first element is returned.
	console.log("ID Selector : ", jQuery("#username").val());
	
	//Class based selector - Returns all elements having the class.
	//If you use class for functionality, then don't use the same class for CSS.
	console.log("Class Selector : ");
	jQuery(".emailClass").val("ramasubn@in.ibm.com");
	
	var inputClassElements = jQuery(".inputClass");
	console.log("All Input elements : ", inputClassElements);
	console.log(jQuery(inputClassElements).length + " elements use the class inputclass");
	for(i=0; i< inputClassElements.length;i++)
	{
		console.log( "Element " + i + ", " + jQuery( inputClassElements[i] ).attr("id") );
	}
	
	//selects all button elements in the page
	var buttonElements = jQuery(":button");
	console.log("Total button elements : ", jQuery(buttonElements).length);
	jQuery( buttonElements ).each(function( index ) 
	{
		//This refers to the current HTML element in the iteration.
		console.log( "Element " + index + ", " + jQuery( this ).attr("id") );
	});
	
	//select by tag
	//jQuery("p.inputClass") --> Selects all <p> elements having class inputClass.
	
	//select element by its name
	console.log(jQuery("[name = 'username']").val());
	
	//selects all elements.
	console.log(jQuery("*").length);
	
	//When you want to perform more than one operation on a element better cache the selectors to improve performance. Traversing DOM is avoided here.
	//var usernameElement = jQuery("#username");
	//jQuery(username).action1
	//jQuery(username).action2
}

function eventHandlers()
{
	jQuery("#signup").click(function()
	{
		//It is better to keep all event handlers in JS file. Maintaining will be easy.
		//Also if all javascript code is in one place, we will not miss any events.
		console.log(jQuery(this).attr("name") + " is clicked.");
	}); 
	
	//Bind : The method attaches the same event handler to every matched element in the selection.It doesn't work for elements added dynamically that matches the same selector. There are performance concerns when dealing with a large selection.
	jQuery( "#comment" ).bind( "mouseenter mouseleave", function(event) 
	{
		//event is optional parameter. Sometimes it is useful.
		console.log(event.type, " event is triggered :  Bind");
		//When an event reaches an element, all handlers bound to that event type for the element are fired. If there are multiple handlers registered, they will always execute in the order in which they were bound.
		jQuery( this ).css("background-color", "C3C6FE");
	});	
}

function findExample()
{
	//Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
	
	//Select elements having the class .inputClass  but only inside the element having id equal to commentsSection.
	var allInputElements = jQuery("#commentsSection").find(".inputClass");
	jQuery( allInputElements ).each(function( index ) 
	{
		//This refers to the current HTML element in the iteration.
		console.log( "Find Result : Element " + index + ", " + jQuery( this ).attr("name") );
	});
	
}

function childrenExample()
{
	var directChildren = jQuery("#commentsSection").children()
	jQuery( directChildren ).each(function( index ) 
	{
		console.log( "Children Result : Element " + index + ", " + jQuery( this ).attr("name") );
	});
}