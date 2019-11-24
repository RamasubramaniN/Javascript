function initCall(){
	letExample1();
	letExample2();
	arrowFunctionExample();
	constExample();
	defaultParametersExample();
	forOfLoopExample();
	mapsExample();
	setsExample();
	staticMethodExample();
	getterSetterExample();
	spreadAttributesExample();
	classExample();
}

//let is similar to var but let has scope. let is only accessible in the block level it is defined.
function letExample1() {
	if(true) {
		let x = 100;
		console.log(x);//100
	}
	//console.log(x); //Uncaught ReferenceError: x is not defined
}

function letExample2() {
	let x = 100;
	if(true) {
		let x = 200;
		console.log(x);//200
	}
	console.log(x);//100 Note : Inner x is not avaiable here.
}

function arrowFunctionExample() {
	console.log("Divide : " + divide(100, 5));
}

let divide = (a, b) => {
	return (a / b);
} 


//Const is used to assign a constant value to the variable. And the value cannot be changed. Its fixed.
function constExample() {
	const a = 100;
	//a = 200; Not allowed.
	const arr = [1, 2, 3];
	//arr = [3, 5]; Not allowed. 
	arr.push(5); //Allowed. You can manipulate the array 
	//but you cannot change the variable to reference some other memory location later. 
}

/*Default parameters are parameters which are given by default while declaring a function. 
But it’s value can be changed when calling the function.*/
function defaultParametersExample() {
	console.log("With default Param : " + sum(1, 5));
	console.log("Default Param Overridden : " + sum(1, 2, 3));
}

let sum = (a, b, c = 10) => {
	return a + b + c;
}

function forOfLoopExample() {
	let arr = [1, 2, 3, 4, 5];
	console.log("*** For of Loop Example ***");
	for(let element of arr) {
		console.log(element);
	}
	console.log("*** For of Loop Example Number Array End ***");

	let alphabets = 'abc';
	for(let element of alphabets) {
		console.log(element);
	}
	console.log("*** For of Loop Example Char Array End ***");

}

//Same as Java Maps.
function mapsExample() {
	console.log("********Map start********");
	var playersMap = new Map();
	playersMap.set("Tendulkar", "India");
	playersMap.set("Viv Richards", "West Indies");
	playersMap.set("Sehwag", "India");
	console.log("*** Map entry ***");
	for(let element of playersMap) {
		console.log(element); //Simiilar to Entry object in java. Returns array of key & value for each iteration.
	}
	console.log("*** Key entry ***");
	for(let element of playersMap.keys()) {
		console.log(element);
	}
	console.log("*** Value entry ***");
	for(let element of playersMap.values()) {
		console.log(element);
	}
	console.log("Get Value by Key : " + playersMap.get("Sehwag"));
	console.log("Map Size : " + playersMap.size);
	console.log("********Map end********");
}


//Same as Java Sets. Does not allow duplicates.
function setsExample() {
	console.log("********Set start********");

	let numberSet = new Set();
	numberSet.add(1);
	numberSet.add(2);
	numberSet.add(3);
	numberSet.add(3); //Duplicates not stored.

	console.log("***** Elements in the set *****")
	for(let element of numberSet) {
		console.log(element);
	}

	console.log("Set size : " + numberSet.size);
	console.log("Set has 1? : " + numberSet.has(1));
	console.log("********Set end********");

}

function staticMethodExample() {
	console.log("********Static method start********");

	StaticMethodExample.someMethod();

	console.log("********Static method end********");
}


//No function keyword is used. No need to create instance when calling a static method.
class StaticMethodExample {
	static someMethod() {
		console.log("This is a static method.")
	}
}

function getterSetterExample() {
	console.log("********Getter Setter start********");

	let player = new Player(27);
	console.log(player.Age);
	player.Age = 30;
	console.log(player.Age);
	
	console.log("********Getter Setter end********");
}

/*In the above example, you can see there are two functions inside class People with ‘get’ and ‘set’ properties. 
The ‘get’ property is used to get the value of the variable and ‘set’ property is used to set the value to the
variable. And you can see that getName function is called without parenthesis. And setName function is called 
without parenthesis and it’s just like assigning a value to the variable.*/
class Player {
	constructor(age) {
		this.age = age;
	}

	get Age() {
		console.log("Getter invoked");
		return this.age;
	}

	set Age(age) {
		console.log("Setter invoked");
		this.age = age;
	}

}

/*Spread attributes help to spread the expression as the name suggests. In simple words, 
it converts a list of elements to an array and vice versa.*/
function spreadAttributesExample() {

	console.log("********Spread Attributes start********");

	//Older way. You need to pass an array.
	sumWithoutSpreadAttributesFeature([1, 2, 3, 4, 5]); 
	
	//Newer way. You pass 5 parameters and this will be converted to array automatically.
	//Just like boxing & unboxing.
	sumWithSpreadAttributesFeature(1, 2, 3, 4, 5); 

	//Max method accepts n parameters.
	let maxOlderWay = Math.max(1, 2, 3, 4, 5, 6); // returns 200.
	console.log("Older Way max : ", maxOlderWay)

	//Convert
	let arr = [1, 2, 3, 4, 5, 6];
	//Math.max(arr); // Shows error. Doesn't accept an array.
	let maxNewerWay = Math.max(...arr); //Converts array to list of elements.
	console.log("Newer Way max : ", maxNewerWay);

	console.log("********Spread Attributes end********");

}

let sumWithoutSpreadAttributesFeature = (arr) => {
	let sum = 0;
	for(let element of arr) {
		sum += element;
	}
	console.log("Sum without spread attributes : " + sum);
}

let sumWithSpreadAttributesFeature = (...arr) => {
	let sum = 0;
	for(let element of arr) {
		sum += element;
	}
	console.log("Sum with spread attributes : " + sum);
}

/*Classes are in fact "special functions", and just as you can define function expressions and function declarations,
 the class syntax has two components: 1) class expressions 2) class declarations.*/
function classExample() {
	/*(An important difference between function declarations and class declarations is that 
	function declarations are hoisted and class declarations are not.) */

	//const p = new Rectangle(); // ReferenceError 
	//class Rectangle {}
	console.log("Class Expression : " + Person.name);//CricketPlayer
	let player = new SportsPerson("M S Dhoni", 10000, 37, 200);
	console.log("Player Average : " + player.average);

	let childPhone = new OnePlusPro("OnePlusPro", "8GB", "256GB", "48MegaPixels");
	childPhone.supportedNetwork(); //Calls child class method.
	childPhone.printProperties(); //Calls child class method.
	chilePhone.parentMethod();//Executes parent method due to inheritance.
}

//class declaration
class SportsPerson {
	/*The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax 
	for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved 
	for future versions of ECMAScript.*/

	/*By declaring fields up-front, class definitions become more self-documenting, and the fields are always present.*/

	totalInnings = 0; //Public field
	
	#age;/*private field - It's an error to reference private fields from outside of the class; they can only be 
	read or written within the class body. By defining things which are not visible outside of the class, 
	you ensure that your classes' users can't depend on internals, which may change version to version.
	Private fields can only be declared up-front in a field declaration.*/
	
	constructor(name, runs, age, totalInnings) {
		/*The constructor method is a special method for creating and initializing an object created with a class.
		 There can only be one special method with the name "constructor" in a class.
		 A constructor can use the super keyword to call the constructor of the super class.*/
		this.name = name;
		this.runs = runs;
		this.age = age;
		this.totalInnings = totalInnings;
	}

	//Getter
	get average() {
		return this.calculateAverage();
	}

	calculateAverage() {
		return this.runs/this.totalInnings;
	}
}

//class expression - Another way to define a class
let Person = class CricketPlayer {
	#age; 
	constructor(name, runs, age) {
		this.name = name;
		this.runs = runs;
		this.age = age;
	}
}

class OnePlus {
	name = "OnePlus"
	ram = "6GB";
	memory = "128GB"
	constructor(name, ram, memory) {
		this.name = name;
		this.ram = ram;
		this.memory = memory;
	}

	supportedNetwork() {
		console.log(this.name + " supports 4G");
	}

	printProperties() {
		console.log("Parent - " + this.name);
	}

	parentMethod() {
		console.log("Present only in parent");
	}
}


//Class Inheritance. 
class OnePlusPro extends OnePlus{
	camera;
	constructor(name, ram, memory, camera) {
		//If there is a constructor present in the subclass, it needs to first call super() before using "this".
		super(name, ram, memory);
		this.camera = camera;
	}

	printProperties() {
		super.printProperties();
		console.log("Child - " + this.name +" : " + this.ram + " : " + this.memory);
	}

	supportedNetwork() {
		console.log(this.name + " supports 5G");
	} 
}
