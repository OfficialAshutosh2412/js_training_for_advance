// ecma script
// history
// 1996-js created as unknown language
// 1997-it is stabdardized by ECMA Internation and called as ECMAScript.
// 2015-major update came which make js lightest language. and called as ECMAScript6 or ES6 or modern javascript


// js timeline
// 2015-es6
// 2016-es7
// 2017-es8
// 2018-es9
// 2019-es10
// 2020-es11
// and so on...


// services
// let and const
// template string
// destructuring
// object properties
// default argument
// arrow function
// rest operators
// spread operators

// ----------------------------------------------------
// first update in modern js
// difference b/w var, let, const?
// var is function scope 
// let and const are block scope
// example var
// function printing(){
//     var a="hi"
//     console.log(a);
//     if(true){
//         var b="bye";
//         console.log(b);
//     }
//     console.log(b);
// }
// printing();

// example let and const are same
// function printing(){
//     let a="hi"
//     console.log(a);
//     if(true){
//         let b="bye";
//         console.log(b);
//     }
//     console.log(b);
// }
// printing();
// ----------------------------------------------------
// second update in modern js
// template string or template literals
// it is like formatting string results in a better way, it is a way to represet the strings.
// it uses backticks to use string and $-sign to use variable within curly braces.
// example
// let a=10;
// let b=20;
// let c=0;
// console.log(`${a} + ${b} = ${a+b}`);
// ----------------------------------------------------
// third update in modern js
// default argument
// it is something that we can pass the default parametere with defult argument. Basically passing a default value to a parameter.
// example
// function mod(x,y=2){
//     console.log(x%y);
// }
// mod(7)
// ----------------------------------------------------
// fourth update in modern js
// arrow function
// let add=()=>{
//     console.log(10+20);
// }

// if function have noly one line then no need to write retun and curly brackets
// let add=()=>console.log(10+20);
// let add=(a,b)=>a+b;
// console.log(add(10,5));