// 1. Array Destructuring.

// It is basically a method of doing operations with array, it reduces the number of line and give a short way to handle array.

// let see a traditional way...
// let ar=['a','b',23];
// console.log(ar);
// let one=ar[0];
// let two=ar[1];
// let three=ar[2];
// console.log(one,two,three);

// using destructuring...
// let ar1=['a','b',23];
// console.log(ar1);
// let [ones,twos,threes]=ar;
// console.log(ones,twos,threes);


// 2. Object Destructuring.
// It is also same as array destructuring..

let ar1={
    names:"ashu",
    age:22,
    dept:"web"
};
console.log(ar1);

let {names,age,dept}=ar1;
console.log(ar1);
console.log(names,age,dept)
