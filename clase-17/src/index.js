import 'dotenv/config';
import mongoose from 'mongoose';
import orderModel from './models/order.js';

await mongoose.connect(process.env.URL_MONGODB_ATLAS)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error)=>console.log(error));

//Filtrado, configuracion de paginas
const resultado1 = await orderModel.paginate({size:"small"},{limit: 5, page: 1})

console.log(resultado1);


const resultados = await orderModel.aggregate([
    // {
    //     //Stage 1: filtrar las ordenes a tamaño medium
    //     $match: {size:"medium"},        
    // },
    {
        //Stage 2: se agrupan por tipo de pizzas y se suman las cantidades
        $group: {_id:"$name", totalQuantity:{$sum:"$quantity"}, totalPRice:{$sum:"$price"}}
    },
    {
        //Stage 3: se ordenan por cantidad de pizzas
        // 1: si es menor a mayor (ascendente)
        // -1: si es mayor a menor (descendente)
        $sort: {totalQuantity: -1}
    },
    {
        //Stage 4: genera un objeto con todos los elementos
        //$push: generar
        //$$ROOT: codigo generado hasta el momento
        $group: {_id:1, orders:{$push: "$$ROOT"}}
    },
    {
        $project:{
            "_id":0,
            orders:"$orders"
        }
    },
    {
        //Stage 5: genera una nueva coleccion con los elementos de reportes
        $merge:{
            into: "reports"
        }
    }
])

console.log(resultados);

// await orderModel.insertMany([
//     {name:"Napolitana", size:"small", price: 2500, quantity: 2},
//     {name:"Anchoas", size:"large", price: 6000, quantity: 3},
//     {name:"Mozzarella", size:"medium", price: 2800, quantity: 2},
//     {name:"4 quesos", size:"small", price: 5500, quantity: 4},
//     {name:"Verduras", size:"medium", price: 1750, quantity: 1},
//     {name:"Jamon y morron", size:"large", price: 4000, quantity: 3},
//     {name:"Napolitana", size:"medium", price: 4000, quantity: 3},
//     {name:"Anchoas", size:"small", price: 1800, quantity: 1},
//     {name:"Mozzarella", size:"large", price: 3000, quantity: 1},
//     {name:"Fugazzeta", size:"medium", price: 7500, quantity: 5},
//     {name:"4 quesos", size:"medium", price:6000, quantity:3},
//     {name:"Verduras", size:"small", price: 1500, quantity: 1},
// ])