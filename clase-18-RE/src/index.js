import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// cookies config
app.use(cookieParser('secretCookie'))

//generar info en cookies:
app.get('/crearCookie', (req, res)=>{
    res.cookie('sessionId', '4123415dpoasd413', {maxAge: 60000}).send('Creando nuestra primera cookie')
})

app.get('/crearCookieFirmada',(req,res) =>{
    res.cookie('sessionIdFirmado', '654sd564as5d54asd', {signed:true}).json({message: 'creando cookie firmada'})
})

app.get('/leerCookie', (req, res) =>{
    console.log(req.cookies.sessionId);
    const {sessionId} = req.cookies;
    res.json({message: 'leyendo cookies', cookie:sessionId})
})

app.get('/leerCookieFirmada', (req,res)=>{
    const {sessionIdFirmado} = req.signedCookies;
    console.log(sessionIdFirmado);
    res.send('Probando');
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})