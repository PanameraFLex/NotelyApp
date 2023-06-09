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
	let pattern = /\w{6,16}/
	if(pattern.test(password)){
		return true
	} else{
		return false
	} 
}

// 3 step process
// 1.  Validate user input
// 2. Check Validated input against localstorage 
// 3. Store Input in local storage 



function formValidate(fullname, newEmail, pass){
	 fullname = document.getElementById('fname').value
	 newEmail = document.getElementById("mail").value
	 pass = document.getElementById('pwd').value
	 fullnameValid = ValidateName(fullname)
	 message = document.querySelector(".infoBox")   // Message holds the infobox
	if(fullnameValid){
		console.log(fullname)
		let validEmail = ValidateEmail(newEmail)
		if(validEmail){
			console.log(newEmail)		
			let validPASS = ValidatePass(pass)
				if (validPASS){
					console.log(pass)
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

	let store = JSON.parse(localStorage.getItem('users'))   //Retrieving the element users from localstorage using .getItem and then storing the parsed item as Store. || Assigning store to the elements of users you get in the local storage after parsing it jSON method using localStorage.getItem
let data = []  // assigning data to an empty array. The array would contain objects eventually 
if(store ==null || store == undefined){    //checking if users exist in local storage, and writing into the HTMl an error message
	console.log('no user has been stored yet')
	data.push({fullname, newEmail, pass})
	console.log(data)
	store = localStorage.setItem("users", JSON.stringify(data))
	// console.log(store)
}else{ 
if(store.length>0){
	store.push({fullname, newEmail, pass})
}

	// message.textContent = 'no user stored'}
}
}

// let store = JSON.parse(localStorage.getItem('users'))   //Retrieving the element users from localstorage using .getItem and then storing the parsed item as Store. || Assigning store to the elements of users you get in the local storage after parsing it jSON method using localStorage.getItem
// let data = []  // assigning data to an empty array. The array would contain objects eventually 
// if(store ==null || store == undefined){    //checking if users exist in local storage, and writing into the HTMl an error message
// 	message.textContent = 'no user stored'

// data.push({fname, email})    // adding the variables fname , email to the empty array of data 
// store = localStorage.setItem("users", JSON.stringify(data))  // Setting the stringified data into store in the form of key{'users'}, Value  pair
// }else{
// 	if (store.length>0){   // saving other users 
// 		store.push({
// 			fname, email})
// 	}
// }
