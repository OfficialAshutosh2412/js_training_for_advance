/*
1. Callback function...
aise function jo kisi or function me as a argument pass ho rhe ho callback function kehlate h.

2. High Order Function...
Aise function jo kisi or function ko as a argument accept ker rha ho use high order function kehlate hai.

Example below...
*/

let sum=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
let mul=(a,b)=>{
    return a*b;
}
let div=(a,b)=>{
    return a/b;
}

const calci=(num1, num2, operation)=>{
    return operation(num1, num2);
}

// is line me calci High order function hai kyuki wo sum,sub jaise function ko as an argument accept ker rha hai.
// but sum,sub,mul,div ek callback function hai kyuki wo ek function ke under as an argument pass ho rhe hain.
console.log(calci(20, 10, sum));
console.log(calci(20, 10, sub));
console.log(calci(20, 10, mul));
console.log(calci(20, 10, div));