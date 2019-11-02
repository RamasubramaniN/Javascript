/*
	
    1) Number -- double-precision 64-bit format IEEE 754 values
    2) String
    3) Boolean
    4) Object
        a) Function
        b) Array
        c) Date
        d) RegExp
    5) null
    6) undefined
*/

function initVariableScoping()
{
	console.log("************* Variable Scoping Start *************");
	var y;	
	console.log(y);//Returns 'undefined' --> If a variable is not initialized.
	//console.log(z); //Reference error : 'z is not defined'.
	functionLevelScope();
	variableHoisting();
	globalVariables();
	otherExample();
	console.log("a = ", a);	
	console.log("************* Variable Scoping End *************"); 
	
	console.log("************* Types Start *************");
	typeExamples();
	console.log("************* Types End *************");
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
		// function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() 
	{ 
		// function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();
Here, bar is hoisted.
In this case, only the function declaration has its body hoisted to the top. The name ‘foo’ is hoisted, but the body is left behind, to be assigned during execution.

Named Function Expressions

You can give names to functions defined in function expressions, with syntax like a function declaration. This does not make it a function declaration, and the name is not brought into scope, nor is the body hoisted. 

foo(); // TypeError "foo is not a function". // foo is a variable
bar(); // valid //Function bar is hoisted.
baz(); // TypeError "baz is not a function" //baz is a variable
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
	console.log("!foo : " + !foo);////(Logical NOT) Returns false if its single operand can be converted to true; otherwise, returns true.
	if (!foo) 
	{
		var foo = 10;
		console.log("Inside if block. foo = "+ foo);
	}
	console.log("Outside if block. foo = "+ foo);
	
	b();
	
	//Global variables available to the whole script.
	console.log("window.xyz : ", window.xyz);
	console.log("a = ", a);	
}

var xyz = 100;
function globalVariables()
{
	console.log("Global variable : " + window.xyz);
	xyz = 200;
	console.log("Global variable : " + window.xyz);
}

function otherExample()
{
	console.log(xyz);
	console.log(window.a);
}

var a = 1;
function b() 
{
	a = 25;
	console.log("window.a : ", a);
	return;
	//function a() {}; --Don't declare function and variable names as same, you will run into so many problems.
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

var myvar = "my value";  //Don't declare global variables. Namespace it. Also, try to avoid creating local variables same as global variables.
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();

*/

function typeExamples()
{
	//Numbers
	console.log(parseInt("75", 10));//base 10
	console.log(parseInt("11000", 2));//base 2
	console.log(parseInt("abc", 10)); //NaN -- Not a Number
	console.log('isNaN("abc")',isNaN("abc"));
	console.log('isNaN("100")',isNaN("100"));
	
	//String
	console.log('"SomeString".length : ',"SomeString".length);
	console.log('SomeString.charAt(7) : ', "SomeString".charAt(7));
	console.log('SomeString.toUpperCase() : ', "SomeString".toUpperCase());
	
	//Boolean
   // false, 0, the empty string (""), NaN, null, and undefined all become false. All other values become true.
	console.log('Boolean(undefined) : ', Boolean(undefined));//undefined is a constant in Javascript. All uninitialized variables have this initial value.
	console.log('Boolean(100) : ', Boolean(100));
	
	//Arrays
	var stringArray = ["abc", "def", "ghi"];
	console.log("stringArray[0] : ", stringArray[0]); 
	console.log("stringArray.length : ", stringArray.length);
	stringArray.push("klm");//Insert elements to the array.
	console.log("stringArray : ", stringArray);
	
	//Another way to create array
	var array = new Array();
	array.push("Ram");
	console.log("array : ", array);
	
}