import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from './Routes/userRoute.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(MONGODB_URL).then(() => {
  console.log("Database cconnected successfully");
});

//Listen server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Routes
app.use('/api', route);
