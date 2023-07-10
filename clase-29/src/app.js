import express from 'express';
import config from './config/index.js';
import './config/configDB.js';
import usersRouter from './routes/users.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})