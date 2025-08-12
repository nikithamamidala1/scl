import express from "express";
import { getAllTeachers, addTeacher } from "../controllers/teacherController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllTeachers);
router.post("/", protect, addTeacher);

export default router;
