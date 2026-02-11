//Loops

//for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//while loop

// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

//do...while loop -> runs atlease one time
// let k = 1;
// do {
//   console.log(k);
//   k++
// } while (k <= 5);

//Break keyword
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }

//continue keyword
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }

// ---------------------***********--------------------

//Functions

//function declaration
function printNum(num) {
  console.log(num);
}

printNum(10);

// example:-
function sum(a, b) {
  return a + b;
}

const result = sum(10, 20);
console.log(result);

//function expression

const greet = function (user) {
  console.log("Hello " + user);
};
greet("Umesh");

//Arrow function

const multipy = (a, b) => {
  return a * b;
};
console.log(multipy(3, 4));

//Default parameter

function greetUser(user = "Guest") {
  console.log("Hello " + user);
}

greetUser(); // Hello User
greetUser("Umesh"); //Hello Umesh

//example:-

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAge(19));
console.log(checkAge(10));

//Higher order  function
function myFunc(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {
  return a * b;
}
console.log(myFunc(5, 3, add));
