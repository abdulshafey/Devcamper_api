const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectToDb = require("./config/db");

//Route File
const bootcamps = require("./routes/bootcamps");

//Load env var
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectToDb(process.env.MONGO_URI);

const app = express();

//Body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

//Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "CastError") {
    message = `Bootcamp not found with id of ${err.value}`;
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
