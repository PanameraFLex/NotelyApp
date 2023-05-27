function Profile(fname, email){
	fname = document.getElementById('fname').value.trim()
	email = document.getElementById('mail').value.trim()
	this.fname = fname
	this.email = email
	// console.log(`my name is ${this.fname}`)
}


Profile.prototype.FormValidate = function(){
	// alert('hello')
	let pattern = /[a-z]/i
	if(pattern.test(this.fname)){
		let pattern = /\w/i
		if(pattern.test(this.email)){
			console.log('good')
		}else{
			console.log('bad email')
		}
	}else{
		console.log('check your name')
	}
}



// Profile.prototype.display = function(){
// 	return `my email is ${this.email}`
// }

// function ValidateFname(fname){
// 	let pattern = /[a-z]/i
// 	if(pattern.test(fname)){
// 		return true
// 	}else{
// 		return false
// 	}
// }

// function ValidateEmail(email){
// 	let pattern = /\w/i
// 	if(pattern.test(email)){
// 		return true
// 	}else{
// 		return false
// 	}
// }

// function FormValidate(){
// 	let fname = document.getElementById('fname').value.trim()
// 	let ValidFname = ValidateFname(fname)
// 	if (ValidFname){
// 		let email = document.getElementById('mail').value.trim()
// 		let ValidEmail = ValidateEmail(email)
// 			if (ValidEmail){
// 				console.log('success')
// 			}else{
// 				console.log('bad email')
// 			}
// 		}else{
// 			console.log('bad name')
// 		}		
// }