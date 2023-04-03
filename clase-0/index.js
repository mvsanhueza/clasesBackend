// let nombre2 = {nombre: "Francisco", apellido: "Pugh"};

// let nombre3 = {...nombre2}; //... pierdo referencia a la memoria
// nombre3.nombre = "Mario";
// console.log(nombre2);
// console.log(nombre3);

let user1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    mascotas: [
        {nombre: "Copito de nieve", raza: "Persa"},
        {nombre: "Martin", raza: "Siberiano"}
    ]
};

let user2 = structuredClone(user1);

user2.mascotas[0] = null;
user2.nombre = "Pepe";

console.log(user1);
console.log(user2);