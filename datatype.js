/*

🔹 1. Primitive Data Types
✅ These are basic, single-value, and immutable types.

let a = 10;            // Number
let b = "hello";       // String
let c = true;          // Boolean
let d = undefined;     // Undefined
let e = null;          // Null
let f = Symbol("id");  // Symbol
let g = 9007199254740991n; // BigInt


 2. Non-Primitive Data Types (Reference Types)
These are complex, can store multiple values, and are mutable.


et arr = [1, 2, 3];                // Array
let obj = { name: "Aryan" };       // Object
let func = function() { };         // Function
let date = new Date();             // Date Object

*/


// Convection of data types in JavaScript
let score = "100abc";

console.log(typeof (score));

let scoreinnum = Number(score);
console.log(typeof (scoreinnum));
console.log(scoreinnum); // NaN (In case of Null it gives 0)
