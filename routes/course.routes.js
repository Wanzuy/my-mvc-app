const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller.js");

router.get("/get-all-courses", courseController.getAllCourses);

module.exports = router;
