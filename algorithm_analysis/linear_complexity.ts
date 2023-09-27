/* 
** A simple linear space complexity algorithm
**
** Author: Fabrício Galende M. de Carvalho
*/


function linearComplexity(v: number[]){
    let copy: number[] = [];
    for (let i:number=0; i< v.length; ++i ){
        copy.push(v[i]);
    }
    return copy;
}

let vec:number[] = [];
for(let i=0; i <10000; ++i){
    vec.push(i);
}

let t0 = Date.now();
linearComplexity(vec);
let tf = Date.now();
console.log("Delta t (ms): ", (tf-t0) );
export {}