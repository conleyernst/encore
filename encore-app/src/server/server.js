const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const routes = express.Router();
const PORT = 4000;

let Song = require('./song.model.js');

// MIDDLEWARE
app.use(bodyParser.json());

mongoose.connect('mongodb://teamencorecosmos:' + process.env.COSMOSDB_PASSWORD + '@teamencorecosmos.documents.azure.com:10255/songstorage?ssl=true', { useNewUrlParser: true }
).then(
	() => {console.log('Connection to CosmosDB successful')},
	err => {
		console.error(err);
	});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
});

routes.route('/add').post(function (req, res) {
	let song = new Song(req.body);
	song.save().then(song => {
			res.status(200).json({'song': 'song added successfully'});
	}).catch(err => {
		res.status(400).send('adding new song failed');
	});
});

routes.route('/').get(function (req, res) {
	Song.find(function(err, songs) {
		if (err) {
			console.error(err);
			res.status(400).send("Request for songs failed");
		} else {
			res.status(200).json(songs);
		}
	})
});

routes.route('/:id').get(function(req, res) {
	Song.findById(req.params.id, function(err, song) {
		if (!song)
			res.status(404).send("song is not found");
		else {
			res.status(200).json(song);
		}
	});
});

routes.route('/update/:id').post(function(req, res) {
	Song.findById(req.params.id, function(err, song) {
		if (!song)
			res.status(404).send("song is not found");
		else {
			song.votes = req.body.votes;

			song.save().then(song => {
				res.status(200).json('Song updated!');
			}).catch(err => {
				res.status(400).send("Update not possible");
			});
		}
	});
});

routes.route('/upvote/:id').post(function(req, res) {
	console.log("endpoint hit")
	Song.findById(req.params.id, function(err, song) {
		if (!song)
			res.status(404).send("song is not found");
		else {
			song.votes++;
			song.save().then(song => {
				res.status(200).json('Song updated!');
			}).catch(err => {
				res.status(400).send("Update not possible");
			});
		}
	});
});

routes.route('/downvote/:id').post(function(req, res) {
	Song.findById(req.params.id, function(err, song) {
		if (!song)
			res.status(404).send("song is not found");
		else {
			song.votes--;
			song.save().then(song => {
				res.status(200).json('Song updated!');
			}).catch(err => {
				res.status(400).send("Update not possible");
			});
		}
	});
});

routes.route('/veto/:id').post(function(req, res) {
	Song.find({_id: req.params.id}).deleteOne().then(() => {
		res.status(200).json({'song': 'song removed successfully'});
	}).catch(err => {
		res.status(400).send('removing song failed');
	});
});

routes.route('/end').post(function(req, res) {
	Song.deleteMany().then(() => {
		res.status(200).json({'session': 'session ended'});
	}).catch(err => {
		res.status(400).send('unable to end session and remove all songs');
	});
});

app.use('/songs', routes);

// app.listen(PORT, function() {
// 	console.log("Server is running on Port: " + PORT);
// });

// Starting Server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});
