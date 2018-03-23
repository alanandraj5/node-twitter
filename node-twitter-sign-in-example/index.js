"use strict";

require("./lib/globals");

var express = require("express"),

	controllers = include("controllers"),
	config = include("config");

var app = express();

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

controllers(app);

app.listen(config.server.port, function () {
	console.log("Listening on " + config.server.port + "...");
});
