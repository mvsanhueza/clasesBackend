import {suma} from '../logic/suma.js';

let result 
// caso 1: da error si algun parametro no es un numero:

result = suma('2',2);

if(result === null){
    console.log('Test 1 passed');
    console.log('suma(2,2) = ' + result);
}
else{
    console.log('Test 1 failed');
    console.log('suma(2,2) = ' + result);
}

result = suma();

if(result === 0){
    console.log('Test 2 passed');
    console.log('suma() = ' + result);
}
else{
    console.log('Test 2 failed');
    console.log('suma() = ' + result);
}

result = suma(2,5,6,8);

if(result === 21){
    console.log('Test 3 passed');
    console.log('suma(2,5,6,8) = ' + result);
}
else{
    console.log('Test 3 failed');
    console.log('suma(2,5,6,8) = ' + result);
}