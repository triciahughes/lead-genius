const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
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
