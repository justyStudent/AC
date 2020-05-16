const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080});

var words = ["Exit", "exit", "Q", "Quit", "q", "quit", "Out", "out"];      

server.on('connection', ws => {
  ws.on('message', message => {

  	for(i=0; i<words.length; i++){
          if(message == words[i]){
            message = null;
          	ws.close();
            return 0;
          }
      }

    server.clients.forEach(client => {
    	if(client.readyState == WebSocket.OPEN){
          client.send(message);
        }
      });
});
  ws.send('Добро пожаловать в AC - сервис!');
  ws.send('Напиши "!Новости", чтобы получить свежую подборку новостей.');
  ws.send('Напиши "Exit", чтобы покинуть чат.');

});

