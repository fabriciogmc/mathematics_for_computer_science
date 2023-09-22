/*
* A simple interface that models a set
*
* Author: Fabrício Galende M. de Carvalho, DSc.
*/

class Conjunto<T>{
    elementos: T [];
    inserir(elemento:T):boolean{
        return false;
    }
    pertence(elemento: T): boolean{
        return false;
    };
    uniao(conjunto_1: Conjunto<T>, conjunto_2: Conjunto<T>): Conjunto<T>{
        
        return {} as Conjunto<T>;
    };
    interseccao(conjunto_1: Conjunto<T>, conjunto_2: Conjunto<T>):Conjunto<T>{
       return {} as Conjunto<T>; 
    }; 
}

