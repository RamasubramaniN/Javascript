function initObject()
{
	//There is no class concept in javascript, but there are object prototypes which will do the same.
	console.log("************ Object Literals Start ************");
	var Sales = "Toyota";

	//Objects are like hashmaps. You can add properties to it.
	//Way 1 : Define objects -- Not reusable.
	//Every object in JavaScript is an instance of the object Object and therefore inherits
	// all its properties and methods.
	var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

	//console.log() function is not actually a part of JavaScript itself, but many browsers implement it to 
	//aid in debugging.
	console.log(car.myCar);   // Saturn
	console.log(car.getCar);  // Honda -- getCar is also a property.
	console.log(car.special); // Toyota
	
	//Nested Objects are allowed.
	var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda", "!": "Bang!" };

	console.log(car.manyCars.b); // Jeep
	console.log(car[7]); // Mazda
	console.log(car["!"]); //Bang! Don't try car.!
		
	//console.log(car.7); Don't try this. 7 is not valid property name. SyntaxError: missing ) after argument list
	console.log("************ Object Literals End ************");
	
	ooFunctions();
}

function CarTypes(name) 
{
	if (name == "Honda") 
	{
		return name;
	} 
	else 
	{
		return "Sorry, we don't sell " + name + ".";
	}			
}


function ooFunctions()
{
	createObjects();
	typedefFunction();
	constructorFunction();
	instanceofFunction();
}

function createObjects()
{
	//Method1 to create objects --> object construction is not reusable
	console.log("*************** Object Creation Start ****************");
	console.log("*************** Without using Constructor - Not reusable ******************");
	var person = {name : "Ramasubramani"}; //This uses Object() constructor.
	console.log(person.name);
	//person is not created by user defined constructor.
	console.log("person.constructor : ", person.constructor);//ƒ Object() { [native code] }
	console.log("*************** Using Constructor - Reusable (Accepts properties as parameters) ******************");
	//Method2 to create objects --> reusable
	var subramani = new Person('Ramasubramani');
	console.log(subramani.name); //Ramasubramani
	//subramani is created by user defined constructor.
	console.log("subramani.constructor : ",subramani.constructor);//f Person(name){this.name = name;}
	console.log("*************** Object Creation End ****************");
}

function typedefFunction()
{
	console.log("************** typeof start ***************");
	console.log("typeof is a unary operator, just like the ! operator. It returns a string representing the type of its operand.");
	console.log("typeof 100 : " + typeof 3); // returns "number"
	console.log("typeof 'abc' : " + typeof 'blah'); //returns "string"
	console.log("typeof {} : " + typeof {}); //returns "object"
	console.log("typeof [] : " + typeof []); //returns "object"
	console.log("typeof function () {} : " + typeof function () {}); //returns "function"	
	console.log("************** typeof end ***************");
}

function constructorFunction()
{
	console.log("************** Constructor start ***************");
	
	console.log("Constructor is a property available on all object's prototypes. It is a reference to the constructor function used to create the object. ");
	
	var dave = new Person('Dave');
	
	console.log("dave.constructor : ", dave.constructor);//f Person(name){this.name = name;}
	console.log("dave.constructor === Person : " + (dave.constructor === Person)); //true
	console.log({}.constructor());//({}).constructor returns the Object constructor function.
	
	console.log("************** Constructor end ***************");
}

//Constructor function to create persons.
/*Functions are function objects. In JavaScript, anything that is not a primitive type 
( undefined, null,boolean, number, or string) is an object. Objects in JavaScript are extremely versatile.
 Because of this, we can even pass a function as a parameter into another function.
When a function accepts another function as a parameter, or returns a function, 
it is called a higher-order function. You’ve probably already used a bunch of higher order functions 
and don’t even know it: Array.prototype.map and Array.prototype.filter are higher order functions 
(Just to name a couple).*/
function Person(name) 
{
  this.name = name;
}

function instanceofFunction()
{
	console.log("************** Instanceof start ***************");
	console.log("The difference between instanceof and the constructor property is that instanceof inspects the object’s prototype chain/hierarchy.");
	
	var somePerson = new Person('Ramasubramani');
	console.log("somePerson instanceof Person : " + (somePerson instanceof Person)); //true
	console.log("somePerson instanceof Object : " + (somePerson instanceof Object));// true 
	//Below statements are the proof that Object is in the prototype chain. Don't use __proto__. 
	//Not compatible with all browsers.
	console.log("somePerson.__proto__ : ", somePerson.__proto__);// Person {}
	console.log("somePerson.__proto__.__proto__ : ", somePerson.__proto__.__proto__);//Object()
	
	console.log("************** Instanceof end ***************");
}