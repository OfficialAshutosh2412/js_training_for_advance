// maths object
// 1. pi
// console.log(Math.PI);

// 2. power
// console.log(Math.pow(2,3));

// 3. square root
// console.log(Math.sqrt(49));

// 4. round figure number
// console.log(Math.round(10.79));
// console.log(Math.round(10.19));

// 5. absolute value, returns positive value always
// console.log(Math.abs(-100));
// console.log(Math.abs(-100.20));
// console.log(Math.abs(0));

// 6. ceil, return a nearest number of integer if any integer increased by 0.1 to 0.9
// console.log(Math.ceil(9.1));//10
// console.log(Math.ceil(9.7));//10

// 7. floor, return a original number  if any integer increased by 0.1 to 0.9
// console.log(Math.floor(9.1));
// console.log(Math.floor(9.7));

// 8. min
// console.log(Math.min(8,20,81,-10,0));

// 9. max
// console.log(Math.max(8,20,81,-10,0));

// 10. random, returns number b/w 0 and 1
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10));//0 to 9

// 11. trunc, returns only integer
// console.log(Math.trunc(99.5));
// console.log(Math.trunc(-99.5));

// challenge time
// if args is positive number,
// then math.trunc = math.floor
// otherwise  math.trunc = math.ceil

// let argsAre=-10.3;
// if(Math.trunc(argsAre) == (Math.floor(argsAre))){
//     console.log("trunc() = floor()");
//     console.log(`${Math.trunc(argsAre)} and ${Math.floor(argsAre)}`);
//     //because both gives original number only interger part.
// }
// else if(Math.trunc(argsAre) == Math.ceil(argsAre)){
//     console.log("trunc() = ceil()");
//     console.log(`${Math.trunc(argsAre)} and ${Math.ceil(argsAre)}`);
// }
// else{
//     console.log("no-one equal");
// }
 
console.log(Math.trunc(10.50));//10
console.log(Math.floor(10.50));//10
//means, agar trunc() me +ve number doge to wo floor() ki tarah work kerta hai.


console.log(Math.trunc(-10.50));//-10
console.log(Math.ceil(-10.50));//-10
// means, agar trunc() ko -ve number doge to wo seil() ki tarah kaam kerta hai.



