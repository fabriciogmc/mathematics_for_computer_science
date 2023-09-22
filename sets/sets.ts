/* How to instantiate and use a set
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

// a specific numeric set:
let s:Set<number> = new Set();
// sets do not allow element repetition:
s.add(1);
s.add(1);
s.add(2);
console.log("Numeric set: ", s)

// a generic type set
let s_gen: Set<any> = new Set();
s_gen.add("car");
s_gen.add("car");
s_gen.add("motorcycle");
s_gen.add(3.1415);
console.log("Generic type set: ", s_gen);
console.log("car' element belongs to set?", s_gen.has("car"));

export {}
