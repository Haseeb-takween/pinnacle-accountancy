import mongoose, { Schema, Document, models } from "mongoose";

export interface ISubmission extends Document {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  hearAboutUs?: string;
  reviewed: boolean;
  createdAt: Date;
}

const SubmissionSchema = new Schema<ISubmission>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    enquiryType: { type: String, required: true },
    message: { type: String, required: true },
    hearAboutUs: { type: String },
    reviewed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Submission || mongoose.model<ISubmission>("Submission", SubmissionSchema);
