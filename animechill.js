var fs = require("fs");
module.exports.config = {
	name: "animechill",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "cụ Dũng",
	description: "random video nhạc anime chill do cụ Dũng tạo",
	commandCategory: "random-mp4",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [
		{
			body: "Tắt đèn thôi and i miss you",
			attachment: fs.createReadStream("./modules/commands/animechill/1633701989.mp4")
		},
		{
			body: "Lần hẹn hò đầu tiên",
			attachment: fs.createReadStream("./modules/commands/animechill/1633702272.mp4")
		},
        {
            body: "Mãi chẳng là anh đâu",
			attachment: fs.createReadStream("./modules/commands/animechill/1633702395.mp4")
        },
        {
            body: "Đừng lo lắng em ơi",
			attachment: fs.createReadStream("./modules/commands/animechill/1633702509.mp4")
        },
        {
            body: "Anh có bàn tay để nắm tất cả nhưng ko thể nắm đc tay em",
			attachment: fs.createReadStream("./modules/commands/animechill/1633702702.mp4")
        },
        {
            body: "Tìm hoài mà chẳng có lối anh về...",
			attachment: fs.createReadStream("./modules/commands/animechill/1633702835.mp4")
        },
        {
            body: "Nghe trong gió có tiếng của anh",
			attachment: fs.createReadStream("./modules/commands/animechill/1633703018.mp4")
        },
        {
            body: "Quê tôi có cánh diều wibu kkk",
			attachment: fs.createReadStream("./modules/commands/animechill/1633703142.mp4")
        },
		{
            body: "Nơi có em là yên bình",
			attachment: fs.createReadStream("./modules/commands/animechill/1634215742.mp4")
        },
		{
            body: "Rồi ta sẽ có được hạnh phúc \nNhưng là ở một chiều không gian khác",
			attachment: fs.createReadStream("./modules/commands/animechill/1634215920.mp4")
        },
		{
            body: "Dịu dàng là ngày em đến \nGiọng nàng là bài hát êm",
			attachment: fs.createReadStream("./modules/commands/animechill/1634216101.mp4")
        },
		{
            body: "Nhỏ thuốc mắt và quên gấp chăn",
			attachment: fs.createReadStream("./modules/commands/animechill/1634216274.mp4")
        },
		{
            body: "Đừng dối em ơi,\nĐừng vờn con tim anh như trò đùa",
			attachment: fs.createReadStream("./modules/commands/animechill/1634216567.mp4")
        },
		{
            body: "Mình giữ nhau thật chặt nhé :3 ",
			attachment: fs.createReadStream("./modules/commands/animechill/1634216705.mp4")
        },

	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}
Viết cho [ ! ] TEST BOT
Aa
