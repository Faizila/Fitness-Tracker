// import
const mongoose = require("mongoose");
// Mongoose schema
const Schema = mongoose.Schema;

// Create workout schema
const WorkoutSchema = new Schema({

  
});

// create model Workout
const Workout = mongoose.model("Workout", WorkoutSchema);
// export
module.exports = Workout;
