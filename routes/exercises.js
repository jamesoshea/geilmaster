const express = require("express");
const router = express.Router();
const Exercise = require("../models/Exercise");

router.get("/", function(req, res, next) {
  Exercise.find(function(err, exercises) {
    if (err) return console.error(err);
    res.status(200).send(exercises);
  });
});

router.post("/", function(req, res, next) {
  const newExercise = new Exercise({
    ...req.body
  });
  newExercise.save(function(err, exercise) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

router.put("/", function(req, res, next) {
  const updatedExercise = new Exercise({
    ...req.body
  });
  Exercise.findOneAndUpdate({ _id: req.body._id }, updatedExercise, function(
    err,
    exercise
  ) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

module.exports = router;
