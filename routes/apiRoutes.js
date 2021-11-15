// import
const router = require("express").Router();
const db = require("../models/workoutSchema.js");

// routes

// GET LastWorkout
router.get("/api/workouts", (req, res) => {
    db.aggregate([{$addFields:{totalDuration: { $sum: "$exercises.duration"}}
    }])
	.then((dbWorkout) => {
	   res.json(dbWorkout);
	})
    // error
	.catch(err => {
       res.status(400).json(err);
	});
});

// PUT addExercise
router.put("/api/workouts/:id", (req, res) => {
   	// update by id
    db.findByIdAndUpdate({_id: req.params.id}, {$push: {"exercises": req.body}})
    .then((dbWorkout) => {
	    res.json(dbWorkout);
	})
	// error  
    .catch(err => {
        res.status(400).json(err);
	});
});  

// POST createWorkout
router.post("/api/workouts", ({ body }, res) => {
    // create   
    db.create(body)
    .then(dbWorkout => {
       res.json(dbWorkout);
    })
    // error  
    .catch(err => {
       res.status(400).json(err);
    });
  });

// GET WorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
    db.aggregate([{$addFields:{totalDuration: { $sum: "$exercises.duration"}}}])
    // show past 7 workouts
    .limit(7)
    .then((dbWorkout) => {
	   res.json(dbWorkout);
	})
	// error  
    .catch(err => {
       res.status(400).json(err);
	});
});

//export
module.exports = router;

// **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished. [MongoDB documentation on limit](https://docs.mongodb.com/manual/reference/operator/aggregation/limit/)
