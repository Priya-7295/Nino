const axios = require('axios');
module.exports ={
	config: {
		name: 'search',
		commandCategory: 'Tìm kiếm',
		hasPermssion: 0,
		credits: 'Lê Minh Tiến',
		usages: '[text]',
		description: 'Tìm kiếm thông tin đơn giản trên wikipedia', 
		cooldowns: 5
	},
	run: async function({ api, event, args }) {
	const { threadID, messageID } =event;
    try {
    const input = args.join(" ");
    if (!input) return api.sendMessage('Vui lòng nhập từ khóa!', threadID, messageID);
  res = await axios.get(`https://search-data.phathuynh18.repl.co/wiki/${encodeURIComponent(input)}`), 
  ress =(await axios.get(`https://api-0703.0703-opa.repl.co/cap?url=https://vi.m.wikipedia.org/wiki/${encodeURIComponent(input)}`)).data.url, 
  attachment = (await axios.get(ress, { responseType: "stream"})).data
    msg = {body:`Mời bạn lựa chọn ngôn ngữ để gửi câu trả lời cho từ khóa: ${input}\n1. Tiếng Việt\n2. Tiếng Anh`, attachment}
return api.sendMessage(msg, threadID, (error, info) => {         global.client.handleReply.push({
    name: this.config.name,
    messageID: info.messageID, 
    type: "reply", 
    vi: res.data.answer_vi, 
    en: res.data.answer_en, 
        })                           },messageID)
} catch (e) {
			console.log(e)
			api.sendMessage(`${e}`, threadID, messageID)
		}
  }, handleReply: async function({ api, event, handleReply }) {
  const { threadID, messageID } =event;
   switch (handleReply.type) {
      case "reply": {
        switch(event.body){
          case "1": {
api.sendMessage(handleReply.vi, threadID, messageID)
          }break; 
          case "2": {
api.sendMessage(handleReply.en, threadID, messageID)
          }break;
        }
      }
    }
   }
}