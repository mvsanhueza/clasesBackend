import dotenv from 'dotenv';
import program from './utils/commander.js'

dotenv.config({
    path: program.opts().mode === 'test' ? '.env.testing' : '.env.development'
});

export default {
    mongo_uri: process.env.MONGO_URI,
    secret_key: process.env.SECRET_KEY,
};

