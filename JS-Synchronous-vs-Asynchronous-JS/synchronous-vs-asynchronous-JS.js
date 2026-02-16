// Synchronous JavaScript -> code runs line-by-line, one task is completed only then next task will start executing.

console.log(1); //synchronous
console.log(2); //synchronous
console.log(3); //synchronous

// Output:-
// 1
// 2
// 3

// example:- Blocking Code -> our main thread will block untill the for..loop ends
// console.log("start");
// for (let i = 0; i < 1e5; i++) {
//   console.log("Blocking Code");
// }
// console.log("end");

//synchronous callback concept
// function processUser(callback) {
//   const name = "umesh";
//   callback(name);
// }
// function greet(name) {
//   console.log("Hello " + name);
// }

// processUser(greet);

//Asynchronous JS -> although js is single threaded it handles Async task using Event loop without blocking the main thread

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside SetTimeout");
// }, 2000); //Event loop handle this by sending it to the webApi part

// console.log("End");

// Output:-

//Start
//End
//Inside SetTimeout

// ------------**********************-------------------

//callback concept in Asyhcronous task

function fetchData(cb) {
  console.log("Fetching Data...");

  setTimeout(() => {
    cb("Market Data");
  }, 2000); //runs after 2 sec
}

function myFunc(data) {
  console.log("Recieved " + data);
}

// fetchData(myFunc);

//example:-

function fetchMarketPrice(callback) {
  console.log("Fetching Current Market Price...");
  setTimeout(() => {
    const price = 85000;
    callback(price);
  }, 3000);
}

fetchMarketPrice((price) => {
    console.log("Recieved " + price);
});


