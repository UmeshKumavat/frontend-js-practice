let student = {
  name: "Amit",
  age: 18,
  marks: 85,
  isEnrolled: true,
};

console.log(student["name"]); //accessing value using bracket notation
console.log(student.age); // accesing value using dot notation

student.age = 23; //changing age property

student.address = {
  city: "Ahmedabad",
  pincode: 382419,
};

console.log(delete student.marks); //deleting marks property

console.log(student);

//for...in loop on object

let user = {
  name: "Umesh",
  age: 21,
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

//nested object
let company = {
  name: "xyz",
  address: {
    city: "Ahmedabad",
    pincode: 1234,
  },
};

console.log(company.address.city);

//Object destructuring

const { name, age } = student;
console.log(name, age);

const {
  address: { city, pincode },
} = student;
console.log(city, pincode);

//Object.keys(), Object.values(), Object.entries()

console.log(Object.keys(student)); // ['name', 'age', 'isEnrolled', 'address']
console.log(Object.values(student)); //[ 'Amit', 23, true, { city: 'Ahmedabad', pincode: 382419 } ]
console.log(Object.entries(student)); // [[ 'name', 'Amit' ],[ 'age', 23 ],[ 'isEnrolled', true ],[ 'address', { city: 'Ahmedabad', pincode: 382419 } ]]

// Copying Objects

//shallow copy -> can copy only one level deep
let newStudent = { ...student };
// console.log(newStudent);

let newOne = Object.assign({}, student);
// console.log(newOne);

//deep copy

let deepCopy = structuredClone(student);
console.log(deepCopy);

let newDeepCopy = JSON.parse(JSON.stringify(student));
// console.log(newDeepCopy);

//optional chaining
console.log(user?.profile?.email); // undefined (no error)
