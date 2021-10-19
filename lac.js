const fs = require("fs");
module.exports.config = {
name: "lạc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Cụ Dũng",
	description: "",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
    if (event.body.indexOf("Lạc")==0 || (event.body.indexOf("lạc")==0) || (event.body.indexOf("Cơn mơ")==0) || (event.body.indexOf("cơn mơ")==0) || (event.body.indexOf("Bơ vơ")==0) || (event.body.indexOf("bơ vơ")==0)) {
        var msg = {
                body: "lạc vào trong cơn mơ, bơ vơ\nKhi nơi đây vây kín ta là mịt mờ",
                attachment: fs.createReadStream(__dirname + /noprefix/lac.mp4)
            }
            return api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, global }) {

}