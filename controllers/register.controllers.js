import mongoose from "mongoose";
import connectDB from "../src/db/index.js";
import User from '../src/models/user.model.js';
import cloudinary from "./cloudinary.controllers.js";
import path from 'path';
import {promises as fs} from 'fs'
connectDB();

let registeruser = async (req, res) => {
    if(!req.body) return res.status(401).send('Fields cannot be empty');
    let {username, email, password} = req.body;
    if(!username) return res.status(401).send('Username cannot be empty');
    if(!email) return res.status(401).send('Email cannot be empty');
    if(!password) return res.status(401).send('Password cannot be empty');

    try{
        let matchusername = await User.findOne({username : username});
        if(matchusername) return res.status(401).send('Username already used');
        let matchemail = await User.findOne({email : email});
        if(matchemail) return res.status(401).send('Email already used');

    if(!req.file) return res.status(401).send('Avatar must be sent');

        let filepath = path.join(process.cwd(), 'uploads/useravatar', req.file.originalname);
        //   process.cwd() = __dirname for es6

        await fs.writeFile(filepath, req.file.buffer);
        const result = await cloudinary.uploader.upload(filepath);
        let imgurl = result.secure_url;

        fs.unlink(filepath, err => {
            if(err) console.log('Error deleting the file : ', err);
        })

        let user = await User.create({
            username, email, password, avatar : imgurl
        });
        res.send(user);
    }
    catch(e){
        res.send(e.message);
        console.log(e.message);
    }
}
export default registeruser;