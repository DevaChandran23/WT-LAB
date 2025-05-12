const Contact = require('../models/Contact');

exports.submitContact = async(req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to send message' });
    }
};