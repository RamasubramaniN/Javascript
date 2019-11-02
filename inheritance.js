//Inheritance Example

function initParams()
{
	var object = new subClass();
	object.superTest(); //Super Test, Interpreter will not be able to find the superTest property in the object, 
	//so, it goes up the inheritance hierarchy to figure out this property.
	object.subTest(); //Sub Test
	
	person = new Object();
	person.name = "xyz";
	person.run = function()
	{
		console.log(this);//this refers person and not run
		this.state = "running";
		this.speed = "10";
		console.log("Person state inside run : " + person.state);
		console.log("Person speed inside run : " + person.speed);
	}
	console.log("Person state outside run : " + person.state);
	console.log("Person speed outside run : " + person.speed);
	console.log("Person run : " + person.run);//prints the function
	person.run();
}

function superTest()
{
	console.log("Super Test");
}
function superClass()
{
	this.superTest = superTest; //Adds a new property to superClass Object. This is actually constructor function.
}

function subTest()
{
	console.log("Sub Test");
}

function subClass()
{
	this.inheritFrom = superClass;
	this.inheritFrom();
	this.subTest = subTest; //Adds a new property to subClass Object. This is actually constructor function.
}