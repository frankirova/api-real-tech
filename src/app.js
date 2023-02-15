const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { auth } = require("./firebase");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(require("./routes/index"));

module.exports = app;
