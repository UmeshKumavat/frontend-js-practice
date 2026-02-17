//classes-> simplify constructor function providing easier syntax, add methods automatically to the prototype object

class Person {
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName; //dynamically changing properties
    this.lastName = lastName;
    this.#age = age; //# makes it private property
    this.sayHi = function () {
      console.log("Hiiiii");
    };
  }

  greetHello = "Hello"; // fixed property (not changing)

  //static prorerty
  static run = "running"; //added on class itself not on object

  //automatically added into the prototype object
  greet() {
    console.log(`${this.greetHello} ${this.firstName}`);
  }

  //getter function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //setter function
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Umesh", "Kumavat", 21);
const person2 = new Person("Amit", "Sharma", 19);

console.log(person1);
console.log(person2);
person1.sayHi(); //Hiiiii

person1.greet(); //Hello Umesh
person2.greet(); //Hello Amit
console.log(Person.run); //running -> static property 

// console.log(person1.#age); //error

console.log(person1.fullName); //Umesh Kumavat
console.log(person2.fullName); //Amit Sharma

person1.fullName = 'Rahul Yadav' //setting fullName value

console.log(person1);
console.log(person1.fullName);//Rahul Yadav


