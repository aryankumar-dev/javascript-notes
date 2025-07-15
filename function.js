function greeting(username = 'samw'){
    return `hello ${username}`;
}


// console.log(greeting);

// we we need to add muntiple paramente 

function calculate(...num){ // rest operator
return num; // [ 200, 400, 5000 ]
}

// console.log(calculate(200,400,5000));

// in function we call pass obj and array also 

// we use iife to stop pollution form garbage meaning (variablw km USE HO GLOBAL ME )
(function hello() {
    var secret = "This is private!";
    console.log(secret);
})(); // This runs immediately


