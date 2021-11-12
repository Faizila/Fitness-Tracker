// import
const router = require("express").Router();
const db = require("../models/workoutSchema.js");

// routes

// GET 
router.get("/api/workouts", (req, res) => {
	    // find all
        db.find()
        // promise
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
        // error
		.catch(err => {
            res.status(400).json(err);
		});
});

// POST 
router.post("/api/workouts", ({ body }, res) => {
      // create   
      db.create(body)
     // promise   
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      // error  
      .catch(err => {
        res.status(400).json(err);
      });
  });

//export
module.exports = router;
