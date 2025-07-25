const person = {
    name: "Aryan",
    greet: function () {
        console.log(this.name); // ✅ Aryan

        function inner() {
            console.log(this.name); // ❌ undefined or error
        }

        inner(); // Here, `this` is NOT person
    }
};

person.greet();
// Because inner() is a normal function, and its this depends on how it is called, not where it's written.


const person2 = {
    name: "Aryan",
    greet: function () {
        const inner = () => {
            console.log(this.name); // ✅ Aryan (uses `this` from greet)
        };

        inner();
    }
};

person2.greet();

// Arrow functions don’t have their own this, they use the this from the surrounding function.