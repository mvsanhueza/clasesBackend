import mongoose from 'mongoose';
import config from '../../config.js';

await mongoose.connect(config.mongo_uri)
            .then(() => console.log('Connected to MongoDB Atlas'))
            .catch((error)=>console.log(error));