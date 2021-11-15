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
    type: String,
    trim: true,
    required: "Please enter the type of exercise!"
    },
    name: { 
      type: String,
      trim: true,
      required: "Please enter the name of exercise!"
    },
    distance: { 
      type: Number,
      required: "Please enter the distance!"
     },
    duration: { 
      type: Number,
      required: "Please enter the duration of exercise!"
     },
    weight: { 
      type: Number,
      required: "Please enter the weight!"
     },
    sets: { 
      type: Number,
      required: "Please enter the sets!"
     },
    reps: { 
      type: Number,
      required: "Please enter the reps!"
     }
    
}]

});

// create model Workout
const Workout = mongoose.model("Workout", WorkoutSchema);
// export
module.exports = Workout;
