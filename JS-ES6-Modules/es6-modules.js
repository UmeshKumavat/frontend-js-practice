// ES6-modules -> allows to divide code into different files and access them using import and export syntax

import greet from "./greet.js"; //default import
import getUsers from "./api.js"; //default import
import {add as sum, sub, multiply, divide} from "./math.js" //named import

let a = 10;
let b = 5;

// console.log(add(a, b));
console.log(sum(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));


greet("Umesh");//Hello Umesh
greet("Amit"); //Hello Amit

//accessing users data
getUsers('/users').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
