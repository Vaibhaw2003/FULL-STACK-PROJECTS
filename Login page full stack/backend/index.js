const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://localhost:27017/mydatabase")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// User Model
const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
});

// Register API
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Already exists check
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "Email Already Registered!" });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message: "User Registered Successfully!" });
    } catch (error) {
        res.json({ message: "Error Occurred", error });
    }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
