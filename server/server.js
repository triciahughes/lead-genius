const express = require("express");
const mongoose = require("mongoose");
const Keyword = require("./models/keywordsModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.get("/keywords", async (req, res) => {
  try {
    const keywords = await Keyword.find({});
    res.status(200).json(keywords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/keywords", async (req, res) => {
  try {
    const keyword = await Keyword.create(req.body);
    res.status(200).json(keyword);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://leadlocal:hellodatabase@leadgeniusdb.fiqr34g.mongodb.net/Lead-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });
