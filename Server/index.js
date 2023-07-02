const express = require("express");
const PORT = 4343;
//create a server app//
const server = express();
//create listening routes//
server.get("/", function(request, response){

	response.send("You are home, Booya!");
})

// contact us route//
server.get("/contact-us", (request, response)=>{

	response.status(200).send({
		message:"Thank you for contacting us, how can we help you better",
		data: null,
		code: 'success',
		status: 'OK'
	})
})

// make server start listening for communication //
server.listen(PORT,() =>{
	console.log(`Server is listening on PORT ${PORT}`)
}
)