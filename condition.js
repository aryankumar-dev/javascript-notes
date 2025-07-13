switch(key){
case value:
  // code to execute if key matches value
  break;
default:
  // code to execute if no case matches
  break;    
}

// if else condition syntax

if(condition) {
  // code to execute if condition is true
}
else if(anotherCondition) {
  // code to execute if anotherCondition is true
}
else {
  // code to execute if none of the above conditions are true
}

// falsy values in JavaScript

// false
// {} (empty object)
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)


// truthy values in JavaScript
// true
// []
// "0" (string with zero)
// "false" (string with false)
// " " (non-empty string)
// {} (non-empty object)
// function () { } (function)


// to schecl array 

if(Array.length === 0) {
  // array is empty
}   

// to check object 

if(Object.keys(obj).length === 0) {
  // object is empty 
  //Object.keys(obj) make it array of keys\
}

false == '' // true (loose equality, checks value only)
false == 0 // true (loose equality, checks value only)
0 == '' // true (loose equality, checks value only)

// null collision operator
let value = null ?? "default"; // value will be "default" if null or undefined
let value2 = undefined ?? "default"; // value2 will be "default" if null or undefined
let value3 = 0 ?? "default"; // value3 will be 0 (not null or undefined)

// terniary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // canVote will be "Yes" if age is 18 or more, otherwise "No"