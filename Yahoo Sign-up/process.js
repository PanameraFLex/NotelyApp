//  HAVE 2 FUNCTIONS
// FUNCTION 1: CHECK IF USER INPUT IS VALID 
// FUNCTION 2: PASS THE VALIDATED INPUT TO CONSOLE


/**
 * 
 * @param {*} fullname 
 * @param {*} newEmail 
 * @param {*} password 
 */

// function formValidate(fullname){
// 	let pattern = /[a-z]/i
// 	if(pattern.test(fullname)){
// 		return true
// 	}else {return false}
// }
  //  /^\w+@[yahoo]|[gmail]|[outlook].com$/i



function ValidateName(fullname){
	let pattern = /[a-z]/i
	if(pattern.test(fullname)){
		return true
	}else{
		return false
	}

}

function ValidateEmail(newEmail){
	let pattern = /\w+@(yahoo|gmail|outlook|hotmail)+(\.com|\.net|\.inc|\.edu|\.us)/
	if (pattern.test(newEmail)){
		return true
	}else{
		return false
	}
}



function ValidatePass(password){
	let pattern = /\w{1,16}/
	if(pattern.test(password)){
		return true
	} else{
		return false
	} 
}


// function passValidation(){
// 	pass = document.getElementById('pwd').value
// 	let validPASS = ValidatePass(pass)
// 	if (validPASS){
// 		console.log('booya!')
// 	}else{
// 		console.log('try again')
// 	}
// }
// function showError(errorElement, errorMessage){
// 	document.querySelector("."+errorElement).classList.add("display-error");
// 	document.querySelector("."+errorElement).innerHTML = errorMessage;
// }

// function clearError(){
// 	let errors = document.querySelectorAll(".error");
// 	for(let error of errors){
// 		error.classList.remove("display-error");

// 	}

// }
let store = JSON.parse(localStorage.getItem('users'))   //Retrieving the element users from localstorage using .getItem and then storing the parsed item as Store. || Assigning store to the elements of users you get in the local storage after parsing it jSON method using localStorage.getItem
let data = []  // assigning data to an empty array. The array would contain objects eventually 
if(store ==null || store == undefined){    //checking if users exist in local storage, and writing into the HTMl an error message
	message.textContent = 'no user stored'
}
data.push({fname, email})    // adding the variables fname , email to the empty array of data 
store = localStorage.setItem("users", JSON.stringify(data))  // Setting the stringified data into store in the form of key, Value 


// 3 step process
// 1.  Validate user input
// 2. Check Validated input against localstorage 
// 3. Store Input in local storage 



function formValidate(){
	let fullname = document.getElementById('fname').value
	let fullnameValid = ValidateName(fullname)
	let message = document.querySelector(".infoBox")
	if(fullnameValid){
		let newEmail = document.getElementById("mail").value
		let validEmail = ValidateEmail(newEmail)
		if(validEmail == true){
			let pass = document.getElementById('pwd').value
			let validPASS = ValidatePass(pass)
				if (validPASS){
					// alert('details are verified')
					message.innerHTML = "<p class='success'>Details have been verified</p>"
				}else{
					message.innerHTML = "<p class='error'>Check Password</p>"
					// alert('check password')   // replacing this with .innerHTML method
					
				}
			}else{
				message.innerHTML = "<p class='error' >Check Email</p>"
				// alert('check email')
			}
		}else{
			message.innerHTML = "<p class='error' >Check your name</p>"
			// alert('Check your name')
	}
}

