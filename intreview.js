const users = [
{ id: 1, name: 'Alice', isActive: true, email: 'alice@example.com', role: 'admin' },
{ id: 2, name: 'Bob', isActive: false, email: 'bob@example.com', role: 'user' },
{ id: 3, name: 'Charlie', isActive: true, email: 'charlie@example.com', role: 'user' },
{ id: 4, name: 'David', isActive: false, email: 'david@example.com', role: 'guest' }
];


const result = users.filter((users) => users.isActive == true).map(user => ({ id: user.id, name: user.name }));

console.log(result);
// [
// { id: 1, name: 'Alice' },
// { id: 3, name: 'Charlie' }
// ]
