/*
** Examples of values that belong to notable
** sets (integers, reals, complex, etc.)
**
** Author: Fabrício Galende M. de Carvalho, DSc.
*/

import {Complex, complex, add} from "mathjs"


/* Natural numbers */
let natural_1: number = parseInt("1.0");
let natural_2: number = parseInt("2.1");
console.log("natural number: ", natural_1);
console.log("natural number: ", natural_2);

/* Integer numbers*/
let integer_1: number =  parseInt("-2.3");
let integer_2: number = parseInt("3.6");
console.log("integer number: ", integer_1);
console.log("integer number: ", integer_2);

/* Rational numbers */
let rational_1: number = -1/3;
let rational_2: number = 5/8;
console.log("rational number: ", rational_1);
console.log("rational number: ", rational_2);

/* Irrational numbers */
let irrational_1: number = Math.PI;
let irrational_2: number = Math.sqrt(2);
console.log("irrational number: ", irrational_1);
console.log("irrational number: ", irrational_2);
console.log("/n");

/* Real numbers */
let real_1: number = 1.0/3.0;
let real_2: number = Math.sqrt(3);
console.log("real number: ", real_1);
console.log("real number: ", real_2);
console.log("/n");

/* Complex numbers */
let c_number_1:Complex =  complex(1,2);
let c_number_2:Complex = complex(2,3);
console.log("complex number: ", c_number_1);
console.log("complex number: ", c_number_2);
console.log("complex number (add): ", add(c_number_1,c_number_2));

