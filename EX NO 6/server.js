const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    class: String,
    email: String,
    personalMail: String,
    mobile: String,
    whatsapp: String,
    parentName: String,
    parentNumber: String,
    sslcMarks: Number,
    hscMarks: Number,
    sem1GPA: Number,
    sem1CGPA: Number,
    github: String,
    leetcode: String,
    leetcodeProblems: Number,
});

const Student = mongoose.model("Student", studentSchema);

// Create student
app.post("/submit", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send("Student registered successfully");
    } catch (error) {
        res.status(500).send("Error saving student");
    }
});

// Get all students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send("Error fetching students");
    }
});

// Get student by Roll Number
app.get("/students/:rollNo", async (req, res) => {
    try {
        const student = await Student.findOne({ rollNo: req.params.rollNo });
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).send("Error fetching student data");
    }
});

// Get student by ID
app.get("/students/id/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).send("Error fetching student data");
    }
});

// Update student details
app.put("/students/update/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).send("Error updating student");
    }
});

// Delete student
app.delete("/students/delete/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).send("Error deleting student");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});