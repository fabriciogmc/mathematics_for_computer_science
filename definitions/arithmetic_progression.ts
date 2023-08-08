/* Computing the n-th term of an arithmetic progression given its
initial term and the difference.*/

class ArithmeticProgression{
    initial_term: number;
    diff: number;
    constructor(i: number, diff: number){
        this.initial_term = i;
        this.diff = diff;
    }
    get_nth_term(n:number): number{
        if (n == 1){
            return this.initial_term;
        } else {
            return this.get_nth_term(n-1) + this.diff;
        }
    }
}

let my_ap = new ArithmeticProgression(2, 3);
console.log("First term: ", my_ap.get_nth_term(1));
console.log("Fourth term: ", my_ap.get_nth_term(50));