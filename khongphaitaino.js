const fs = require("fs");
module.exports.config = {
	name: "không phải tại nó",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Cụ Dũng", 
	description: "",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("không phải tại nó")==0 || (event.body.indexOf("Không phải tại nó")==0)) {
		var msg = {
				body: "không phải tại nó, không phải không phải tại nó",
				attachment: fs.createReadStream(__dirname + `/noprefix/khongphaitaino.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}