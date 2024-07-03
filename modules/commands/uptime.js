module.exports.config = {
	name: "uptime",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Raiden Shogun",
	description: "treo bot trên uptimerobot.com",
	commandCategory: "Tiện ích",
	usages: "[text/reply]",
	cooldowns: 5
};
//////////////////////////////
//////// Khai báo ///////////
////////////////////////////
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const lvb = __dirname + `/cache/`;
    if (!fs.existsSync(lvb + "cache")) fs.mkdirSync(lvb, { recursive: true });
    if (!fs.existsSync(lvb + "upt.png")) request("https://i.imgur.com/VQnETLi.png").pipe(fs.createWriteStream(lvb + "upt.png"));
      }
module.exports.run = async function({ api, event, args, client }) {
    const fs = require('fs-extra');
    let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
    var name = Date.now();
    var url = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var lvbang = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	  if(url.match(lvbang) == null) return api.sendMessage({body:`[ UPTIME ROBOT ]\n\n📌 Thời gian bot hiện online tổng cộng ${hours} giờ ${minutes} phút ${seconds} giây 👾\n────────────────\nVui lòng nhập/reply url cần treo trên Uptime Robot!`, attachment: fs.createReadStream(__dirname + `/cache/upt.png`)}, event.threadID, event.messageID);
    var request = require("request");
    var options = { method: 'POST',
  url: 'https://api.uptimerobot.com/v2/newMonitor',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     'noprefix-control': 'no-noprefix' },
  form:
   { api_key: 'u2008156-9837ddae6b3c429bd0315101',
     format: 'json',
     type: '1',
     url: url,
     friendly_name: name } };
   /////////////////////////////////////////  //////Phần điều kiện và gửi tin nhắn//// ///////////////////////////////////////        
request(options, function (error, response, body) {
   if (error) return api.sendMessage(`Lỗi ⚠️`, event.threadID, event.messageID );
   if(JSON.parse(body).stat == 'fail') return api.sendMessage({body:`[ UPTIME ROBOT ]\n\n📌 Thời gian bot hiện online tổng cộng ${hours} giờ ${minutes} phút ${seconds} giây 👾\n────────────────\n[ 𝗘𝗥𝗥𝗢𝗥 ] - Sever này đã tồn tại trên nhóm rồi\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/cache/upt.png`)}, event.threadID, event.messageID);
  if(JSON.parse(body).stat == 'success')
 return
api.sendMessage({body: `[ UPTIME ROBOT ]\n\n📌 Thời gian bot hiện online tổng cộng ${hours} giờ ${minutes} phút ${seconds} giây 👾\n────────────────\n[ 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 ] - Tạo sever thành công\n🔗 𝗟𝗶𝗻𝗸: ${url}`, attachment: fs.createReadStream(__dirname + `/cache/upt.png`)}, event.threadID, event.messageID );
});
}