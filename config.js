const dotenv = require("dotenv");
dotenv.config();
const config = {
  baseUrl: process.env.BASE_URL,
  userName: process.env.USERNAME,
  password: process.env.PASSWORD,
};
module.exports = config;
