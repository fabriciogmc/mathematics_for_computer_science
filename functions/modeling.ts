/* A simple linear system modeling example.
** Parameter adjustment is done with least
** squares algorithm.
**
** Author: Fabrício Galende Marques de Carvalho
*/

let MAX_EPOCH: number = 50;
let NOISE_SCALE: number = 1;
let NUMBER_OF_POINTS = 10;
let a_r = 2;
let b_r = 1;
let x:number [] = [];
let y_r: number [] = [];
for(let i=0; i< NUMBER_OF_POINTS; ++i){
    x.push(i);
    y_r.push(a_r*x[i] + b_r + Math.random()*NOISE_SCALE);
}
let y_m:number = 0;
let y_m_full: number [] = [];
let e: number = 0;
let e_full: number [] = [];
let a = 0.0;
let b = 0.0;
let a_k: number [] = [];
let b_k: number [] = [];
a_k.push(a);
let eta = 0.01;

for(let epoch=0; epoch <MAX_EPOCH; ++epoch){
    for(let i=0; i < x.length; ++i){
        y_m = a*x[i] + b;
        y_m_full.push(y_m);
        e = y_r[i] - y_m;
        e_full.push(e);
        a += eta* e*x[i];
        b += eta* e*1;
        a_k.push(a);
        b_k.push(b);
    }
}

console.log("a_r: ", a_r);
console.log("a_k:", a_k[a_k.length-1]);
console.log("b_r:", b_r);
console.log("b_k:", b_k[b_k.length-1]);
console.log("y_r:", y_r);
console.log("y_m:", y_m_full.slice(y_m_full.length - y_r.length, y_m_full.length))
//console.log(e);
console.log(e_full);

