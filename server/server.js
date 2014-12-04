var express = require('express');
var db = require('./db');
var cors = require('cors');


var app = express();
module.exports.app = app;
app.use(cors());

require('./config/middleware.js')(app, express);


// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
// app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/flashcards", router);


// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
