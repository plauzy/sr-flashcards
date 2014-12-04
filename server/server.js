var express = require('express');
var db = require('./db');
var cors = require('cors');


var app = express();
app.use(cors());

require('./config/middleware.js')(app, express);
app.listen(3000);
module.exports.app = app;
