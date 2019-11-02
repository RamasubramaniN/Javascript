function initProto()
{
	protoExample();
	functionExample();
}

function protoExample()
{
	var vehicle = {powered : true};
	var volvo = {seats : 4 };
	
	console.log("volvo.seats : " + volvo.seats);
	console.log("vehicle.powered : " + vehicle.powered);
	
	console.log("volvo.powered before inheritance : " + volvo.powered);
	
	volvo.__proto__ = vehicle;
	console.log("volvo.powered after inheritance : " + volvo.powered);//Iterate over prototype chain and get the property value.
	
	volvo.powered = "gasoline";
	console.log("volvo.powered : " + volvo.powered);
	console.log("vehicle.powered : " + vehicle.powered);//Parent property is not changed here.
	console.log("volvo.__proto__.powered : " + volvo.__proto__.powered);
}

function functionExample()
{
	console.log("add(1,2) : ", add(1,2));//3
	console.log("negate(10) : ", negate(10));//-10
	console.log("add.name : ", add.name);//add
	console.log("add.length : ", add.length);//2 --> number of arguments.
	console.log("negate.name : ", negate.name);//empty string because this is like anonymous function
	console.log("typeof add : ", typeof add);//function
	console.log("typeof negate : ", typeof negate);//function
	console.log("negate.constructor : ", negate.constructor);//Function --> Global constructor function.
	console.log("add.constructor : ", add.constructor);//Function --> Global constructor function.
	
	//Constructing functions on the fly.
	var multiply = new Function("a", "b", "return a * b");
	
	console.log(window.add(1,5));//bound to window object
	console.log(window.negate(5));//bound to window object
	console.log(multiply(5,9));//Not bound to window object, local to functionExample
	
}

function add(a, b)
{
	return a+b;
}

var negate = function (a)
{
	//Like anonymous function
	return -a;
}

function closureExample1()
{
	init();
}

function init()
{
	var name = "Ram";
	function printName()
	{
		console.log(name);
	}
	displayName();
}