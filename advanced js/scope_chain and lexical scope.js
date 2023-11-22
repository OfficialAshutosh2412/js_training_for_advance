/*
1. Scope Chain...
it is lexically defined, it means we can tell what is the value of the variable by looking at the variable .

2. Lexical Scope...
isme child functions parent ke saare variables use ker skte hain but vice-versa nahi possible h.

example below...
*/

let a="hi";
let one=()=>{
    let b=" how";
    console.log(a+b);
    two=()=>{
        let c=" are you !";
        console.log(a+b+c);
    }
    two();
}
one();
// yaha a global variable h,
// b parent h c ka.
// c jo h wo a,b dono use kert skta hai

