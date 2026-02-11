// const arr = [1, 2, 3, 'hii', true]

const numbersArr = [1, 2, 3, 4, 5];
const namesArr = ["umesh", "amit", "rohan"];

console.log(numbersArr[0]); //1
console.log(numbersArr[1]); //2

console.log(namesArr[0]); // umesh
console.log(namesArr[1]); //amit
namesArr[1] = "nitin"; //updating namesArr index 1 value

console.log(namesArr.length); // 3 -> length of an array

//Array methods

let arr = [1, 2, 3, 4, 5, 6, 7];

//below methods modifies the original array
arr.push(8); //add element in the array at the last position
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]

arr.pop(); //removes the last element from the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

arr.shift(); // Remove first element
console.log(arr); // [2, 3, 4, 5, 6, 7]

arr.unshift(1); // add element at first position
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

arr.splice(1, 2, 18, 19); //removes 2 items from index 1 and add 18, 19
console.log(arr); // [1, 18, 19, 4, 5, 6, 7]

// arr.reverse(); // Reverse order
// console.log(arr); //[7, 6, 5, 4, 19, 18, 1]

//below methods doesn't modify original array returns new array

let newArr = arr.slice(1, 4);
console.log(newArr); //[18, 19, 4]

console.log(arr.sort((a, b) => a - b));

console.log(arr.indexOf(6)); // returns index of the element -> 5

// Iteration Methods -> map(), reduce(), filter(), forEach()

//map() -> Returns a new array with modified values.

const prices = [100, 200, 300];

const newPrices = prices.map((price) => {
  return price * 2; //retunrns array of doubled prices
});
console.log(newPrices); // [200, 400, 600]

//filter() -> Filters out elements based on a condition

const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums); // [2, 4, 6]

//reduce() -> Reduces the array to a single value.

const total = nums.reduce((acc, num) => acc + num, 0);
console.log(total);

//forEach() -> Performs an action for each element (but returns undefined).

nums.forEach((num) => {
  console.log(num);
});

//some(), every(), find()

const returnedNum = nums.find((num) => num > 2);
console.log(returnedNum); // returns first match

console.log(nums.every((num) => num > 0)); //returns true if all elements satisty the given condition

console.log(nums.some((num) => num > 2)); // At least one true

//for-of loop on array

const items = ["pen", "book", "bag"];

for (const item of items) {
  console.log(item);
}

//Array destructuring

const [first, second] = nums;
console.log(first, second);

let updatedItems = [...items, "lunch box"]; // Spread to copy & add
console.log(updatedItems);

//example:- largest num
const numsArr = [10, 20, 30, 70, 50, 60];
let max = numsArr[0];

for (const num of numsArr) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

//example:- sum of array elements
let sum = 0;

for (const num of numsArr) {
  sum += num;
}
console.log(sum);
