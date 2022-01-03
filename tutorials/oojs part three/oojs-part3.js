//Inheritance in javaScript ~ ~ 

// NB ~ we will be replacing the term "constructor function" with "CF".

/*
Just like in other Object Oriented languages, 
objects don't just inherit from classes (in this case CF) and other objects, 
classes also inherit from classes.

class inheritance is done by the use of a "call" method shown below
*/

function Individual({ name, age, gender }) {
    this.name = name
    this.age = age
    this.gender = gender
}

Individual.prototype.sayHi = function() {
    alert(`Hi`)
}

function Boss({ name, age, gender, office }) {
    Individual.call(this, name, age, gender) // inheritance 
    this.office = office
}

/* 
the call method takes one compulsory parameter "this". 
the other parameters are the properties to be inherited
*/

/*
It doesn't quite end there, why? well because the Boss CF only inherits
the properties the Individual CF but doesn't inherit its methods.
this is seen when we check the prototype properties of the 2 CFs. 
*/
console.log(Object.getOwnPropertyNames(Boss.prototype))
console.log(Object.getOwnPropertyNames(Individual.prototype))

// let's solve this 

Boss.prototype = Object.create(Individual.prototype)

/*
Remember the "create" method from our oojs-part one? well it comes into action here.
Also, remember that the prototype property of the CF is an object, 
well, what we did up there was to create an object having the same properties as "Individual.prototype"
and setting "Boss.prototype" to it. 
But it still doesn't end there.
Remember that the prototype property of a CF contains a constructor 'property',
and this constructor property points back to th CF. 
But from what we just did (which was basically copy the Individual CF prototype property), 
the consequence of that is that the Boss CF now has it's prototype property having 
a constructor property that points to the Individual CF and not itself. so we ned to fix that
lets do that below
*/

Object.defineProperty(Boss.prototype, 'constructor', {
    value: Boss,
    enumerable: false,
    writable: true
})

/*
what we did was to update the constructor property of the prototype property of 
the Boss CF and give it a new value which is the Boss CF itself.
we also set it to be non-enumerable (not to be counted or appear in for loops),
andd  made it writable so we can add contents to it.
now all is right with the world again :)
*/

let boss1 = new Boss({
    name: 'Nathan Gordon',
    age: 40,
    office: 'regional manager',
    gender: 'female'
})

boss1.sayHi() // -> Hi


