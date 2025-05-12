const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to create a new user
router.post('/signup', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error saving user' });
    }
});

// Route to login (you can implement more logic here later)
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

module.exports = router;