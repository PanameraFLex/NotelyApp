let display = document.querySelector('#display')

function return1(){
	console.log(1) 
	return (this.display.innerHTML += 1)
}

function return2(){
	console.log(2) 
	return (this.display.innerHTML += 2)
}

function return3(){
	console.log(3) 
	return (this.display.innerHTML += 3)
}

function return4(){
	console.log(4) 
	return (this.display.innerHTML += 4)
}

function return5(){
	let number5 = 5
	
	console.log(5) 
	return (this.display.innerHTML += 5) && alert (number5)	
}

function return6(){
	console.log(6) 
	return (this.display.innerHTML += 6)
}

function return7(){
	console.log(7) 
	return (this.display.innerHTML += 7)
}

function return8(){
	console.log(8)
	return(this.display.innerHTML += 8)
}
function return9(){
	console.log(9)
	return(this.display.innerHTML += 9)
}

