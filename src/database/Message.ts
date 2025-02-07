import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    role: { type: String, required: true },
    content: { type: String, required: true },
    threadId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    messageId: { type: String, required: true, unique: true }
});

export const Message = mongoose.models.Message || mongoose.model('Message', messageSchema); 