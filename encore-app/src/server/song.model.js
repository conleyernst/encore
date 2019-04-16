const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Song = new Schema({
	songid: {
		type: String
	},
	votes: {
		type: Number
	}
});

module.exports = mongoose.model('Song', Song);


// const Song = mongoose.model('Song', new mongoose.Schema({
// 	songid: String,
// 	votes: Number
// }));
//
// const testsong = new Song({
// 	songid: "7y1hl2uieg",
// 	votes: 0
// });
//
// testsong.save((err, saveSong) => {
// 	console.log(JSON.stringify(saveSong));
// });
