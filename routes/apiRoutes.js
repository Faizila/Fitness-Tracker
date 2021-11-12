// import
const router = require("express").Router();
const db = require("../models/workoutSchema.js");

// routes

// GET LastWorkout
router.get("/api/workouts", (req, res) => {
	// find all
    db.find({})
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
	// find all
    db.find({})
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
