const express = require("express");
const mongoose = require("mongoose");
const nexHomeRouter = require("./Controller/router");
const sellRouter = require("./Controller/router2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://purnasaikrishnainnamuri23:12345@cluster0.q5cu4tp.mongodb.net/NexHome?retryWrites=true&w=majority"
);

var db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to DB");
});

db.on("error", () => {
  console.log("Error occurred while connecting to the database");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, "client", "dist")));

// Define your routes
app.use("/nexHome", nexHomeRouter);
app.use("/sell", sellRouter);

// For any other route, serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
