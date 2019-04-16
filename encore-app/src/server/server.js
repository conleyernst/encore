const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;

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

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});
