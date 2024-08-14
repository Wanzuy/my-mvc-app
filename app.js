require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routes/course.routes");
const Course = require("./models/course.model");
const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối đến MongoDB
mongoose
    .connect("mongodb://localhost:27017/dang_ky_hoc", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Kết nối thành công đến MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

// Cài đặt view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/courses", courseRoute);

// Route để render courses.ejs
app.get("/courses", (req, res) => {
    Course.find()
        .then((courses) => {
            res.render("courses", { courses });
        })
        .catch((error) => {
            res.status(500).send("Error fetching courses");
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
