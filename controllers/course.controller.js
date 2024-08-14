const course = require("../models/course.model.js");

const getAllCourses = (req, res) => {
    course
        .find()
        .then((result) => res.status(200).json(result))
        .catch((error) => res.status(500).json({ error }));
};

module.exports = {
    getAllCourses,
};
