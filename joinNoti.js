module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname([ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}, threadID, api.getCurrentUserID());
		return api.sendMessage(`» 𝙆𝙀𝙏 𝙉𝙊𝙄 𝙏𝙃𝘼𝙉𝙃 𝘾𝙊𝙉𝙂«\n\n◆━━━━━━━━━━━━━◆\n⚠𝓛𝓾𝓪̣̂𝓽 𝓑𝓸𝓽\n1. Cấm spam nhiều lệnh trong 1 phút\n2. Cấm 2 bot trong 1 box (=ban)\n3. Hạn chế menu và help (nên copy lại)\n4. Thêm bot ko xin (=ban)\n5. Đừng có mà chửi bot sẽ bị ban vĩnh viễn ☠.\n6BOX có bot là có acc admin bot(lí do lười vào acc fb check tn). \n7Không nhầm ADMINBOT-(người chạy bot) với BOT
\n◆━━━━━━━━━━━━━◆\n📝Nhập !in4 admin sẽ có thông tin của adminbot\n📌Liên hệ khi cần thiết\n⚜QTV có thể dùng '!help rule' để xem hướng dẫn và set bảng luật box\n⚜Thành viên dùng '!rule' để xem luật box của mình\nHiện có 200 lệnh có thể sử dụng trên bot này \n◆━━━━━━━━━━━━━◆\nThis bot made by JRT. Thank you for using\nXin cảm ơn đã đọc...UwU\n© Admin: TRẦN DŨNG - CỤ DŨNG `, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, ${1625962298}.mp4);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Welcome aboard {name}.\nChào mừng đã đến với {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm 🥳.✅Khi vô các cậu hãy dùng lệnh để xem luật box nhé:\n👉🏻!rule " : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
