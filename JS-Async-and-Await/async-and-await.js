// async/await -> built on the promises and it provides cleaner syntax for handling async operations and performs async operations in synchronous looking way.

//Async keyword -> write before the function defination

async function greet() {
  return "Hello";
}

//async function always returns promise
greet()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//await keywoard -> always used inside the async function and it waits untill promise resolves but does not block the main thread

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Recieved");
    }, 2000);
  });
}

async function getData() {
  console.log("Start");
  const data = await fetchData();
  console.log(data);
  console.log("End");
}

// getData();

//Output:-
// Start
// Data Received (2 sec delay)
// End

//example of non blocking code:-

//only execution inside the function is blocked our main thread is free
async function test() {
  console.log("1");

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000),
  );

  console.log("2");
}

console.log("Start");
test();
console.log("End");

//output:-
// Start
// 1
// End
//2 (after 2 sec delay)

// ----------------***********---------------

//Error handling with async/await

async function loadData() {
  try {
    const res = await fetch("www.anything.com"); //wrong url
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error.message); //handles the error
  }
}

// loadData();

//real world example:- fetching user using jsonplaceholder api

async function fetchUsers() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersData = await res.json();
    console.log(usersData);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers()//getting users 

//parallel execution with Promise.all()

const p1 = new Promise((res) => {
  setTimeout(() => {
    res("Data 1")
  }, 1000);
})

const p2 = new Promise((res) => {
  setTimeout(() => {
    res("Data 2")
  }, 2000);
})

async function handlePromises() {
  const resolvedPromise = await Promise.all([p1, p2])
  console.log(resolvedPromise);
  console.log("all Promises are resolved");
}

handlePromises()