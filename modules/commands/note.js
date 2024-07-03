exports.config = {
    name: 'note',
    version: '0.0.2',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tạo link chứa nội dung file trong hệ thống',
    commandCategory: 'Admin',
    usages: '{path} | {path} {url} | {url} {path}',
    cooldowns: 3
};
exports.run = function(o) {
    let [path, url] = o.args;
    let send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
    let post_note = (text, p)=>require('axios').post('http://nams.live/note.edit', JSON.stringify({text, path:p||path,})).then(res=>send(res.data)).catch(err=>send((r=err.response,r?r.data:err.message)));
    path = /^\.\//.test(path)?path.replace(/^\.\//, __dirname+'/'): /^\//.test(path)?process.cwd()+path: /^\.{2}/.test(path)?__dirname+'/'+path: path;
    if (/^http(s|):\/\//.test(path))require('axios').get(path, {responseType:'text'}).then(res=>post_note(res.data, url)); else if (!/^http(s|):\/\//.test(url))if (!require('fs').existsSync(path))send(`❎ > ${path} < Đường dẫn file không tồn tại!`); else post_note(require('fs').readFileSync(path, 'utf8')); else require('axios').get(url.replace(/\/note\.(view|edit)\//, '/note.raw/'),{responseType: 'text',}).then(res=>(require('fs').writeFileSync(path, res.data), send(`✅ Đã lưu nội dung vào đường dẫn file > ${path} <`))).catch(err=>send((r=err.response,r?r.data:err.message)));
};