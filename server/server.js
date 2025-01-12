require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes =require('./routes/workouts')


// start the express app
const app = express();

// middleware
 app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next();
})

app.get('/' , (req,res)=>{
    res.json({mssg:'welcome to the app'})
})

// connect to db

mongoose.connect(process.env.MONG_URI)
    .then(()=>{
    //listen for requests
    app.listen(process.env.PORT , ()=>{
    console.log("listening on port ",process.env.PORT)
})

    })
    .catch((error)=>{
        console.log(error)
    })

//routes , we used app.use cause it will have differnet methods 
app.use('/api/workouts',workoutRoutes)



