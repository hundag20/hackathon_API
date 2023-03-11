const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
var http = require("http");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'static')));

// app.get("/v1/addQuiz", addQuiz);

http.createServer(app).listen(4000, (err) => {
  if (err) console.log("error", err);
  else console.log("info", "newfilenotifer micro-service running on 4000");
});
module.exports = app;
