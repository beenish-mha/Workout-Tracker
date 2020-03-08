const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", error => {
    console.log("not connected" + error);
  });
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
