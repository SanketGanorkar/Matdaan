const express = require("express");
const app = express();
const db = require('./db.js')
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 3000;

// import the route files
const userRoutes = require('./routes/userRoutes.js')
const candidateRoutes = require('./routes/candidateRoutes.js')

// const {jwtAuthMiddleware} = require('./jwt.js')

// use the routes
app.use('/user',userRoutes)
// app.use('/candidate',jwtAuthMiddleware,candidateRoutes)
app.use('/candidate',candidateRoutes)

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
