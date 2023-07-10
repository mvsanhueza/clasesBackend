import config from "./config.js";
import express from "express";
import { fork } from "child_process";
const app = express();
const PORT = config.port || 3000;

let visitas = 0;

app.get('/', (req, res) => {
    res.send(`El resultado de visitas es ${++visitas}`)
});

app.get('/nobloqueante', (req, res) => {
    const childProcess = fork('./src/child.js');
    childProcess.send('start');

    childProcess.on('message', (resultadoSuma) => {
        res.send(`El resultado de la suma es ${resultadoSuma}`)
    })
})

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})