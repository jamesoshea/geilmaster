const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String
  },
  sets: {
    type: Number
  },
  reps: {
    type: String
  },
  weight: {
    type: String
  },
  day: {
    type: Number
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
