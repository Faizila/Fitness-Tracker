// Dependencies
const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Morgan
app.use(logger("dev"));

// Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🚀 \n visit: http://localhost:${PORT}`);
});