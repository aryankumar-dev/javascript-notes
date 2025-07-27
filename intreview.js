// const users = [
// { id: 1, name: 'Alice', isActive: true, email: 'alice@example.com', role: 'admin' },
// { id: 2, name: 'Bob', isActive: false, email: 'bob@example.com', role: 'user' },
// { id: 3, name: 'Charlie', isActive: true, email: 'charlie@example.com', role: 'user' },
// { id: 4, name: 'David', isActive: false, email: 'david@example.com', role: 'guest' }
// ];


// const result = users.filter((users) => users.isActive == true).map(user => ({ id: user.id, name: user.name }));

// console.log(result);
// [
// { id: 1, name: 'Alice' },
// { id: 3, name: 'Charlie' }
// ]


const users = [
  { id: 1, name: 'Alice', isActive: true, email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob', isActive: false, email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie', isActive: true, email: 'charlie@example.com', role: 'user' },
  { id: 4, name: 'David', isActive: false, email: 'david@example.com', role: 'guest' }
];

// Expected Output:
// [
//   { id: 1, name: 'Alice' },
//   { id: 3, name: 'Charlie' }
// ]

// const result = users.filter( (user) => user.isActive == true).map( (user) => ({id : user.id , name : user.name }) );
// console.log(result);


// Expected Output:
// ['bob@example.com', 'charlie@example.com']

// const result = users.filter( (user) => user.role == 'user').map( (user) => ( user.email  ) );
// console.log(result);

// 3. Count How Many Users Are Active (use reduce)
// Expected Output: 2

//  const result =users.reduce((count, user) => {
//   return user.isActive ? count + 1 : count;
// }, 0);
//  console.log(result);

// 4. List of Usernames in Uppercase
// Expected Output: ['ALICE', 'BOB', 'CHARLIE', 'DAVID']

// const result = users.map(user => user.name.toUpperCase());

// console.log(result);

// 5. Get Names of Inactive Users (use filter + map)

// // Expected Output: ['Bob', 'David']

// const result = users.filter( (user) => user.isActive == false).map( (user) => (user.name ) );
// console.log(result);

// 6. Check if All Users Have Emails

// Expected Output: true

// const result = users.every(user => user.email);  // returns true only if all users have non-empty email

// console.log(result); // ✅ Output: true



// 10. Return Boolean: Is There Any Guest User?

// // Expected Output: true

// const result = users.some(user => user.role === 'guest');

// console.log(result); // ✅ Output: true



// 8. Create a Comma-Separated String of All User Emails

// // Expected Output: 'alice@example.com, bob@example.com, charlie@example.com, david@example.com'
// const result = users.map(user => user.email).join(', ');

// console.log(result);
// // ✅ Output: '


// 9. Find First Inactive User

// // Expected Output:
// { id: 2, name: 'Bob', isActive: false, email: 'bob@example.com', role: 'user' }

// const result = users.find(user => !user.isActive);

// console.log(result);

// 7. Get Object Grouped by Role

// Expected Output:
// {
//   admin: ['Alice'],
//   user: ['Bob', 'Charlie'],
//   guest: ['David']
// }

// const result = users.reduce((acc, user) => {
//   if (!acc[user.role]) {
//     acc[user.role] = [];
//   }
//   acc[user.role].push(user.name);
//   return acc;
// }, {});


// console.log(result);