function initVariableScoping()
{
	console.log("************* Variable Scoping Start *************");
	var y;	
	console.log(y);//undefined --> If a variable is not initialized.
				   //ReferenceError: y is not defined --> If a variable is not declared in the function scope. 
	functionLevelScope();
	variableHoisting();
	globalVariables();
	
	console.log("************* Variable Scoping End *************"); 
}

function functionLevelScope()
{
	//console.log(x); -- undefined because x is in scope but value is not initialized at this point of time.
	console.log("Use 'let' to define block scoped variable");
	if (true) 
	{
		//Blocks, such as if statements, do not create a new scope. Only functions create a new scope.
		var x = 5;//x is accessible anywhere inside functionLevelScope.
	}
	if(true)
	{	
		console.log("There is no block scope in javascript. Functional level scope. x = " + x);//5
	}
}


/*

function foo() 
{
	if (false) 
	{
		var x = 1;
	}
	return;
	var y = 1;
}
function foo() 
{
	var x, y;
	if (false) 
	{
		x = 1;
	}
	return;
	y = 1;
}
Notice that the assignment portion of the declarations were not hoisted. Only the name is hoisted. This is not the case with function declarations, where the entire function body will be hoisted as well. But remember that there are two normal ways to declare functions. Consider the following JavaScript:

function test() 
{
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () 
	{ 	
		// function expression assigned to local variable 'foo'. Only the variable is hoisted and not function body.
		alert("this won't run!");
	}
	function bar() 
	{ 
		// function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();

In this case, only the function declaration has its body hoisted to the top. The name ‘foo’ is hoisted, but the body is left behind, to be assigned during execution.

Named Function Expressions

You can give names to functions defined in function expressions, with syntax like a function declaration. This does not make it a function declaration, and the name is not brought into scope, nor is the body hoisted.

foo(); // TypeError "foo is not a function"
bar(); // valid
baz(); // TypeError "baz is not a function"
spam(); // ReferenceError "spam is not defined"

var foo = function () {}; // anonymous function expression ('foo' gets hoisted)
function bar() {}; // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {}; // named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid
spam(); // ReferenceError "spam is not defined"
*/


var foo = 1;
function variableHoisting() 
{
	//Because of hoisting, all var statements in a function should be placed as near to the top of the function as possible. This best practice increases the clarity of the code.
	console.log("!foo : " + !foo);////(Logical NOT) Returns false if its single operand can be converted to true; otherwise, returns true.
	if (!foo) 
	{
		var foo = 10;
		console.log("Inside if block. foo = "+ foo);
	}
	console.log("Outside if block. foo = "+ foo);
		
}

var xyz = 100;
function globalVariables()
{
	console.log("Global variable : " + window.xyz);
}

/*
Example 1
 
console.log(x === undefined); // logs "true"
var x = 3;

Example 2
// will return a value of undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();


The above examples will be interpreted the same as:

/**
 * Example 1

var x;
console.log(x === undefined); // logs "true"
x = 3;
 
/**
 * Example 2

var myvar = "my value";
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();

*/
