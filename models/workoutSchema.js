// import
const mongoose = require("mongoose");
// Mongoose schema
const Schema = mongoose.Schema;

// Create workout schema
const WorkoutSchema = new Schema({

day: {
    type: Date,
    default: Date.now
},

exercises: [{
    type: { 
    type: String
    },
    name: { 
      type: String
    },
    distance: { 
      type: Number
     },
    duration: { 
      type: Number
     },
    weight: { 
      type: Number
     },
    sets: { 
      type: Number
     },
    reps: { 
      type: Number
     }
    
}]

});

// create model Workout
const Workout = mongoose.model("Workout", WorkoutSchema);
// export
module.exports = Workout;
