const express =require("express");
const cors = require("cors");

// create a server app 
const server = express();
const PORT = 2323

server.use(cors());


// routes
server.get("/contact", (request, response)=>{
	response.send("This is the contact Page");
});

server.get("/", (request, response)=>{
	response.send("You are on the Home Page");
});

server.get("/quotes", (request, response)=>{
	response.send()
})



// make server listen
server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`)) 