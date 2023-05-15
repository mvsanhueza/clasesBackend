import 'dotenv/config'; //Ya puedo implementar dotenv
import express from 'express';
import mongoose from 'mongoose';

//Routes:
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URL_MONGODB_ATLAS)
        .then(("MongoDB Atlas is connected"))
        .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
    console.log("Server on port ",process.env.PORT);
});