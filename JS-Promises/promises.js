//Promises -> promises are javascript objects that represents asynchronous operations result
//Have 3-states ->  1. pending, 2.fulfilled, 3.rejected

//Creating Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

// console.log(myPromise);

//handling(consuming) promise using .then() and .catch()

// myPromise
//   .then((data) => { //if resolved -> .then() block runs
//     console.log(data);
//   })
//   .catch((err) => { //if rejected -> .catch() block runs
//     console.log(err);
//   });

//chaining
///.then() also returns a promise so we need to resolve it

myPromise
  .then((data) => {
    //if resolved -> .then() block runs
    console.log(data);
    return "Next Data";
  })
  .then((nextData) => {
    console.log(nextData);
  })
  .catch((err) => {
    //if rejected -> .catch() block runs
    console.log(err);
  });

//example:-

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve("Data Recieved Successully...");
      } else {
        reject("Error occurred");
      }
    }, 4000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Solving Callback hell problem using promises

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User LoggedIn");
      resolve();
    }, 1000);
  });
}

function getPortfolio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Portfolio Fetched");
      resolve();
    }, 2000);
  });
}

function getMarketData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Market Data Fetched");
      resolve();
    }, 3000);
  });
}

function calculateProfit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Profit Calculated");
      resolve();
    }, 4000);
  });
}

loginUser()
  .then(() => getPortfolio())
  .then(() => getMarketData())
  .then(() => calculateProfit())
  .then(() => console.log("Dashboard is Ready"))
  .catch((err) => {
    console.log("Err ", err);
  });

//Promise.all() ->  resolve if all the promises resolved and reject if one of the passed promise rejected or throws error

const myPromise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data 1");
  }, 3000);
});

const myPromise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data 2");
  }, 1000);
});

const myPromise3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Error occurred");
  }, 2000);
}).catch(console.log);

const promise = Promise.all([myPromise1, myPromise2]); //resolved

// const promise = Promise.all([myPromise1, myPromise2, myPromise3]); //rejected bcz myPromise3 rejected

promise.then((data) => console.log(data)).catch((err) => console.log(err));

//Promise.race() -> starts all promises and the promises who settle(resolve/reject) first that gives the result

//myPromise2 have lesser timeout so it will resolve first and give the result
Promise.race([myPromise1, myPromise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Promise.race() can also reject -> p2 rejected earlier so it gives error
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 3000);
});

const p2 = new Promise((_, reject) => {
  setTimeout(() => reject("Error"), 1000);
});

Promise.race([p1, p2])
  .then(console.log)
  .catch(console.log);
