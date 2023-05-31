import bcrypt from 'bcrypt';

//Encriptar una contraseña y devolver
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(parseInt(process.env.SALT)));

//Devolver un logico (V o F) si la contraseña enviada es igual a la BDD
export const validatePassword = (passwordSend, passwordBDD) => bcrypt.compareSync(passwordSend, passwordBDD);
