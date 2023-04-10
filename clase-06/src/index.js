// import http from 'http'

// const PORT = 4000; //3000 generalmente es react, entonces se utiliza 4000

// //request -> envia el usuario             response -> responde el servidor
// const server = http.createServer((request,response) => {
//     response.end("Hola, este es mi primer servidor con Node!");
// });


// //Ejecutar el servidor:
// server.listen(PORT, () =>{
//     console.log(`Server on port ${PORT}`); //Saber si mi app funciona

// })

// ------ UTILIZANDO EXPRESS

import express from 'express';

const users = [
    {nombre: "Maria", id: 1, rol: "Profesor"},
    {nombre: "Roberto", id: 2, rol: "Tutor"},
    {nombre: "Francisco", id:3, rol: "Tutor"} 
]

const app = express();

app.use(express.urlencoded({extended: true})); //Permite tener url con datos mas complejos (query)

const PORT = 4000;

app.get('/', (req,res) =>{
    res.send('Mi primer servidor con express')
});

app.get('/user', (req,res)=>{
    let {nombre, rol} = req.query;
    const usuarios = users.filter(user => user.rol === rol);
    res.send(JSON.stringify(usuarios))
})

app.get('/user/:id', (req,res) =>{
    const user = users.find(usuario => usuario.id === parseInt(req.params.id));
    if(user){
        res.send(`El usuario con el id ${req.params.id} se llama ${user.nombre}`);
    }
    else{
        res.send(`El usuario con el id ${req.params.id} no se encuentra`)
    }
})

app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
});