import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File Filter (accept only PDF)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb("Only PDF files allowed!", false);
  }
};

const upload = multer({ storage, fileFilter });

// POST route
router.post("/upload", upload.single("pdf"), (req, res) => {
  if (!req.file) return res.status(400).json({ msg: "PDF Upload failed" });

  return res.json({
    msg: "PDF Uploaded Successfully",
    filePath: `/uploads/${req.file.filename}`
  });
});

export default router;
