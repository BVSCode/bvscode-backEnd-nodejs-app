// we will going to make our API here
// This is also an Express app

const express = require('express');
const router = express.Router(); // it will import express.Router in router variable
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); //It will import User model from user

// Create a User Using: POST API "/api/cont/createuser" .No login require Authentication
router.post('/createuser', [
    
    // This is our Validation to check the credential given by the user is valid or not 
    body('name', 'Enter a Valid name').isLength({ min: 3 }),
    body('email', 'Enter a Valid email').isEmail(),
    body('msg', 'The Massage should not be void').isLength({ min: 3 }),

], async (req, res) => {

    // if there are errors, return a Bad request and The errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email exits already
    try {
           // this code is rapped in try and catch errors
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry a user with this email already exists' }) // it is our json and status code
        }

        // Create a new User
        user = await User.create({ // it will create a new user in database
            name: req.body.name, // it will create req.body.name
            email: req.body.email,
            msg: req.body.msg,
        })

        res.json(user) // it will pass the user in json
        
        // Catch The errors if any occured
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router // we must export the router, if we were not, we couldn't execute - app.use('/api/cont', require('./routes/cont'))  