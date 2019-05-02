const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws, request) => {
  ws.on('message', message => {
	console.log(`Bericht ontvangen van ip: ${request.remoteAddress}`);
    ws.send(`Bedankt voor het bericht: ${message}!`);
  })  
})