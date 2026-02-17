function Person(name, age) {
  this.name = name;
  this.age = age;

  //added directly on the object
  // this.greet = function () {
  //   console.log("Hello " + this.name);
  // };
}

const person1 = new Person("Umesh", 21);
const person2 = new Person("Amit", 19);

console.log(person1); //"this" keyword refers the object person1 , returned by Person constructor function
console.log(person2);

console.log(person1.name); //umesh
// person1.greet();// Hello umesh

console.log(person1.greet === person2.greet);//false bcz for every object different greet method is created

// -----------------*********************------------------

//solution -> adding method on prototype object


Person.prototype.greet = function(){
  console.log("Helllo " + this.name);
}
console.log(person1.greet === person2.greet); //true ->  bcz greet is created only once in the memory and set in the prototype object and we can access it in the object returned by Constructor function using -> person1.__proto__.greet()

//real-world example:-

function ApiService(baseURL){
  this.baseURL = baseURL
}

ApiService.prototype.getUsers = async function(endpoint) {
  const res = await fetch(`${this.baseURL}${endpoint}`)
  const data = await res.json();
  return data
}

const api = new ApiService(`https://jsonplaceholder.typicode.com`) 
const api2 = new ApiService(`https://jsonplaceholder.typicode.com`) 

console.log(api.getUsers('/users'));
console.log(api.getUsers('/todos'));