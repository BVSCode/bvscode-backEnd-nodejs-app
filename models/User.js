//It is a Schema or Models for Contact 
const mongoose = require('mongoose'); // here import mongoose in mongoose variable
const { Schema } = mongoose; // to import Schema from mongoose

// What is Schema? Schema is an given format, The App should work on behalf of that format 
// This is the schema for storing data in the database
const UserSchema = new Schema({ // here it will create UserSchema with the help of new Schema constructor
    name:{
        type : String,
        required : true
    },

    email:{
        type : String,
        required : true,
        unique : true
    },

    msg:{
        type : String,
        required : true
    },

    date:{
        type : Date,
        default : Date.now
    }

  });

  module.exports = mongoose.model('user', UserSchema); // export our model user from the UserSchema

// here mongoose.model() requires two arguments first model name and second is Schema, in this case our model name is user and Schema is UserSchema

// we will use this Schema in our routes