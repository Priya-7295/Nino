if (!global.cmds_autoreaction)
	global.cmds_autoreaction = {};

module.exports.config = {
	name: 'autoreact',
	version: '1.1.1',
	hasPermssion: 2,
	credits: 'NTKhang', //bot cá
	description: 'Auto thả cảm xúc vào tin nhắn',
	commandCategory: 'Hệ thống support-bot',
	usages: 'autoreact',
	cooldowns: 1
};

module.exports.handleEvent = function ({
	api, event,
}) {
	const { threadID, messageID, senderID, body } = event, g = (senderID) => api.sendMessage(senderID, threadID, messageID);
	const emojis = ['❤️', '😮', '😆', '🤤', '🤓', '😹', '🤔', '😛', '🥰', '😢', '😴', '😎', '😭','😍','🤣'];
	const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
	if (!global.autoreactionAllThread || global.cmds_autoreaction[threadID] == false)
		return;
	if (global.autoreactionAllThread && global.cmds_autoreaction[threadID] == true)
		return;
	api.setMessageReaction(randomEmoji, messageID, false, true);
};
module.exports.run = function ({
	api, event, args, hasPermssion
}) {
	if (args[0] == "all") {
		if (hasPermssion < 2)
			return api.sendMessage('[⚜️]➜ Bạn không có quyền sử dụng lệnh này', event.threadID, event.messageID);
		global.autoreactionAllThread = !global.autoreactionAllThread;
		return api.sendMessage('[⚜️]➜ Đã ' + (global.autoreactionAll ? 'bật ' : 'tắt') + ' thành công ' + this.config. name + ' cho tất cả các nhóm', event.threadID, event.messageID);
	}
	else if (hasPermssion < 1)
		return api.sendMessage('[⚜️]➜ Bạn không có quyền sử dụng lệnh này', event.threadID, event.messageID);
	else {
		global.cmds_autoreaction[event.threadID] = !global.cmds_autoreaction[event.threadID];
		api.sendMessage('[⚜️]➜ Đã ' + (global.cmds_autoreaction[event.threadID] ? 'bật ' : 'tắt') + ' thành công ' + this.config. name, event.threadID, event.messageID);
	}
};