// OOJS Basics 
/** going through oojs basics to get a clear understanding of the topic */

/* object literals
-------------------- 
*/
const obj1 = {} //empty object

const obj2 = { // initialized object with properties in a name:value pair
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    farewell: function() {
        this.color = 'red'
        alert('goodbye !!!')
    }
}

// accessing object properties

// The Dot notation
obj2.age // -> 32
// The Bracket notation
obj2['age'] // -> 32

// both ways of accessing object properties can be chained depending on the number of sub-namespces

// setting new / updating object properties
obj2.height = 15 // sets a new property called 'height'
obj2.gender = 'female' // updates the 'gender' property 

/* The 'this' keyword
---------------------
Basiclly the 'this' keyword points to the object to which that particular 'this' keyword is enclosed
*/
// exammple 
obj2.bio = () => {
    alert(`${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`)
} // here 'this.name[0]' is the same as 'obj2.name[0]'

// a further exammple on 'this' keyword
obj1.conversation = function() {
    let preamble = 'i spoke to the first guy, and he said' 
    obj2.response = function() {
        return `my name is ${this.name[0]}, goodbye !!`
    }           
    alert(`${preamble} "${obj2.response()}"`)
} 
/* though the 'obj2.response' is created inside the 'obj1.conversation' method,
    the 'this' keyword in the 'obj2.response' method is enclosed in that method which is a property
    of the object 'obj2', henceit points to 'obj2'.
*/

obj1.conversation()

/* Note - using the 'this' keyword in methods initialized with arrow function returns undefined,
    so always use the 'function' declaration.
*/
