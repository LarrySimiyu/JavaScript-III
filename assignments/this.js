/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const human = {
    name: 'Larry',
    food: "indian food",
    cook: function() {
        console.log(`${this.name} loves to smash their face into ${this.food}`)
    }
}
human.cook();

// Principle 3

// code example for New Binding
function GreetingAlien(name, greeter) {
    this.greeter = name;
    this.greeter = greeter;
    this.greeting = "Hello puny human";
    this.speak = function() {
        console.log(`${this.greeting}, I am the alient ${this.greeter}`);
    }

}
const boiker = new GreetingAlien('Boiker', 'boiker');
const skipo = new GreetingAlien('Skipo', 'Skipo');

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Larry'
}

const alien = {
    name: 'Spinty'
}

const abilities = ['lazer eyes', 'cold breath', 'programming'];

function introduce() {
    console.log(`Hello my name is ${this.name}, and my abilities are ${abilities1}, ${abilities2}, ${abilities3}`);
}

introduce.apply(person, abilities);