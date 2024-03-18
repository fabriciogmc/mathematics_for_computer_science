/* Exemplifying natural and integer numbers usage
**
** Author: Fabrício G. M. de Carvalho
*/


let x: number[] =[1, 2, 3, 4]; // A collection of objects
let idx_1: number = 1; //index
let idx_2: number = 3; //index

console.log(`Array: ${x}`)
console.log(`index: ${idx_1} , x[${idx_1}]: ${x[idx_1]}`) //outputs 2
console.log(`index: ${idx_2} , x[${idx_2}]: ${x[idx_2]}`) //outputs 4

console.log(`index: ${idx_2+idx_1} , x[${idx_2+idx_1}]: ${x[idx_1+idx_2]}`) //outputs undefined
console.log(`index: ${idx_1-idx_2} , x[${idx_1-idx_2}]: ${x[idx_1-idx_2]}`) //outputs undefined
console.log(`index: ${idx_1/idx_2} , x[${idx_1/idx_2}]: ${x[idx_1/idx_2]}`) //outputs undefined


export{}
