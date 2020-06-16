const assert = require('assert');
const unit = require('../test/unit_tests/unit_showMessage.js');
const unit2 = require('../test/unit_tests/unit_login.js');

describe('1.Function that checks the message for compliance with the requirements.', function(){
	describe('function name: showMessage.', function(){

		it('should return the transmitted text message(string).', function(){
			assert(unit.showMessage("data") == "data");
			assert(unit.showMessage("123") == "123");
			assert(unit.showMessage("1 3") == "1 3");
		});

		it('should return an error message caused by data type mismatch.', function(){
			let user = {name: "John", age: 30 };
			assert(unit.showMessage(user) == "Error! You can't send object. You can send only text string.");
			assert(unit.showMessage(() => {console.log("This is function.")}) == "Error! You can't send function. You can send only text string.");
		});

		it('should return message "Покинул чат." ', function(){
			assert(unit.showMessage("Q") == "Покинул чат.");
			assert(unit.showMessage("Quit") == "Покинул чат.");
			assert(unit.showMessage("q") == "Покинул чат.");
			assert(unit.showMessage("quit") == "Покинул чат.");
			assert(unit.showMessage("exit") == "Покинул чат.");
			assert(unit.showMessage("Exit") == "Покинул чат.");
			assert(unit.showMessage("Out") == "Покинул чат.");
			assert(unit.showMessage("out") == "Покинул чат.");
		});

		it('should return an error message due to an empty string.', function(){
			assert(unit.showMessage("") == "Error! You can't send empty message.");
			assert(unit.showMessage(" ") == "Error! You can't send empty message.");
			let a = null
			assert(unit.showMessage(a) == "Error! You can't send undefined message.");
			let b = undefined;
			assert(unit.showMessage(b) == "Error! You can't send undefined message.");
			let c = false;
			assert(unit.showMessage(c) == "Error! You can't send bool type message.");
		});
	})
});

describe('2.Async function which checks the token of user and send message to all users in chat.', function(){
	describe('function name: login.', function(){
		it('should return answer about incorrect number of arguments. Arguments should be two.', function(){
			assert(unit2.login("23") == "incorrect number of arguments");
		});

		it('should return an answer about the wrong first argument. The first argument must be an object.', function(){
			assert(unit2.login(23, 12) == "incorrect first argument");
		});

		it('should return an answer about the wrong second argument. The second argument must be a function.', function(){
			let data = {token: "222222222222222222222222222222222222222222", text: "test" };
			assert(unit2.login(data, 23) == "incorrect second argument");
		});

		it('should return an answer about the wrong first argument. The first parametr (token) in the first argument must be a string.', function(){
			let data = {token: 123, text: "test"};
			assert(unit2.login(data, () => {console.log("This is function.")}) == "incorrect type of the first parametr(token) in the first argument");
		});

		it('Should return an answer about the incorrect first argument. Length of first parameter (token) in the first argument should be 64 symbols.', function(){
			let data = {token: "222222222222222222222222222222222222222222", text: "test" };
			assert(unit2.login(data, () => {console.log("This is function.")}) == "incorrect first parametr(token) in the first argument");
		});
	})
});
