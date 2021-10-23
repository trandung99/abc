var fs = require("fs");
module.exports.config = {
	name: "mtpp",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "cụ Dũng",
	description: "random video Sơn Tùng MTP",
	commandCategory: "random-video",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [
		{
			body: "do nằm sai thế, đau hết cả cổ",
			attachment: fs.createReadStream("./modules/commands/mtp/namsaithe.mp4")
		},
		{
			body: "tên anh đó ,tên đầy đủ của sự dòm ngó",
			attachment: fs.createReadStream("./modules/commands/mtp/ohmygod.mp4")
		},
        {
            body: "Mãi như ngày hôm qua",
			attachment: fs.createReadStream("./modules/commands/mtp/nhungayhomqua.mp4")
        },
        {
            body: "I LOVE YOU",
			attachment: fs.createReadStream("./modules/commands/mtp/iloveyou.mp4")
        },
        {
            body: "Nhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này",
			attachment: fs.createReadStream("./modules/commands/mtp/chungtakothuocvenhau.mp4")
        },
        {
            body: "Tên anh ở ngang trên bầu trời.\nGanh đua làm chi cho sầu đời",
			attachment: fs.createReadStream("./modules/commands/mtp/intro.mp4")
        },
        {
            body: "Tiếng khóc cuốn theo làn gió bay",
			attachment: fs.createReadStream("./modules/commands/mtp/emtrailactroi.mp4")
        },
        {
            body: "Câu ca du dương vang bên tai âu yếm bay trong sương mờ",
			attachment: fs.createReadStream("./modules/commands/mtp/1633700737.mp4")
        },
		{
            body: "mông lung như một trò đùa, anh xin giơ tay rút lui thôi",
			attachment: fs.createReadStream("./modules/commands/mtp/1633761237.mp4")
        },
		{
            body: "Cơn mưa ngang qua mang em đi xa...",
			attachment: fs.createReadStream("./modules/commands/mtp/1633761393.mp4")
        },
		{
            body: "Cầm tay anh, dưa vai anh, kề bên anh\nNơi này có anh ❣️",
			attachment: fs.createReadStream("./modules/commands/mtp/1634979845.mp4")
        },
		{
            body: "Mai này con lớn lên, mang ngàn lời ca ấm êm.\nĐem 1 tình yêu thiết tha giúp cha giang đôi tay ôm lấy vai mẹ",
			attachment: fs.createReadStream("./modules/commands/mtp/1634981581.mp4")
        },

	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}