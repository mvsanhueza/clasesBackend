// //FUNCIONES

// //Funcion normal
// function sumar1(num1, num2){
//     return num1 + num2;
// }

// //Funcion anonima
// const sumar2 = function(num1,num2){return num1 + num2};

// //Funcion flecha (tipo anonima)
// const sumar3 = (num1,num2) => num1 + num2;

// console.log(sumar1(5,10));
// console.log(sumar2(5,10));
// console.log(sumar3(5,10));

// class Pokemon {
//     constructor(id, nombre, tipo, vida, ataque){
//         this.id = id; //Mi propiedad id es igual al id del parametro
//         this.nombre = nombre; 
//         this.tipo = tipo;
//         this.vida = vida;
//         this.ataque = ataque;
//         this.nivel = 1;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y te estoy saludando`);
//     }
// }

// class Pikachu extends Pokemon{ //Relacion es un
//     constructor(id, nombre, tipo, vida, ataque, damageImpactrueno){
//         super(id, nombre, tipo, vida, ataque); //Llama al constructor de la clase padre
//         this.damageImpactrueno = damageImpactrueno;
//     }

//     impactotrueno(){
//         console.log(`${this.nombre} ha usado impactrueno y ha causado ${this.damageImpactrueno} de daño`);
//     }
    
// }

// const pikachu = new Pokemon(1, "Pikachu", "Electrico", 100, 5);
// console.log(pikachu);
// pikachu.saludar();

//import Pikachu from "./Clases"; export default, va sin llaves
import {Pikachu, Pokemon} from "./Clases"; //export va con llaves

const pikachu1 = new Pikachu(1, "Laucha", "Electrico", 100, 5, 10);
console.log(pikachu1);
pikachu1.saludar();
pikachu1.impactotrueno();



