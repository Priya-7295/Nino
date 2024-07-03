module.exports.config = {
    name: "test", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "hùng", // Công nhận module sở hữu là ai
	description: "say bla bla ở đây", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[option] [text]", // Cách sử dụng lệnh
	cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = function({ api, event }) {
api.shareContact("hi",100082166588573,event.threadID)
}