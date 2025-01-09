console.log("hi");

// initializing variables
// use camelCase
let firstName = "Laios";
let surname = "Touden";
// var can be used in place of let but it's old lol

console.log(firstName);
console.log(surname);

// declaring constant variables
// any attempts at giving it a different value after initializing will throw an error
// convention states they should be UPPER_CASE for hard-coded values
const PI = 3.14;

console.log((4+6+9)/77);

// java is like python where data types arent static (lame)

// using variables in strings
// can use single quotes, double quotes, or backticks for concat
let str = "word";
let phrase = `add another ${str}`;
console.log(phrase);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`; // Backticks
console.log(joined); // "Hello, how are you?"

// u can use + but backticks / template literals are better
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

// returns what the variable type is
console.log(typeof phrase);

// string methods
// https://www.w3schools.com/js/js_string_methods.asp