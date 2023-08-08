/* Example of how to import a model from a separate module */

import {Animal, Dog} from "./class_models"

let strange_animal = new Animal();
strange_animal.age = 1;
console.log("Strange animal age now: ", strange_animal.age);
strange_animal.grow();
console.log("Strange animal age next year: ", strange_animal.age);

console.log("\n \n \n ********** ");

let my_dog = new Dog();
my_dog.age = 2;
console.log("My dog has ", my_dog.age, " years.");
my_dog.grow();
console.log("Next year, my dog will have ", my_dog.age, " years.");
console.log(my_dog.bark());

