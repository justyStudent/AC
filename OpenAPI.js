const HSPort = 8000;
const WSPort = 8080;
//const ip   = "localhost";
const ip     = "95.217.212.188";
const path   = "/root/project/AC";

const apiSHeader = {
	swaggerDefinition: {
		info: {
			title: "API for nodejs-chat",
        	version: "1.0.0",
        	description: "This is an API for simple chat server, that is based on websockets",
            servers: ["http://" + ip + ":" + HSPort, "ws://" + ip + ":" + WSPort],
            HSPort: HSPort,
            WSPort: WSPort
        }
    },
    apis: [path + "/v1/api.js"],
    path: path
};

module.exports = apiSHeader;
