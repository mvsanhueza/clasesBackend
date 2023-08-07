import dotenv from 'dotenv';

dotenv.config();

export default {
    MAILING: {
        SERVICE: process.env.MAILING_SERVICE,
        USER: process.env.MAILING_USER,
        PASSWORD: process.env.MAILING_PASSWORD,        
    },
    MONGO: {
        URL: process.env.MONGO_URL,
        PORT: process.env.PORT
    },
    JWT: {
        COOKIE: process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET
    }
}