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
	let mathim = i + ' * 2 = ' + (i*2)
	mathed = parseInt(mathim)
	mathed += 5
	console.log (mathed)
	// if(mathim % 2 !=0){
	// 	console.log(mathim + number(5))
	// }
}


let fruits = ['orange', 'banana', 'apple', 'mango', 'cashew', 'guava', 'corn', 'pawpaw']
for (i=0; i<=fruits.length; i++){
	if (fruits[i]==fruits[6]){
		console.log(fruits[i])
	}
}

let menulist = ['yam', 'eggs', 'beef', 'beer']
let revised = new Array('fire', 'cool', 'kernel')
console.log(menulist, revised)



let nuts = ['groundnut', 'kolanut', 'walnut', 'ginger']
let flowers = new Array('daffodil', 'rose', 'hibiscus')

nuts.unshift(flowers)
console.log(nuts)