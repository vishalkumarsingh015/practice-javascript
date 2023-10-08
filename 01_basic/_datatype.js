//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
   // console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack (primitive),Heep (Non-primitive)
let myofficename="vishal kumar singh"
let anothername= myofficename
anothername="golu"
// console.log(myofficename);
// console.log(anothername);

let userone={
    email:"vishal@gmail.com",
    upi:"upi@sbi"
}
let usertwo= userone
usertwo.email="vishal@yahoo.com"
 console.log(usertwo.email);
 console.log(userone.email);