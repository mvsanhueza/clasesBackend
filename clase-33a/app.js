import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req,res) =>{
    res.send('Hola es mi primer paquete en npm')
})

app.listen(port, () =>{
    console.log(`Server corriendo en el puerto ${port}`);
})