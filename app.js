import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import upload from './multer/useravatars.js';
import registeruser from './routes/register.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


app.post('/register',upload.single('avatar'), registeruser);

app.listen(process.env.PORT);