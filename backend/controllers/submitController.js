const Submit = require('../models/submit');

// Controller to create/save a new contact submission
exports.getSubmit = async (req, res) => {
    const { firstName, lastName, email, phone, notes, additionalNote } = req.body;

    const submission = new Submit({
        firstName,
        lastName,
        email,
        phone,
        notes,
        additionalNote: additionalNote || ''
    });

    try {
        const newContact = await submission.save();
        return res.status(201).json(newContact);
    } catch (error) {
        console.error('Error saving submission:', error);
        return res.status(400).json({ message: error.message });
    }
};