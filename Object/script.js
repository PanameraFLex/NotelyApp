window.onload = function(colorSwitch){
	colorSwitch = JSON.parse(localStorage.getItem('colorSwitch'))
	if(colorSwitch == null || colorSwitch == undefined){
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white'
	}else{
		document.body.style.backgroundColor = colorSwitch['background'];
		document.body.style.color = colorTxt;
	}
}
let changer = document.getElementById('red')
// let changer = document.querySelector('button')    // Trying to mark all buttons, so when a button is pressed, the value of the button is captured and interpreted to DOM
changer.addEventListener('click', function(){
	colorSwitch = localStorage.getItem('colorSwitch')
	if(colorSwitch == null || colorSwitch == undefined || colorSwitch !='red'){
		document.body.style.backgroundColor = 'red'
		colorSwitch = {
			background: 'red'
		}
		localStorage.setItem('colorSwitch', JSON.stringify(colorSwitch))

	}
})

// setting function that changes background color to Yellow 

let YellowChanger = document.getElementById('Yellow')
YellowChanger.addEventListener('click', function(){
	colorSwitch = localStorage.getItem('colorSwitch')
	if(colorSwitch == null || colorSwitch == undefined || colorSwitch != 'yellow'){
		document.body.style.backgroundColor = 'yellow'
		colorSwitch = {
			background: 'yellow'
		}
		localStorage.setItem('colorSwitch', JSON.stringify(colorSwitch))
	}
})

let GreenChanger = document.getElementById('Green')
GreenChanger.addEventListener('click', function(){
	colorSwitch = localStorage.getItem('colorSwitch')
	if(colorSwitch == null || colorSwitch == undefined || colorSwitch != 'green'){
		document.body.style.backgroundColor = 'green'
		colorSwitch = {
			background: 'green'
		}
		localStorage.setItem('colorSwitch', JSON.stringify(colorSwitch))
	}
})

function reset(){
	localStorage.removeItem('colorSwitch');
	location.reload()
}








