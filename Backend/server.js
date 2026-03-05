const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//structure of the schema
const messageSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// POST Route to receive data from React
app.post('/api/messages', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Saved to Database!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));