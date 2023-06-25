const http = require('http');
const websocket = require('ws'); 


const server = http.createServer((req,res) => {
    res.end('I am connected!');
});

const wss = new websocket.WebSocketServer({server});

wss.on('headers',(headers, req) =>{
    console.log(headers)
    /*
        [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            'Sec-WebSocket-Accept: zkhoxi3eA1dEcdrIObbDInRNFlU='
        ]
    */
})  



wss.on('connection',(ws, req) => {
    ws.send('Welcome to websocket server on port 8000')
    ws.on('message',(data) => {
        console.log(data.toString())
    })
})

server.listen(8000);