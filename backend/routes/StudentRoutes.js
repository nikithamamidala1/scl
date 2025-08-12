import express from "express";
import { getAllStudents, addStudent } from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Only authenticated users can access
router.get("/", protect, getAllStudents);
router.post("/", protect, addStudent);

export default router;
