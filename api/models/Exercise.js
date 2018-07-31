/**
 * Exercise.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", required: true },
    sets: { type: "number", required: true },
    reps: { type: "string", required: true },
    sets: { type: "number", required: true },
    weight: { type: "string", required: false },
    day: { type: "number", required: true },
    comment: { type: "string", required: false },
    user: {
      model: "user"
    }
  }
};
