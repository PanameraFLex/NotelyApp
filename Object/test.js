// function getUsers(){
// 	let nameCatcher = document.getElementById('User').value;

// 	console.log(nameCatcher);
// 	let paternalName = document.getElementById('User').value
// 	alert(`your name is ${paternalName}`)
// }

let n = document.getElementById('number2')
let upperBound=document.getElementById('number7')
let lowerBound = document.getElementById('number3')




function round(n, upperBound, lowerBound) {

	if ((n > upperBound) || (n < lowerBound)) {
	  throw new Error(
		`Number ${n} is more than ${upperBound} or less than ${lowerBound}`,
	  );
	} else if (n < (upperBound + lowerBound) / 2) {
	  return lowerBound;
	} else {
	  return upperBound;
	}
  }