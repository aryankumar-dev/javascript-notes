let name = "Aryan";

// 1. Character Access & Position
console.log(name.charAt(0));          // "A" - character at index 0
console.log(name.indexOf("n"));       // 4 - index of first occurrence of "n"

// 2. Slicing & Substring
const slicename = name.slice(-4, 3);  // "ry" - slice from 1 to 3 (negative value counts from end)
const newname = name.substring(0, 3); // "Ary" - substring from index 0 to 3 (no negative values)
const newName2 = name.replace("A", "John"); // "Johnnyan" - replace first "A" with "John"

console.log(slicename);  // "ry"
console.log(newname);    // "Ary"
console.log(newName2);   // "Johnnyan"

// 3. Includes Check
console.log(name.includes("Ary")); // true
console.log(name.includes("xyz")); // false

// 4. Trimming
let trimexample = "   Hello World!   ";
console.log(trimexample.trim());       // "Hello World!"
console.log(trimexample.trimStart());  // "Hello World!   "
console.log(trimexample.trimEnd());    // "   Hello World!"

// 5. Split & Join
let nam = "Aryan-kumar-1st-year";
console.log(nam.split('-'));            // ["Aryan", "kumar", "1st", "year"]
console.log(nam.split('-').join(' '));  // "Aryan kumar 1st year"
