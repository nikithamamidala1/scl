import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// Your middleware, routes, etc.
// Example:
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

// Add your routes here
// app.use("/api/users", userRoutes);

// Error handling middleware — must come after routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
