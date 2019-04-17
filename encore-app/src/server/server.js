const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 4000;

let Song = require('./song.model');

// MIDDLEWARE
app.use(bodyParser.json());

mongoose.connect('mongodb://teamencorecosmos:ngQZEuQdvVz3UikEwfKwcQUs130x85uLPrejT6K7METo2z2koXK2WSwe5EX6QNJGqBvQevNla6PEQeRVKMfV3Q==@teamencorecosmos.documents.azure.com:10255/songstorage?ssl=true', { useNewUrlParser: true }
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
	song.save()
		.then(song => {
			res.status(200).json({'song': 'song added successfully'});
		})
		.catch(err => {
		res.status(400).send('adding new song failed');
	});
});

routes.route('/').get(function (req, res) {
	Song.find(function(err, songs) {
		if (err) {
			console.error(err);
		} else {
			res.json(songs);
		}
	})
});

app.use('/songs', routes);

// app.listen(PORT, function() {
// 	console.log("Server is running on Port: " + PORT);
// });

// Starting Server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
