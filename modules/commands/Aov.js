module.exports.config = {
	name: "aov",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Một vài câu hỏi về AOV",
	commandCategory: "Game",
	usages: "aov",
  cooldown: 300
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    var msg = '[⚜️]=== 『AOV QUIZZ』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Vị tướng nào có skill này?\n';
    var axios = require('axios');
    var fs = require('fs-extra');
    var path = require('path');
    var data = require('./aov/data.json');
    var hero = data[Math.floor(Math.random() * data.length)];
    var newData = data.filter(item => item.name != hero.name);
    var randomData = [];
    while (randomData.length < 3) {
        var _hero = newData[Math.floor(Math.random() * newData.length)];
        if (randomData.map(e => e.name).indexOf(_hero.name) == -1) {
            randomData.push(_hero);
        }
    }
    randomData = [hero, ...randomData].map(e => {
        return {
            name: e.name,
            skill: e.detail.skills[Math.floor(Math.random() * e.detail.skills.length)]
        }
    })

    var heroQuestion = randomData[Math.floor(Math.random() * randomData.length)];
    var skillInfo = {
        image: heroQuestion.skill.img,
        name: heroQuestion.skill.name,
    };
    var answer = heroQuestion.name;
    var options = randomData.sort(() => Math.random() - 0.5).map(e => e.name);
    fs.writeFileSync(path.resolve(__dirname, 'aov', 'skill.png'), Buffer.from((await axios.get(skillInfo.image, {responseType:'arraybuffer'})).data));
    for (let e in options) {
      msg += ['A', 'B', 'C', 'D'][e] + '. ' + options[e] + '\n';
    }
    return api.sendMessage({ body: msg + '\n[⚜️]➜ Reply tin nhắn này với đáp án bạn đưa ra', attachment: fs.createReadStream(path.resolve(__dirname, 'aov', 'skill.png')) }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            options: options,
            answer: answer
        });
        return fs.unlinkSync(path.resolve(__dirname, 'aov', 'skill.png'));
    })
    
}

module.exports.handleReply = async function ({ args, event, Users, api, handleReply, Currencies }) {
    const { threadID, messageID } = event;
    var { options, answer } = handleReply;
    const aw = event.body
    const coinsup = 30
    await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
    var data = {};
    api.unsendMessage(handleReply.messageID);
    options.map((e, i) => data[['a', 'b', 'c', 'd'][i]] = e);
    if (data[aw.toLowerCase()] == answer) return api.sendMessage('[⚜️]➜ Câu trả lời chính xác!', threadID, messageID);
    else return api.sendMessage('[⚜️]➜ Bạn đã trả lời sai!', threadID);
}
