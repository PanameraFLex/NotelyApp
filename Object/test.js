// function getUsers(){
// 	let nameCatcher = document.getElementById('User').value;

// 	console.log(nameCatcher);
// 	let paternalName = document.getElementById('User').value
// 	alert(`your name is ${paternalName}`)
// }

// let n = document.getElementById('number2')
// let upperBound=document.getElementById('number7')
// let lowerBound = document.getElementById('number3')




// function round(n, upperBound, lowerBound) {

// 	if ((n > upperBound) || (n < lowerBound)) {
// 	  throw new Error(
// 		`Number ${n} is more than ${upperBound} or less than ${lowerBound}`,
// 	  );
// 	} else if (n < (upperBound + lowerBound) / 2) {
// 	  return lowerBound;
// 	} else {
// 	  return upperBound;
// 	}
//   }




const selection = document.querySelectorAll('select')
const para = document.querySelector("p");
console.log(selection)
  
//   select.addEventListener("change", setWeather);

// if (selection.value === "sunny"){
// 	para.textContent =
// 		  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//   }
  
  
  function setWeather() {
	const choice = select.value;
  
	switch (choice) {
	  case "sunny":
		para.textContent =
		  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
		break;
	  case "rainy":
		para.textContent =
		  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
		break;
	  case "snowing":
		para.textContent =
		  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
		break;
	  case "overcast":
		para.textContent =
		  "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
		break;
	  default:
		para.textContent = "";
	}
  }

// let select = document.querySelector("select")
// let printOut = document.querySelector("p")
// select.addEventListener("change", setWeather)
// function setWeather(){
// 	const choice = select.value;
// 	if(choice ==="Cold"){
// 		printOut.textContent=("This is what we want")
// 	}
// }

// if(this.weatherList.value==="Breezy"){
// 	let printOut = document.querySelector(".Display")
// 	printOut.textContent=("This is what we want")
// }