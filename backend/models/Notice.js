import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
    issuedBy: { type: String } // Could be teacher/admin name
  },
  { timestamps: true }
);

export default mongoose.model("Notice", noticeSchema);
