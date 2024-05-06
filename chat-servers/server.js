const express=require('express')
const app =express() 


const http=require("http")
PORT=process.env.PORT || 5000

const server= http.createServer(app)

const socketio=require("socket.io")
const io =socketio(server,{
  pingInterval: 3000,
  pingTimeout: 7000 
})
var connectedUsers = [];


io.on("connection", (socket) => {
   
  const conUsersList = connectedUsers.map((user, i) => JSON.parse(user.Info));
  socket.emit("Info", conUsersList);

  socket.on("Info", (value) => {
    const user = {
      socket: socket,
      Info: value,
    };
    connectedUsers.push(user);
    const userInfo = JSON.parse(value); 
    socket.broadcast.emit("Info", [userInfo]);
  });

  socket.on("message", (data) => { 
    io.emit("message",data);
  });
  socket.on('disconnect', () => {
    try {
      const disUser = connectedUsers.filter(i=>{
        if(i.socket===socket){
          return i
        }
      });
      socket.broadcast.emit("InfoDiscon", [JSON.parse(disUser[0].Info)]);
      connectedUsers=connectedUsers.filter(i=>i.socket!==socket)
    } catch (error) {
    }

    });
});

app.get('/', (req, res) => {
  res.send(`server listen to port:${PORT}`)
})

server.listen(PORT)