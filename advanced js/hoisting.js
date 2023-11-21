/*
Hoisting...
in js its a machenism where variable and functions declaration are moved at the top of their scope before execution of the code.

example below...
*/
// abhi meraNaam defined nahi hai.
console.log(meraNaam);
// ab meraNaam defined hai but uski value undefined h.
var meraNaam;
console.log(meraNaam);
// ab meranaam me ek value bhi h.
meraNaam="ashutosh"

// js is code ko aise execute kerta hai.
/*
pehle declaration top me rakhega
var meraNaam;

fir usme undefind value daal dega

fir use console ker dega.
*/

// hoisting keval var keyword ke sath hi use ho skti h, es6 ke let or const ke sath nahi use ho sakta.