// singleton - object declered with construcot 
//object.create 

const tinderuser = new Object();
tinderuser.id = "12ano";

// console.log(tinderuser);

const obj1 = {1: "a" , 2 : "b"};
const obj2 = {3: "a" , 4 : "b"};
const obj3 = {5: "a" , 6 : "b"};

//1
// const obj4 = {obj1 , obj3,obj2};

// {
//   obj1: { '1': 'a', '2': 'b' },
//   obj3: { '5': 'a', '6': 'b' },
//   obj2: { '3': 'a', '4': 'b' }
// }

//2 
// const obj4 = Object.assign({},obj1 , obj3,obj2);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// we prefere this 

const obj4 = {...obj1 , ...obj2 ,...obj3};
console.log(obj4);

console.log(Object.keys(obj1)); // [ '1', '2' ] // keys in form of array 
console.log(Object.values(obj1)); // [ 'a', 'b' ] // values
console.log(Object.entries(obj1)); // [ [ '1', 'a' ], [ '2', 'b' ] ] // arryay of key value
console.log(obj1.hasOwnProperty('1')); // true ye key hai ki nhi 
// object literals 

const mysymbol = Symbol("mykey1"); 

const obj = {
    name: "hitesh",
    age:18,
    "full name": "aryan kumar",
    [mysymbol]: "my secret key",
    days : ["monday" ,"tuesday"]
}

//
// const {name : iskaname } = obj; // obj destrusture 
// console.log(iskaname);

console.log(obj.namse);
// console.log(obj['full name']); // to acess key with  ' '
// console.log(obj[mysymbol]);          // my secret key
// console.log(typeof mysymbol);

// obj.name = "aryan";
// console.log(obj.name);

// // Object.freeze(obj);
// obj.name = "hitesh";
// console.log(obj.name);

// obj.greeting = function(){
//     console.log(`Greeting function running ${this.name}`);
// }
// console.log(obj.greeting); //[Function (anonymous)] 
// console.log(obj.greeting()); //[Function will run
