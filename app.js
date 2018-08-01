const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const exercisesRouter = require("./routes/exercises");

const secrets = require("./config/secrets");
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb://${secrets.dbUser}:${
    secrets.dbPassword
  }@ds261521.mlab.com:61521/geilmaster`
);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/exercises", exercisesRouter);

module.exports = app;
