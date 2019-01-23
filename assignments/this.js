/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This one is about the global/window object. (Global object binding)
* 2. A function that is called be a dot before it. (Implicit Binding)
* 3. This is about constructor functions. A constructor function creates an object (New Binding)
* 4. Whenever .call or .apply is used it defines this as its first argument. (Explicit binding) 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayAge(age){
    console.log(this);
    return age;
}

sayAge(35);

// Principle 2

// code example for Implicit Binding
const object1 = {
    'name' : 'Roenz',
    'age' : 24,
    sayMyName : function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
object1.sayMyName();

// Principle 3

// code example for New Binding
function Animal2(obj){
    this.age = obj.age,
    this.species = obj.species,
    this.noise = obj.noise,
    this.speak = function() {
        console.log(this)
        return `${this.noise}`;
    }
}

const dog = new Animal({age: 12, species: 'dog', noise: 'woof woof'});
dog.speak()

// Principle 4

// code example for Explicit Binding

const dog = new Animal({age: 12, species: 'dog', noise: 'woof woof'});
const cat = new Animal({age: 11, species: 'cat', noise: 'meow'});

dog.speak.call(cat); //dog.speak got overwritten using the .call function
