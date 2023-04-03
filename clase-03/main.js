
// const consultarBDD = (confirmacion) => {
//     return new Promise((resolve, reject) => {
//         if(confirmacion){
//             resolve("Accediste a la bdd del cliente") //Return del correcto
//         }
//         reject("Acceso denegado") //Retrun del error
//     })
// }

// console.log(consultarBDD(true));

// //Direccion
// fetch("https://criptoya.com/api/dolar")
//     .then(response => response.json()) //Cuando esten listos los valores
//     .then(({solidario, mep, ccl, blue}) =>  {
//         console.log(solidario, mep, ccl, blue)
//     })
//     .catch(error => console.log(error));

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
const consultarCoordenadas = async (ciudad, provincia, pais) => {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=1&appid=${API_KEY}`);
    const data = await response.json();
    return data[0]
}
const consultarClima = async (ciudad, provincia, pais) => {
    const {lat, lon} = await consultarCoordenadas(ciudad, provincia, pais);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const clima = await response.json();
    console.log(clima);
}

//consultarCoordenadas("Cordoba", "Cordoba", "Ar");
consultarClima("Santiago", "Metropolitana", "Cl");
    

