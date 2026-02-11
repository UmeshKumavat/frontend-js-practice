//Gloabal scope -> Variables declared Globally (outside any block or function) have Global Scope.

var x = 2; //gloabl scope

let y = 3; //gloabl scope

const z = 4; //gloabl scope

// example:-
let carName = "Volvo";

function myFunction() {
  // code here can also use carName
  // console.log(carName);
}

myFunction();

//Function Scope -> Variables defined inside a function are not accessible (visible) from outside the function.

function myFunction1(){
  var userName  = 'Umesh'
  console.log(userName);
}

myFunction1()
// console.log(userName); //gives error -> can't access userName outside of the function

function myFunction2(){
  let userName  = 'Umesh'
  console.log(userName);
}

myFunction2()

function myFunction3(){
  const userName  = 'Umesh'
  console.log(userName);
}

myFunction3()

//Block scope -> Variables declared with "let" and "const" inside a code block are "block-scoped," meaning they are only accessible within that block.

{
  let num = 20
  console.log(num); //print 20
}

// console.log(num); // gives Reference error

//Variables declared with the var keyword, inside a { } block; can be accessed from outside the block.
{
  var x = 21;
}
console.log(x); // print 21


//If we assign a value to a variable that has not been declared, it will become a GLOBAL variable.

myFun()

function myFun(){
  gloabalVar = 'Helloo'
}
console.log(gloabalVar);