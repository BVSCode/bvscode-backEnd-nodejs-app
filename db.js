const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/BVSCode?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI = "mongodb://localhost:27017/bvscode-db"
const mongoURI = "mongodb+srv://bhaveshkumar:BVS1807@cluster0.6wm0xmz.mongodb.net/BVSCode?retryWrites=true&w=majority"

// This is our Main function who help us to connect with the Mongodb Database
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to the Mongo Successfully");
    })
}


module.exports = connectToMongo;