import cluster from 'cluster';
import {cpus} from 'os';
import express from 'express';
import { workerData } from 'worker_threads';

const numeroProcesadores = cpus().length;

console.log(numeroProcesadores);

console.log(cluster.isPrimary);

if(cluster.isPrimary){
    console.log('Inicio el proceso primario');
    for(let i = 0; i < numeroProcesadores; i++){
        cluster.fork();
    }    
    cluster.on('message', worker =>{
        console.log(`El worker ${worker.id} dice: ${worker.message}`);
    })
}
else{
    console.log('Fui un proceso forkeado, entonces soy un worker');
    console.log(`El proceso del woker tiene el siguiente id: ${process.pid}`);
    const app = express();
    app.get('/operacionSencilla', (req,res) =>{
        let sum = 0;
        for(let i = 0; i < 100000; i++){
            sum += i;
        }
        res.send({status: 'success', message:  `La peticion fue atendida por ${process.pid} el resultado fue: ${sum}`});
    })
    
    app.get('/operacionPesada', (req,res) =>{
        let sum = 0;
        for(let i = 0; i < 5e8; i++){
            sum += i;
        }
        res.send({status: 'success', message:  `La peticion fue atendida por ${process.pid} el resultado fue: ${sum}`});
    })

    app.listen(8080, () =>{
        console.log('Server arriba');
    })
}

// const numeroProceso = '26588';
// try{
//     process.kill(numeroProceso);
//     console.log('proceso detenido para ' + numeroProceso);
// }
// catch(err){
//     console.log(err);
// }