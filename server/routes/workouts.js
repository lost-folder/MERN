const express = require('express')
const router = express.Router()
const {

    createWorkout,
    getOneWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout
    
} = require('../controllers/workoutController')

// get all workout
router.get('/',getAllWorkouts)
//get a songle workout
router.get('/:id',getOneWorkout)

//post a new workout
router.post('/', createWorkout)
// delete
router.delete('/:id',deleteWorkout)
// update 
router.patch('/:id',updateWorkout)

module.exports = router