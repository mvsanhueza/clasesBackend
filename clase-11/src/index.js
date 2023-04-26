import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io';
import { __dirname } from './path.js';
import * as path from 'path'

//Configuracion de express
const app = express()
const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});

app.engine('handlebars', engine()) //Voy a trabajar con handlebars
app.set('view engine','handlebars') //Mis vistas son de hbs
app.set('views', path.resolve(__dirname, './views')) //src/views path.resolve hace una concatenacion

//Middleware
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)

//ServerIO
const io = new Server(server);
const mensajes = [];

io.on('connection', (socket)=>{
    console.log("Cliente conectado");
    socket.on("mensaje", info =>{
        console.log(info);
        mensajes.push(info);
        io.emit('mensajes', mensajes); //Le envio todos los mensajes guardados
    })
})

//HBS
app.get('/',(req,res)=>{
    res.render('index')
})