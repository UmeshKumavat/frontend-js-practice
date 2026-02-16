//this keyword -> the value of this depends how and where it is called

"use strict";

// this keyword in method
const user1 = {
  name: "Umesh",
  greet() {
    console.log("Hello " + this.name);
  },
};

user1.greet(); //greet() method this refers to 'user' object

// -------------------***************------------------

//this in normal function -> in normal function this depends on execution context

function printThis() {
  console.log(this);
}
printThis(); //refers to the global object or window object in browser window
//if we use "use strict" mode then this will be undefined in normal function

// -------------------***************------------------

//this used alone
console.log(this); //'this' refers global object or window object in browser window

// -------------------***************------------------

//this in event handlers
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log(this); //'this' refers to the element(button element) that received the event.
});

//this in arrow function -> arrow function don't have their own 'this' it inherit the 'this' from their parent scope

const user2 = {
  username: "Amit",
  sayHi: () => {
    console.log(this.username);
  },
};

user2.sayHi(); //undefined ->  because arrow function use global contexts 'this' means global object

//to solve this we write it like

const user3 = {
  username: "Amit",
  greet() {
    const arrow = () => {
      console.log("Hello " + this.username);
    };
    arrow();
  },
};

user3.greet()//arrow function uses its parent(greet()) 'this'