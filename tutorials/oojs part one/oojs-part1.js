/* Taking a deeper dive into OOJS */

// Constructor functions ~ ~

/* A constructor function is JavaScript's version of a class.
    It is basically a normally defined function, 
    with the only distinction being that it initiaizes variables with the 'this' keyword,
    and this variables later become the instanciated objects properties.

    Constructor names should start with Capital letters in order to differentiate from
    regular functions.
*/

function Person(name) {
    this.name = name
    this.greeting = function() {
        alert(`my name is ${this.name}`)
    }
}  

// Other ways to create object instances

// The Object Constructor
const car = new Object()
car.name = 'Benz'
car.brand = 'AMG'

// the 'create' method of the Object Constructor
/* it is used to create objects from a pre-existing object, 
    The new object inherits the properties and values of the object it was created from.
    The 'create' method takes one parameter:
    - the object to be used to create the new object (the prototype).
    we can also specify a value of 'null' as parameter to create a totally new object
 */
const bus1 = Object.create(null)
bus1.name = 'Big bus'
bus1.height = 50
const bus2 = Object.create(bus1)
console.log(bus2.name /*Big bus */ , bus2.height /* 50 */)