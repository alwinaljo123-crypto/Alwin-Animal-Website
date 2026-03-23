require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Contribution = require('./models/Contribution');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
  origin: '*', // change later in production
}));
app.use(express.json());

// ✅ Check if Mongo URI exists
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing in .env file");
  process.exit(1);
}

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");

    // 🚀 Start server ONLY after DB connects
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Alwin Portfolio API is running!');
});

app.post('/api/contribute', async (req, res) => {
  try {
    const { name, age, subject, message } = req.body;

    // ✅ Validation
    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name and message are required.',
      });
    }

    const newContribution = new Contribution({
      name,
      age: age ? Number(age) : null,
      subject,
      message,
    });

    await newContribution.save();

    res.status(201).json({
      success: true,
      message: 'Contribution saved successfully!',
    });

  } catch (error) {
    console.error("❌ Contribution error:", error);

    res.status(500).json({
      success: false,
      message: 'Server error, please try again later.',
    });
  }
});