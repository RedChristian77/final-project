const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DungeonsSchema = new Schema({
  Createdby: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  Name: {
    type: String,
    required: true,
    default: "Give me a Name Please"
  },
  Description: {
    type: String,
    required: false,
    default: "_________"
  },
  mapArray: {
    type: [[Number]],
    required: true,
    default: null
  }
});

module.exports = Dungeons = mongoose.model("Dungeons", DungeonsSchema);
