
const mongoose = require("mongoose");
require("dotenv").config()
const connect = () => {
  return mongoose.connect(process.env.mongoUrl);
};

module.exports = connect;
