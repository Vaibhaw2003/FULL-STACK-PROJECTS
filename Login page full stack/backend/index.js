const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://localhost:27017/fullstackDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User Model
const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
});

// API Route
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User Registered Successfully!" });
});


port = 5000;
app.listen(5000, () => console.log(`Server running on port ${port}`));

