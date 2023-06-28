import express from 'express'
import config from './config/config.js'
import './config/dbConfig.js'
import UsersRouter from './routes/Users.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes:
app.use('/api/users', UsersRouter)

const PORT = config.port || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

