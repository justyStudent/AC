let unit = {};

/**
The funtioin showMessage() receives a message from the user and views its contents.
The message passed to the function must be in a specific format. Otherwise, the function will return an error due to a format mismatch.
If the message contains a keyword, the function will return the corresponding response.
\param data The user's text message, which should be in the format "string".
\return Received message. In case of an error, an error code with its description.
*/

unit.showMessage = function (data) {
	var words = ["Exit", "exit", "Q", "Quit", "q", "quit", "Out", "out"];
	let info = typeof data;	

	switch(info){

		case 'number':	info = 'string';		

		case 'object':
			if(data == null){
				data = "Error! You can't send undefined message.";				
			} else {
				data = "Error! You can't send object. You can send only text string.";				
			}			
			break;

		case 'undefined':
			data = "Error! You can't send undefined message.";			
			break;

		case 'function':
			data = "Error! You can't send function. You can send only text string.";			
			break;

		case 'boolean':
			data = "Error! You can't send bool type message.";			
			break;

		case 'string':
			data.trim();
			if((data == "")||(data == " ")){
				data = "Error! You can't send empty message.";												
			}else{
				for(i=0; i<words.length; i++){
					if(data == words[i]){
						data = "Покинул чат.";						
					}
				}
			}
			break; 
			
		default:
			data = "You can send only text string."			
			break;
	}	

	return data;
}

/**
The function login()  accepts a user token and a callback function.
By user token, the function connects to the database and takes the user login.
Then the received login is transferred to the callback function.
The callback function receives the login and text of the user's message and sends it to all chat participants.
\param data, callback() The first parameter gets the object in which the user token is available at the address data ["token"], and the message of the user at the address data ["text"].
The second parameter is a callback function.
Callback function that makes sending messages to all users.
\return 0, if the function completed successfully and -1, if the execution of the function failed.
*/
unit.login = function(data, callback){

	const mysql = require("mysql2");

	const connection = mysql.createConnection({
		host: "localhost",
		user: "admin",
		database: "first_db",
		password: "owner"
	});

	connection.connect(function(err){
		if (err) { return console.error("Ошибка: " + err.message); }	
	});

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

	connection.end();

	if(db == -1) return "user is not found";
	return 0;
}

module.exports = unit;
