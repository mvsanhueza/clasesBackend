//const fs = require('fs');
import * as fs from 'fs';

// --- FS SINCRONICO
//Escribir un archivo de forma sincronica
//fs.writeFileSync('./info.txt',"Hola, buenas tardes!");

const PATH = './info.txt';
// if(fs.existsSync(PATH)){ //Existe este archivo de texto?
//     let contenido = fs.readFileSync(PATH, 'utf-8');
//     console.log(contenido);
//     fs.appendFileSync(PATH,`\nVivo en Trelew, Chubut \nEnseño programacion con Js
//     `) //update
//     fs.unlinkSync(PATH); //delete
// } else{S
//     fs.writeFileSync(PATH,""); //create
// }

// --- FS CALLBACKS
fs.writeFile(PATH, "", (error) => {
    if(error){
        return "Error en creación de archivo"
    }
    fs.readFile(PATH,'utf-8', (error) => {
        if(error){
            return "Error en lectura de archivo";
        }
        fs.appendFileSync(PATH,`\nVivo en Trelew, Chubut \nEnseño programacion con Js`, (error) =>{
            if(error){
                return "Error en Escritura de archivo";
            }
            fs.unlink(PATH, (error) => {
                if(error){
                    return "Error en eliminacion de archivo";
                }
            });
        });
    })
})