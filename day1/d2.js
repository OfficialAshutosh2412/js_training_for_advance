// datatypes
// 1.premitive
// 1.1 undefined
// 1.2 Boolean 
// 1.3 Number
// 1.4 String
// 1.5 BigInt
// 1.6 Symbol

// typeof
// let a="ms dhoni";
// console.log(typeof a);

// let b=100;
// console.log(typeof b);

// let c=22.2;
// console.log(typeof c);

// let d=true;
// console.log(typeof d);

// console.log(typeof e);

// challanges
// console.log(10+"20");//1020
// console.log(9-"5");//4
// console.log("java"+"script");//javascript
// console.log(""+"");//
// console.log(""+0);//0
// console.log("ashutosh"-"prasad");//NaN
// console.log(true+true);//2
// console.log(true+false);//1
// console.log(false+true);//1
// console.log(false-true);//-1
// console.log("ashutosh"-5);//NaN
// console.log(5*5);
// console.log("5"*5);
// console.log(5/"5");
// console.log("1"-1*1/"1"+"1");

// difference between null and undefined
// null is nothing but an empty
// undefined is nothing just something is not assigned

// let bug1=null;
// console.log(bug1,", ",typeof bug1);


// let bug2;
// console.log(bug2,", ",typeof bug2);




// WHat is NaN?
// answer:- its a browser global property. Occured when two string is arithmatically operated except addition..
// let a=2;
// if(isNaN(a)){
//     console.log("bhuk");
// }
// else{
//     console.log("fir wahi console wonsole ki batein");
// }

// challanges
console.log(NaN===NaN);//false
console.log(Number.NaN===NaN);//false
console.log(isNaN(NaN));//true
console.log(Number.isNaN(NaN));//true