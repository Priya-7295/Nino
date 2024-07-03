module.exports.config = {
	name: "daubuoi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Xem thông tin thời gian sử dụng bot",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"systeminformation": "",
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}${units[l]}`;
}

module.exports.run = async function ({ api, event }) {
	const { time, cpu } = global.nodemodule["systeminformation"];
	const timeStart = Date.now();

	try {
    const pidusage = await global.nodemodule["pidusage"](process.pid);
		var { uptime } = await time();

		var hours = Math.floor(uptime / (60 * 60));
		var minutes = Math.floor((uptime % (60 * 60)) / 60);
		var seconds = Math.floor(uptime % 60);
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

    var upt = {
       body: "𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗵𝗼𝗮̣𝘁 𝗱𝗼̣̂𝗻𝗴: " + hours + ":" + minutes + ":" + seconds + 
      "\n❯ 𝗣𝗿𝗲𝗳𝗶𝘅 𝘁𝗼̂̉𝗻𝗴: " + global.config.PREFIX +
			"\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: " + global.data.allUserID.length +
			"\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗡𝗵𝗼́𝗺: "+ global.data.allThreadID.length +
			"\n❯ 𝗖𝗽𝘂 𝗱𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: " + pidusage.cpu.toFixed(1) + "%" +
			"\n❯ 𝗥𝗮𝗺 𝗱𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: " + byte2mb(pidusage.memory) +
			"\n❯ 𝗣𝗶𝗻𝗴: " + (Date.now() - timeStart) + "ms" +
      "\n❯ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: " + global.config.version,
      attachment: (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://girl.demngayyeu.repl.co')).data.data,
            method: "GET",
            responseType: "stream"
        })).data
    }
    return api.sendMessage(upt,event.threadID, event.messageID)
	}
	catch (e) {
		console.log(e)
	}
}
