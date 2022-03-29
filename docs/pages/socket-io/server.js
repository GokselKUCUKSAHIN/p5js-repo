const PORT = 3000;

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const {Server} = require("socket.io");


const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const server = app.listen(PORT, () => {
  console.log("Express.js listening Port:", PORT);
})

const socketServer = new Server(server, {
  cors: {
    origin: ["http://localhost:63342"]
  }
});

socketServer.on("connect", socket => {
  console.log("connected id:", socket.id)
  socketServer.on("hi-sucker", e => {
    console.log(e);
  });
  socketServer.on("event-from-client", date =>{
    console.log(date);
  });
})

// setInterval(_ => {
//   socketServer.emit("event-from-server", Math.random(), Math.random(), Math.random());
// }, 450);
