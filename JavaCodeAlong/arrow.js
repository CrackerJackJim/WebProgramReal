//Traditional JS Function
function greet(name){
    return "Hello, "+name+"!";
}

console.log(greet("Boyd"));

function isPostive(number){
    return number >= 0;
}

//Arrow Functions...
let greetName = (name) => "Hello, "+name+"!";
console.log(greetName ("Landon"));

let isPostiveNumber = (number) => number >= 0;
console.log(isPostiveNumber(5));