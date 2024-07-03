let isSpamming = false;
const axios = require('axios');

module.exports.config = {
  name: "spamsms",
  version: "4.1.4",
  hasPermssion: 0,
  credits: "Vũ Minh Nghĩa",
  description: "",
  commandCategory: "Spam",
  usages: "[số điện thoại] [số lần spam]",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Currencies }) {
  const PREFIX = global.config.PREFIX;
  var data = await Currencies.getData(event.senderID);
  var moneyUser = data.money;

  if (10000000 > moneyUser) {
    api.sendMessage("Bạn phải có 10,000,000$ Để spam!", event.threadID);
    return;
  }

  if (args[0] == "stop") {
    if (isSpamming) {
      isSpamming = false;
      api.sendMessage("Đã dừng spam thành công", event.threadID, event.messageID);
    } else {
      api.sendMessage("Bot đang không trong quá trình spam, không thể dừng", event.threadID, event.messageID);
    }
    return;
  }

  const phoneNumber = args[0];
  const numberOfSpams = parseInt(args[1], 10);

  if (!phoneNumber || !numberOfSpams) {
    api.sendMessage(`Sử dụng: ${PREFIX}spam [số điện thoại] [số lần spam] hoặc ${PREFIX}spam stop để dừng spam`, event.threadID, event.messageID);
    return;
  }

  if (numberOfSpams > 100 || numberOfSpams < 1) {
    api.sendMessage(`Số lần spam không được quá 100 lần và phải lớn hơn 0`, event.threadID, event.messageID);
    return;
  }

  if (this.config.credits !== "Vũ Minh Nghĩa") {
    api.sendMessage(`Credits đã bị thay đổi`, event.threadID);
    return;
  }

  isSpamming = true;
  let spamCount = 0;
  let errorCount = 0;

  Currencies.setData(event.senderID, { money: moneyUser - 10000000 });

  api.sendMessage(`Bạn đã bị trừ 10,000,000$ để spam ${numberOfSpams} lần cho số điện thoại ${phoneNumber}`, event.threadID);

  for (let i = 0; i < numberOfSpams && isSpamming; i++) {
    await delay(2000);
    try {
      const response = await axios.get(`https://spam.niio-zic.repl.co/?phone=${phoneNumber}`, { responseType: 'arraybuffer' });
      const message = response.data.toString('utf-8');
      spamCount++;
    } catch (err) {
      console.log(err);
      errorCount++;
    }
  }

  isSpamming = false;
  api.sendMessage(`Đã spam thành công ${spamCount} lần.`, event.threadID);
  if (errorCount > 0) {
    api.sendMessage(`Đã có ${errorCount} lỗi xảy ra trong quá trình spam.`, event.threadID);
  }
};

function delay(delayInms) {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}