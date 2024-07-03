module.exports.config = {
    name: "ghepdoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tpk",
    description: "Ghép đôi",
    commandCategory: "Tình yêu",
    usages: "ghepdoi",
    cooldowns: 0
}
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tinder.jpeg")) request("https://i.imgur.com/JrjmeEV.jpeg").pipe(fs.createWriteStream(dirMaterial + "tinder.jpeg"));
}
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
  }
module.exports.run = async function ({ api, event, args, Users, Currencies, Threads ,handleReply}) {
  try {
    if (!args[0]) {
var tpk = [
  "https://i.imgur.com/qTw1PUC.jpeg",
"https://i.imgur.com/2UJPxCQ.jpeg",
"https://i.imgur.com/X7VpmDy.jpeg",
"https://i.imgur.com/13MBcM8.jpeg",
"https://i.imgur.com/GHcrCp2.jpeg",
"https://i.imgur.com/3lHjCIA.jpeg",
"https://i.imgur.com/Io0acB0.jpeg",
"https://i.imgur.com/Kjufngh.jpeg",
"https://i.imgur.com/J9SLTbH.jpeg",
  "https://i.imgur.com/kXPDcm9.jpeg",
"https://i.imgur.com/9lXKn0Y.jpeg",
"https://i.imgur.com/nEyFKk2.jpeg",
"https://i.imgur.com/NcGNGCz.jpeg",
"https://i.imgur.com/KQFjnvp.jpeg",
"https://i.imgur.com/DrET7dY.jpeg",
"https://i.imgur.com/QZPoWm1.jpeg",
"https://i.imgur.com/bKxAbDa.jpeg",
"https://i.imgur.com/Ku8jL3s.jpeg",
"https://i.imgur.com/5T2XnAX.jpeg",
"https://i.imgur.com/eXMK257.jpeg",
];
      let image = [];
 for(let i = 0; i < 1; i++) {
   const a = tpk[Math.floor(Math.random()*tpk.length)];
    const stream = (await axios.get(a, {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const msg = {
    body: `=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗚𝗛𝗘́𝗣 ] ===
━━━━━━━━━━━━━━━
💙 ${global.config.PREFIX}${this.config.name} + 𝘁𝗶𝗻𝗱𝗲𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗱𝗮̣𝗻𝗴 𝗴𝗵𝗲́𝗽 𝗰𝘂̉𝗮 𝗮𝗽𝗽 𝘁𝗶𝗻𝗱𝗲𝗿
❤️${global.config.PREFIX}${this.config.name} + 𝘀𝘃 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝗶̀𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗿𝗲̂𝗻 𝘀𝗲𝗿𝘃𝗲𝗿
${global.config.PREFIX}${this.config.name} + 𝗰𝗮𝗻𝘃𝗮𝘀 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗮̉𝗻𝗵 𝗰𝗮𝗻𝘃𝗮𝘀${global.config.PREFIX}${this.config.name} + 𝗴𝗶𝗳 𝗴𝗵𝗲́𝗽 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗴𝗶𝗳 𝗰𝘂𝘁𝗲 𝗼̛̉ 𝗴𝗶𝘂̛̃𝗮

⚠️ 𝗟𝘂̛𝘂 𝘆́: 𝗗𝘂̀𝗻𝗴 𝗻𝗵𝘂̛ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝘅𝘂̛̉ 𝗱𝘂̣𝗻𝗴, 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 𝘁𝗵𝗶̀ 𝗺𝗼̛́𝗶 𝗹𝗲̂𝗻`,
    attachment: image
};
        api.sendMessage(msg, event.threadID, event.messageID)
    }
    if (args[0] == "tinder") {
      const fs = require("fs");
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
var data = await Currencies.getData(event.senderID);
var money = data.money
if( money < 10) api.sendMessage(`→ 𝗠𝗼̂̃𝗶 𝗹𝗮̂̀𝗻 𝗴𝗵𝗲́𝗽 𝗯𝗮̣𝗻 𝗽𝗵𝗮̉𝗶 𝗰𝗼́ 𝟭𝟬 đ𝗼̂ 💞\n→ 𝗸𝗶𝗲̂́𝗺 đ𝘂̉ đ𝗶 𝗿𝗼̂̀𝗶 𝗴𝗵𝗲𝗽𝗱𝗼𝗶 𝗻𝗵𝗮𝗮 💍\n━━━━━━━━━━━━━━━━━━\n𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗰𝗼̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${money} 💵`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 10})
	return api.sendMessage({body: `💓===「 𝗧𝗜𝗡𝗗𝗘𝗥 𝗜𝗡𝗤𝗨𝗜𝗥𝗬 」===💓\n
😻 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀𝗼 𝗰𝗵𝗼̣𝗻 𝗴𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗴𝗵𝗲́𝗽 ( 𝗧𝗿𝗮𝗶 𝗵𝗼𝗮̣̆𝗰 𝗚𝗮́𝗶 )\n━━━━━━━━━━━━━━━━━━\n⚠️ 𝗟𝘂̛𝘂 𝘆́ 𝗺𝗼̂̃𝗶 𝗹𝗮̂̀𝗻 𝗴𝗵𝗲𝗽𝗱𝗼𝗶 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗯𝗶̣ 𝗯𝗼𝘁 𝘁𝗿𝘂̛̀ 𝟭𝟬 𝗺𝗼𝗻𝗲𝘆 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻𝗴 🌸\n━━━━━━━━━━━━━━━━━━\n💞 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${money} 💵\n\n======『 ${timeNow} 』======`, attachment: fs.createReadStream(__dirname + `/noprefix/tinder.jpeg`)}, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "ghep",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
}
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
  const gai = ["A có thể làm mọi thứ cho e, ngoại trừ việc yêu e lần nữa", "Hạnh phúc của a chính là vì e mà cố gắng, vì e mà thay đổi. E chính là động lực tuyệt vời nhất trong cuộc đời a", "Yêu chính là muốn ở cạnh người đó không rời dù chỉ một phút một giây", "Nhà e có bán rượu không mà sao nói chuyện với e a say quá"];
  const gifCute = ["https://i.imgur.com/rcKI2D5.gif","https://i.imgur.com/3aBMmO9.gif","https://i.imgur.com/P3kqnNp.gif","https://i.imgur.com/BI4DolS.gif","https://i.imgur.com/Y1wTYFN.gif"];
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const random = ["𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘁𝗿𝗮̆𝗺 𝗻𝗮̆𝗺 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗵𝗮̣𝗻𝗵 𝗳𝘂𝗰𝗸", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰.!"];
    switch(handleReply.type) {
        case "ghep": {
          switch(event.body) {
					case "Trai": {
						api.unsendMessage(handleReply.messageID)
            const moment = require("moment-timezone");
  const tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
						api.sendMessage(`🌐====「 𝗧𝗜𝗡𝗗𝗘𝗥 𝗦𝗘𝗔𝗥𝗖𝗛 」====🌐\n\n→ 𝗕𝗼𝘁 đ𝗮𝗻𝗴 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺/𝗺𝗮𝗶 𝗺𝗼̂́𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗡𝗮𝗺 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻 🧒...\n→ 𝗹𝗼𝗮𝗱𝗶𝗻𝗴, 𝗰𝗵𝗼̛̀ 𝘅𝗶́𝘂 𝗻𝗵𝗮...!\n━━━━━━━━━━━━━━━━━━\n⏰=====『 ${tpk} 』=====⏰`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
            let gifLove = (await axios.get(gifCute[Math.floor(Math.random() * gifCute.length)], { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `💙====『 𝗧𝗜𝗡𝗗𝗘𝗥 𝗟𝗢𝗩𝗘 』====💙\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗧𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺/𝗺𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💍\n→ 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝗵𝗮𝗶 𝗯𝗮̣𝗻 𝗹𝗮̀: ${tile.toFixed(2)}% 🧸\n💞 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+"💓"+" "+name + ` \n━━━━━━━━━━━━━━━━━━\n`+`${gai[Math.floor(Math.random()*gai.length)]}`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
          case "Gái": {
						api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
						api.sendMessage(`🌐====「 𝗧𝗜𝗡𝗗𝗘𝗥 𝗦𝗘𝗔𝗥𝗖𝗛 」====🌐\n\n→ 𝗕𝗼𝘁 đ𝗮𝗻𝗴 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺/𝗺𝗮𝗶 𝗺𝗼̂́𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗻𝘂̛̃ 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻 👧...\n→ 𝗹𝗼𝗮𝗱𝗶𝗻𝗴, 𝗰𝗵𝗼̛̀ 𝘅𝗶́𝘂 𝗻𝗵𝗮...!\n━━━━━━━━━━━━━━━━━━\n⏰=====『 ${time} 』=====⏰`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
            let gifLove = (await axios.get(gifCute[Math.floor(Math.random() * gifCute.length)], { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `💜====『 𝗧𝗜𝗡𝗗𝗘𝗥 𝗟𝗢𝗩𝗘 』====💜\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗧𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺/𝗺𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💍\n→ 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝗵𝗮𝗶 𝗯𝗮̣𝗻 𝗹𝗮̀: ${tile.toFixed(2)}% 🧸\n💞 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+"💓"+" "+name + ` \n━━━━━━━━━━━━━━━━━━\n`+`${gai[Math.floor(Math.random()*gai.length)]}`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
        }
    }
    }
    if (args[0] == "sv") {
      const targetID = global.data.allUserID[Math.floor(Math.random() * global.data.allUserID.length)];
	const genderTarget = ["boy", "nam", "trai"].includes((args[0] || '').toLowerCase()) ?
		'MALE' : ['girl', 'gái', 'con gái', 'nữ'].includes((args[1] || '').toLowerCase()) ? 'FEMALE' : 'ALL';
	console
	let data = await getInfo(api, targetID);
	let countLoop = 0;
	if (genderTarget != 'ALL')
		while (genderTarget != data.gender) {
			countLoop++;
			const targetID = global.data.allUserID[Math.floor(Math.random() * global.data.allUserID.length)];
			data = await getInfo(api, targetID);
			if (countLoop == 10)
				return api.sendMessage("Rất tiếc, không tìm thấy người dùng phù hợp với bạn", event.threadID, event.messageID);
		}

	const {
		name,
		gender,
		id,
		url,
		username,
		shortname,
		friend,
		cv,
		mess,
		chucvu,
		block
	} = data;

	const msg = `==== [ 𝗦𝗘𝗩𝗘𝗥 𝗟𝗢𝗩𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n👉 𝗗𝘂̛𝗼̛́𝗶 đ𝗮̂𝘆 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝗰𝗵𝗼 𝗯𝗮̣𝗻\n━━━━━━━━━━━━━━━━━━\n👤 𝗧𝗲̂𝗻: ${name}\n🧸 𝗧𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵: ${shortname}\n⚜️ 𝗧𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${username == true ? "không dùng" : username}\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender == "MALE" ? "Trai" : "Nữ"}\n🔰 𝗨𝗶𝗱: ${id}\n📚 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: m.me/${id}\n🤝 𝗕𝗮̣𝗻 𝗯𝗲̀: ${friend == true ? "Đã kết bạn với bot" : "Chưa kết bạn với bot"}\n💬 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘃𝗼̛́𝗶 𝗯𝗼𝘁: ${mess == true ? "Đã nhắn với bot" : "chưa nhắn tin với bot"}\n🌸 𝗯𝗹𝗼𝗰𝗸: ${block == true ? "Đã chặn tin nhắn bot" : "Không chặn tin nhắn bot"}\n💼 𝗖𝗼̂𝗻𝗴 𝘃𝗶𝗲̣̂𝗰: ${cv == null ? "không có" : cv}\n💌 𝗖𝗵𝘂̛́𝗰 𝘃𝘂̣: ${chucvu == null ? "Không có" : chucvu}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: ${url}\n━━━━━━━━━━━━━━━━━━\n𝗛𝗗𝗦𝗗 - 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝘁𝗶𝗺𝗻𝗴𝘂𝗼𝗶𝘆𝗲𝘂 𝗻𝗮𝗺 𝗵𝗼𝗮̣̆𝗰 𝗻𝘂̛̃`;
	const avatar = (await axios.get(`https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
		{ responseType: "stream" })).data;
	avatar.path = 'avatar.png';
	return api.sendMessage({ body: msg, attachment: avatar }, event.threadID, event.messageID);
};
async function getInfo(api, userID) {
	const cc = await api.getUserInfoV5(userID);
	const name = cc[0].o0.data.messaging_actors[0].name;
	const gender = cc[0].o0.data.messaging_actors[0].gender;
	const id = cc[0].o0.data.messaging_actors[0].id;
	const url = cc[0].o0.data.messaging_actors[0].url;
	const username = cc[0].o0.data.messaging_actors[0].username;
	const shortname = cc[0].o0.data.messaging_actors[0].short_name;
	const friend = cc[0].o0.data.messaging_actors[0].is_viewer_friend;
	const cv = cc[0].o0.data.messaging_actors[0].work_info;
	const mess = cc[0].o0.data.messaging_actors[0].is_messenger_user;
	const chucvu = cc[0].o0.data.messaging_actors[0].is_employee;
	const block = cc[0].o0.data.messaging_actors[0].is_message_blocked_biewer;
	return {
		name,
		gender,
		id,
		url,
		username,
		shortname,
		friend,
		cv,
		mess,
		chucvu,
		block
	};
}
if (args[0] == "canvas") {
const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
     const { loadImage, createCanvas, registerFont } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
    const request = require('request');
  const res = await axios.get(`https://TPKTAO.last-namename.repl.co/thinh`);
var love = res.data.url;
   const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮̉𝘆'
  let pathImg = __dirname + "/noprefix/mdl.jpg";
  let pathAvt1 = __dirname + "/cache/Av7.png";
  let pathAvt2 = __dirname + "/cache/7.png";
  var id1 = event.senderID;
        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name 
var background = ["https://imgur.com/c7Eppap.png","https://i.imgur.com/4qT6XAd.png"];
    var rd = background[Math.floor(Math.random() * background.length)];
  
        let getAvtmot = (
    await axios.get( `https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,{ responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));
avt1 = await this.circle(pathAvt1);
        let getAvthai = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt2, Buffer.from(getAvthai, "utf-8"));
 avt2 = await this.circle(pathAvt2);             
   if (!fs.existsSync(__dirname +
        `/tad/UTMFacebookK&TItali.ttf`)) {
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1lh3U5emvpL4wJvxW_M8LFORc4rargy1s&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTMFacebookK&TItali.ttf`, Buffer.from(getfont, "utf-8"));
   }
  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  
    let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(avt1);
  let baseAvt2 = await loadImage(avt2);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvt1, 447, 92, 130, 130);
ctx.drawImage(baseAvt2, 85, 92, 130, 130);
registerFont(__dirname + `/tad/UTMFacebookK&TItali.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";    
    ctx.font = "23px UTM";
    ctx.fillStyle = "#00000";
    ctx.fillText(`${namee}`, 475, 65);
  ctx.font = "23px UTM";
    ctx.fillStyle = "#00000";
    ctx.fillText(`${name}`, 100, 65);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
fs.removeSync(pathAvt2);
        return api.sendMessage({body:`💓=== [ 𝗟𝗼𝘃𝗲 𝗖𝗼𝘂𝗽𝗹𝗲 ] ===💓\n━━━━━━━━━━━━\n😽 𝗚𝗵𝗲́𝗽 Đ𝗼̂𝗶 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴\n[❤️] → 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${namee}\n[🤍] → 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗮̂́𝘆: ${name}\n[🎀] → 𝗧𝗶̉ 𝗟𝗲̣̂ 𝗛𝗼̛̣𝗽 Đ𝗼̂𝗶 𝗟𝗮̀:${tle}%\n[⏰] → 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${gio} || ${thu}\n━━━━━━━━━━━━\n[💌] → 𝗧𝗵𝗶́𝗻𝗵: ${love}`,attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
  }
if (args[0] == "gif") {
  const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
        const gifCute = ["https://i.imgur.com/rcKI2D5.gif","https://i.imgur.com/3aBMmO9.gif"];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get(gifCute[Math.floor(Math.random() * gifCute.length)], { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!\n💌 𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘁𝗿𝗮̆𝗺 𝗻𝗮̆𝗺 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰\n💕 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 đ𝗼̂𝗶: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
  } catch(e) {
      api.sendMessage("Đã xảy ra lỗi", event.threadID)
  }
  }