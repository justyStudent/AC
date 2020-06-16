let unit = {};

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

module.exports = unit;
