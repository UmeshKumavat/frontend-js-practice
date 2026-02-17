class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greetHello = "Helloo";


  greet() {
    console.log(`${this.greetHello} ${this.firstName}`);
  }

  work(){
    console.log("User is working....");
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

class Student extends Person {
  constructor(firstName, lastName, age, degree) {
    super(firstName, lastName, age);
    this.degree = degree;
  }
  study() {
    console.log("Studying........");
  }
}

const student = new Student("Umesh", "Kumavat", 21, "B-tech");
console.log(student);
student.greet();

class Employee extends Person{
  constructor(firstName, lastName, age, company){
    super(firstName, lastName, age)
    this.company = company
  }
  work(){
    console.log("Working.....");
  }
}

const employee = new Employee("Umesh", "Kumavat", 21, "Linearloop")
console.log(employee);
employee.work() //Working..... if not found then find in parent prototype chain


console.log(employee instanceof Employee); //true
console.log(employee instanceof Person); //true