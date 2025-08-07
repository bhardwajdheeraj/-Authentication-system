import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js';
import e from 'express';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB


mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


// Initialize Express app
const app = express();

// Optional middleware for parsing JSON
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({ 
    success: false,
    message,
    statusCode, })
});
