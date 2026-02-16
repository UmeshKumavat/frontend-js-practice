//callback hell problem -> multiple asynchronous callbacks are nested inside each other, creating deeply indented and hard-to-maintain code.

function myFunction1(callback){
  setTimeout(() => {
    console.log("my function1 cb runned");
    callback()
  }, 1000);
}

function myFunction2(callback){
  setTimeout(() => {
    console.log("my function2 cb runned");
    callback()
  }, 2000);
}

function myFunction3(callback){
  setTimeout(() => {
    console.log("my function3 cb runned");
    callback()
  }, 3000);
}

function myFunction4(callback){
  setTimeout(() => {
    console.log("my function4 cb runned");
    callback()
  }, 4000);
}

//Code grows horizontally and becomes difficult to read,maintain and debug4

// myFunction1(() => {
//     myFunction2(() => {
//         myFunction3(() => {
//             myFunction4(() =>{
//                 console.log("Final Callback runned");
//             })
//         })
//     })
// })

//example:- 
function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getPortfolio(callback) {
  setTimeout(() => {
    console.log("Portfolio Fetched");
    callback();
  }, 1000);
}

function getMarketData(callback) {
  setTimeout(() => {
    console.log("Market Data Fetched");
    callback();
  }, 1000);
}

function calculateProfit(callback) {
  setTimeout(() => {
    console.log("Profit Calculated");
    callback();
  }, 1000);
}

//Callback Hell Starts Here

loginUser(() => {
  getPortfolio(() => {
    getMarketData(() => {
      calculateProfit(() => {
        console.log("Dashboard Ready");
      });
    });
  });
});

//We solve this problem using Promises and async/await