const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    EmpId: { type: String, required: true },
    Name: { type: String, required: true },
    Location: { type: String },
    Designation: { type: String },
    Department: { type: String },
    Contacts: [{
        type: String
    }],
    Covid: { type: String, required: true, default: false },
    Quarantined: { type: String, required: true, default: false },
    quarantineDays: { type: String, required: true, default: "0" },
}, { versionKey: false });


module.exports = mongoose.model('user', userSchema);