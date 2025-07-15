const score = 4000;
console.log(score); // 4000 // string

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const number = 12.8765
console.log(number.toPrecision(3)); // 12.9

const indianum = 1000000;
console.log(indianum.toLocaleString('en-IN')); // 10,00,000

// MATHS

console.log(Math.abs(-5)); // neg to pos only 
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.sqrt(36));
