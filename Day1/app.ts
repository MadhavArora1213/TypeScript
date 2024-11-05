
// The another concept is primitive and reference in reference we use that data type that have [], {},() any one of this type of brackets rest are primitive types.


// Primitive Types (Number,String,Boolean)

//Numbers
let a =9;

//Strings
let b = 'Hello';

//Boolean
let c = true;
let d = false;


//Arrays

let e = [1,2,3,4,5];
let f = [1,2,3,4,5, "harsh"];   // Type of this array is string and number and not give error
// let g: number[] = [1,2,3,4,5,"harsh"]; // This will generate an error beacause the array is not a number


// Tuples

let h :[string, number] = ["harsh",12];   //IN TUPLE WE HAVE FIXED SIZE in array


// Enums

enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin",
}

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}


// ANY

let l;  // if you no assign any value or type then the by default type of l is any.
let k: string; //  --> Type batana abhi k me kuch nhi hai but agge jake usme ek string hogi

// Unknown

let m:unknown;

// Differnence between any and unknown

let n;
n=12;
n ="math";
n.toLowerCase();  // it not generate an error this is run for n is string not for n is number. Typescript complety off in type any they starting behave liking javascript


let o: unknown;
o = 12;
o = "math";

// o.toLowerCase();  // it generate an error because o is unknown and we are trying to call for doing that thing we do following things:-

if(typeof o === "string"){
    o.toLowerCase();   // It will not genarate an error and run for o is string
}

// Void

// if function not return anything then its type is void and you can tell its type is void.
function greet(): void{
    console.log("Hello");
}

// Null

let p: null;
let q: string | null;
// q="math";  This is valid because we say that q ki type ja to string hogi ja to null hogi
// q=null;    This is valid because we say that q ki type ja to string hogi ja to null hogi
// q=12;      it will generate an error because type of q is null or string and we cannot assign a number to it.
// p=12;   it will generate an error because type of p is null and we cannot assign a number to it.


//Undefined

// It is same as a javascript undefined value
let r: undefined;

// Never

// Never is a type that never returns a value. It's used to indicate that a function will always throw an error or never complete execution.

function abcd():never{
    while (true) {}
}

abcd(); // This will generate an error because abcd is never returning a value.
console.log("hello");  // when the type of function is never then means it's never executed so function ke call ki badh ki lines chli ge nhi ess liye ee console.log ki value dull ho chuki hai