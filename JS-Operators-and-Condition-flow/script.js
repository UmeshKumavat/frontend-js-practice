let a = 10;
let b = 4;

//arithmatic operators
// console.log(a + b); //14
// console.log(a - b); //6
// console.log(a * b); //40
// console.log(a / b); //2.5
// console.log(a % b); //2
// console.log(a ** b); //10000

//assignment operators

let count = 10;

// console.log((count += 1));
// console.log((count -= 1));
// console.log((count *= 1));
// console.log((count /= 1));

//Comparision operators

// console.log(10 > 5); //true
// console.log(10 >= 5); //true
// console.log(10 < 5); //false
// console.log(10 <= 5); //false
// console.log(10 === 5); //false

//Equality check
// console.log(5 == "5"); //true -> loose equality check
// console.log(5 === "5"); //false -> strict equality check
// console.log(5 !== "5"); //true

//Logical Operator

// console.log(true && false); //false -> Both condition should be satified
// console.log(true || false); //true-> at least one condition should be satified
// console.log(!true); //false -> Not operator reverse the condition

//Example:-
// let isLoggedIn = true;
// let hasProfile = false;

// if (isLoggedIn && hasProfile) {
//   console.log("Show Dashboard");
// } else {
//   console.log("Compelete the Profile First!");
// }

//if-else conditon

// let age = 21;
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

//else-if ladder

// let marks = 71;

// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("B");
// } else {
//   console.log("C");
// }

//Ternary Operator

// let isLoggedIn = true;

// const result = isLoggedIn
//   ? console.log("User is LoggedIn")
//   : console.log("Complete the Profile First");

//Switch Case

let fruit = "Mango";

switch (fruit) {
  case "orange":
    console.log("Fruit is Orange");
    break;

  case "banana":
    console.log("Fruit is Banana");
    break;

  case "Mango":
    console.log("Fruit is Mango");
    break;

  default:
    console.log("Unknown Fruit");
    break;
}


