//String - collection of characters

let name = "Umesh";
let city = 'Ahmedabad';
let msg = `Hello World`;

//strings are immutable
let str = "hello"
str.toUpperCase();
console.log(str); // hello (unchanged)

console.log(str.length); //string length -> 5

//toUpperCase() / toLowerCase()

let s = "Hello";
console.log(s.toUpperCase());
console.log(s.toLowerCase());

//includes()
let message = 'I love Javascript'

console.log(message.includes('Javascript'));
console.log(message.includes('React'));

//indexOf()
console.log(str.indexOf("o"));

//slice()

let word = 'Javascript'
console.log(word.slice(0,4)); //Java

console.log(word.substring(4)); //script

//replace()

console.log(message.replace('Javascript', 'React')); //I love React

//replceAll()

let txt = 'haa haa haa'
console.log(txt.replaceAll('haa','he')); // he he he

//trim()

let username = "   Umesh  "
console.log(username.trim()); //Umesh

//charAt()

console.log(word.charAt(1)); // a

//split()
const words = message.split(" ")// ['I', 'love', 'Javascript']

//join()

console.log(words.join("-"));


//loop on string
let str1 = "abc";

for (let ch of str1) {
  console.log(ch);
}

//example:- reverse string
let sentence = 'Javascript'
let rev = ''
for (let i = sentence.length - 1; i>=0 ; i--) {
   rev += sentence[i]
}
console.log(rev);

//example:- Capitalize first letter

let normalSentence = 'hi how are you'

const arr = normalSentence.split(" ")
let capitalizeSentence = ''
for (const word of arr) {
  capitalizeSentence += `${word.charAt(0).toUpperCase()}${word.slice(1)} `
}
console.log(capitalizeSentence);