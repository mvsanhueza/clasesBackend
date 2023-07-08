import config from "./config.js";
import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect(config.mongo_uri)
.then(() => console.log("Conexión exitosa a la base de datos"))
.catch((error) => console.log("Error al conectar a la base de datos", error));

const PORT = config.port;

app.listen(PORT, () =>{
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})



console.log(config.secret_key);