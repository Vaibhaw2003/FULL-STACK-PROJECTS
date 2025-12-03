const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase";


mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.send("API working");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
    // Here you would normally add user to the database
    res.json({ message: "User registered successfully" });
}); 

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
