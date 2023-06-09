let bol = JSON.parse('["fresh", "colorado"]')
console.log(bol[1])


// let boli = JSON.parse(
// 	'{"p": 5}',
// 	(key, value) =>
// 	  typeof value === "number"
// 		? value * 2 // return value * 2 for numbers
// 		: value, // return everything else unchanged
//   );
//   // { p: 10 }
// console.log(boli)  

let jol = JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {


	console.log(key);
	return value;
  });


  function hitSave(){
	let squadMeet = {"strikers": 8, 
"midfielders":11, "defenders": 7, "goalkeeper":3}
localStorage.setItem('club', JSON.stringify(squadMeet))
}
hitSave()