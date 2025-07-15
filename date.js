let mydate = new Date();

console.log(mydate); // 2025-07-14T13:50:59.238Z
console.log(mydate.toDateString()); //Mon Jul 14 2025
console.log(mydate.toLocaleString());// 7/14/2025, 7:21:50 PM

let mycreateddate2 = new Date("01-14-2024");
let mycreateddate = new Date(2023,0,12 , 5,3); // months start from 0 
console.log(mycreateddate);
console.log(mycreateddate.toDateString()); //Thu Jan 12 2023
console.log(mycreateddate.toLocaleString()); // 1/12/2023, 5:03:00 AM
