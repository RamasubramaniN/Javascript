//This is just an example to explain concepts, writing global function is really a bad idea. Namespace the objects to avoid conflicts.
function initClosure()
{
	closureExample1();
	
	var example = closureExample2();//Result of closureExample2 is assigned to example. (i.e) example refers to the inner function print()
	//example has become a closure. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created. 
	example();//Closure Example : 1
	example();//Closure Example : 2
	example();//Closure Example : 3
	
	//Outer function acts as function factory, returns different function(variables are different).
	var function1 = functionFactory(10);
	var function2 = functionFactory(20);
	
	// A closure lets you associate some data (the environment) with a function that operates on that data. This has obvious parallels to object oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.
	console.log("function1(100) : ", function1(100));
	console.log("function2(100) : ", function2(100));
	
	//Exposed all methods and properties
	var triangle = createTriangle([10,8,6]);
	console.log("triangle : ", triangle);
	console.log("triangle.thirdSide : ", triangle.thirdSide);
	console.log("triangle.sumOfSides() : ", triangle.sumOfSides());
	console.log("triangle.largestSide() : ", triangle.largestSide());
		
	//Exposed only required methods.
	login().exposedFunction();
	//login().function1(); -- TypeError: login(...).function1 is not a function
	//login().function2(); --TypeError: login(...).function2 is not a function
	
	
}

function constructorExample()
{
	function Rectangle(sides)
	{
		this.length = sides[0];
		this.breadth = sides[1];
	}
	
	//You can associate any property/function object to an existing object dynamically at any point of time. Here, area will be available to all rectangle instances. You can even add properties/functions to built-in objects like array, string etc.
	Rectangle.prototype.area = function()
	{
		return this.length * this.breadth; 
	}
	Rectangle.prototype.printSides = function()
	{
		console.log("Length : "+ this.length +", Breadth : " + this.breadth);
	}
	
	var rectangle1 = new Rectangle([10,5]);//'new' is strongly related to this. What it does is it creates a brand new empty object, and then calls the function specified, with this set to that new object. Notice though that the function specified with this does not return a value but merely modifies the this object.
	console.log(rectangle1.area());
	var rectangle2 = new Rectangle([20,10]);
	console.log(rectangle2.area());
	var someFunction = rectangle2.printSides();
	//console.log(someFunction());// someFunction()— sets this to the global object (window, on browsers). Since that object (probably) doesn't have a printSides property. Output : TypeError: someFunction is not a function in strict mode.Strict mode is a way to introduce better error-checking into your code. When you use strict mode, you cannot, for example, use implicitly declared variables, or assign a value to a read-only property, or add a property to an object that is not extensible.
}

function closureExample1()
{
	//Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.
	var name = "Javascript";
	function printName()
	{
		//lexical scoping: in JavaScript, the scope of a variable is defined by its location within the source code (it is apparent lexically) and nested functions have access to variables declared in their outer scope.
		console.log(name);
	}
	printName();
}

function closureExample2() 
{
  var name = "Closure Example";
  var count = 0;
  
  //Nested functions can share variables in their parent, so you can use that mechanism to couple functions together when it makes sense without polluting your global namespace — 'local globals'
  function print() 
  {
	//count value is retained.
	count = count + 1;
    console.log(name + " : " + count);
  }
  console.log("Executed when outer function was executed");
  return print; //Inner function was returned as result, when outer function is invoked.
}

//Function parameters are optional. If you don't pass values to the function in the calling place, value of 'undefined' is passed to the function.
function functionFactory(a)
{
	return function(b)
	{
		return a + b;
	}
}

var login = function()
{
	// Expose only required functions. Encapsulation. Will help you redesigning internal logic without any impact.
	var function1 = function xyz()
	{
		console.log('Calling function1 function inside login.');
	},
	function2 = function abc()
	{
		console.log('Calling function2 function inside login.');
	};
	return {"exposedFunction" : function2};
};

//Returns all properties as Object(JSON).
function createTriangle(sides)
{
	// inside a function, this refers to the current object. What that actually means is specified by the way in which you called that function. If you called it using dot notation or bracket notation on an object, that object becomes this. Here, triangle in the calling place becomes this.
	return { //Place the braces in the same line.
		firstSide : sides[0],
		secondSide : sides[1],
		thirdSide : sides[2], 
		largestSide : function() //Functions are objects.Attach functions to objects in OO way.Attaching all functions to global namespace is bad.
		{
			var longest = this.firstSide;
			if(longest < this.secondSide)
			{
				longest = this.secondSide;
			}
			if(longest < this.thirdSide)
			{
				longest = this.thirdSide;
			}
			return longest;
		},
		sumOfSides : function()
		{
			return this.firstSide + this.secondSide + this.thirdSide;
		}
	};

}
