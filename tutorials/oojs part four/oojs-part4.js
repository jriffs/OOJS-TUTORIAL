/*
To put finishing touches on everything we are going to look the ES6 way of doing things where:
Classes ~ replace ~ constructor functions

    ECMAScript 2015 Classes
    -----------------------
The MDN docs term the ES6 way of doing things, as "Syntactic Sugar", as there's not much differnce
from the ussual way, because under the hood, javaScript still makes use of constructor functions.
lets have a look
*/

class Vehicle {
    constructor({ name, make, brand}){
        this.name = name
        this.make = make
        this.brand = brand
    }
    startCar(){
        alert(`your ${this.brand} ${this.make} has started ..`)
    }

}

/*
In the ES6 syntax we have a "class" keyword tht tells javaScript that we are creating a new class
The class has a constructor method which is basically the constructor function that 
represents the class. Other methods that we want to be inherited are defined after the 
constructor method.
*/

/*
    Inheritance with class syntax
    -----------------------------
When implementing class inheritance, we use the "extends" keyword followed by the class
we want to inherit from.
This isn't all, the "this" initialization to a newly allocated object is always dependant 
on the parent class constructor. 
(read the MDN docs for more explanation https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#inheritance_with_class_syntax)
To correct this, we call the "super" method s shown below.
*/

class Car extends Vehicle {
    constructor({ name, make, brand, license}){
        super({ name, make, brand})
        this.license = license
    }
}
/* 
The "super" method does not take the "this" keyword as a parameter, it only takes the properties
that are to be inherited, and if there are no properties to be inherited, it takes no parameters.

Now when we instantiate Teacher object instances, we can call methods and properties defined 
on both Teacherand Person as we'd expect
*/

const car1 = new Car({
    license: 'G3VB780NM', 
    name: 'The',
    brand: 'Benz',
    make: 'AMG 13'
})
car1.startCar() // your Benz AMG 13 has started ..


/*
    Getters and Setters
    -------------------
We can also add getters and setters to our class, as the name suggests, 
they are used to get and set the values of properties. This is useful if we don't want to 
assign values to the properties when the object is instantiated. 
For example if we want the propertie to change in reltion to an outer variables change
the "get" and "set" keywords are used for the getters and setters respectively.  
*/

class Maper {
    constructor({ longitude, latitude}){
        this._longitude = longitude
        this.latitude = latitude
    }

    get longitude(){
        return this._longitude
    }

    set longitude(newLongitude){
        this._longitude = newLongitude
    }
}

const cood = new Maper({
    latitude: 20,
    longitude: 50
})

// the getter and setter method can be accessed as follows

cood.longitude = 40 //setter

console.log(cood.longitude /* getter */) 




