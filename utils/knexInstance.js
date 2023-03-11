const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const connString = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
logger("info", JSON.stringify(connString));
const knex = require("knex");
const logger = require("./logger");
exports.knexInstance = knex({
  client: "mysql2",
  connection: connString,
});
