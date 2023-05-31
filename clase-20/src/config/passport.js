import local from 'passport-local'; //Importo estrategia a utilizar
import passport from 'passport'; //Importo el core de passport
import { createHash, validatePassword } from '../utils/bcrypt.js';

const LocalStrategy = local.Strategy; //Defino mi estrategia

const initializePassport = () =>{
    //Defino la aplicación de mi estrategia:
    //Registro de ususarios
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email'}, async (req, username, password, done) =>{
            const {firstName, lastName, email, age, gender} = req.body;
            try{
                const user = await User.findOne({email:email}) //Busco un usuario con el mail ingresado
                if(user){
                    return done(null, false) //Usuario ya registrado, false no se creo ningun usuario
                }

                const passwordHash = createHash(password); //Encripto la contraseña
                const userCreated = User.create({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    age: age,
                    gender: gender,
                    password: passwordHash,
                })

                console.log(userCreated);
                return done(null, userCreated); //Usuario creado, true se creo un usuario
            }
            catch(error){
                return done(error);
            }
        }
    ));

    passport.use('login', new LocalStrategy(
        
    ));
}
