let a = 5;
const b = 10;
var c = 15;
d = 6; // no keyword = becomes global

if (true) {
  var c = 12222222220; // ✅ changes the global 'c'
}

if (true) {
  let a = 4444; // ❌ does NOT change the global 'a'
}

console.log(a, b, c, d); // 👉 5 10 12222222220 6


/*

{
  // This is a block
}

let a = 5;
a is block-scoped.
Inside if, we declared a new a, but it doesn’t affect the outer one.


const b = 10;
Constant value — cannot be changed.


var c = 15;
var is function-scoped, NOT block-scoped.
So when you redeclare var c inside the if, it replaces the outer c.


d = 6;
No keyword — becomes a global variable (not recommended!).


*/