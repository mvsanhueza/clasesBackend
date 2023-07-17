// export const suma = (a, b) => {

//     if (!a || !b)
//         return 0;

//     if (typeof a !== 'number' || typeof b !== 'number')
//         return null;

//     return a + b;
// }

export const suma = (... nums) =>{
    if(nums.length == 0)
        return 0;

    if(nums.some(n => typeof n !== 'number'))
        return null;

    return nums.reduce((a,b) => a + b, 0);
}