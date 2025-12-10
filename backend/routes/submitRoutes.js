const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submitController');

// POST /api/submit  -> create a new contact submission
router.post('/submit', submitController.getSubmit);

module.exports = router;