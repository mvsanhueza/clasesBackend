import mongoose from 'mongoose';
import 'dotenv/config';

await mongoose.connect('mongodb+srv://mvsanhueza:coder@cluster0.leyykao.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.log(error));