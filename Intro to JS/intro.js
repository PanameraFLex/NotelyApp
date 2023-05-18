// let parcel = {
// 	'name': 'Mercedes Benz C63S AMG',
// 	'type': 'Sport Sedan',
// 	'class': 'Sports'
// }
// console.log(parcel)

// for(let i = 0; i<=10; i++){
// 	console.log(i)
// }

// for (let i = 0; i <=10; i++){
// 	if(i%2==0){
// 		console.log('This is even num: '+ i)
// 	}else if (i%3==0){
// 		console.log('Thid is odd '+i)
// 	}else{
// 		console.log('This is  a prime number '+i)
// 	}
// }

// for(let i = 0; i<=10; i++){

// 	console.log(i + ' * 2 = ' + (i*2))
// }

for(let i = 0; i<=10; i++){
	let mathim =  (i*2)
	mathed = (mathim)
	mathed += 5
	console.log ((mathed))
	// console.log((mathim))
	// if(mathim % 2 !=0){
	// 	console.log(mathim + number(5))
	// }
}


// let fruits = ['orange', 'banana', 'apple', 'mango', 'cashew', 'guava', 'corn', 'pawpaw']
// for (i=0; i<=fruits.length; i++){
// 	if (fruits[i]==fruits[6]){
// 		console.log(fruits[i])
// 	}
// }

// let menulist = ['yam', 'eggs', 'beef', 'beer']
// let revised = new Array('fire', 'cool', 'kernel')
// console.log(menulist, revised)



// let nuts = ['groundnut', 'kolanut', 'walnut', 'ginger']
// let flowers = new Array('daffodil', 'rose', 'hibiscus')

// nuts.unshift(flowers)
// console.log(nuts)



// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 10);
// console.log(part);


// let level = 7;
// let weekdays; // this is hoisted, so it exists and can be called 
// switch (level) {
// 	case 1:
// 		weekdays = "monday";
// 		break;
// 	case 2:
// 		weekdays = "tuesday";
// 		break;
// 	case 3:
// 		weekdays = "wednesday";
// 		break;
// 	case 4:
// 		weekdays = "thursday";
// 		break;
// 	default:
// 		weekdays = "weekend"
// 		break;
// }

// if(level == 7){
// 	console.log(`This is day ${level}, and it is ${weekdays}`) // using backticks and ${}
// }else{
// 	console.log(weekdays)
// }



// //WHILE LOOP//
// let jig=0;
// while (jig<=15) {
// 	console.log(jig);
// 	jig++
	
// }


// let counter = 20;
// while (counter<=100) {
// 	console.log(counter);
// 	counter += 20
// }

// let lo = 0
// do{
// 	lo++;
// 	console.log(lo);
// }while (lo<=5)

// paraphrase = 78;
// while (paraphrase>12) {
// 	console.log(paraphrase)
// 	paraphrase--;
// 	if (paraphrase == 50) {
// 		console.log(`Bingo, we got ${paraphrase}`)
// 		break;
// 	}
// }

// // createElement()
// // document.write(<h2>Filo Jin</h2>)


// // using switch statement:  when a key is passed in an array, print the IDBCursorWithValue, and when it does not exist, give an error


// let silly = "567";
// console.log(typeof(silly))
// let convertedsilly = Number(silly);
// console.log(typeof(convertedsilly))
// let roundfigure = convertedsilly + 56;
// console.log(roundfigure)


const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7);
// console.log(part)


let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)
let basicText = text.replace("visit", "login")
console.log(basicText)
let trialPay = basicText.replaceAll()
console.log(trialPay)



let fruits = ['Carrot', 'Melon', 'Mango', 'Pawpaw', 'Orange']
let level = 6;
let item;
switch(level){
	case 1:
		item = fruits[0];
		break;
	case 2:
		item = fruits[1];
		break;
	case 3:
		item = fruits[2];
		break;
	case 4:
		item = fruits[3];
		break;
	case 5:
		item = fruits[4];
		break;
	default:
		item = "nothing to see here";
		break;
}
if (level != 6){
	console.log(`This is the fruit in basket ${item}`)

}else{
		console.log(item)
	}


let parolee = ['scorpion', 'Ink', 'Lion', 'Oil']
console.log(parolee.join("+"))


// let nameHolder=	prompt('Enter Your name: ').trim()
// 	if (nameHolder.length >2){
// 		alert(`Welcome ${nameHolder}`)
// 	}
// 	else if (nameHolder.length > 0 && nameHolder.length < 2){
// 		alert(`${nameHolder} is too short`)
// 		prompt('Try your name again: ')
// 	}
// 	else prompt('You need to enter a name: ')
// console.log(nameHolder)



let collectedInfo = [];
// let name = prompt('What is your name? ');
// let age = prompt('Enter your age');
// let title = prompt('Single or Married?');

let collectInfo = [name, age, title]
console.log((collectInfo))
let Jailtime = '90seconds';
collectInfo = collectInfo.push(Jailtime)
console.log(collectInfo)
