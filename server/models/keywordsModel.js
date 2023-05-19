const mongoose = require("mongoose");

const keywordsSchema = mongoose.Schema({
  word: { type: String, required: [true, "Must contain a keyword"] },
});

const Keyword = mongoose.model("Keyword", keywordsSchema);
module.exports = Keyword;
