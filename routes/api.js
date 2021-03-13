const db = require("../models");
const router = require("express").Router();

// Get request for workouts //
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        db.Workout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Put / update request for exercises //
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id},
        { $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

// Post request for creating workouts //
router.post()