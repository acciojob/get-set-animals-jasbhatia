//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species()
	{
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes sound`);
	}
}

class Dog extends Animal {
	bark(){
		return console.log("woof");
	}
}

class Cat extends Animal {
	console.log("purr")
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
