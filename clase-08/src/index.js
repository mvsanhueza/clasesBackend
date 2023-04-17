import express from 'express'
import { ProductManager } from './ProductManager.js'
import productRouter from './routes/product.routes.js'
import { __dirname } from './path.js'
import multer from 'multer'


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

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})