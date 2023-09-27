/* 
** A simple linear space complexity algorithm
**
** Author: Fabrício Galende M. de Carvalho
*/

function polynomialComplexity(v: number[]){
    let copies: number[][] = [];
    for (let i:number=0; i< v.length; ++i ){
        copies.push([]);
        for (let j:number=0; j< v.length; ++j )
            copies[i].push(v[j]);       
    }
    return copies;
}


let vec:number[] = [];
for(let i=0; i <10000; ++i){
    vec.push(i);
}

let t0 = Date.now();
polynomialComplexity(vec);
let tf = Date.now();
console.log("Delta t (ms): ", (tf-t0));
export {}

