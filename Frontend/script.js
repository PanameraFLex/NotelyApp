document.addEventListener('DOMContentLoaded', async function(){
	let feedback = await axios.get("http://localhost:2323/contact")
	console.log(feedback);
})