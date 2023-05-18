let users = ['tope', 'temi', 'tolu']
let newUsers = [...users]
let welcome = prompt('welcome to the channel, enter your name ').trim()
while(true){
	if(welcome.length == 0){
		alert('you have not entered a name')
		break;
	}
	else{
		if(users.includes(welcome)){
			confirm('welcome ' + welcome)
			break;

		}
		else{
			users.push(welcome)
			if(users.includes(welcome)){
				confirm(welcome + ' registered')
			}
		}
	}
}


let jin = 'liol'