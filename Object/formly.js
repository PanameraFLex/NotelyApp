function createForm(){
	const formArea = document.getElementsByClassName('contentPage')[0]
	let form = document.createElement('div')
	form.innerHTML = `<form class='form' method='POST' action='#'>
	 <label value="username"> Username: </label>
	 <input type='text' id='username'  />
	 <br>
	 <label value = "password"> Password: </label>
	 <input type='password' id='pwd' />
	 </form>`;
	formArea.append(form)
	console.log(form)
}
