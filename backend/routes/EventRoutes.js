import express from "express";
import { getEvents, createEvent } from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);      // Public: View events
router.post("/", protect, createEvent); // Protected: Only logged in can create

export default router;
