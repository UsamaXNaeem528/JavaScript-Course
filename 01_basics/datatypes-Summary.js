// ********************Primitive data types*******
// copied data from memory not the original refernce
// 7 types => String, Number, Boolean, BigInt, null, Undefined, Symbol

let accUserName = "UsamaNaeemX528"
const userNumber = 23820934;
let isLogged = true;
let bigNumber = 340304925830492n;
let notDefined = undefined;
let isNull = null;

let id = Symbol(123)
let id1 =  Symbol(123)


// *********************Reference Data types*******
// when you assign an object to a variable or pass it to a function, you are passing a reference to the same 
// object in memory. Therefore, changes to the object via one reference will affect all references to that object.
// Reference Data type ==> Arrays, Objects, Functions

let Arr = [1,2,4,5,6]

let myInfo = {
    name : "Usama",
    Age : 21,
    Semester : "7th"
}

const myFunc = function myFunction(){
    console.log("Hello World");
}
console.log(typeof myFunc);

// So, All Non Primitive or Refernce Types are Object types except => functions tpyeof is function. 

// Read More about data types.
// https://262.ecma-international.org/5.1/#sec-11.4.3
