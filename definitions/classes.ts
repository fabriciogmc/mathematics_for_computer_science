/* Examples of class definition and inheritance */

class Computer{
    screen_width: number;
    scree_height: number;
}

class Laptop extends Computer{
    batery_type: string;
}

let my_lap = new Laptop();
my_lap.batery_type="Li-ion";
my_lap.scree_height = 20;
my_lap.screen_width = 30;

console.log(my_lap.batery_type);
console.log(my_lap.screen_width);
console.log(my_lap.scree_height);

export {}