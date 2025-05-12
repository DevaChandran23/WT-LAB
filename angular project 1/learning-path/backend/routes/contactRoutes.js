// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submitted:', { name, email, message });

    // For now, just respond with a success message
    res.status(200).json({ message: 'Contact form submitted successfully!' });
});

module.exports = router;