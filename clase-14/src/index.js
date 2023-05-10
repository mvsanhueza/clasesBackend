import express from 'express';
import mongoose from 'mongoose';
import {userModel} from './models/user.js';

const app = express();

mongoose.connect("mongodb+srv://mvsanhueza:<password>@cluster0.leyykao.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DB is connected"))
            .catch((error)=>{console.log("Error en MongoDB Atlas :" + error);})

app.listen(4000,()=>console.log("Server on port 4000"));