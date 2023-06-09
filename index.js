const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
// var http = require("http");
const errHandler = require("./middlewares/errHandler.middleware");
const addQuiz = require("./controllers/addQuiz.controller");
const logger = require("./utils/logger");
const connString = {
  host: process.env.DB_HOST,
  user: process.env.DBUSER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
logger("info", `connString: ${JSON.stringify(connString)}`);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'static')));
app.get("/v1/addQuiz", addQuiz, errHandler);

app.get("/v1/logs", cors(), (req, res) => {
  const content = fs.readFileSync(`./combined.txt`, {
    encoding: "utf8",
    flag: "r",
  });
  res.send(content);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) logger("error", err);
  else logger("info", "hackathon api micro-service running on 4000");
});

module.exports = app;
