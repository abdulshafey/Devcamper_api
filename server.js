const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectToDb = require("./config/db");
//Route File
const bootcamps = require("./routes/bootcamps");

//Load env var
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectToDb();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
