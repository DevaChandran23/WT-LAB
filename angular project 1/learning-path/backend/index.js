const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Your User model
const Contact = require('./models/contact'); // Your Contact model

const app = express();
app.use(express.json()); // Middleware to parse JSON

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/learningPathDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Signup Route
app.post('/signup', async(req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password // Ideally, you should hash the password here
        });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

//