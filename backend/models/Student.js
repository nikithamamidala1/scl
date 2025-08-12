import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rollNumber: { type: String, required: true, unique: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String },
    phone: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
