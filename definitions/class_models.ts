/* Examples of class definition and inheritance, including
opperations implementations - i.e. methods 
*/

class Animal{
    age: number;
    grow(){
        this.age += 1;
    }
}

class Dog extends Animal{
    breed: string;
    bark(): string{
        return "au au au";
    }
}

export{
    Animal,
    Dog
}