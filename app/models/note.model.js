const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id: String,
    flowername: String,
    color: String,
    smell: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);