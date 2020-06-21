const WebSocket = require('ws');
const unit = require('./test/unit_tests/unit_showMessage.js');
const server = new WebSocket.Server({ port: 8080});
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const express   = require("express");
const ApiHead   = require("./OpenAPI.js");
const openApi   = swaggerJSDoc(ApiHead);
const fs        = require('fs');
const app       = express();


app.use("/api", swaggerUI.serve, swaggerUI.setup(openApi));

app.get("/doc", (req, res) => {
    fs.readFile(ApiHead.path + "/out/index.html", function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

app.get("/*", (req, res) => {
    fs.readFile(ApiHead.path + "/out" + req.url, function (err, data) {
        if (err) {
            res.send("wrong request. GO TO '" + openApi.info.servers[0] + "/api'");
            return res.end('404 Not Found');
        }
        res.write(data);
        return res.end();
    });
});

app.listen(ApiHead.swaggerDefinition.info.HSPort);

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

		let send = unit.login(data, function(text){
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
