process.title = 'odr-proxy';

// config
const odrDabMuxIP = '127.0.0.1';
const webSocketsServerPort = 4500;

var zmq = require('zeromq')
var webSocketServer = require('websocket').server;
var http = require('http');

var clients = [ ];

// ZeroMQ Client
var dabmux = zmq.socket('req');

// HTTP Server
var server = http.createServer(function(request, response) {
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server listening on " + webSocketsServerPort);
});

// WebSocket Server
var wsServer = new webSocketServer({
    httpServer: server
});

// Connect to ODR-DabMux ZeroMQ Interface
// TODO:: Signal error if cannot connect and attempt reconnection
// TODO:: Detect disconnect and attempt reconnection
dabmux.connect(`tcp://${odrDabMuxIP}:12720`);

// Handle incoming message
dabmux.on('message', function(msg) {
    for (var i=0; i < clients.length; i++) {
        clients[i].sendUTF(msg);
    }
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    var index = clients.push(connection) - 1;
    console.log((new Date()) + ' New client connected.');

    // received a message
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            dabmux.send(message.utf8Data);
        }
    })

    // user disconnected
    connection.on('close', function(connection) {
        clients.splice(index, 1);
    });
});
