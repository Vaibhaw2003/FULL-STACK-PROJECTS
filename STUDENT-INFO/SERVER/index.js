const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve frontend files

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API Routes
app.post("/api/students", async (req, res) => {
    try {
        const { name, email, course } = req.body;

        const newStudent = new Student({ name, email, course });
        await newStudent.save();

        res.json({ message: "Student added successfully!", student: newStudent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.listen(5000, () => console.log("Server running on port 5000"));
