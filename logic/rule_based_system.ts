
/* A function that exemplifies a simple rule based expert system 
**
** Author: Fabrício G. M. de Carvalho, DSc.
*/

const eqSet = (xs:Set<string>, ys:Set<string>):boolean =>
    xs.size === ys.size && [...xs].every((x) => ys.has(x));

type Rule = {
    propositions: any [],
    logic_functions: string [],
    consequent: any []
}

function action():string{
    return("You are sick!");
}

var medical_rule: Rule = {
    propositions: [
        {'name': 'temperature', 'value':37, "relation":">="},
        {'name': 'headache', 'value': true, "relation":"=="}
    ],
    logic_functions: ['&&'],
    consequent: [action()]
}

let temperature: number = 37
let headache:boolean = true;
let symptoms: any [] = [];
symptoms.push({'temperature': temperature});
symptoms.push({'headache': headache});

function check_rule(rule: Rule,args:any [] ):any{
    // rules and args have the same length
    if(args.length == rule.propositions.length){
        //Verify if the keys are the same      
        let args_keys: any = new Set();
        let prop_keys: any = new Set();
        for(let i=0; i< args.length; ++i){
            for(let j in args[i])
                args_keys.add(j);
            prop_keys.add(rule.propositions[i]['name']);
        }
        let prop_result: boolean = false;    
        if (eqSet(prop_keys, args_keys)){
            for(let k: number=0; k < rule.propositions.length; ++k){
                let prop_name: string = rule.propositions[k]['name'];           
                if(k == 0){
                   prop_result = eval(args[k][prop_name]+rule.propositions[k]['relation']+ rule.propositions[k]['value']);                   
                } else {                    
                   prop_result = eval( prop_result.toString() + " " +  rule.logic_functions[(k-1)] +" " + args[k][prop_name]+rule.propositions[k]['relation']+ rule.propositions[k]['value']);
                }   
            }            
        }
        if (prop_result)
            return rule.consequent[0]
        return prop_result;
    }
}

console.log(check_rule(medical_rule, symptoms));
