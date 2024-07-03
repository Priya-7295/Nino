module.exports.config = {
  name: "capweb",
  version: "1.1.1",
  hasPermssion: 2,
  credits: "",
  description: "",
  commandCategory: "Tiện ích",
  usages: "[]",
  cooldowns: 3,
};
const api = "";
module.exports.run = async function ({ api, event, args }) {
  try {
    const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
    const leiamFile = __dirname + "/cache/webcord_" + event.senderID + ".mp4";
    const prefix = global.config.PREFIX;
    const leiamChat = args.join(" ");
    if (!leiamChat) {
      api.sendMessage(
        {
          body: `please add url that you want to take a screenrecord\n\nhow to use?\n${prefix}webcord ⟨ url ⟩\n\nexample:\n${prefix}webcord https://facebook.com`,
          attachment: fs.createReadStream(aliceFile),
        },
        event.threadID,
        (err) => {
          fs.unlinkSync(aliceFile);
          if (err)
            return api.sendMessage(
              `please add url that you want to take a screenrecord\n\nhow to use?\n${prefix}webcord ⟨ url ⟩\n\nexample:\n${prefix}webcord https://facebook.com`,
              event.threadID,
              event.messageID
            );
        },
        event.messageID
      );
    } else if (leiamChat.startsWith("https://")) {
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      const leiamGet = (
        await axios.get(`${api}${leiamChat}`, {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(leiamFile, Buffer.from(leiamGet, "utf-8"));
      api.sendMessage(
        { body: ``, attachment: fs.createReadStream(leiamFile) },
        event.threadID,
        (err) => {
          fs.unlinkSync(leiamFile);
          if (err)
            return api.sendMessage(
              `Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`,
              event.threadID,
              event.messageID
            );
        },
        event.messageID
      );
    } else {
      api.sendMessage(
        {
          body: `invalid url please provide a valid url that starts on https\n\nhow to use?\n${prefix}webcord ⟨ url ⟩\n\nexample:\n${prefix}webcord https://facebook.com`,
          attachment: fs.createReadStream(aliceFile),
        },
        event.threadID,
        (err) => {
          fs.unlinkSync(aliceFile);
          if (err)
            return api.sendMessage(
              `invalid url please provide a valid url that starts on https\n\nhow to use?\n${prefix}webcord ⟨ url ⟩\n\nexample:\n${prefix}webcord https://facebook.com`,
              event.threadID,
              event.messageID
            );
        },
        event.messageID
      );
    }
  } catch (err) {
    console.log(err);
    api.sendMessage(
      `Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`,
      event.threadID,
      () => api.setMessageReaction("❎", event.messageID, (err) => {}, true),
      event.messageID
    );
  }
};
