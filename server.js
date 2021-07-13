const express = require("express")//Import express
const http = require("http")
const cors = require('cors')//add cors as a middleware.
const app = express()// initialize a new app by calling express() and saving the result to a variable called app.
app.use(cors());//  First import cors, then add it to the application by calling the use method on app.
app.use('/login', (req, res) => {
	res.send({
	  token: 'test123'
	});//in (req,res) The first argument is the path the application will listen to and the second argument is a callback function that will run when the application serves the path. The callback takes a req argument, which contains the request data and a res argument that handles the result.
  });//Adding  in a handler for the '/login' path. Calling res.send with a JavaScript object containing a token.
  
  app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));//run the server on port 8080 using app.listen.

const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}//socket.io has been blocked by CORS policy: No 'Access-Control-Allow-Origin.so to remove that use this code using socket.io with cors.
})

io.on("connection", (socket) => {
	socket.emit("me", socket.id)//to all the connected clients this message is send.

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")//CallEnded message send to all clients except the sender itself.
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })//message is send to userToCall.
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)//to or in (they are the same) when broadcasting or emitting.
	})
})

server.listen(5000, () => console.log("server is running on port 5000"))//server is running on port 5000.
