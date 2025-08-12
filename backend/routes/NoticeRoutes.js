import express from "express";
import { getNotices, createNotice } from "../controllers/noticeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getNotices);      // Public: View notices
router.post("/", protect, createNotice); // Protected: Only logged in can post

export default router;
