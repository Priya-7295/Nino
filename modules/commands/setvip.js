module.exports.config = {
	name: "setvip",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Raiden Makoto",
	description: "Thay đổi số tiền của bản thân hoặc người được tag bản premium",
	commandCategory: "Hệ Thống",
	usages: "< me/tag >",
	cooldowns: 0,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {const permission = ["100082166588573","100071768980176","100088813809659","100081635371333"];
if (!permission.includes(event.senderID)) return api.sendMessage("Setmoney Premium : bạn cần phải mua key vip mới có thể dùng lệnh..\ntime chờ lệnh 0s. ", event.threadID, event.messageID);
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var moneySet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬  premium] → Đã cộng số dư của bạn thêm ${moneySet} đồng`, event.threadID, () => Currencies.increaseMoney(event.senderID, parseInt(moneySet)), event.messageID)	
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const moneyme =(await Currencies.getData(event.senderID)).money;
			api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã xoá toàn bộ số tiền của bạn\n💸Số tiền xoá là ${moneyme}`, event.threadID, async () => await Currencies.decreaseMoney(event.senderID, parseInt(moneyme)));
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions)[0];
		const moneydel = (await Currencies.getData(mention)).money;
		api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Đã xoá toàn bộ số tiền của ${event.mentions[mention].replace("@", "")}\n💸Số tiền xoá là ${moneydel}`, event.threadID, async () => await Currencies.decreaseMoney(mention, parseInt(moneydel)));
		}
		
		else return	api.sendMessage("[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Sai cú pháp dùng lệnh", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 premium ] → Đã cộng số dư của ${event.mentions[mention].replace("@", "")} thêm ${moneySet} đồng\nPlan premium`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: mention
				}]
			}, event.threadID, async () => Currencies.increaseMoney(mention, parseInt(moneySet)), event.messageID)
		}
		else if(args[0]=="uid"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 premium ] → Đã cộng số dư của thằng đệ  ${nameeee} thêm ${cut} đồng`, event.threadID, () => Currencies.increaseMoney(id, parseInt(cut)), event.messageID)	

		}
else {
	api.sendMessage("[ 𝗦𝗘𝗧𝗠𝗢𝗡𝗘𝗬 ] → Sai cú pháp dùng lệnh", event.threadID, event.messageID)
	}
  }
