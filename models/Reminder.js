const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
  day: {
    type: Number
  },
  time: {
    type: String
  },
  exercises: {
    type: Array
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
