// models/Nomination.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface INomination extends Document {
  fullName: string;
  organizationName: string;
  phoneNumber: string;
  email: string;
  address: string;
  state: string;
  city: string;
  gstin?: string;
  sector: string;
  website?: string;
  doctorate: 'Yes' | 'No';
  forbes: 'Yes' | 'No';
  createdAt: Date;
}

const NominationSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  organizationName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  gstin: { type: String },
  sector: { type: String, required: true },
  website: { type: String },
  doctorate: { type: String, enum: ['Yes', 'No'], required: true },
  forbes: { type: String, enum: ['Yes', 'No'], required: true },
  createdAt: { type: Date, default: Date.now }
});

// Using function to avoid issues with NextJS/Mongoose model compilation
export default mongoose.models.Nomination || mongoose.model<INomination>('Nomination', NominationSchema);