import config from "./config.js";
import express from "express";
const app = express();


const PORT = config.port || 3000;

const sumar = () =>{
    let resultado = 0;
    for(let i = 0; i < 5e9; i++){
        resultado += i;
    }

    return resultado;
}

let visitas = 0;

app.get('/', (req,res) =>{
    res.send(`El resultado de visitas es ${++visitas}`)	
});

app.get('/bloqueante', (req,res) =>{
    const resultadoSuma = sumar();
    res.send(`El resultado de la suma es ${resultadoSuma}`)
})



app.listen(PORT, () =>{
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})

