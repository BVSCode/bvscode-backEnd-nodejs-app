// This is our main Express Server App which is connected to the Database | This is an entry-point of our app

const connectToMongo = require('./db'); // import connectToMongo function from db file
const express = require('express')

connectToMongo(); // calling function here which will help us to connect with our database
const app = express() // whole express app import in app variable
const port = 5000 // 5000 port number asing to port variable

// if you want to use req.body then you have to pass a meddleware express.json() in app.use
app.use(express.json()) // without this line you can not send body in request | you must use this line to pass a json

//All Availble Routes
// This is an URL for connecting the Routes (End-point) 
app.use('/api/cont', require('./routes/cont')) // This is our API - /api/cont which comes from (/routers/cont)

// app.listen it will listen our app on given URL
// it will takes two arguments first port and second callback
app.listen(port, () => {
  console.log(`BVSCode app listening at http://localhost:${port}`)
})

// Notes:
// Here app.use() - is used for link to the routes
// whenever user hits the given URL /api/cont we will route the user to our /router/cont.js file
// here cont.js is our module