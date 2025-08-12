import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: String, required: true },
    phone: { type: String },
    hireDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);
