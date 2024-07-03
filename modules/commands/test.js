const fs = require("fs");
const path = require('path');

module.exports.config = {
  name: "test",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tain",
  description: "Tính cái gì kh biết=)))",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 0
};

const dataPath = path.join(__dirname, 'test');

module.exports.run = async function ({ api, event }) {
};

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isDirectory()) {
    fs.mkdirSync(dataPath, { recursive: true });
  }
};

module.exports.handleEvent = async function ({ api, event }) {
  const threadID = event.threadID;
  const senderID = event.senderID;

  const threadFilePath = path.join(dataPath, `${threadID}.json`);

  let threadData = { users: {} };

  if (fs.existsSync(threadFilePath)) {
    threadData = JSON.parse(fs.readFileSync(threadFilePath, 'utf8'));
  }

  if (!threadData.users[senderID]) {
    const userInfo = await api.getUserInfo(senderID);
    const userName = userInfo[senderID].name;
    threadData.users[senderID] = {
      name: userName
    };

    console.log(`Đã có thành viên mới gia nhập làng ${senderID}`);
  }

  fs.writeFileSync(threadFilePath, JSON.stringify(threadData, null, 4));
};