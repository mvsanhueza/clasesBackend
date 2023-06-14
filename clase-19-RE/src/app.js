import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import FileStore from 'session-file-store';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import './persistencia/dbConfig.js';
import mongoStore from 'connect-mongo'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars:
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');




//Sessions file
// const fileStore = FileStore(session);
// app.use(session({
//     store: new fileStore({
//         path: __dirname + '/sessions',
//         ttl: 20
//     }),
//     secret: 'sessionSecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 20000 }
// }));

//sessions mongo:
app.use(session({
    store: new mongoStore({
        mongoUrl: 'mongodb+srv://mvsanhueza:coder@cluster0.leyykao.mongodb.net/?retryWrites=true&w=majority',
        ttl: 60
    }),
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 20000 }
}));

//ruta pruebas sessions:
const users = [
    {
        email: 'jhoyos@mail.com',
        password: '12345',
    }
]

app.get('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if(!user){
        return res.json({message: 'Error - User not found'});
    }

    req.session.email = email,
    req.session.isAdmin = true,

    console.log(req);
    res.send('Probando session')
});

app.use('/api/views', viewsRouter);
app.use('/api/users', usersRouter)

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})