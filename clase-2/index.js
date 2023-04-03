// ----- ES7 -----
// console.log(Math.pow(5,3)); //Misma forma de escribir una potencia
// console.log(5 ** 3);

// const nombres = ['Daniel', 'Fran', 'Lautaro', 'Lucas', 'Rodrigo'];
// console.log(nombres.includes('Daniel')); //Devuelve verdadero o falso si el elemento se encuentra en el array

// ----- ES8 -----
//Tambien se incluyo Async-Await
// const libro = {
//     nombre: "Cinco semanas en globo",
//     editorial: "Hetzel",
//     autor: "Julio Verne",
//     año: 2017,
//     precio: 1200,
//     stock: 10
// };

// console.log(Object.keys(libro)); //Devuelve las claves de mi objeto
// console.log(Object.values(libro)); //Devuelve los valores de mi objeto
// console.log(Object.entries(libro)); //Devuelve un array con las keys y sus respectivos valores

// ----- ES9 -----
// //tAMBIEN incluye .finally()

// const libro = {
//     nombre: "Cinco semanas en globo",
//     editorial: "Hetzel",
//     autor: "Julio Verne",
//     year: 2017,
//     precio: 1200,
//     stock: 10
// };

// const libro2 = {...libro} //Copia de objeto con operador spread, en caso de que se contengan propiedades complejas, utilizar structuredClone()
// console.log(libro2);

// function sumar(...num){ //Operador rest => Referencia a n cantidad de numeros que se reciben como array
//     return num.reduce((num1,num2) => num1 + num2,0); 
// }

// console.log(sumar(5,10,20));

// ----- ES10 -----

// const nombre = " Francisco ";
// console.log(nombre);
// console.log(nombre.trim()); //Eliminar espacios en blanco

// const facturas = [2000, [3000, [5000, 10000], 1500]];
// console.log(facturas.flat(2))//.reduce((num1,num2)=> num1 + num2, 0)); //Aplanar array

// //import {} from ''
// const user = true;
// if(user){
//     import('ruta') //Esti si mi usuario se loguea
// } else{
//     //Enviar mensaje de login invalido
// }

// ----- ES11 -----

const sueldos = [2000, undefined, 1500, 5000, 10000];

console.log(sueldos.map(numero => numero = numero ?? 0).reduce((num1,num2)=>num1 + num2,0));

class ProductManager{
    constructor(){
        this.products = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    getProducts(){
        return this.products;
    }
}

class Product{
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}
