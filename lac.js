module.exports.config = {
    name: "lạc",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "Cụ Dũng",
        description: "còn cái nịt",
        commandCategory: "Không cần dấu lệnh",
        usages: "noprefix",
        cooldowns: 5,
    };
    module.exports.handleEvent = function({ api, event }) {
        const fs = global.nodemodule["fs-extra"];
        var { threadID, messageID } = event;
        if (event.body.indexOf("Lạc")==0 || (event.body.indexOf("lạc")==0) || (event.body.indexOf("Cơn mơ")==0) || (event.body.indexOf("cơn mơ")==0) || (event.body.indexOf("Bơ vơ")==0) || (event.body.indexOf("bơ vơ")==0)) {
            var msg = {
                    body: "Em iu ngủ ngon nhaa",
                    attachment: fs.createReadStream(__dirname + `/noprefix/lac.mp4`)
                }
                return api.sendMessage(msg, threadID, messageID);
            }
        }
        module.exports.run = function({ api, event, client, global }) {
    
    }