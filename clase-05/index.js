import { countReset } from 'console';
import crypto from 'crypto';


/*
    Proceso de encriptacion:

    Algoritmo: forma de encriptar (en crypto 131 algoritmos)
    key: valor único
    IV: vector de inicializacion que añade complejidad al código encriptado

*/

// console.log(crypto.getCiphers());

// console.log(crypto.randomBytes(32));
// console.log(crypto.randomBytes(16));

const algoritmo = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encriptar = (password) =>{
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv); //Creo mi encriptador
    cipher.update(password); //Preparo mi objeto cipher para encriptar mi contraseña
    let encriptacion = cipher.final(); //Resultado de la encriptación
    return encriptacion.toString('hex');
}

const desencriptar = (passwordE) =>{
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), iv); //Creo mi desencriptador
    decipher.update(Buffer.from(passwordE,'hex')); //Preparo mi objeto decipher para desencriptar mi contraseña
    let desencriptacion = decipher.final(); //Resultado de la desencriptación
    return desencriptacion.toString();
}



const passwordEncriptado = encriptar('coderhouse')
const contaseñaBDD = desencriptar(passwordEncriptado);
if(contaseñaBDD == "coderhouse"){
    console.log("Ingreso");
} else{
    console.log("No ingreso");
}
