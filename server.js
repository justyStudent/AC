const WebSocket = require('ws');
const unit = require('./test/unit_tests/unit_showMessage.js');
const unit2 = require('./test/unit_tests/unit_login.js');
const server = new WebSocket.Server({ port: 8080});

var data = "";

server.on('connection', ws => {
	ws.on('message', message => {

		data = JSON.parse(message);

		data["text"] = unit.showMessage(data["text"]);

		let err = data["text"].indexOf('Error!');

		if(err == 0){
			data["text"] = "[wrong message]";
		}

		if(data["text"] == "Покинул чат."){
			ws.close();
		}

		let send = unit2.login(data, function(text){
			server.clients.forEach(client => {
				if(client.readyState == WebSocket.OPEN){
					client.send(text);
				}
			});
		});
		if(send != 0) ws.close();
		return 0;
	});

	ws.send('Добро пожаловать в AC - сервис!');
	ws.send('Напиши "!Новости", чтобы получить свежую подборку новостей.');
	ws.send('Напиши "Exit", чтобы покинуть чат.');
});
