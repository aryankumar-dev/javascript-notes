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

let f = Symbol("123");
let g = Symbol("123");
console.log(f === g); // false (Symbols are unique)


 2. Non-Primitive Data Types (Reference Types)
These are complex, can store multiple values, and are mutable.

                                   //datatype
let arr = [1, 2, 3];               // Object.  
let obj = { name: "Aryan" };       // Object
let func = function() { };         // Function. 
let date = new Date();             // Date Object

*/


// Convection of data types in JavaScript
let score = "100abc";

// console.log(typeof (score));

let scoreinnum = Number(score);
// console.log(typeof (scoreinnum));
// console.log(scoreinnum); // NaN (In case of Null it gives 0)


let islogin = "true";
let isloginbool = Boolean(islogin);
console.log(isloginbool); // true (Non-empty string is truthy)

// "" is falsy
// null , undefined, 0, NaN are falsy



/*

Stack vs Heap Memory in JavaScript

Stack Memory:
- Stores primitive data types (like numbers, strings, booleans).
- Fast access and allocation.
- Memory is automatically managed (allocated and deallocated).
- pass by value (copies the value).

Heap Memory:
- Stores non-primitive data types (like objects, arrays, functions).
- Slower access and allocation.
- Memory is managed by the garbage collector.
- pass by reference (stores a reference to the object in memory).


