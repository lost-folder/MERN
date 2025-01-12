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
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a  workout'})

})
// update 
router.patch('/:id',(req,res)=>{
    res.json({mssg:'edit a  workot'})

})

module.exports = router