// function sum(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(12,13));
// console.log(sum('12',13));



function sum(num1:number, num2:number){
    return num1 + num2;
}

console.log(sum(12,13));
// console.log(sum('12',13)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let n1 = 12;
let n2 = 13;

console.log(sum(n1,n2)); // Type Inference: TypeScript infers that n1 and n2 are of type number based on their initial values.