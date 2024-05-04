const mongoose = require("mongoose");

const connectToDb = (url) => {
  mongoose.connect(url).then(console.log("Database connected..."));
};

module.exports = connectToDb;
