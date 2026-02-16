//call() -> calls function immediately and used for function borrowing we can manually decide which object this will refer

//we can pass arguments comma separated

const user1 = {
  username: "Umesh",
  age: 21,

}

const user2 = {
  username: "Amit",
  age: 19,

}

function greetUser(city, state){
  console.log(`Hello ${this.username} from ${city}, ${state}`);
}

greetUser.call(user1, "Ahmedabad", "Gujarat")//this ->  user1  
greetUser.call(user2, "Gandhinagar", "Gujarat") //this ->  user2 


// -------**********--------

//apply() -> same as call() but argument is passed in an array

greetUser.apply(user1, ["Ahmedabad", "Gujarat"])// this -> user1
greetUser.apply(user2, ["Gandhinagar", "Gujarat"])// this -> user2

// ----------*********-------------

//bind() -> makes a copy of the function and we can call it later.
const newFunc = greetUser.bind(user1, "Ahmedabad", "Gujarat")//makes copy of the greetUser();

newFunc()// this -> user1 //Hello Umesh from Ahmedabad, Gujarat


//example:-

const user = {
  username: "Aman",
  greet(){
    console.log(this.username);
  }
}

setTimeout(user.greet, 1000); //undefined

//solution
setTimeout(user.greet.bind(user), 1000);