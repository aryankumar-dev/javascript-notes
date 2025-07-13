const myarr = [0, 1, 2, 3, 4];
const myarr2 = new Array(1, 2, 3, 4, "xdedxd");

// shollow copy - same ref point 
// deep copy - do not share same refrence point 

myarr.unshift(3); // add at starting  (opposite push)
myarr.shift(3); // remove starting (opposite pop)

console.log(myarr.includes(3)); // include hai ki ni
console.log(myarr.indexOf(33)); // kis index pe hai 

let a = myarr.join(); // convert to string
console.log(a);
console.log(myarr);


// splice vs slice

console.log("A ", myarr);
let aa = myarr.slice(1, 3); // slice do not include last index and do not chnage original array 
console.log(a);
console.log("B ", myarr);
let b = myarr.splice(1, 3); // splice do include last index and do chnage original array 
console.log(b);
console.log("C ", myarr);


const marvel_heres = ["spideman" , "thor" , "ironman"];
const dc_hereos = ["wonderwomen" , "superman" , "batman"];

// marvel_heres.push(dc_hereos)
// console.log(marvel_heres);

// output 
// [
//   'spideman',
//   'thor',
//   'ironman',
//   [ 'wonderwomen', 'superman', 'batman' ]
// ]

// const all_heros = marvel_heres.concat(dc_hereos);
// console.log(all_heros);

// output 

// [ 'spideman', 'thor', 'ironman', 'wonderwomen', 'superman', 'batman' ]

// const allnew_heros = [...dc_hereos , ...marvel_heres];
// console.log(allnew_heros);

const arr = [1,2,3,[1,2],4,[1,2,3,[4,5,6,7]]];

const realarr = arr.flat(Infinity);  // make array of all

console.log(realarr);

console.log(Array.isArray("aryan")); // false

console.log(Array.from("aryan")); // make this in array | [ 'a', 'r', 'y', 'a', 'n' ]


console.log(Array.from({name : "aryan"})); // intresting for intreview | []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]