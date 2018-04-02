var express = require("express");
var cors = require("cors");
var app = express();
var path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + 'public')));

app.listen(PORT);