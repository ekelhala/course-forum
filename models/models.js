const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: String,
    timePosted: Date
});

const ThreadSchema = new Schema({
    name: String,
    messages: [MessageSchema]
});

const CourseSchema = new Schema({
    name: String,
    discussions: [ThreadSchema]
});

module.exports = {MessageSchema, ThreadSchema, CourseSchema}