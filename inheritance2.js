//Inheritance Example

function initParamsInheritance2()
{
	animalExample();
}

function animalExample()
{
	var animal = {eats : true,
				  walk : function()
				  {
					this.walking = true;
					console.log("I am walking");
				  }
				};
	var rabbit = {jumps : true,
				  run : function()
				  {
					this.running = true;
					console.log("I am running");
				  }
				};
	
	rabbit.__proto__ = animal;//Inherit
	console.log("Rabbit Jumps : "+rabbit.jumps);//true
	console.log("Rabbit eats : "+rabbit.eats);//true
	
	var fedupRabbit = {eats : false};
	fedupRabbit.__proto__ = animal;
	console.log("Fedup Rabbit eats : "+fedupRabbit.eats); 
	 
	rabbit.run();
	rabbit.walk();
}