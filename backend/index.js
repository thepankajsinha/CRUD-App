import express from "express";
import connectDB from "./lib/database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();


//import routes
import userRoutes from './routes/userRoute.js';

//create server
const app = express();

//inbuilt middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/api', userRoutes);


const PORT = process.env.PORT || 5000;


//Listen server and connect to MongoDB
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port ${PORT}`);
});


