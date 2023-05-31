import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET)); //firman las cookies:
app.use(express.json());
app.use(session({
    store: MongoStore.create({ //Guarda la session en la base de datos
        mongoUrl: process.env.MONGO_ATLAS_URL,
        mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true},
        ttl: 600 //Tiempo de vida de la session
    }),
    secret: process.env.SESSION_SECRET,
    resave: true, //Me permite cerrar la pestaña o recarga y que la sesion siga activa
    saveUninitialized: true, //Guardar sesion aunque no contenga info
}))

//Cookies:
//Crear cookie
app.get('/setCookie',(req,res)=>{
    //Nombre cookie - Valor asociado a dicha cookie
    // res.cookie('CookieCookie','Id545');
    res.cookie('CookieCookie','Id545',{maxAge: 3600000, signed:true}) //maxAge: tiempo de vida de la cookie
    res.send("Cookie creada")
})

//Consultar cookie
app.get('/getCookie',(req,res)=>{
    //Nombre cookie - Valor asociado a dicha cookie
    res.send(req.signedCookies);
})

//Eliminar cookie
app.get('/deleteCookie',(req,res)=>{
    res.clearCookie('CookieCookie');
    res.send('Cookie eliminada');
})

//Sessions:
app.get('/session',(req,res)=>{
    if(req.session.counter){ //Consulto si en la session existe un contador
        req.session.counter++; //Si existe, le sumo 1
        res.send(`Ingresaste ${req.session.counter} veces`);
    } else {
        req.session.counter = 1; //Se inicializa el contador
        res.send('Hola, esta es la primera vez que ingresas');
    }

})

app.listen(4000, ()=> console.log('Server running in port 4000'));