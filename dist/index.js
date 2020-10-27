"use strict";

var http = require("http");
var PORT = process.env.PORT || '8989';
var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.status(200).send("Wao your app is workinggggg 222");
});

app.get("/home", function (req, res) {
  res.send("home");
});

app.get("/about", function (req, res) {
  res.send("about");
});

app.listen(PORT, function () {
  console.log("app is listen to port " + PORT);
});

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('pedar sag');
//   res.end();
// }).listen(PORT);

// console.log(`serve is listeting to portçc ${PORT}`);