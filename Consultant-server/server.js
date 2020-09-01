const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
//routes
const users = require("./src/routes/UserRouter");

// PORT
const PORT = process.env.PORT || 5000;

// CONFIGURE DOTENV, WHICH FILE TO USE
dotenv.config({ path: "./src/config/config.env" });
// START CONNECTION WITH MONGODB ATLAS
connectDB();

const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};

// USE JSON TO PARSE BODIES
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ADDING ROUTES
app.use("/auth", users);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
