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

// function scout(x){        // defines the function 
// 	let pattern = /.com$/i;     // this is regex   matching any character that ends with .com
// 	if (pattern.test(x)){
// 		return true
// 	}else{
// 		return false
// 	}
// }
//  while(true){
// 	x = prompt(`Enter your raw emails`).split()
//  }

//  let money = "hundred";
//  let kudi = "thousand"
//  alert("apple" > "pineapple")


// let hour = prompt(`Enter time`);
// let greeting;
// if (hour<18){
// 	alert(`good afternoon, the time is ${hour}`)
// }else{
// 	alert(`Good night, it is past your bedtime`)
// }

// alert( 1 && 2 && 3 );

// function profile (fname, age, sex, address){
// 	fname = 'Martins';
// 	age = 46;
// 	sex = 'Male';
// 	address = '87, Ilupeju Street';
// 	console.log(`My name is ${fname}, I am a ${age} year old ${sex} and i live at ${address} in Lagos`)
// }

// profile()



// ///// ANONYMOUS FUNCTION ////
// (function(){
// 	console.log('Welcome World')
// }())



// (function(arithmetics){
// 	console.log(`${arithmetics} is awesome`)
// }('Maths such as Further maths'))


/// ARROW FUNCTION ///   SIMILAR TO ANONYMOUS, BUT NO FUNCTION NAME AND FUNCTION IS CALLED OUTSIDE OF CODE
(()=>{
	console.log('amazing')
})()

// this.   points to function 

function Person(fname, age, height){
	this.fname = fname
	this.age = age
	this.height = height
}

let person1 = new Person('Jamiu', 29, '78Ft')
let person2 = new Person('Johnson', 28, '34Ft')
	console.log(person1, person2)