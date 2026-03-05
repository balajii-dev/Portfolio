const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173", // For local development
    "https://portfolio-blue-psi-oidiiz6jv5.vercel.app" // Your live Vercel URL
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Schema Definition
const messageSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Health check route for Render
app.get('/', (req, res) => {
  res.send("Server is running perfectly!");
});

// POST Route to receive data from React
app.post('/api/messages', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    
    // Basic validation
    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newMessage = new Message({ fullName, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Saved to Database!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
