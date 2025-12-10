const mongoose = require('mongoose');

const submitSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email:{type:String, required: true},
    phone:{type: String, required: true},
    notes:{type: String, required: true},
    additionalNote:{type: String, required: true}
});

module.exports = mongoose.model('submit', submitSchema);