import { Schema, model } from "mongoose";

const userSchema  = new Schema({ //defino las propiedades de mi modelo usuario
    nombre: String, 
    apellido: String,
    email: {//Se abren llaves para definir mas de una propiedad
        type: String,
        unique: true, //no se puede repetir, es unico en la BDD,        
    },
    password: String,
});

export const userModel = model("users", userSchema);