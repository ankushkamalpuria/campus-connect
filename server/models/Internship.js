import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // Keeping ID for compatibility with existing frontend logic if needed, though _id exists
    company: { type: String, required: true },
    logo: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // e.g., Paid, Unpaid
    category: { type: String, required: true }, // e.g., Software, Data
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Internship', internshipSchema);

