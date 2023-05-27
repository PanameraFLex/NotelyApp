function Profile(fname, age){
	this.fname = fname
	this.age = age
	console.log(`my name is ${this.fname} and I am ${this.age} years old`)
}

Profile.prototype.display = function(){  // Merging Function Profile to a new variable name display
	return `i am ${this.age} years old`
}

let profile1 = new Profile('Biodun', 56)
let profile2 = new Profile('Adams', 28)
proper = profile1.display()
console.log(proper)