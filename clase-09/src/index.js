import express from 'express'
import { ProductManager } from './ProductManager.js'
import productRouter from './routes/product.routes.js'
import { __dirname } from './path.js'
import multer from 'multer'
import {engine} from 'express-handlebars'
import * as path from 'path'
import { userInfo } from 'os'



//Configuracion de express
const app = express()
const PORT = 4000
const storage = multer.diskStorage({
    destination: (req,file,cb) => { //Destino de mis imagenes cargadas
        cb(null,'src/public/img')
    },
    filename: (req, file, cb) =>{
        cb(null, `${file.originalname}`)
    }
});
app.engine('handlebars', engine()) //Voy a trabajar con handlebars
app.set('view engine','handlebars') //Mis vistas son de hbs
app.set('views', path.resolve(__dirname, './views')) //src/views path.resolve hace una concatenacion

//Middleware
app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({ extended: true })) //Permite poder realizar consultas en la URL (req.query)
const upload = (multer({storage:storage})) //Instancio un objeto con la carga de archivos


//Routes
app.use('/product', productRouter)
app.use('/static', express.static(__dirname + '/public'));
app.post('/upload', upload.single('product', (req,res) => {
    //Imagenes:
    console.log(req.body);
    console.log(req.file);
    res.send("Imagen subida")
}))

//HBS

app.get('/',(req,res) => {
    const tutor = {
        nombre:"Luciana",
        email:"lu@lu.com",
        rol: "Tutor"
    }

    const cursos = [
        {numero: 123, nombre: "Programacion Backend", dia: "LyM", horario: "Mañana"},
        {numero: 456, nombre: "React", dia: "S", horario: "Mañana"},
        {numero: 789, nombre: "Angular", dia: "MyJ", horario: "Tarde"}
    ];
    
    res.render('home',{
        titulo:"51225 Backend",
        mensaje: "Hola, buenos dias",
        user: tutor,
        isTutor: tutor.rol === "Tutor",
        cursos: cursos //V o F
    })
})



app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})


