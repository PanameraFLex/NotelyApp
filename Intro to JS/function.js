// function profile(fname){  //this creates a function named profile with attribute fname//
// 	let pattern = /[a-z]/i  // Regex matching between letters a - z with case IGNORE
// 	if(pattern.test(fname)){  //Tests if fname matches the regex in pattern
// 		return true
// 	}else{
// 		return false
// 	}
// }  // End of function


// while(true){
// 	fname = prompt('what is your name? ').trim() // fname = user input after trimming white space
// 	let call = profile(fname) // Assigning the boolean value of function profile result to call
// 	if(call === true ){
// 		alert('welcome ' + fname);
// 		break;
// 	}else{
// 		alert('enter a valid user name')
// 	}
// }


// function verify(dob){
// 	let template = /[0-9]{8}/   // Regex matching 0-9 and 8 characters only
// 	if (template.test(dob)){
// 		return true
// 	}else{
// 		return false
// 	}
// }

// while(true){
// 	dob = prompt('Enter your Date of Birth using numbers only: ').trim()
// 	let checker = verify(dob)
// 	if(checker === true){
// 		alert(`Your age is ${dob}`);
// 		break;
// 	}else{
// 		alert(`Enter a valid date`)
// 	}
// }

// function counter(){
// 	// let score = prompt('Enter a number')
// 	// score ++
// 	alert(`Total counted presses`)
// }


// create a program that reads files on a page, let Function 1 extract regex from the page, function 2 would split the extracts

function scout(x){        // defines the function 
	let pattern = /.com$/i;     // this is regex   matching any character that ends with .com
	x = prompt(`Input a number: `);    // x prompts for user's input 
	let result = scout(x)    // declaring the result of the search
	if (pattern.test(x)){
		alert(result)
	}else{
		alert(`${x} is sorted with no matches`)
	}
}