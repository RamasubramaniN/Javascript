function demo()
{
	//handleFutureElementLive();
	//handleFutureElementDelegate();
	addElement();
	addInnerElement();
}

function addElement()
{
	var email = '<div class = "fieldClass">'
					+'<span class="labelClass">'
					+'<Label> <b> Email : </b> </Label>'
					+'</span><span>'
					+'<input id = "email" type = "text" class = "inputClass emailClass formInput"/></span></div>';
	var usernameField = jQuery("#usernameSection");
	
	//adding an element after username field.
	jQuery(usernameField).after(email);
	
}

function addInnerElement()
{
	var errorField = jQuery("#errorSection");
	
	jQuery("#submit").click(function()
	{
		var usernameValue = jQuery("#username").val();
		
		//The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal. (===) is not quicker if the types are the same. If types are not the same, (===) will be quicker because it won't try to do the conversion.
		if( usernameValue.trim() === "")
		{
			//adding inner html. We can add any element.
			jQuery(errorField).html("<p>&nbsp;&nbsp;&nbsp;<b>Username cannot be empty</b></p>");
		}
		else
		{
			jQuery(errorField).empty();
		}
	});
}

function handleFutureElementLive()
{
	//The live method attaches the event handler to the root level document along with the associated selector and event information. The good thing about live() as compared to the bind() example above is that it is only attaching the event handler once to the document instead of multiple times. This not only is faster, but less wasteful. 
	
	
	//Email Input is not present at this point, but event will be triggered for 'email' field once it is added to the DOM.
	jQuery( ".formInput" ).live( "mouseenter mouseleave", function(event) 
	{
		//event is optional parameter. Sometimes it is useful.
		console.log(event.type, " event is triggered : Live");
		
		jQuery( this ).toggleClass( "commentsClass" );//Add/Remove CSS class.
	});
}

function handleFutureElementDelegate()
{
	//The .delegate() method is very powerful. The above code will attach the event handler to the unordered list ("#commentsSection") along with the selector/event information. This is much more efficient than the .live() method that always attaches the information to the document.
	
	//Email Input is not present at this point, but event will be triggered for 'email' field once it is added to the form.
	jQuery( "#commentsSection" ).delegate(".formInput", "mouseenter mouseleave", function(event) 
	{
		//event is optional parameter. 
		console.log(event.type, " event is triggered : Delegate");
		
		jQuery( this ).toggleClass( "commentsClass" );//Add/Remove CSS class.
	});
}