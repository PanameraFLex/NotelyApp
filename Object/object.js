// function Profile(fname, age){
// 	this.fname = fname
// 	this.age = age
// 	console.log(`my name is ${this.fname} and I am ${this.age} years old`)
// }

// Profile.prototype.display = function(){  // Merging Function Profile to a new variable name display. We are able to access attributes of a function globally
// 	return `i am ${this.age} years old`
// }

// let profile1 = new Profile('Biodun', 56)
// let profile2 = new Profile('Adams', 28)
// proper = profile1.display()
// console.log(proper)



class Profile{
	constructor(fname, password){
		this.fname = fname
		this.password = password
	}
	getName = function(){
		return `my name is ${this.fname} and my password is ${this.password}`
	}
}

profileA = new Profile('miracle', '1234')
profileB = new Profile('james', 78)
console.log(profileA.getName())
console.log(profileB.getName())



// create function getUsers
// save input as instances of parameter in function
// let function check input against regex
// check if input exists in localstorage
// save input in local storage 

function getUsers(User, mail){
	User = document.getElementById("User").value.trim()
	mail = document.getElementById("mail").value.trim()
	this.User = User;
	this.mail = mail;
	let pattern = /[a-z]/i
if(pattern.test(this.User)){
	let pattern = /\w/i
	if(pattern.test(this.mail)){
		console.log(`all is good`)
	}else{
		console.log(`check your email`)
	}
}else{
	console.log(`check your username`)
}
let store = JSON.parse(localStorage.getItem('User'))
database = []
if((store === null) || (store === undefined)){
	console.log('Noo user stored with matching name')
	database.push({User,mail})
	console.log(database)
	store = localStorage.setItem("User", JSON.stringify(database))
	// store.push({User, mail})
	// console.log(store)
}else{
	console.log(`new data has been captured`)
	store.push({User, mail})
	localStorage.setItem('User', JSON.stringify(store))
	console.log(store)
}
}