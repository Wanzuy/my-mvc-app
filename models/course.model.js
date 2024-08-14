const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    instructor: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
