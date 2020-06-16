const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "address",
	user: "login",
	database: "name of column of",
	password: "password"
});

connection.connect(function(err){
	if (err) { return console.error("Ошибка: " + err.message); }
});

let unit2 = {};

unit2.login = function(data, callback){
	let type_data = typeof data;
	let type_callback = typeof callback;

	if ((data == undefined)||(callback == undefined)) return "incorrect number of arguments";
	if(type_data != 'object') return "incorrect first argument";
	if(type_callback != 'function') return "incorrect second argument";

	let token = data["token"];
	let type_token = typeof token;

	if(type_token != 'string') return "incorrect type of the first parametr(token) in the first argument";
	if(token.length != 64) return "incorrect first parametr(token) in the first argument";

	let db = connection.query('SELECT * FROM users WHERE token = ?', [data["token"]], function(err, results) {
		if(err) return -1;

		text = results[0].login;
		text += ": ";
		text += data["text"];

		callback(text);
		return 0;
	});
	if(db == -1) return "user is not found";
	return 0;
}

 module.exports = unit2;
