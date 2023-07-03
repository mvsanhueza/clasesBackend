import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const productos = [
    {
        nombre: "Iphone",
        precio: 500,
    },
    {
        nombre: "Ipad",
        precio: 200,
    },
    {
        nombre: "Computador",
        precio: 1200,
    },
    {
        nombre: "Tv",
        precio: 1000,
    }
]

app.get('/prueba', (req, res) => res.json({ message: "Probando el servidor" }));
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));