const mongoose = require("mongoose");

const fileUploadSchema = mongoose.Schema({
  fileName: { type: String, required: [true, "File must have a name"] },
});

const fileName = mongoose.model("Filename", fileUploadSchema);
module.exports = fileName;
