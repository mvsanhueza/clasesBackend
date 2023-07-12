import express from 'express';
import config from './config.js';
import messagesRouter from './routes/messages.router.js';
import viewsRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars')

const PORT = config.port;

app.use('/api/messages', messagesRouter)
app.use('api/views' , viewsRouter);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});

