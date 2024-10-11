//http is core node module
const http = require('http');

// ws is a third party module
const websocket = require('ws');

const server = http.createServer((req, res) =>{
    res.end("I am conneted")
});

const wss = new websocket.WebSocketServer({server});


wss.on('headers', (headers,req)=>{
    console.log(headers)
});

wss.on('connection', (ws, req)=>{
ws.send("Welcome the WebSocketServer !!");
});

server.listen(8000);
