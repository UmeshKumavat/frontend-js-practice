//Closure is a concept of js where inner function have the access or remember the variables of outer function even if outer function has finished it execution

//example:

function outer() {
  let name = "Umesh";
  return function () {
    console.log(name);
  };
}

const result = outer();
result();

//task -> counter function

function counter() {
  let count = 0;

  return function () {
    //accesing count and incrementing it
    count++;
    console.log(count);
  };
}

let increment = counter();
increment(); //1
increment(); //2
increment(); //3

//task - creating multiplyer

function createMultiplyer(a) {
  return function (b) {
    return a * b;
  };
}

let double = createMultiplyer(2);
console.log(double(3)); // 6
console.log(double(5)); // 10

//real world code example:-

function createApi(baseURL) {
  return async function (endPoint) {
    const response = await fetch(`${baseURL}${endPoint}`);
    const data = await response.json();
    return data;
  };
}

const userApi = createApi("https://api.example.com/users");
userApi("/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
