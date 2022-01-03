/*  
Object Prototypes
-----------------
"Prototypes are the mechanism by which JavaScript objects inherit features from one another."
- MDN Docs
During the prodution of new inventions, a first implementation of the core ideas of the product
is created, this first implementation is called a 'prototype', and this prototype serves as 
the boiler-plate for further augmentation, until the final product is acchieved. This is the same
with javaScript object.

    Prototype Chain
    ---------------
The 'Prototype Chain' is a term used to described the feature by which objects inherit properties
and methods from each other. In it's basic form it is a feature whereby every object has a 'prototype',
and each object can access the properties and methods of its prorotype.

Say for instance we create an object 'person' with a method called 'sayName', 
and then we create another object 'man' from it, and then finally we create another object 'boy'.
if we call the 'sayName' method on the boy object (boy.sayName), the browser first checks the 'boy'
object for the existence of the 'sayName' method, if it does not find it, it goe up the chain and checks
boy's prototype (man) and if it does not find it, it looks up the chain again and checks man's prototype (person),
and when it fids it, it then exeutes it.
NB ~ this is not the best exampe to demonstrate this concept, but it will do for the purpose of this explanation
*/

const person = {
    name: 'person',
    age: 40,
    sayName: function() {
        alert(`my name is ${this.name}`)
    }
}
const man = Object.create(person)
man.name = 'Greg'

const boy = Object.create(man)
boy.name = 'Tim'
boy.sayName() // "my name is Tim"

/* The prototype property: Where inherited members are defined 
   -----------------------------------------------------------
So as the heading suggests, the prototype property of a constructor function 
is the property that holds the methods that will be traversed/inherited by other 
objects down the pototype chain.
*/

/* The constructor property
   ------------------------
every constructor function has a prototype property (which itself is an object), 
which in turn has a constructor property that just points back to the constructor function
*/

/* 
    Modifying prototypes
    --------------------
Since the prototype property is where the inherited methods are defined, 
it is important to know how to modify it so as to add (or sometimes remove) methods 
*/ 

function Play({ singer, album }) {
   this.singer = singer
   this.album = album
}

Play.prototype.sayAlbum = function() {
    alert(`this is a song by ${this.singer} on the ${this.album} Album`)
} // adding  new mmethod to the Play constructor

Play.sayAnything = function() {
    alert(`say anything`)
} // also adding a method, but unaccesible (not inherited) by instantiated objects

const playList = new Play({singer: 'chris brown', album: 'Indigo'})
playList.sayAlbum() // -> this is a song by chris brown on the Indigo Album
playList.sayAnything() // -> error

/*
Rounding off, it is considered best pratice to declare properties inside the constructor
function declaration, and then declare methods in the prototype property as we did above,
that is because properties need to be mutable (able to be changed later on)
*/

