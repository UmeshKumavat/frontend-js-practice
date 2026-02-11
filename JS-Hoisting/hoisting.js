//Hoisting is when javascript moves variables and function declaration at the top of the their scope


//var hoisting 
console.log(a); //hoisted as undefined
var a = 10;

//let and const hoisting 

// console.log(b); //Reference error cannot access b before intialization
// let b = 20; 

// console.log(c); //Reference error cannot access c before intialization
// const c = 30;

//Function hoisting 
greetUser("Umesh"); // it works beacuse -> Function declarations are hoisted with their definitions.

function greetUser(user){
  console.log(`Hello ${user}`);
}

//Function expression are not hoisted
printNum(5); //Not hoisted -> gives error

var printNum = function(num){
  console.log(num);
}




