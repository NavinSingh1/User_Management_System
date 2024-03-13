import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./data/database.js";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = 4000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})

app.use('/api', route);