const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb")

const server = express();
const PORT = 2890;

// initializing mongodb services 
const mongoClient = new mongodb.MongoClient(); // include Database URI here <<<<<

server.use(cors());
server.use(express.json());

server.get("/", (request, response)=>{
	response.send({
		message: "This are times we are alive for", 
		code: 'success',
		data: {
			name: "James",
			age: 78, 
			location: "Lagos"
		}
	})
})

// write to DB
server.post("/register", (request, response)=>{
	if((request.body.username) && (request.body.password)){
		let username = request.body.username;
		let password = request.body.password;
		
			if((username.trim().length===0) || (password.length ===0)){
				response.send({
					message: "Invalid details, try again", 
					code: "invalid", 
					data: null 
				})
			}
			else{
				const feedback = mongoClient.db("perfectingtest").collection("profiles").insertOne({username:username, password:password})
				if (feedback){
					response.send({
						message: "Account created, login", 
						code: "success", 
						data:{
							username:username, 
							password:password
						}
					})
				}
			}

	}else{
		response.send({
			message:"Input correct data when signing up", 
			code: "missing data", 
			data: null 
		})
	}
})


server.listen(PORT,()=>{
	console.log(`server is listening on PORT ${PORT}`)
})