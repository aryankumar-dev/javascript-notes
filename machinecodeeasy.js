console.log("1" + 2 +2); // "122" (String concatenation)
console.log(1 + 2 + "1"); // "31" (Number addition then String concatenation)
console.log(1 + 2 + 3); // 6 (All numbers added together)
console.log(1 + "2" + 3); // "123" // "123" (String concatenation)
console.log(1 + 2 - "1");



let num = 5;

console.log("Original:", num);
console.log("Prefix ++num:", ++num);   // 6 (increment first, then return)
console.log("After prefix:", num);     // 6

console.log("Postfix num++:", num++);  // 6 (return first, then increment)
console.log("After postfix:", num);    // 7

console.log("Prefix --num:", --num);   // 6 (decrement first)
console.log("Postfix num--:", num--);  // 6 (return first, then decrement)
console.log("Final value:", num);      // 5
