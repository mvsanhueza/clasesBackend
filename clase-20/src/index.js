import 'dotenv/config';
import './utils/bcrypt.js';
import express from 'express';

const app = express();

app.listen(4000, () => console.log(`DB connected on port 4000`));