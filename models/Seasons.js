const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const Season = mongoose.model("Season", seasonSchema);

module.exports = Season;
