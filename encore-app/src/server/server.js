const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('https://teamencorecosmos.documents.azure.com:443/songstorage', {
	auth: {
		user: "teamencorecosmos",
		password: "ngQZEuQdvVz3UikEwfKwcQUs130x85uLPrejT6K7METo2z2koXK2WSwe5EX6QNJGqBvQevNla6PEQeRVKMfV3Q=="
	}
}).then(() => console.log('Connection to CosmosDB successful'))
	.catch((err) => console.error(err));
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});
